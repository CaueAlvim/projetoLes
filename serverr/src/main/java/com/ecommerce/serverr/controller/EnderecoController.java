package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.form.EnderecoForm;
import com.ecommerce.serverr.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/endereco")
public class EnderecoController {
    private final EnderecoService service;

    @Autowired
    public EnderecoController(EnderecoService service ) {
        this.service = service;
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Object> carregar(@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok(service.carregar(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody EnderecoForm form) {
        try {
            service.salvar(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PatchMapping("/")
    public ResponseEntity<Object> editar(@RequestBody EnderecoForm form) {
        try {
            service.editar(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/pesquisar")
    public ResponseEntity<Object> pesquisar(EnderecoForm form) {
        try {
            return ResponseEntity.ok(service.pesquisar());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> excluir(@PathVariable("id") Integer id){
        try{
            service.excluir(id);
            return ResponseEntity.ok().build();
        }catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
