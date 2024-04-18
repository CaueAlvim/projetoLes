package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.CarrinhoDTO;
import com.ecommerce.serverr.dto.CarrinhoItemDTO;
import com.ecommerce.serverr.form.CarrinhoForm;
import com.ecommerce.serverr.model.*;
import com.ecommerce.serverr.repository.CarrinhoItemRepository;
import com.ecommerce.serverr.repository.CarrinhoRepository;
import com.ecommerce.serverr.repository.EstoqueLivroRepository;
import com.ecommerce.serverr.validator.LivroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarrinhoService {

    private final CarrinhoRepository repository;
    private final CarrinhoItemRepository itemRepository;
    private final EstoqueLivroRepository estoqueLivroRepository;

    @Autowired
    public CarrinhoService(CarrinhoRepository repository, CarrinhoItemRepository itemRepository, EstoqueLivroRepository estoqueLivroRepository){
        this.repository = repository;
        this.itemRepository = itemRepository;
        this.estoqueLivroRepository = estoqueLivroRepository;
    }

    public CarrinhoDTO carregarCarrinho(Integer clienteId) throws Exception {
        List<CarrinhoItemDTO> itensDTO = itemRepository.findAllItemsByCliente(clienteId).stream().map(i -> CarrinhoItemDTO.builder()
                .livroId(i.getEstoqueLivro().getLivro().getId())
                .livroNome(i.getEstoqueLivro().getLivro().getTitulo())
                .valor(i.getEstoqueLivro().getValor())
                .quantidade(i.getQuantidade())
                .caminhoImagem(i.getEstoqueLivro().getLivro().getCaminhoImagem())
                .build()).toList();

        return CarrinhoDTO.builder()
                .quantidadeTotalItens(itensDTO.stream().mapToInt(CarrinhoItemDTO::getQuantidade).sum())
                .valorTotalItens(itensDTO.stream().mapToDouble(CarrinhoItemDTO::getValor).sum())
                .itens(itensDTO)
                .build();
    }

    public CarrinhoItem encontrarItemCarrinho(Carrinho carrinho, Integer livroId) throws Exception{
        return carrinho.getItensCarrinho().stream()
                .filter(item -> item.getEstoqueLivro().getLivro().getId().equals(livroId))
                .findFirst()
                .orElse(null);
    }

    public void adicionarItemCarrinho(CarrinhoForm form) throws Exception{
        LivroValidator.validate(form.getLivroId());
        Carrinho carrinho = repository.findFirstByCliente_Id(form.getClienteId());
        CarrinhoItem carrinhoItem = encontrarItemCarrinho(carrinho, form.getLivroId());
        if(carrinhoItem != null){
            carrinhoItem.setQuantidade( carrinhoItem.getQuantidade() + 1 );
        } else {
            carrinhoItem = CarrinhoItem.builder()
                    .carrinho(carrinho)
                    .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(form.getLivroId()))
                    .quantidade(1)
                    .build();
        }

        itemRepository.save(carrinhoItem);
    }

    public void removerItemCarrinho(CarrinhoForm form) throws Exception{
        LivroValidator.validate(form.getLivroId());
        Carrinho carrinho = repository.findFirstByCliente_Id(form.getClienteId());
        CarrinhoItem itemParaRemover = encontrarItemCarrinho(carrinho, form.getLivroId());
        if(itemParaRemover != null){
            repository.delete(carrinho);
        }
    }

    public void gerenciarQtdItemCarrinho(CarrinhoForm form) throws Exception{
        Carrinho carrinho = repository.findFirstByCliente_Id(form.getClienteId());
        LivroValidator.validate(form.getLivroId());

        CarrinhoItem itemParaEditar = carrinho.getItensCarrinho().stream()
                .filter(item -> item.getEstoqueLivro().getLivro().getId().equals(form.getLivroId()))
                .findFirst()
                .orElseThrow(() -> new Exception("Item não encontrado no carrinho"));

        itemParaEditar.setQuantidade( itemParaEditar.getQuantidade() + (form.getAumento() ? 1 : -1) );

        repository.save(carrinho);
    }
}
