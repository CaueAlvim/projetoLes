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
    TROCA_AUTORIZADA(8, "TROCA AUTORIZADA"),
    PEDIDO_CANCELADO(9, "PEDIDO CANCELADO"),
    AGUARDANDO_ENVIO(10, "AGUARDANDO ENVIO");

    private final Integer codigo;
    private final String descricao;

    PedidoVendaStatus(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static PedidoVendaStatus getByCodigo(Integer codigo) throws Exception {
        for (PedidoVendaStatus status : values()) {
            if (status.getCodigo().equals(codigo)) {
                return status;
            }
        }
        throw new Exception("Código de status inválido: " + codigo);
    }

    public static PedidoVendaStatus getByDescricao(String descricao) throws Exception {
        for (PedidoVendaStatus status : values()) {
            if (status.getDescricao().equalsIgnoreCase(descricao)) {
                return status;
            }
        }
        throw new Exception("Descrição de status inválida: " + descricao);
    }
}
