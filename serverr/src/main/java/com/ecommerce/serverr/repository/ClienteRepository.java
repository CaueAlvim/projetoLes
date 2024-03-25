package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    Optional<Cliente> findById(Integer id);

    @Query(value = "SELECT * FROM cliente c WHERE (:nome is null or c.nome = :nome) " +
                   "AND (:dataInicial is null or c.data_cadastro >= :dataInicial) " +
                   "AND (:dataFinal is null or c.data_cadastro <= :dataFinal)", nativeQuery = true)
    List<Cliente> pesquisar(@Param("nome") String nome, @Param("dataInicial") LocalDate dataInicial, @Param("dataFinal") LocalDate dataFinal);


}
