DELETE FROM `livro_categoria`;
DELETE FROM `categoria`;
DELETE FROM `livro`;

INSERT INTO `livro` (`id`, `altura`, `ano`, `autor`, `edicao`, `editora`, `is_ativo`, `isbn`, `justificativa_ativacao`, `justificativa_inativacao`, `largura`, `numero_paginas`, `peso`, `profundidade`, `sinopse`, `titulo`)
VALUES
    (1, '20 cm', '1997', 'J.K. Rowling', '1ª Edição', 'Bloomsbury', b'1', '978-0747532699', NULL, NULL, '12 cm', 320, '1.5 kg', '10 cm', 'A história de Harry Potter, um jovem bruxo que descobre que é um mago e tem poderes especiais.', 'Harry Potter e a Pedra Filosofal'),
    (2, '25 cm', '1954', 'J.R.R. Tolkien', '1ª Edição', 'Allen & Unwin', b'1', '978-0007136351', NULL, NULL, '15 cm', 496, '1.8 kg', '15 cm', 'A história de Frodo Bolseiro, um hobbit que embarca em uma jornada perigosa para destruir o Anel Único e salvar o mundo de Sauron.', 'O Senhor dos Anéis: A Sociedade do Anel'),
    (3, '22 cm', '2005', 'J.K. Rowling', '7ª Edição', 'Bloomsbury', b'1', '978-0747596457', NULL, NULL, '13 cm', 752, '1.6 kg', '11 cm', 'A história de Harry Potter, agora adulto, que enfrenta os desafios de sua vida adulta e luta contra as forças do mal.', 'Harry Potter e as Relíquias da Morte'),
    (4, '23 cm', '1968', 'J.R.R. Tolkien', '1ª Edição', 'Allen & Unwin', b'1', '978-0007136351', NULL, NULL, '14 cm', 464, '1.7 kg', '14 cm', 'A história de Frodo Bolseiro, que continua sua jornada após a destruição do Anel Único.', 'O Hobbit'),
    (5, '24 cm', '1990', 'J.K. Rowling', '1ª Edição', 'Bloomsbury', b'1', '978-0747532699', NULL, NULL, '13 cm', 256, '1.4 kg', '10 cm', 'A história de Harry Potter, um jovem bruxo que descobre que é um mago e tem poderes especiais.', 'Harry Potter e a Câmara Secreta');

INSERT INTO `categoria` (`id`, `nome_categoria`)
VALUES
    (1, 'Fantasia'),
    (2, 'Terror'),
    (3, 'Suspense'),
    (4, 'Manga');

INSERT INTO `livro_categoria` (`id`, `livro_id`, `categoria_id`)
VALUES
    (1, 1, 1),
    (2, 2, 1),
    (3, 3, 1),
    (4, 4, 1),
    (5, 5, 1);