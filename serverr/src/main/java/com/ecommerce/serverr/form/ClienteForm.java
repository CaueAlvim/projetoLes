package com.ecommerce.serverr.form;

import com.ecommerce.serverr.model.Cliente;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClienteForm {
    private Integer id;
    private String nome;
    private String senha;
    private String email;

    public Cliente transform(){
        return Cliente.builder().id(id).nome(nome).senha(senha).email(email).build();
    }
}