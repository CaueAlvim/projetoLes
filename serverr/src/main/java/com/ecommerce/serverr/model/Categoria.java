package com.ecommerce.serverr.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomeCategoria;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="categoria_id")
    private List<LivroCategoria> categorias;
}
