package com.ecommerce.serverr.form;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CarrinhoForm {
    private Integer livroId;
    private Integer clienteId;
    private Boolean aumento;
}
