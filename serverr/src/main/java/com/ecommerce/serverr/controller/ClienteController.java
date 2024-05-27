package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.filter.ClienteFilter;
import com.ecommerce.serverr.form.ClienteForm;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/cliente")
public class ClienteController {
    private final ClienteService service;

    @Autowired
    public ClienteController(ClienteService service ) {
        this.service = service;
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Object> carregar(@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok().body(service.findById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody ClienteForm form) {
        try {
            Integer clienteId = service.salvar(form);
            return ResponseEntity.ok().body(clienteId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody ClienteForm form) {
        try {
            return ResponseEntity.ok().body(service.login(form));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PatchMapping("/")
    public ResponseEntity<Object> editar(@RequestBody ClienteForm form) {
        try {
            service.editar(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @PostMapping("/pesquisar")
    public ResponseEntity<Object> pesquisar(@RequestBody ClienteFilter form) {
        try {
            return ResponseEntity.ok(service.pesquisar(form));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> inativar(@PathVariable("id") Integer id){
        try{
            service.inativar(id);
            return ResponseEntity.ok().build();
        }catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
