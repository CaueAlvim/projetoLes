package com.ecommerce.serverr.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartaoDTO {
    private Integer cartaoId;
    private String nomeCartao;
    private String numeroCartao;
    private String bandeira;
}
