package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarrinhoItemDTO {
    private Integer livroId;
    private String livroNome;
    private Double valor;
    private Integer quantidade;
    private String caminhoImagem;
}
