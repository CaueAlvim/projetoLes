package com.ecommerce.serverr.model;

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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="cliente_id")
    private List<Endereco> enderecos;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="cliente_id")
    private List<Cupom> cupons;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="cliente_id")
    private List<Cartao> cartoes;

}
