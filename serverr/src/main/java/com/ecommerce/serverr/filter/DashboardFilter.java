package com.ecommerce.serverr.filter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DashboardFilter {
    private List<Integer> produtosId;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
}
