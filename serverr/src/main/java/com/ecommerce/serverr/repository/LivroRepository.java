package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LivroRepository extends JpaRepository<Livro, Integer> {
    List<Livro> findAllByIsAtivoIsTrue();
    Livro findFirstByIdAndIsAtivoIsTrue(Integer id);
    Optional<Livro> findFirstByTituloLikeIgnoreCaseAndIsAtivoIsTrue(String titulo);

    @Query(value = "select distinct l.titulo from livro l " +
            "left join estoque_livro el on el.livro_id = l.id " +
            "where el.quantidade > 0 and l.is_ativo = true", nativeQuery = true)
    List<String> buscarLivrosDisponiveis();
    @Query(value = "select distinct l.titulo from livro l " +
            "left join estoque_livro el on el.livro_id = l.id " +
            "left join pedido_venda_item pvi on pvi.estoque_livro_id = el.id " +
            "left join pedido_venda pv on pv.id = pvi.pedido_venda_id " +
            "where pv.cliente_id = ?1", nativeQuery = true)
    List<String> buscarLivrosCompradosPorCliente(Integer clienteId);

}
