package com.ecommerce.serverr.service;

import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository repository;

    @Autowired
    public LivroService( LivroRepository repository ){ this.repository = repository; }
    public List<Livro> pesquisar() throws Exception {
        return repository.findAllByIsAtivoIsTrue();
    }
}
