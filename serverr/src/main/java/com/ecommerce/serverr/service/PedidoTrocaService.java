package com.ecommerce.serverr.service;

import com.ecommerce.serverr.form.PedidoTrocaForm;
import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.model.PedidoTroca;
import com.ecommerce.serverr.model.PedidoVenda;
import com.ecommerce.serverr.repository.PedidoTrocaRepository;
import com.ecommerce.serverr.validator.LivroValidator;
import com.ecommerce.serverr.validator.PedidoVendaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoTrocaService {

    private final PedidoTrocaRepository repository;
    @Autowired
    public PedidoTrocaService(PedidoTrocaRepository repository) { this.repository = repository; }

    public Integer salvar(PedidoTrocaForm form) throws Exception {
        PedidoVenda pedidoVenda = PedidoVendaValidator.validate(form.getPedidoVendaId());
        Livro livro = LivroValidator.validate(form.getLivroId());
        PedidoTroca pedidoTroca = form.transform();

        pedidoTroca.setPedidoVenda(pedidoVenda);
        pedidoTroca.setCliente(pedidoTroca.getCliente());
        pedidoTroca.setEstoqueLivro(livro.getEstoque());
        pedidoTroca.setValorUnitario(livro.getEstoque().getValor());

        PedidoTroca pedidoTrocaSalvo = repository.save(pedidoTroca);

        return pedidoTrocaSalvo.getId();
    }
}
