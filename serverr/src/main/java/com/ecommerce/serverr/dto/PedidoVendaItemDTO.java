package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoVendaItemDTO {
    private Integer id;
    private String titulo;
    private Integer quantidadeUnitaria;
    private Double valorUnitario;
}
