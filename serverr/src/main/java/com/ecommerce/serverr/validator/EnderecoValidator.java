package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.Endereco;
import com.ecommerce.serverr.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EnderecoValidator {
    private static EnderecoRepository repository;
    @Autowired
    public EnderecoValidator(EnderecoRepository repository) {
        EnderecoValidator.repository = repository;
    }

    public static Endereco validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Endereço inválido"));
    }
}
