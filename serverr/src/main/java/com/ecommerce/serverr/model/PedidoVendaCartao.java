package com.ecommerce.serverr.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "pedido_venda_cartao")
public class PedidoVendaCartao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "pedidovenda_id")
    private PedidoVenda pedidoVenda;

    @ManyToOne
    @JoinColumn(name = "cartao_id")
    private Cartao cartao;

    private Double precoPago;

}