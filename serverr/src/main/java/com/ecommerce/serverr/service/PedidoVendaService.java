package com.ecommerce.serverr.service;

import com.ecommerce.serverr.form.PedidoVendaCartaoForm;
import com.ecommerce.serverr.model.PedidoVendaCartao;
import com.ecommerce.serverr.dto.PedidoVendaDTO;
import com.ecommerce.serverr.dto.PedidoVendaItemDTO;
import com.ecommerce.serverr.enums.PedidoVendaStatus;
import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoVendaForm;
import com.ecommerce.serverr.model.*;
import com.ecommerce.serverr.repository.*;
import com.ecommerce.serverr.validator.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class PedidoVendaService {

    private final PedidoVendaRepository repository;
    private final EstoqueLivroRepository estoqueLivroRepository;
    private final PedidoVendaItemRepository itemRepository;
    private final PedidoVendaCartaoRepository pedidoVendaCartaoRepository;
    private final CupomRepository cupomRepository;
    @Autowired
    public PedidoVendaService(PedidoVendaRepository repository, EstoqueLivroRepository estoqueLivroRepository, PedidoVendaItemRepository itemRepository, PedidoVendaCartaoRepository pedidoVendaCartaoRepository, CupomRepository cupomRepository) {
        this.repository = repository;
        this.estoqueLivroRepository = estoqueLivroRepository;
        this.itemRepository = itemRepository;
        this.pedidoVendaCartaoRepository = pedidoVendaCartaoRepository;
        this.cupomRepository = cupomRepository;
    }

    private void atualizarEstoque (List<PedidoVendaItem> itensPedido, boolean aumento) {
        for (PedidoVendaItem item : itensPedido) {
            EstoqueLivro estoqueLivro = item.getEstoqueLivro();
            Integer quantidadeUnitaria = item.getQuantidadeUnitaria();

            Integer novaQuantidade = !aumento ?
                    estoqueLivro.getQuantidade() - quantidadeUnitaria
                    :
                    estoqueLivro.getQuantidade() + quantidadeUnitaria;
            estoqueLivro.setQuantidade(novaQuantidade);
            estoqueLivroRepository.save(estoqueLivro);
        }
    }

    public void alterarStatus (Integer pedidoId, String statusPedido) throws Exception {
        PedidoVenda pedido = PedidoVendaValidator.validate(pedidoId);
        PedidoVendaStatus novoStatus = PedidoVendaStatus.getByDescricao(statusPedido);

        if (pedido.getStatus().equals(novoStatus)) {
            throw new Exception("Status informado é idêntico");
        }
        if (statusPedido.equals(PedidoVendaStatus.EM_TRANSPORTE.getDescricao())) {
            atualizarEstoque(pedido.getItensPedido(), false);
        }
        if (statusPedido.equals(PedidoVendaStatus.PEDIDO_CANCELADO.getDescricao())) {
            atualizarEstoque(pedido.getItensPedido(), true);
        }

        pedido.setStatus(novoStatus);
        repository.save(pedido);
    }

    public List<PedidoVendaDTO> pesquisar(PedidoVendaFilter filter) throws Exception {
        List<PedidoVenda> pedidos = repository.pesquisar(filter.getNumPedido(), filter.getDataInicial(), filter.getDataFinal(), filter.getFeitoPor());
        return pedidos.stream().map(p -> PedidoVendaDTO.builder()
                .id(p.getId())
                .feitoPor(p.getCliente().getNome())
                .status(p.getStatus().getDescricao())
                .dataPedido(p.getDataPedido())
                .valorPedido(p.getValorPedido())
                .itens(p.getItensPedido().stream().map(
                        item -> PedidoVendaItemDTO.builder()
                        .id(item.getEstoqueLivro().getId())
                        .titulo(item.getNomeItem())
                        .quantidadeUnitaria(item.getQuantidadeUnitaria())
                        .valorUnitario(item.getValorUnitario()).build()).collect(Collectors.toList()))
                .build()).collect(Collectors.toList());
    }

    public Integer salvar(PedidoVendaForm form) throws Exception {
        Endereco endereco = EnderecoValidator.validate(form.getEnderecoId());
        PedidoVenda pedidoVenda = form.transform();

        pedidoVenda.setCliente(ClienteValidator.validate(form.getClienteId()));
        pedidoVenda.setEnderecoCobranca(endereco);
        pedidoVenda.setEnderecoEntrega(endereco);

        if(form.getCartoes() != null){
            for (PedidoVendaCartaoForm pedidoVendaCartaoForm : form.getCartoes()){
                pedidoVenda.getCartoes().add(
                        PedidoVendaCartao.builder()
                        .cartao(CartaoValidator.validate(pedidoVendaCartaoForm.getCartaoId()))
                        .precoPago(pedidoVendaCartaoForm.getValorPago())
                        .pedidoVenda(pedidoVenda).build()
                );
            }
        }

        if(form.getCuponsIds() != null){
            Cupom cupom;
            Double valorPedidoFinal = pedidoVenda.getValorPedido();

            for (Integer id : form.getCuponsIds()){
                cupom = CupomValidator.validate(id);
                if(cupom.isTroca()){
                    valorPedidoFinal -= cupom.getValor();
                } else {
                    valorPedidoFinal -= (valorPedidoFinal * cupom.getPorcentagemDesconto());
                }
                pedidoVenda.getCupons().add(cupom);
            }

            pedidoVenda.setValorPedido(valorPedidoFinal + pedidoVenda.getValorFrete());
        }

        if(pedidoVenda.getValorPedido() < 0d){
            pedidoVenda.setValorPedido(0d);
        }

        PedidoVenda pedidoSalvo = repository.save(pedidoVenda);

        pedidoVendaCartaoRepository.saveAll(pedidoVenda.getCartoes());

        itemRepository.saveAll(form.getItens().stream().map(item -> PedidoVendaItem.builder()
                .quantidadeUnitaria(item.getQuantidade())
                .valorUnitario(item.getValor())
                .pedidoVenda(pedidoSalvo)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(item.getLivroId())).build()).collect(Collectors.toList()));

        return pedidoSalvo.getId();
    }

    public void cancelarPedido (Integer pedidoId) throws Exception {
        PedidoVenda pedido = PedidoVendaValidator.validate(pedidoId);

        if (pedido.getStatus().equals(PedidoVendaStatus.PEDIDO_CANCELADO)) {
            throw new Exception("Pedido já foi cancelado");
        }

        PedidoVendaStatus novoStatus = PedidoVendaStatus.PEDIDO_CANCELADO;

        if (pedido.getStatus().equals(PedidoVendaStatus.EM_TRANSPORTE)) {
            atualizarEstoque(pedido.getItensPedido(), true);
        }

        pedido.setStatus(novoStatus);
        repository.save(pedido);

        Cupom cupom = Cupom.builder()
                .cliente(pedido.getCliente())
                .isTroca(true)
                .dataGeracao(LocalDate.now())
                .valor(pedido.getValorPedido())
                .isAtivo(true)
                .codigo(gerarCupomAleatorio())
                .build();
        cupomRepository.save(cupom);
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
