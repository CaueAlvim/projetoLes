package com.ecommerce.serverr.form;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatForm {
    private Integer clienteId;
    private String mensagem;
}
