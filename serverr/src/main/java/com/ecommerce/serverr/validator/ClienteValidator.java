package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ClienteValidator {
    private static ClienteRepository repository;

    @Autowired
    public void setRepository(ClienteRepository repository) {
        ClienteValidator.repository = repository;
    }

    public static Cliente validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Cliente inválido"));
    }

    public static Cliente validatePorEmail(String email) throws Exception {
        return repository.findByEmail(email).orElseThrow(() -> new Exception("Cliente inválido"));
    }
}