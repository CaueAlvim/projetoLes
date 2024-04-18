package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.CarrinhoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarrinhoItemRepository extends JpaRepository<CarrinhoItem, Integer> {
    @Query(value = "SELECT ci.* FROM carrinho_item ci LEFT JOIN carrinho c ON c.id = ci.carrinho_id WHERE c.cliente_id = ?1", nativeQuery = true)
    List<CarrinhoItem> findAllItemsByCliente(Integer id);
}
