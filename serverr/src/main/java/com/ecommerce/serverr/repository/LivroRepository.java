package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LivroRepository extends JpaRepository<Livro, Integer> {
    List<Livro> findAllByIsAtivoIsTrue();
}
