package com.ecommerce.serverr.service;

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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoVendaService {

    private final PedidoVendaRepository repository;
    private final EstoqueLivroRepository estoqueLivroRepository;
    private final PedidoVendaItemRepository itemRepository;
    @Autowired
    public PedidoVendaService(PedidoVendaRepository repository, EstoqueLivroRepository estoqueLivroRepository, PedidoVendaItemRepository itemRepository) {
        this.repository = repository;
        this.estoqueLivroRepository = estoqueLivroRepository;
        this.itemRepository = itemRepository;
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
                        .id(item.getId())
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

        if(form.getCartoesIds() != null){
            for (Integer id : form.getCartoesIds()){
                pedidoVenda.getCartoes().add(CartaoValidator.validate(id));
            }
        }

        if(form.getCupomUtilizadoId() != null){
            Cupom cupom = CupomValidator.validate(form.getCupomUtilizadoId());
            Double valorPedidoSemDesconto = pedidoVenda.getValorPedido();

            pedidoVenda.getCupons().add(cupom);

            if(cupom.isTroca()){
                pedidoVenda.setValorPedido(valorPedidoSemDesconto - cupom.getValor());
            } else {
                pedidoVenda.setValorPedido(valorPedidoSemDesconto - (valorPedidoSemDesconto * cupom.getPorcentagemDesconto()));
            }
        }

        PedidoVenda pedidoSalvo = repository.save(pedidoVenda);

        itemRepository.saveAll(form.getItens().stream().map(item -> PedidoVendaItem.builder()
                .quantidadeUnitaria(item.getQuantidade())
                .valorUnitario(item.getValor())
                .pedidoVenda(pedidoSalvo)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(item.getLivroId())).build()).collect(Collectors.toList()));

        return pedidoSalvo.getId();
    }

}
