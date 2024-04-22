package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Cartao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Integer> {
    Optional<Cartao> findById(Integer id);

    List<Cartao> findAllByCliente_Id(Integer id);
}
