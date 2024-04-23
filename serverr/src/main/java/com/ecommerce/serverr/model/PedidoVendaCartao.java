package com.ecommerce.serverr.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PedidoVendaCartao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "pedido_venda_id")
    private PedidoVenda pedidoVenda;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cartao_id")
    private Cartao cartao;
}