package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.PedidoTrocaDTO;
import com.ecommerce.serverr.enums.PedidoVendaStatus;
import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoTrocaForm;
import com.ecommerce.serverr.model.*;
import com.ecommerce.serverr.repository.CupomRepository;
import com.ecommerce.serverr.repository.EstoqueLivroRepository;
import com.ecommerce.serverr.repository.PedidoTrocaRepository;
import com.ecommerce.serverr.validator.LivroValidator;
import com.ecommerce.serverr.validator.PedidoTrocaValidator;
import com.ecommerce.serverr.validator.PedidoVendaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class PedidoTrocaService {

    private final PedidoTrocaRepository repository;
    private final CupomRepository cupomRepository;
    private final EstoqueLivroRepository estoqueLivroRepository;

    @Autowired
    public PedidoTrocaService(PedidoTrocaRepository repository, CupomRepository cupomRepository, EstoqueLivroRepository estoqueLivroRepository) {
        this.repository = repository;
        this.cupomRepository = cupomRepository;
        this.estoqueLivroRepository = estoqueLivroRepository;
    }

    public Integer salvar(PedidoTrocaForm form) throws Exception {
        PedidoVenda pedidoVenda = PedidoVendaValidator.validate(form.getPedidoVendaId());

        if(!pedidoVenda.getStatus().equals(PedidoVendaStatus.ENTREGUE)){
            throw new Exception("Pedido ainda não entregue ou já cancelado");
        }

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
        } else if (pedido.getStatus().equals(PedidoVendaStatus.TROCA_RECUSADA)) {
            throw new Exception("Esta solicitação de troca foi recusada!");
        } else if (novoStatus.equals(PedidoVendaStatus.TROCADO)) {
            Cupom cupom = Cupom.builder()
                    .cliente(pedido.getCliente())
                    .isTroca(true)
                    .dataGeracao(LocalDate.now())
                    .valor(pedido.getValorUnitario() * pedido.getQuantidadeUnitaria())
                    .isAtivo(true)
                    .codigo(gerarCupomAleatorio())
                    .build();
            cupomRepository.save(cupom);

            EstoqueLivro estoqueLivro = pedido.getEstoqueLivro();
            estoqueLivro.setQuantidade(estoqueLivro.getQuantidade() + pedido.getQuantidadeUnitaria());
            estoqueLivroRepository.save(estoqueLivro);
        }

        pedido.setStatus(novoStatus);
        repository.save(pedido);
    }

    public String gerarCupomAleatorio() {
        StringBuilder builder = new StringBuilder();
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new SecureRandom();

        for (int i = 0; i < 6; i++) {
            int index = random.nextInt(characters.length());
            builder.append(characters.charAt(index));
        }

        return builder.toString();
    }
}
