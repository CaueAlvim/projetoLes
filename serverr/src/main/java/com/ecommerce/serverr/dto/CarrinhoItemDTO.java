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
    @Getter(AccessLevel.NONE)
    private Double valorTotal;

    public Double getValorTotal(){
        return valor * quantidade;
    }
}
