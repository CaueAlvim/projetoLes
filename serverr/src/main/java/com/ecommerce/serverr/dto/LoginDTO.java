package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private Integer id;
    private String nome;
    private String email;
    private boolean admin;
    private boolean temCompras;
}
