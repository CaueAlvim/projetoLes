package com.ecommerce.serverr.validator;

import com.ecommerce.serverr.model.Cupom;
import com.ecommerce.serverr.repository.CupomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CupomValidator {
    private static CupomRepository repository;

    @Autowired
    public CupomValidator(CupomRepository repository) { CupomValidator.repository = repository; }

    public static Cupom validate(Integer id) throws Exception {
        return repository.findByIdAndIsAtivoIsTrue(id).orElseThrow(() -> new Exception("Cupom inválido"));
    }

    public static Cupom validate(String codigo) throws Exception {
        return repository.findFirstByCodigoAndIsAtivoIsTrue(codigo).orElseThrow(() -> new Exception("Cupom inválido"));
    }
}
