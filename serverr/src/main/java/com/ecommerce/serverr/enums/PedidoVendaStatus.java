package com.ecommerce.serverr.enums;

import lombok.Getter;

@Getter
public enum PedidoVendaStatus {

    EM_PROCESSAMENTO(1, "EM PROCESSAMENTO"),
    APROVADO(2, "APROVADO"),
    REPROVADO(3, "REPROVADO"),
    EM_TRANSPORTE(4, "EM TRANSPORTE"),
    ENTREGUE(5, "ENTREGUE"),
    EM_TROCA(6, "EM TROCA"),
    TROCADO(7, "TROCADO");

    private final Integer codigo;
    private final String descricao;

    PedidoVendaStatus(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
