package com.ecommerce.serverr.controller;


import com.ecommerce.serverr.model.Cartao;
import com.ecommerce.serverr.model.PedidoVenda;
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