package com.ecommerce.serverr.form;

import com.ecommerce.serverr.enums.PedidoVendaStatus;
import com.ecommerce.serverr.model.PedidoVenda;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PedidoVendaForm {
    private Integer clienteId;
    private Integer enderecoId;
    private List<PedidoVendaCartaoForm> cartoes;
    private List<Integer> cuponsIds;
    private List<PedidoVendaItemForm> itens;
    private Double valorPedido;
    private Double valorFrete;
    public PedidoVenda transform() {
        return PedidoVenda.builder()
                .dataPedido(LocalDate.now())
                .valorPedido(valorPedido)
                .valorFrete(valorFrete)
                .status(PedidoVendaStatus.EM_PROCESSAMENTO)
                .cartoes(new ArrayList<>())
                .cupons(new ArrayList<>())
                .build();
    }
}
