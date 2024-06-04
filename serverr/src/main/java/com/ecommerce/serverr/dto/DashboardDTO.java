package com.ecommerce.serverr.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTO {
    private String titulo;
    private Double valorTotalPedidoItem;
    private BigDecimal itemQuantidade;
    private LocalDate dataPedido;
}
