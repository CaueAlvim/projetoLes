package com.ecommerce.serverr.service;

import com.ecommerce.serverr.dto.CupomDTO;
import com.ecommerce.serverr.model.Cupom;
import com.ecommerce.serverr.validator.CupomValidator;
import org.springframework.stereotype.Service;

@Service
public class CupomService {

    public CupomDTO validarCupom(String cupomCodigo) throws Exception {
        Cupom cupom = CupomValidator.validate(cupomCodigo);
        CupomDTO dto = CupomDTO.builder().cupomId(cupom.getId()).build();

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
}
