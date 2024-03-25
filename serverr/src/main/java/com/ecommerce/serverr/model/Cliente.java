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
    private LocalDate dataCadastro;

    @OneToMany
    @JoinColumn(name="cidade")
    private List<Endereco> endereco;

    @OneToMany
    @JoinColumn(name="cidade")
    private List<Cupom> cupons;

    @OneToMany
    @JoinColumn(name="cidade")
    private List<Cartao> cartoes;

}
