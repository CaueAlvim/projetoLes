package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LivroValidator {
    private static LivroRepository repository;
    @Autowired
    public LivroValidator(LivroRepository repository) {
        LivroValidator.repository = repository;
    }

    public static Livro validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Livro inválido"));
    }

    public static Livro validatePorTitulo(String titulo) throws Exception {
        return repository.findFirstByTituloLikeIgnoreCaseAndIsAtivoIsTrue(titulo).orElseThrow(() -> new Exception("Livro inválido"));
    }

}
