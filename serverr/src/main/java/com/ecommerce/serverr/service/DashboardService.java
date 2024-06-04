package com.ecommerce.serverr.service;

import com.ecommerce.serverr.filter.DashboardFilter;
import com.ecommerce.serverr.repository.implementations.DashboardRepositoryImpl;
import com.ecommerce.serverr.validator.LivroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class DashboardService {
    private final DashboardRepositoryImpl repository;
    @Autowired
    public DashboardService( DashboardRepositoryImpl repository ){
        this.repository = repository;
    }

    public Boolean pesquisar(DashboardFilter filter) throws Exception {
        if(filter.getProdutoId() != null){
            LivroValidator.validate(filter.getProdutoId());
        }

        repository.findVendasPorPeriodoEProduto(filter.getProdutoId(), filter.getDataInicial(), filter.getDataFinal());
        return false;
    }
}
