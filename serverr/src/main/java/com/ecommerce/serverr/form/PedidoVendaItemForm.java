package com.ecommerce.serverr.form;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class PedidoVendaItemForm {
    private Integer livroId;
    private Integer quantidade;
    private Double valor;

}
