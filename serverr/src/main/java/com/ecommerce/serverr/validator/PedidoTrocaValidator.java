package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.PedidoTroca;
import com.ecommerce.serverr.repository.PedidoTrocaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PedidoTrocaValidator {
    private static PedidoTrocaRepository repository;
    @Autowired
    public PedidoTrocaValidator (PedidoTrocaRepository repository) { PedidoTrocaValidator.repository = repository; }

    public static PedidoTroca validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Pedido inválido"));
    }
}
