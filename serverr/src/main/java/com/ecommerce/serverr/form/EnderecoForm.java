package com.ecommerce.serverr.form;

import com.ecommerce.serverr.model.Endereco;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoForm {
    private Integer id;
    private String bairro;
    private String cidade;
    private String rua;
    private String numero;
    private String cep;
    private String estado;
    private String observacoes;
    private String pais;
    private String tipoLogradouro;
    private String tipoResidencia;

    public Endereco transform(){
        return Endereco.builder().id(id).bairro(bairro).cidade(cidade).rua(rua)
                                 .numero(numero).cep(cep).estado(estado).pais(pais)
                                 .tipoLogradouro(tipoLogradouro).tipoResidencia(tipoResidencia)
                                 .observacoes(observacoes).build();
    }

}
