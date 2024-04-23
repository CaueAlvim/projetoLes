package com.ecommerce.serverr.service;

import com.ecommerce.serverr.model.EstoqueLivro;
import com.ecommerce.serverr.repository.EstoqueLivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstoqueLivroService {
    private final EstoqueLivroRepository repository;

    @Autowired
    public EstoqueLivroService(EstoqueLivroRepository repository) { this.repository = repository; }

    public void baixaEstoque(Integer estoqueId, Integer quantidade){
        Optional<EstoqueLivro> optionalEstoqueLivro = repository.findById(estoqueId);
        optionalEstoqueLivro.ifPresent(estoqueLivro -> {
            estoqueLivro.setQuantidade(estoqueLivro.getQuantidade() - quantidade);
            repository.save(estoqueLivro);
        });
    }
}
