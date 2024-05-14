package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoTrocaForm;
import com.ecommerce.serverr.service.PedidoTrocaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @CrossOrigin
    @PostMapping("/pesquisar")
    public ResponseEntity<Object> pesquisar(@RequestBody PedidoVendaFilter filter) {
        try {
            return ResponseEntity.ok().body(service.pesquisar(filter));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin
    @PatchMapping("/alterarstatus/{id}/{status}")
    public ResponseEntity<Object> editar(@PathVariable("id") Integer id, @PathVariable("status") String status) {
        try {
            service.alterarStatus(id, status);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
