package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.LivroDTO;
import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LivroService {

    private final LivroRepository repository;

    @Autowired
    public LivroService( LivroRepository repository ){ this.repository = repository; }
    public List<LivroDTO> pesquisar() throws Exception {
        List<Livro> livros = repository.findAllByIsAtivoIsTrue();
        return livros.stream().map(l -> LivroDTO.builder()
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
    }

}
