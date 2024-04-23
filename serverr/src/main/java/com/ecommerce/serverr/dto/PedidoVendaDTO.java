package com.ecommerce.serverr.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoVendaDTO {
    private Integer id;
    private String feitoPor;
    private String status;
    private LocalDate dataPedido;
    private Double valorPedido;
    private List<PedidoVendaItemDTO> itens;
}
