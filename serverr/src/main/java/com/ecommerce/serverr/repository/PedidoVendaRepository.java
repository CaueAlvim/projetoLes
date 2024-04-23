package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.PedidoVenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PedidoVendaRepository extends JpaRepository<PedidoVenda, Integer> {
    @Query(value =
            "SELECT p.* FROM pedido_venda p " +
            "LEFT JOIN cliente c ON c.id = p.cliente_id " +
            "WHERE (?1 IS NULL OR p.id = ?1) " +
            "AND (?4 IS NULL OR c.nome LIKE CONCAT('%', ?4, '%')) " +
            "AND (p.data_pedido BETWEEN ?2 AND ?3) " +
            "AND c.is_admin = 0 AND c.is_ativo = 1 ", nativeQuery = true)
    List<PedidoVenda> pesquisar(Integer numPedido, LocalDate dataInicial, LocalDate dataFinal, String feitoPor);
}
