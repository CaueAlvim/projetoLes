package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.ClienteDTO;
import com.ecommerce.serverr.filter.ClienteFilter;
import com.ecommerce.serverr.filter.PedidoVendaFilter;
import com.ecommerce.serverr.form.PedidoVendaForm;
import com.ecommerce.serverr.model.*;
import com.ecommerce.serverr.repository.EstoqueLivroRepository;
import com.ecommerce.serverr.repository.PedidoVendaCartaoRepository;
import com.ecommerce.serverr.repository.PedidoVendaCupomRepository;
import com.ecommerce.serverr.repository.PedidoVendaRepository;
import com.ecommerce.serverr.validator.CartaoValidator;
import com.ecommerce.serverr.validator.ClienteValidator;
import com.ecommerce.serverr.validator.CupomValidator;
import com.ecommerce.serverr.validator.EnderecoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PedidoVendaService {

    private final PedidoVendaRepository repository;
    private final EstoqueLivroRepository estoqueLivroRepository;
    private final PedidoVendaCupomRepository pedidoVendaCupomRepository;
    private final PedidoVendaCartaoRepository pedidoVendaCartaoRepository;
    @Autowired
    public PedidoVendaService(PedidoVendaRepository repository, EstoqueLivroRepository estoqueLivroRepository, PedidoVendaCupomRepository pedidoVendaCupomRepository, PedidoVendaCartaoRepository pedidoVendaCartaoRepository) {
        this.repository = repository;
        this.estoqueLivroRepository = estoqueLivroRepository;
        this.pedidoVendaCupomRepository = pedidoVendaCupomRepository;
        this.pedidoVendaCartaoRepository = pedidoVendaCartaoRepository;
    }

    public List<PedidoVenda> pesquisar(PedidoVendaFilter filter) throws Exception {
        List<PedidoVenda> pedidos = repository.pesquisar(filter.getNumPedido(), filter.getDataInicial(), filter.getDataFinal(), filter.getFeitoPor());
//        return pedidos.stream().map(c -> ClienteDTO.builder()
//                .id(c.getId())
//                .nome(c.getNome())
//                .email(c.getEmail())
//                .cpf(c.getCpf())
//                .telefone(c.getTelefone())
//                .dataCadastro(c.getDataCadastro())
//                .build()).collect(Collectors.toList());
        return pedidos;
    }

    public Integer salvar(PedidoVendaForm form) throws Exception {

        Endereco endereco = EnderecoValidator.validate(form.getEnderecoId());

        PedidoVenda pedidoVenda = form.transform();

        pedidoVenda.setCliente(ClienteValidator.validate(form.getClienteId()));
        pedidoVenda.setEnderecoCobranca(endereco);
        pedidoVenda.setEnderecoEntrega(endereco);
        pedidoVenda.setItensPedido(form.getItens().stream().map(item -> PedidoVendaItem.builder()
                .quantidadeUnitaria(item.getQuantidade())
                .valorUnitario(item.getValor())
                .pedidoVenda(pedidoVenda)
                .estoqueLivro(estoqueLivroRepository.findFirstByLivro_Id(item.getLivroId())).build()).collect(Collectors.toList()));

        PedidoVenda pedidoSalvo = repository.save(pedidoVenda);

        if(form.getCupomUtilizadoId() != null){
            Double valorPedidoSemDesconto = pedidoVenda.getValorPedido();

            PedidoVendaCupom pedidoVendaCupom = PedidoVendaCupom.builder()
                    .pedidoVenda(pedidoSalvo)
                    .cupom(CupomValidator.validate(form.getCupomUtilizadoId()))
                    .build();
            pedidoVendaCupomRepository.save(pedidoVendaCupom);
            if(pedidoVendaCupom.getCupom().isTroca()){
                pedidoSalvo.setValorPedido(valorPedidoSemDesconto -= pedidoVendaCupom.getCupom().getValor());
            } else {
                pedidoSalvo.setValorPedido(valorPedidoSemDesconto - (valorPedidoSemDesconto * pedidoVendaCupom.getCupom().getPorcentagemDesconto()));
            }
            repository.save(pedidoSalvo);
        }

        if(form.getCartoesIds() != null){
            List<PedidoVendaCartao> pedidoVendaCartoes = new ArrayList<>();
            for (Integer id : form.getCartoesIds()){
                pedidoVendaCartoes.add(PedidoVendaCartao.builder().pedidoVenda(pedidoSalvo).cartao(CartaoValidator.validate(id)).build());
            }
            pedidoVendaCartaoRepository.saveAll(pedidoVendaCartoes);
        }

        return pedidoSalvo.getId();
    }

}
