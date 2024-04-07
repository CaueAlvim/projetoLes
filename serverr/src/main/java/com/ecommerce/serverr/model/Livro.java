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
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String autor;
    private String ano;
    private String titulo;
    private String editora;
    private String edicao;
    private String isbn;
    private Integer numeroPaginas;
    private String sinopse;

    private String altura;
    private String largura;
    private String peso;
    private String profundidade;
    private Double valor;

    @Builder.Default
    private boolean isAtivo = true;
    private String justificativaInativacao;
    private String justificativaAtivacao;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="livro_id")
    private List<LivroCategoria> categorias;

    private String caminhoImagem;
}
