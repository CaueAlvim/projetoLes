package com.ecommerce.serverr.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoTrocaDTO {
    private Integer id;
    private String livroNome;
    private Integer quantidade;
    private String feitoPor;
    private String status;
    private LocalDate dataSolicitacao;
}
