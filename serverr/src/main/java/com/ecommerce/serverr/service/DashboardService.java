package com.ecommerce.serverr.service;

import com.ecommerce.serverr.filter.DashboardFilter;
import com.ecommerce.serverr.repository.DashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    private final DashboardRepository repository;
    @Autowired
    public DashboardService( DashboardRepository repository ){
        this.repository = repository;
    }

    public Boolean pesquisar(DashboardFilter filter) throws Exception {
        return false;
    }
}
