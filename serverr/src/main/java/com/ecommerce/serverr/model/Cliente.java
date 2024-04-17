package com.ecommerce.serverr.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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

    @JsonIgnore
    @OneToOne(mappedBy = "cliente")
    private Carrinho carrinho;

    @JsonIgnore
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    private List<Endereco> enderecos;

    @JsonIgnore
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    private List<Cupom> cupons;

    @JsonIgnore
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    private List<Cartao> cartoes;

}
