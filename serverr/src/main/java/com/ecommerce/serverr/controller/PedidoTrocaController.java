package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.form.PedidoTrocaForm;
import com.ecommerce.serverr.service.PedidoTrocaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pedidotroca")
public class PedidoTrocaController {
    private final PedidoTrocaService service;

    @Autowired
    public PedidoTrocaController(PedidoTrocaService service ) {
        this.service = service;
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody PedidoTrocaForm form) {
        try {
            Integer pedidoId = service.salvar(form);
            return ResponseEntity.ok().body(pedidoId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
