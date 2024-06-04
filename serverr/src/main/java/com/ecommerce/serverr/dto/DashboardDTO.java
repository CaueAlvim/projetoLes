package com.ecommerce.serverr.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTO {
    private String titulo;
    private Double valorTotalPedidoItem;
    private Integer itemQuantidade;
    private LocalDate dataPedido;
}
