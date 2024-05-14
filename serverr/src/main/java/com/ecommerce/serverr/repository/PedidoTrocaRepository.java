package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.PedidoTroca;
import com.ecommerce.serverr.model.PedidoVenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface PedidoTrocaRepository extends JpaRepository<PedidoTroca, Integer> {
    @Query(value =
            "SELECT p.* FROM pedido_troca p " +
                    "LEFT JOIN cliente c ON c.id = p.cliente_id " +
                    "WHERE (?1 IS NULL OR p.id = ?1) " +
                    "AND (?4 IS NULL OR c.nome LIKE CONCAT('%', ?4, '%')) " +
                    "AND (p.data_solicitacao BETWEEN ?2 AND ?3) " +
                    "AND c.is_admin = 0 AND c.is_ativo = 1 ", nativeQuery = true)
    List<PedidoTroca> pesquisar(Integer numPedido, LocalDate dataInicial, LocalDate dataFinal, String feitoPor);
}
