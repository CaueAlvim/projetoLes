package com.ecommerce.serverr.repository.implementations;

import com.ecommerce.serverr.dto.DashboardDTO;
import com.ecommerce.serverr.repository.DashboardRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DashboardRepositoryImpl implements DashboardRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<DashboardDTO> findVendasPorPeriodoEProduto(Integer livroId, LocalDate dataInicial, LocalDate dataFinal) {
        String buscarTodos = livroId.equals(0) ? "l.id IS NOT NULL" : "l.id = :livroId";

        String queryString = "SELECT GROUP_CONCAT(DISTINCT l.titulo), " +
                "SUM(pitem.valor_unitario * pitem.quantidade_unitaria) as valorTotalPedidoItem, " +
                "SUM(pitem.quantidade_unitaria) as itemQuantidade," +
                "p.data_pedido as dataPedido " +
                "FROM pedido_venda p " +
                "LEFT JOIN pedido_venda_item pitem ON p.id = pitem.pedido_venda_id " +
                "LEFT JOIN estoque_livro el ON pitem.estoque_livro_id = el.id " +
                "LEFT JOIN livro l ON el.livro_id = l.id " +
                "WHERE " + buscarTodos + " AND (p.data_pedido BETWEEN :dataInicial AND :dataFinal)" +
                "GROUP BY p.data_pedido " +
                "ORDER BY p.data_pedido";

        Query query = entityManager.createNativeQuery(queryString)
                .setParameter("dataInicial", dataInicial)
                .setParameter("dataFinal", dataFinal);

        if (!livroId.equals(0)) {
            query.setParameter("livroId", livroId);
        }

        @SuppressWarnings("unchecked")
        List<Object[]> results = query.getResultList();

        List<DashboardDTO> dtos = results.stream()
                .map(row -> DashboardDTO.builder()
                        .titulo((String) row[0])
                        .valorTotalPedidoItem((Double) row[1])
                        .itemQuantidade((BigDecimal) row[2])
                        .dataPedido(((java.sql.Date) row[3]).toLocalDate())
                        .build())
                .collect(Collectors.toList());

        return dtos;
    }
}