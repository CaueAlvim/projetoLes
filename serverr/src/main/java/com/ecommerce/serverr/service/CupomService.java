package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.CupomDTO;
import com.ecommerce.serverr.model.Cupom;
import com.ecommerce.serverr.repository.CupomRepository;
import com.ecommerce.serverr.validator.CupomValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CupomService {

    private final CupomRepository repository;
    @Autowired
    public CupomService( CupomRepository repository ){
        this.repository = repository;
    }

    public CupomDTO validarCupom(String cupomCodigo) throws Exception {
        Cupom cupom = CupomValidator.validate(cupomCodigo);
        CupomDTO dto = CupomDTO.builder().cupomId(cupom.getId()).codigoCupom(cupom.getCodigo()).build();

        if (cupom.getCliente() != null && cupom.getValor() != null && cupom.isTroca()){
            dto.setValor(cupom.getValor());
            dto.setTroca(true);
        }

        if (cupom.getPorcentagemDesconto() != null && cupom.isDesconto()) {
            dto.setValor(cupom.getPorcentagemDesconto());
            dto.setTroca(false);
        }

        return dto;
    }

    public List<CupomDTO> pesquisar(Integer clienteId) throws Exception {
        List<Cupom> cupons = repository.findAllByCliente_IdAndIsAtivoIsTrue(clienteId);
        return cupons.stream().map(c -> CupomDTO.builder()
                .codigoCupom(c.getCodigo())
                .cupomId(c.getId())
                .isTroca(c.isTroca())
                .valor(c.getValor())
                .build()).collect(Collectors.toList());
    }
}
