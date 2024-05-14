package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.PedidoTrocaDTO;
import com.ecommerce.serverr.dto.PedidoVendaDTO;
import com.ecommerce.serverr.dto.PedidoVendaItemDTO;
import com.ecommerce.serverr.enums.PedidoVendaStatus;
import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoTrocaForm;
import com.ecommerce.serverr.model.Livro;
import com.ecommerce.serverr.model.PedidoTroca;
import com.ecommerce.serverr.model.PedidoVenda;
import com.ecommerce.serverr.repository.PedidoTrocaRepository;
import com.ecommerce.serverr.validator.LivroValidator;
import com.ecommerce.serverr.validator.PedidoTrocaValidator;
import com.ecommerce.serverr.validator.PedidoVendaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
        pedidoTroca.setCliente(pedidoVenda.getCliente());
        pedidoTroca.setEstoqueLivro(livro.getEstoque());
        pedidoTroca.setValorUnitario(livro.getEstoque().getValor());

        PedidoTroca pedidoTrocaSalvo = repository.save(pedidoTroca);

        return pedidoTrocaSalvo.getId();
    }

    public List<PedidoTrocaDTO> pesquisar(PedidoVendaFilter filter) throws Exception {
        List<PedidoTroca> pedidos = repository.pesquisar(filter.getNumPedido(), filter.getDataInicial(), filter.getDataFinal(), filter.getFeitoPor());
        return pedidos.stream().map(p -> PedidoTrocaDTO.builder()
                .id(p.getId())
                .livroNome(p.getEstoqueLivro().getLivro().getTitulo())
                .quantidade(p.getQuantidadeUnitaria())
                .feitoPor(p.getCliente().getNome())
                .status(p.getStatus().getDescricao())
                .dataSolicitacao(p.getDataSolicitacao())
                .build()).collect(Collectors.toList());
    }

    public void alterarStatus (Integer pedidoId, String status) throws Exception {
        PedidoTroca pedido = PedidoTrocaValidator.validate(pedidoId);
        PedidoVendaStatus novoStatus = PedidoVendaStatus.getByDescricao(status);

        if (pedido.getStatus().equals(novoStatus)) {
            throw new Exception("Status informado é idêntico");
        }

        pedido.setStatus(novoStatus);
        repository.save(pedido);
    }
}
