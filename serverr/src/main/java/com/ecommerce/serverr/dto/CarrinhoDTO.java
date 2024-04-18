package com.ecommerce.serverr.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarrinhoDTO {
    private Integer quantidadeTotalItens;
    private Double valorTotalItens;
    private List<CarrinhoItemDTO> itens;
}
