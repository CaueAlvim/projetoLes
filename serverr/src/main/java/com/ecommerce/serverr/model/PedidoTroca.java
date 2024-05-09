package com.ecommerce.serverr.model;

import com.ecommerce.serverr.enums.PedidoVendaStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PedidoTroca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate dataSolicitacao;
    private Integer quantidadeUnitaria;
    private Double valorUnitario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pedido_venda_id")
    private PedidoVenda pedidoVenda;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "estoque_livro_id")
    private EstoqueLivro estoqueLivro;

    @Enumerated(EnumType.STRING)
    private PedidoVendaStatus status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

}
