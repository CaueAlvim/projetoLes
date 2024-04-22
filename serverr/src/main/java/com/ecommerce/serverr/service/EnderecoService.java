package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.EnderecoDTO;
import com.ecommerce.serverr.form.EnderecoForm;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.model.Endereco;
import com.ecommerce.serverr.repository.EnderecoRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import com.ecommerce.serverr.validator.EnderecoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnderecoService {
    private final EnderecoRepository repository;

    @Autowired
    public EnderecoService( EnderecoRepository repository ){
        this.repository = repository;
    }

    public Endereco carregar(Integer id) throws Exception{
        return EnderecoValidator.validate(id);
    }

    public void salvar(EnderecoForm form) throws Exception{
        Cliente cliente = ClienteValidator.validate(form.getClienteId());
        Endereco endereco = form.transform();
        endereco.setCliente(cliente);
        repository.save(endereco);
    }

    public void editar(EnderecoForm form) throws Exception{
        EnderecoValidator.validate(form.getId());
        Endereco newEndereco = form.transform();
        repository.save(newEndereco);
    }

    public List<EnderecoDTO> pesquisar(Integer clienteId) throws Exception {
        List<Endereco> enderecos = repository.findAllByCliente_Id(clienteId);
        return enderecos.stream().map(e -> EnderecoDTO.builder()
                .enderecoId(e.getId())
                .numero(e.getNumero())
                .rua(e.getRua())
                .bairro(e.getBairro())
                .estado(e.getEstado())
                .build()).collect(Collectors.toList());
    }

    public void excluir(Integer id) throws Exception{
        repository.delete(EnderecoValidator.validate(id));
    }
}
