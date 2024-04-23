package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.filter.ClienteFilter;
import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoVendaForm;
import com.ecommerce.serverr.service.PedidoVendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/pedidovenda")
public class PedidoVendaController {

    private final PedidoVendaService service;

    @Autowired
    public PedidoVendaController(PedidoVendaService service ) {
        this.service = service;
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody PedidoVendaForm form) {
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
            return ResponseEntity.ok(service.pesquisar(filter));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
