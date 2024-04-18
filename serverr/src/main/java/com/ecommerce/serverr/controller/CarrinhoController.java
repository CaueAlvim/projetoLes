package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.form.CarrinhoForm;
import com.ecommerce.serverr.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/carrinho")
public class CarrinhoController {
    private final CarrinhoService service;

    @Autowired
    public CarrinhoController(CarrinhoService service ) {
        this.service = service;
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Object> carregarCarrinho(@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok(service.carregarCarrinho(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/adicionar")
    public ResponseEntity<Object> adicionarItemCarrinho(@RequestBody CarrinhoForm form) {
        try {
            service.adicionarItemCarrinho(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PatchMapping("/remover")
    public ResponseEntity<Object> removerItemCarrinho(@RequestBody CarrinhoForm form) {
        try {
            service.removerItemCarrinho(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PatchMapping("/quantidade")
    public ResponseEntity<Object> alterarQuantidadeItem(CarrinhoForm form) {
        try {
            service.gerenciarQtdItemCarrinho(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
