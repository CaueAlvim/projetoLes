package com.ecommerce.serverr.form;

import com.ecommerce.serverr.enums.PedidoVendaStatus;
import com.ecommerce.serverr.model.PedidoTroca;
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
public class PedidoTrocaForm {
    private Integer pedidoVendaId;
    private Integer livroId;
    private Integer quantidadeSolicitada;

    public PedidoTroca transform() {
        return PedidoTroca.builder()
                .dataSolicitacao(LocalDate.now())
                .status(PedidoVendaStatus.AGUARDANDO_ENVIO)
                .quantidadeUnitaria(quantidadeSolicitada)
                .build();
    }
}
