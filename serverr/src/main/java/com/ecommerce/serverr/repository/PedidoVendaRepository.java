package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.PedidoVenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoVendaRepository extends JpaRepository<PedidoVenda, Integer> {
}
