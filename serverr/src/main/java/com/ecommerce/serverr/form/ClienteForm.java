package com.ecommerce.serverr.form;

import com.ecommerce.serverr.model.Cliente;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClienteForm {
    private Integer id;
    private String nome;
    private String senha;
    private String email;
    private String cpf;
    private String telefone;
    private String genero;
    private LocalDate dataNascimento;
    private LocalDate dataCadastro;
    private List<EnderecoForm> enderecos;
    private List<CartaoForm> cartoes;

    public Cliente transform(){
        return Cliente.builder().id(id).nome(nome).senha(senha).email(email)
                                .cpf(cpf).telefone(telefone).genero(genero)
                                .dataNascimento(dataNascimento).dataCadastro(dataCadastro)
                                .enderecos(enderecos.stream().map(EnderecoForm::transform).collect(Collectors.toList()))
                                .cartoes(cartoes.stream().map(CartaoForm::transform).collect(Collectors.toList())).build();
    }
}