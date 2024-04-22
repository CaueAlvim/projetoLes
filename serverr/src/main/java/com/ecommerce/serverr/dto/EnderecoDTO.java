package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoDTO {
    private Integer enderecoId;
    private String numero;
    private String rua;
    private String bairro;
    private String estado;
}
