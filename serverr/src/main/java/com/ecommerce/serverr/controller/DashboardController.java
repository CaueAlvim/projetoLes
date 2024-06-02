package com.ecommerce.serverr.controller;

import com.ecommerce.serverr.filter.DashboardFilter;
import com.ecommerce.serverr.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/dashboard")
public class DashboardController {
    private final DashboardService service;

    @Autowired
    public DashboardController( DashboardService service ) {
        this.service = service;
    }
    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<Object> pesquisar(DashboardFilter filter) {
        try {
            return ResponseEntity.ok().body(service.pesquisar(filter));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
