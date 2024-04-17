package com.ecommerce.serverr.service;

import com.ecommerce.serverr.model.*;
import com.ecommerce.serverr.repository.CarrinhoRepository;
import com.ecommerce.serverr.repository.EstoqueLivroRepository;
import com.ecommerce.serverr.validator.LivroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrinhoService {

    private final CarrinhoRepository repository;
    private final EstoqueLivroRepository estoqueLivroRepository;

    @Autowired
    public CarrinhoService(CarrinhoRepository repository, EstoqueLivroRepository estoqueLivroRepository){
        this.repository = repository;
        this.estoqueLivroRepository = estoqueLivroRepository;
    }

    private CarrinhoItem inicializarItem(Carrinho carrinho, Integer livroId) {
        return CarrinhoItem.builder()
                .carrinho(carrinho)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(livroId))
                .build();
    }

    public Carrinho carregarCarrinho(Integer clienteId) throws Exception {
        return repository.findFirstByCliente_Id(clienteId);
    }

    public void adicionarItemCarrinho(Integer clienteId, Integer livroId) throws Exception{
        Carrinho carrinho = carregarCarrinho(clienteId);
        CarrinhoItem carrinhoItem = CarrinhoItem.builder()
                .carrinho(carrinho)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(livroId))
                .build();

        carrinho.getItensCarrinho().add(carrinhoItem);
        repository.save(carrinho);
    }

    public void removerItemCarrinho(Integer clienteId, Integer livroId) throws Exception{
        Carrinho carrinho = carregarCarrinho(clienteId);
        LivroValidator.validate(livroId);

        CarrinhoItem itemParaRemover = carrinho.getItensCarrinho().stream()
                .filter(item -> item.getEstoqueLivro().getLivro().getId().equals(livroId))
                .findFirst()
                .orElseThrow(() -> new Exception("Item não encontrado no carrinho"));

        carrinho.getItensCarrinho().remove(itemParaRemover);

        repository.save(carrinho);
    }

    public void gerenciarQtdItemCarrinho(Integer clienteId, Integer livroId, boolean aumento) throws Exception{
        Carrinho carrinho = carregarCarrinho(clienteId);
        LivroValidator.validate(livroId);

        CarrinhoItem itemParaEditar = carrinho.getItensCarrinho().stream()
                .filter(item -> item.getEstoqueLivro().getLivro().getId().equals(livroId))
                .findFirst()
                .orElseThrow(() -> new Exception("Item não encontrado no carrinho"));

        Integer quantidadeAtualItem = itemParaEditar.getQuantidade();
        itemParaEditar.setQuantidade(quantidadeAtualItem + (aumento ? 1 : -1));

        repository.save(carrinho);
    }
}
