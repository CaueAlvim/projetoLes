package com.ecommerce.serverr.model;

import com.ecommerce.serverr.controller.PedidoVendaCartao;
import com.ecommerce.serverr.enums.PedidoVendaStatus;
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
public class PedidoVenda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate dataPedido;
    private Double valorPedido;
    private Double valorFrete;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "endereco_cobranca_id")
    private Endereco enderecoCobranca;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "endereco_entrega_id")
    private Endereco enderecoEntrega;

    @Enumerated(EnumType.STRING)
    private PedidoVendaStatus status;

    @OneToMany(mappedBy = "pedidoVenda", cascade = CascadeType.REMOVE)
    private List<PedidoVendaItem> itensPedido;

    @ManyToMany
    @JoinTable(
            name = "pedido_venda_cupom",
            joinColumns = @JoinColumn(name = "pedidovenda_id"),
            inverseJoinColumns = @JoinColumn(name = "cupom_id"))
    private List<Cupom> cupons;

    @OneToMany(mappedBy = "pedidoVenda", cascade = CascadeType.ALL)
    private List<PedidoVendaCartao> cartoes;
}
