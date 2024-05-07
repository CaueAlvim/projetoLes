package com.ecommerce.serverr.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pedido_venda_id")
    private PedidoVenda pedidoVenda;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "estoque_livro_id")
    private EstoqueLivro estoqueLivro;

    @Transient
    @Getter(AccessLevel.NONE)
    private String nomeItem;

    public String getNomeItem(){
        if (estoqueLivro != null && estoqueLivro.getLivro() != null){
            return estoqueLivro.getLivro().getTitulo();
        }
        return null;
    }

}
