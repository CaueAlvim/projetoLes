package com.ecommerce.serverr.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDTO {
    private Integer id;
    private String nome;
    private String email;
    private String cpf;
    private String telefone;
    private LocalDate dataCadastro;
}