package com.ecommerce.serverr.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PedidoVendaItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantidadeUnitaria;
    private Double valorUnitario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pedido_venda_id")
    private PedidoVenda pedidoVenda;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "estoque_livro_id")
    private EstoqueLivro estoqueLivro;
}
