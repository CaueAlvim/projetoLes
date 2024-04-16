package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.Cartao;
import com.ecommerce.serverr.repository.CartaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CartaoValidator {
    private static CartaoRepository repository;
    @Autowired
    public CartaoValidator(CartaoRepository repository) {
        CartaoValidator.repository = repository;
    }

    public static Cartao validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Cartão inválido"));
    }
}
