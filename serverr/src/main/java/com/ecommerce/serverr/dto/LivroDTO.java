package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LivroDTO {
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

    private String caminhoImagem;
}
