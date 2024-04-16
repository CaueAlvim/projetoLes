package com.ecommerce.serverr.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String bairro;
    private String cidade;
    private String rua;
    private String numero;
    private String cep;
    private String estado;
    private String observacoes;
    private String pais;
    private String tipoLogradouro;
    private String tipoResidencia;

    @Builder.Default
    private boolean isEntrega = true;
    @Builder.Default
    private boolean isCobranca = true;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
