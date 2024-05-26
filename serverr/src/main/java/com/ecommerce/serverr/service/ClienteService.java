package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.ClienteDTO;
import com.ecommerce.serverr.filter.ClienteFilter;
import com.ecommerce.serverr.form.ClienteForm;
import com.ecommerce.serverr.model.Carrinho;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.repository.CarrinhoRepository;
import com.ecommerce.serverr.repository.ClienteRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteService {
    private final ClienteRepository repository;

    private final CarrinhoRepository carrinhoRepository;

    @Autowired
    public ClienteService(ClienteRepository repository, CarrinhoRepository carrinhoRepository){
        this.repository = repository;
        this.carrinhoRepository = carrinhoRepository;
    }

    private String encryptPassword(String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }

    public Cliente findById(Integer id) throws Exception{
        return ClienteValidator.validate(id);
    }

    public Cliente login(ClienteForm form) throws Exception {
        Cliente clienteLogin = ClienteValidator.validatePorEmail(form.getEmail());

        if (clienteLogin.getSenha().equals(encryptPassword(form.getSenha()))){
            return clienteLogin;
        } else {
            throw new Exception("Senha incorreta");
        }
    }

    public Integer salvar(ClienteForm form) throws Exception {
        Cliente cliente = form.transform();
        cliente.setDataCadastro(LocalDate.now());
        cliente.setSenha(encryptPassword(form.getSenha()));
        Cliente clienteSalvo = repository.save(cliente);

        carrinhoRepository.save(Carrinho.builder().cliente(clienteSalvo).build());

        return clienteSalvo.getId();
    }

    public void editar(ClienteForm form) throws Exception{
        Cliente cliente = ClienteValidator.validate(form.getId());
        Cliente newCliente = form.transform();
        newCliente.setAdmin(cliente.isAdmin());
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

    public void inativar(Integer id) throws Exception{
        Cliente cliente = ClienteValidator.validate(id);
        cliente.setAtivo(false);
        repository.save(cliente);
    }
}
