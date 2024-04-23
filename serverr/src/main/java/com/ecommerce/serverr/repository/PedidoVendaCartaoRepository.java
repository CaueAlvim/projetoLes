package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.PedidoVendaCartao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoVendaCartaoRepository extends JpaRepository<PedidoVendaCartao, Integer> {
}
