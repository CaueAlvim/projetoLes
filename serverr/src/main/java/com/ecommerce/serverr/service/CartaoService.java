package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.CartaoDTO;
import com.ecommerce.serverr.form.CartaoForm;
import com.ecommerce.serverr.model.Cartao;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.repository.CartaoRepository;
import com.ecommerce.serverr.validator.CartaoValidator;
import com.ecommerce.serverr.validator.ClienteValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartaoService {
    private final CartaoRepository repository;

    @Autowired
    public CartaoService( CartaoRepository repository ){
        this.repository = repository;
    }

    public Cartao carregar(Integer id) throws Exception{
        return CartaoValidator.validate(id);
    }

    public void salvar(CartaoForm form) throws Exception{
        Cliente cliente = ClienteValidator.validate(form.getClienteId());
        Cartao cartao = form.transform();
        cartao.setCliente(cliente);
        repository.save(cartao);
    }

    public void editar(CartaoForm form) throws Exception{
        CartaoValidator.validate(form.getId());
        Cartao newCartao = form.transform();
        repository.save(newCartao);
    }

    public List<CartaoDTO> pesquisar(Integer clienteId) throws Exception {
        List<Cartao> cartoes = repository.findAllByCliente_Id(clienteId);
        return cartoes.stream().map(c -> CartaoDTO.builder()
                .cartaoId(c.getId())
                .nomeCartao(c.getNomeCartao())
                .numeroCartao(c.getNumeroCartao())
                .bandeira(c.getBandeira())
                .build()).collect(Collectors.toList());
    }

    public void excluir(Integer id) throws Exception{
        repository.delete(CartaoValidator.validate(id));
    }
}
