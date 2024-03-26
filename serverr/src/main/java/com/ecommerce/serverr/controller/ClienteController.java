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

    @GetMapping("/{id}")
    public ResponseEntity<Object> carregar(@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok(service.findById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody ClienteForm form) {
        try {
            service.salvar(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody ClienteForm form) {
        try {
            Cliente clienteLogin = service.login(form);
            if (clienteLogin != null) {
                return ResponseEntity.ok(clienteLogin);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PatchMapping("/")
    public ResponseEntity<Object> editar(@RequestBody ClienteForm form) {
        try {
            service.editar(form);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/pesquisar")
    public ResponseEntity<Object> pesquisar(@RequestBody ClienteFilter form) {
        try {
            return ResponseEntity.ok(service.pesquisar(form));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

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
