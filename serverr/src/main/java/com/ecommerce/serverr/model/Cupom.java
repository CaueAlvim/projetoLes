package com.ecommerce.serverr.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Cupom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String codigo;
    private LocalDate dataGeracao;
    private Double valor;
    private Double porcentagemDesconto;
    private boolean isDesconto;
    private boolean isTroca;
    private boolean isAtivo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
}
