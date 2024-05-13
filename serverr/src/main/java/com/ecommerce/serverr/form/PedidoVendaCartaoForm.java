package com.ecommerce.serverr.form;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class PedidoVendaCartaoForm {
    private Integer cartaoId;
    private Double valorPago;
}
