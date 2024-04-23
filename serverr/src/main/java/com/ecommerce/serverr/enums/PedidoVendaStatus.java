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
    TROCADO(7, "TROCADO"),
    PAGAMENTO_REALIZADO(7, "PAGAMENTO REALIZADO"),
    PAGAMENTO_RECUSADO(7, "PAGAMENTO RECUSADO"),
    PEDIDO_CANCELADO(7, "PEDIDO CANCELADO");

    private final Integer codigo;
    private final String descricao;

    PedidoVendaStatus(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
