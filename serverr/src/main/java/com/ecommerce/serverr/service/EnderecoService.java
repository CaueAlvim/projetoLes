package com.ecommerce.serverr.service;

import com.ecommerce.serverr.form.EnderecoForm;
import com.ecommerce.serverr.model.Cliente;
import com.ecommerce.serverr.model.Endereco;
import com.ecommerce.serverr.repository.EnderecoRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import com.ecommerce.serverr.validator.EnderecoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Endereco> pesquisar() throws Exception {
        return repository.findAll();
    }

    public void excluir(Integer id) throws Exception{
        repository.delete(EnderecoValidator.validate(id));
    }
}
