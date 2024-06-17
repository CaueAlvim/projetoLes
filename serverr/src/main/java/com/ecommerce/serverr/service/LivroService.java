package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.LivroDTO;
import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.repository.LivroRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import com.ecommerce.serverr.validator.LivroValidator;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.StringJoiner;
import java.util.stream.Collectors;

@Service
public class LivroService {

    private final LivroRepository repository;

    @Autowired
    public LivroService( LivroRepository repository ){ this.repository = repository; }
    public List<LivroDTO> pesquisar() throws Exception {
        List<Livro> livros = repository.findAllByIsAtivoIsTrue();
        List<LivroDTO> reseba =  livros.stream().map(l -> LivroDTO.builder()
                .id(l.getId())
                .autor(l.getAutor())
                .ano(l.getAno())
                .titulo(l.getTitulo())
                .editora(l.getEditora())
                .edicao(l.getEdicao())
                .isbn(l.getIsbn())
                .numeroPaginas(l.getNumeroPaginas())
                .sinopse(l.getSinopse())
                .altura(l.getAltura())
                .largura(l.getLargura())
                .peso(l.getPeso())
                .profundidade(l.getProfundidade())
                .valor(l.getEstoque().getValor())
                .caminhoImagem(l.getCaminhoImagem())
                .motivoRecomendacao(null)
                .build()).collect(Collectors.toList());
        return reseba;
    }

    public List<LivroDTO> recomendar(Integer clienteId) throws Exception {
        ClienteValidator.validate(clienteId);

        StringJoiner livrosComprados = new StringJoiner(", ");
        StringJoiner livrosDisponiveis = new StringJoiner(", ");

        repository.buscarLivrosCompradosPorCliente(clienteId).forEach(livrosComprados::add);
        repository.buscarLivrosDisponiveis().forEach(livrosDisponiveis::add);

        String recomendacao = AIService.recomendacaoLivrosIa(livrosComprados.toString(), livrosDisponiveis.toString());

        // Parse JSON
        JSONObject jsonObject = new JSONObject(recomendacao);

        // Extract livros array
        JSONArray livrosArray = jsonObject.getJSONArray("livros");

        // List to store LivroDTO objects
        List<LivroDTO> livrosDTOList = new ArrayList<>();

        // Iterate through each livro
        for (int i = 0; i < livrosArray.length(); i++) {
            JSONObject livroObject = livrosArray.getJSONObject(i);
            String livroTitle = livroObject.keys().next();

            JSONObject livroDetails = livroObject.getJSONObject(livroTitle);
            String motivo = livroDetails.getString("motivo");

            Livro l = LivroValidator.validatePorTitulo(livroTitle);

            LivroDTO livroDTO = LivroDTO.builder()
                    .id(l.getId())
                    .autor(l.getAutor())
                    .ano(l.getAno())
                    .titulo(l.getTitulo())
                    .editora(l.getEditora())
                    .edicao(l.getEdicao())
                    .isbn(l.getIsbn())
                    .numeroPaginas(l.getNumeroPaginas())
                    .sinopse(l.getSinopse())
                    .altura(l.getAltura())
                    .largura(l.getLargura())
                    .peso(l.getPeso())
                    .profundidade(l.getProfundidade())
                    .valor(l.getEstoque().getValor())
                    .caminhoImagem(l.getCaminhoImagem())
                    .motivoRecomendacao(motivo)
                    .build();

            livrosDTOList.add(livroDTO);
        }

        return livrosDTOList;
    }

}
