package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.service.CupomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cupom")
public class CupomController {
    private final CupomService service;

    @Autowired
    public CupomController(CupomService service ) {
        this.service = service;
    }
    @CrossOrigin
    @GetMapping("/validar/{cupom}")
    public ResponseEntity<Object> carregar(@PathVariable("cupom") String cupom) {
        try {
            return ResponseEntity.ok().body(service.validarCupom(cupom));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
