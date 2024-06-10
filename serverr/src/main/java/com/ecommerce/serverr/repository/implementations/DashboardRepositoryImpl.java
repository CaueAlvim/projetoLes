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
    public List<DashboardDTO> findVendasPorPeriodoEProduto(List<Integer> livrosId, LocalDate dataInicial, LocalDate dataFinal) {

        String queryString = "SELECT DISTINCT l.titulo, " +
                "(pitem.valor_unitario * pitem.quantidade_unitaria) as valorTotalPedidoItem, " +
                "pitem.quantidade_unitaria as itemQuantidade," +
                "p.data_pedido as dataPedido " +
                "FROM pedido_venda p " +
                "LEFT JOIN pedido_venda_item pitem ON p.id = pitem.pedido_venda_id " +
                "LEFT JOIN estoque_livro el ON pitem.estoque_livro_id = el.id " +
                "LEFT JOIN livro l ON el.livro_id = l.id " +
                "WHERE l.id IN :livrosId AND (p.data_pedido BETWEEN :dataInicial AND :dataFinal)" +
                "ORDER BY p.data_pedido";

        Query query = entityManager.createNativeQuery(queryString)
                .setParameter("dataInicial", dataInicial)
                .setParameter("dataFinal", dataFinal)
                .setParameter("livrosId", livrosId);

        @SuppressWarnings("unchecked")
        List<Object[]> results = query.getResultList();

        List<DashboardDTO> dtos = results.stream()
                .map(coluna -> DashboardDTO.builder()
                        .titulo((String) coluna[0])
                        .valorTotalPedidoItem((Double) coluna[1])
                        .itemQuantidade((Integer) coluna[2])
                        .dataPedido(((java.sql.Date) coluna[3]).toLocalDate())
                        .build())
                .collect(Collectors.toList());

        return dtos;
    }
}