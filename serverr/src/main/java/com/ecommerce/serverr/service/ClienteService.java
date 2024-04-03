package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.ClienteDTO;
import com.ecommerce.serverr.filter.ClienteFilter;
import com.ecommerce.serverr.form.ClienteForm;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.repository.ClienteRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteService {
    private final ClienteRepository repository;

    @Autowired
    public ClienteService( ClienteRepository repository ){
        this.repository = repository;
    }

    public Cliente findById(Integer id) throws Exception{
        return ClienteValidator.validate(id);
    }

    public Cliente login(ClienteForm form) throws Exception {
        Cliente clienteLogin = ClienteValidator.validatePorEmail(form.getEmail());
        if (clienteLogin.getSenha().equals(form.getSenha())){
            return clienteLogin;
        }
        return null;
    }

    public void salvar(ClienteForm form) throws Exception {
        Cliente cliente = form.transform();
        cliente.setDataCadastro(LocalDate.now());
        repository.save(cliente);

    }

    public void editar(ClienteForm form) throws Exception{
        ClienteValidator.validate(form.getId());
        Cliente newCliente = form.transform();
        repository.save(newCliente);
    }

    public List<ClienteDTO> pesquisar(ClienteFilter filter) throws Exception {
        List<Cliente> clientes = repository.pesquisar(filter.getNome(), filter.getDataInicial(), filter.getDataFinal());
        return clientes.stream().map(c -> ClienteDTO.builder()
                        .id(c.getId())
                        .nome(c.getNome())
                        .email(c.getEmail())
                        .cpf(c.getCpf())
                        .telefone(c.getTelefone())
                        .dataCadastro(c.getDataCadastro())
                        .build()).collect(Collectors.toList());
    }

    public void excluir(Integer id) throws Exception{
        repository.delete(ClienteValidator.validate(id));
    }
}
