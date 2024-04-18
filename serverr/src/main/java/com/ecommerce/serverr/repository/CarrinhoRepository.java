package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Carrinho;
import com.ecommerce.serverr.model.CarrinhoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Integer> {

    Carrinho findFirstByCliente_Id(Integer id);

}
