package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.dto.DashboardDTO;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface DashboardRepository {

    List<DashboardDTO> findVendasPorPeriodoEProduto(List<Integer> livroId, LocalDate dataInicial, LocalDate dataFinal);
}
