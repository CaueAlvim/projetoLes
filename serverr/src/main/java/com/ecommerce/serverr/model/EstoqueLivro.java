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
public class EstoqueLivro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantidade;
    private Double valor;
    private String fornecedor;
    private LocalDate dataEntrada;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "livro_id", referencedColumnName = "id")
    private Livro livro;
}
