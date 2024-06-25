package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.form.ChatForm;
import com.ecommerce.serverr.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ai")
public class AIController {
    private final AIService service;

    @Autowired
    public AIController(AIService service) {
        this.service = service;
    }

    @CrossOrigin
    @PostMapping("/chat")
    public ResponseEntity<Object> recomendarLivros(@RequestBody ChatForm form) {
        try {
            return ResponseEntity.ok(service.chat(form));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
