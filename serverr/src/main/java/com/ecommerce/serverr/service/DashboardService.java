package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.DashboardDTO;
import com.ecommerce.serverr.filter.DashboardFilter;
import com.ecommerce.serverr.repository.implementations.DashboardRepositoryImpl;
import com.ecommerce.serverr.validator.LivroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {
    private final DashboardRepositoryImpl repository;
    @Autowired
    public DashboardService( DashboardRepositoryImpl repository ){
        this.repository = repository;
    }

    public List<DashboardDTO> pesquisar(DashboardFilter filter) throws Exception {
        if(!filter.getProdutoId().equals(0)){
            LivroValidator.validate(filter.getProdutoId());
        }

        return repository.findVendasPorPeriodoEProduto(filter.getProdutoId(), filter.getDataInicial(), filter.getDataFinal());
    }
}
