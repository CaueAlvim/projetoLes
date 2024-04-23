package com.ecommerce.serverr.filter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class PedidoVendaFilter {
    private Integer numPedido;
    private String feitoPor;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
}
