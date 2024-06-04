package com.ecommerce.serverr.filter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class DashboardFilter {
    private Integer produtoId;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
}
