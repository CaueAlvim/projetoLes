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
    private String codigoBarras;

    @Builder.Default
    private boolean isAtivo = true;
    private String justificativaInativacao;
    private String justificativaAtivacao;

    @ManyToMany
    @JoinTable(
            name = "livro_categoria",
            joinColumns = @JoinColumn(name = "livro_id"),
            inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private List<Categoria> categorias;

    @JsonIgnore
    @OneToOne(mappedBy = "livro")
    private EstoqueLivro estoque;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "grupo_precificacao_id")
    private GrupoPrecificacao grupoPrecificacao;

    private String caminhoImagem;
}
