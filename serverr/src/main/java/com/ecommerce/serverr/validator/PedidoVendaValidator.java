package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.PedidoVenda;
import com.ecommerce.serverr.repository.PedidoVendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PedidoVendaValidator {
    private static PedidoVendaRepository repository;
    @Autowired
    public PedidoVendaValidator (PedidoVendaRepository repository) { PedidoVendaValidator.repository = repository; }

    public static PedidoVenda validate(Integer id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Pedido inválido"));
    }
}
