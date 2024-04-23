package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.PedidoVendaItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoVendaItemRepository extends JpaRepository<PedidoVendaItem, Integer> {
}
