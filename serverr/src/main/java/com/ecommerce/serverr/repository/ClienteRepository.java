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
    Optional<Cliente> findByEmail (String email);

    @Query(value = "SELECT * FROM cliente c WHERE (?1 IS NULL OR c.nome LIKE CONCAT('%', ?1, '%')) " +
                   "AND (c.data_cadastro BETWEEN ?2 AND ?3) AND c.is_admin = 0", nativeQuery = true)
    List<Cliente> pesquisar(String nome, LocalDate dataInicial, LocalDate dataFinal);

}
