package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Cupom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CupomRepository extends JpaRepository<Cupom, Integer> {
    Optional<Cupom> findByIdAndIsAtivoIsTrue(Integer id);
    Optional<Cupom> findFirstByCodigoAndIsAtivoIsTrue(String codigo);
}
