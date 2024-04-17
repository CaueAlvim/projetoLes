package com.ecommerce.serverr.repository;

import com.ecommerce.serverr.model.EstoqueLivro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstoqueLivroRepository extends JpaRepository<EstoqueLivro, Integer> {
    EstoqueLivro findFirstByLivro_Id(Integer livroId);
}
