package com.ecommerce.serverr.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String cpf;
    private String email;
    private String senha;
    private String telefone;
    private String genero;
    private LocalDate dataCadastro;
    private LocalDate dataNascimento;
    @Builder.Default
    private boolean isAdmin = false;
    @Builder.Default
    private boolean isAtivo = true;

    @JsonIgnore
    @OneToOne(mappedBy = "cliente")
    private Carrinho carrinho;

}
