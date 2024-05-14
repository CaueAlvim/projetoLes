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

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoVendaService {

    private final PedidoVendaRepository repository;
    private final EstoqueLivroRepository estoqueLivroRepository;
    private final PedidoVendaItemRepository itemRepository;
    private final PedidoVendaCartaoRepository pedidoVendaCartaoRepository;
    @Autowired
    public PedidoVendaService(PedidoVendaRepository repository, EstoqueLivroRepository estoqueLivroRepository, PedidoVendaItemRepository itemRepository, PedidoVendaCartaoRepository pedidoVendaCartaoRepository) {
        this.repository = repository;
        this.estoqueLivroRepository = estoqueLivroRepository;
        this.itemRepository = itemRepository;
        this.pedidoVendaCartaoRepository = pedidoVendaCartaoRepository;
    }

    public void alterarStatus (Integer pedidoId, String status) throws Exception {
        PedidoVenda pedido = PedidoVendaValidator.validate(pedidoId);
        PedidoVendaStatus novoStatus = PedidoVendaStatus.getByDescricao(status);

        if (pedido.getStatus().equals(novoStatus)) {
            throw new Exception("Status informado é idêntico");
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

        PedidoVenda pedidoSalvo = repository.save(pedidoVenda);

        pedidoVendaCartaoRepository.saveAll(pedidoVenda.getCartoes());

        itemRepository.saveAll(form.getItens().stream().map(item -> PedidoVendaItem.builder()
                .quantidadeUnitaria(item.getQuantidade())
                .valorUnitario(item.getValor())
                .pedidoVenda(pedidoSalvo)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(item.getLivroId())).build()).collect(Collectors.toList()));

        return pedidoSalvo.getId();
    }

}
