package com.ecommerce.serverr.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class CarrinhoItemId implements Serializable {
    @Column(name = "livro_id")
    Integer livroId;
    @Column(name = "carrinho_id")
    Integer carrinhoId;
}
