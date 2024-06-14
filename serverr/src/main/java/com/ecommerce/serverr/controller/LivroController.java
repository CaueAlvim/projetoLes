package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/livro")
public class LivroController {
    private final LivroService service;
    @Autowired
    public LivroController( LivroService service ) {
        this.service = service;
    }
    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<Object> carregar() {
        try {
            return ResponseEntity.ok(service.pesquisar());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin
    @GetMapping("/recomendacao/{id}")
    public ResponseEntity<Object> recomendarLivros(@PathVariable("id") Integer clienteId) {
        try {
            return ResponseEntity.ok(service.recomendar(clienteId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
