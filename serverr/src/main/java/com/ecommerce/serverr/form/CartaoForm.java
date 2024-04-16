package com.ecommerce.serverr.form;

import com.ecommerce.serverr.model.Cartao;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartaoForm {
    private Integer id;
    private Integer clienteId;
    private String nomeCartao;
    private String numeroCartao;
    private String cvc;
    private String bandeira;

    public Cartao transform(){
        return Cartao.builder().id(id).nomeCartao(nomeCartao).numeroCartao(numeroCartao).cvc(cvc).bandeira(bandeira).build();
    }
}
