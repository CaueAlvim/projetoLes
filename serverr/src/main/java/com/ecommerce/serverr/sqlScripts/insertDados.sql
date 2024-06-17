DELETE FROM `carrinho`;
DELETE FROM `cartao`;
DELETE FROM `endereco`;
DELETE FROM `cupom`;
DELETE FROM `cliente`;

INSERT INTO `cliente` (`id`, `cpf`, `data_cadastro`, `data_nascimento`, `email`, `genero`, `is_admin`, `nome`, `senha`, `telefone`, `is_ativo`)
VALUES (1, '123.123.123-12', '2024-04-07', '2000-01-01', 'admin', 'Masculino', b'1', 'Caue', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '(11)91234-5678', 1),
       (2, '456.456.456-45', '2024-04-22', '2000-01-01', 'teste', 'Masculino', b'0', 'Teste', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '(11)94567-8910', 1);

INSERT INTO `endereco` (`id`, `bairro`, `cep`, `cidade`, `estado`, `numero`, `observacoes`, `pais`, `rua`, `tipo_logradouro`, `tipo_residencia`, `cliente_id`, `is_entrega`, `is_cobranca`)
VALUES (1, 'Bairro 1', '01234-142', 'Mogi das Cruzes', 'SP', '123', 'obsteste', 'Brasil', 'Rua 1', 'logradouro', 'Casa', 1, b'1', b'1'),
       (2, 'Bairro Teste', '04567-891', 'Mogi das Cruzes', 'SP', '123', null, 'Brasil', 'Rua 2', 'logradouro', 'Casa', 2, b'1', b'1'),
       (3, 'Segundo Bairro Teste', '09101-892', 'Mogi das Cruzes', 'SP', '456', null, 'Brasil', 'Rua 3', 'logradouro', 'Casa', 2, b'1', b'1');

INSERT INTO `cartao` (`id`, `bandeira`, `cvc`, `nome_cartao`, `numero_cartao`, `cliente_id`)
VALUES (1, 'Visa', '123', 'caue eyti alvim', '1234.1234.1234.1234', 1),
       (2, 'Visa', '111', 'Nome teste 1', '1111.1111.1111.1111', 2),
       (3, 'Mastercard', '222', 'Nome teste 2', '2222.2222.2222.2222', 2),
       (4, 'AmericanExpress', '333', 'Nome teste 3', '3333.3333.3333.3333', 2);

INSERT INTO `cupom` (`id`, `codigo`, `data_geracao`, `is_ativo`, `is_desconto`, `is_troca`, `porcentagem_desconto`, `valor`, `cliente_id`)
VALUES (1, 'teste', '2000-01-01', 1, 1, 0, 0.2, null, null),
       (2, 'troca', '2000-01-01', 1, 0, 1, null, 40, 2);

INSERT INTO `carrinho` (`id`, `cliente_id`)
VALUES (1, 1),
       (2, 2);


DELETE FROM `livro_categoria`;
DELETE FROM `categoria`;
DELETE FROM `estoque_livro`;
DELETE FROM `livro`;
DELETE FROM `grupo_precificacao`;

INSERT INTO `grupo_precificacao` (`id`, `margem_lucro`, `nome_grupo`)
VALUES
    (1, 0.2, 'Grupo UM'),
    (2, 0.5, 'Grupo DOIS');

INSERT INTO `livro` (`id`, `altura`, `ano`, `autor`, `edicao`, `editora`, `is_ativo`, `isbn`, `justificativa_ativacao`, `justificativa_inativacao`, `largura`, `numero_paginas`, `peso`, `profundidade`, `sinopse`, `titulo`, `caminho_imagem`, `grupo_precificacao_id`, `codigo_barras`)
VALUES
    (1, '20 cm', '1997', 'J.K. Rowling', '1ª Edição', 'Bloomsbury', b'1', '978-0747532699', NULL, NULL, '12 cm', 320, '1.5 kg', '10 cm', 'A história de Harry Potter, um jovem bruxo que descobre que é um mago e tem poderes especiais.', 'Harry Potter e a Pedra Filosofal', 'hpPedraFilosofal.jpg', 1, '123456789'),
    (2, '25 cm', '1954', 'J.R.R. Tolkien', '1ª Edição', 'Allen & Unwin', b'1', '978-0007136351', NULL, NULL, '15 cm', 496, '1.8 kg', '15 cm', 'A história de Frodo Bolseiro, um hobbit que embarca em uma jornada perigosa para destruir o Anel Único e salvar o mundo de Sauron.', 'A Sociedade do Anel', 'sociedadeAnel.jpg', 2, '987654321'),
    (3, '22 cm', '2005', 'J.K. Rowling', '7ª Edição', 'Bloomsbury', b'1', '978-0747596457', NULL, NULL, '13 cm', 752, '1.6 kg', '11 cm', 'A história de Harry Potter, agora adulto, que enfrenta os desafios de sua vida adulta e luta contra as forças do mal.', 'Harry Potter e as Relíquias da Morte', 'hpReliquiasMorte.jpg', 2, '12401871'),
    (4, '23 cm', '1968', 'J.R.R. Tolkien', '1ª Edição', 'Allen & Unwin', b'1', '978-0007136351', NULL, NULL, '14 cm', 464, '1.7 kg', '14 cm', 'A história de Frodo Bolseiro, que continua sua jornada após a destruição do Anel Único.', 'O Hobbit', 'hobbit.jpg', 1, '23123123123'),
    (5, '24 cm', '1990', 'J.K. Rowling', '1ª Edição', 'Bloomsbury', b'1', '978-0747532699', NULL, NULL, '13 cm', 256, '1.4 kg', '10 cm', 'A história de Harry Potter, um jovem bruxo que descobre que é um mago e tem poderes especiais.', 'Harry Potter e a Câmara Secreta', 'hpCamaraSecreta.jpg', 1, '4365342342'),
    (6, '21 cm', '1979', 'Douglas Adams', '1ª Edição', 'Pan Books', b'1', '978-0330258647', NULL, NULL, '12 cm', 224, '1.2 kg', '9 cm', 'As aventuras intergalácticas do viajante espacial Arthur Dent após a destruição da Terra.', 'O Guia do Mochileiro das Galáxias', 'blank.jpg', 1, '9780330258647'),
    (7, '19 cm', '1953', 'Ray Bradbury', '1ª Edição', 'Ballantine Books', b'1', '978-1451673319', NULL, NULL, '11 cm', 256, '1.3 kg', '8 cm', 'Um futuro distópico onde os livros são proibidos e bombeiros queimam qualquer forma de literatura.', 'Fahrenheit 451', 'blank.jpg', 1, '9781451673319'),
    (8, '18 cm', '1996', 'George R.R. Martin', '1ª Edição', 'Bantam Spectra', b'1', '978-0553573404', NULL, NULL, '10 cm', 694, '2.0 kg', '12 cm', 'Intrigas e batalhas pelo poder em Westeros, enquanto as famílias nobres disputam o Trono de Ferro.', 'A Guerra dos Tronos', 'blank.jpg', 1, '9780553573404'),
    (9, '26 cm', '1982', 'Ursula K. Le Guin', '1ª Edição', 'Harper & Row', b'1', '978-0061054884', NULL, NULL, '14 cm', 320, '1.6 kg', '11 cm', 'Um planeta onde a dualidade de gênero é uma realidade biológica, explorando temas de sociedade e identidade.', 'A Mão Esquerda da Escuridão', 'blank.jpg', 1, '9780061054884'),
    (10, '22 cm', '2007', 'Stephen King', '1ª Edição', 'Scribner', b'1', '978-1416524188', NULL, NULL, '13 cm', 608, '1.9 kg', '13 cm', 'Um romance épico sobre um pistoleiro e sua busca pela Torre Negra, o eixo que une todos os universos.', 'A Torre Negra: O Pistoleiro', 'blank.jpg', 1, '9781416524188'),
    (11, '20 cm', '2014', 'Gillian Flynn', '1ª Edição', 'Crown Publishing', b'1', '978-0553418361', NULL, NULL, '12 cm', 432, '1.4 kg', '10 cm', 'O desaparecimento misterioso de uma mulher e os segredos obscuros que emergem durante a investigação.', 'Garota Exemplar', 'blank.jpg', 1, '9780553418361'),
    (12, '23 cm', '2009', 'Suzanne Collins', '1ª Edição', 'Scholastic Press', b'1', '978-0439023481', NULL, NULL, '14 cm', 384, '1.5 kg', '11 cm', 'Num futuro distópico, jovens são enviados para uma arena mortal como parte de um reality show brutal.', 'Jogos Vorazes', 'blank.jpg', 1, '9780439023481'),
    (13, '24 cm', '1977', 'Stephen King', '1ª Edição', 'Doubleday', b'1', '978-0385121675', NULL, NULL, '15 cm', 447, '1.7 kg', '14 cm', 'Uma pequena cidade é aterrorizada por uma entidade maligna que assume a forma de um palhaço.', 'It: A Coisa', 'blank.jpg', 1, '9780385121675'),
    (14, '25 cm', '1985', 'Margaret Atwood', '1ª Edição', 'McClelland & Stewart', b'1', '978-0385490818', NULL, NULL, '16 cm', 311, '1.3 kg', '15 cm', 'Num futuro distópico, mulheres são subjugadas e controladas em uma sociedade totalitária.', 'O Conto da Aia', 'blank.jpg', 1, '9780385490818'),
    (15, '21 cm', '1998', 'Philip Pullman', '1ª Edição', 'Scholastic Point', b'1', '978-0439951781', NULL, NULL, '12 cm', 399, '1.6 kg', '10 cm', 'Aventuras de uma garota corajosa que viaja por universos paralelos e descobre segredos profundos sobre o destino.', 'A Bússola de Ouro', 'blank.jpg', 1, '9780439951781'),
    (16, '22 cm', '1987', 'Terry Pratchett', '1ª Edição', 'Gollancz', b'1', '978-0552131054', NULL, NULL, '13 cm', 432, '1.8 kg', '11 cm', 'As divertidas e satíricas aventuras de um mundo fantástico onde a magia é comum e a burocracia é uma instituição.', 'O Aprendiz de Morte', 'blank.jpg', 1, '9780552131054'),
    (17, '19 cm', '2003', 'Neil Gaiman', '1ª Edição', 'William Morrow', b'1', '978-0060558123', NULL, NULL, '11 cm', 272, '1.2 kg', '9 cm', 'Uma história sobre o encontro entre um menino e um ser misterioso que é muito mais do que parece.', 'Coraline', 'blank.jpg', 1, '9780060558123'),
    (18, '20 cm', '1965', 'Frank Herbert', '1ª Edição', 'Chilton Books', b'1', '978-0441013593', NULL, NULL, '12 cm', 412, '1.9 kg', '10 cm', 'Num universo dominado por disputas políticas e religiosas, uma luta pelo controle do recurso mais valioso do universo.', 'Duna', 'blank.jpg', 1, '9780441013593');

INSERT INTO `categoria` (`id`, `nome_categoria`)
VALUES
    (1, 'Fantasia'),
    (2, 'Terror'),
    (3, 'Suspense'),
    (4, 'Manga');

INSERT INTO `livro_categoria` (`livro_id`, `categoria_id`)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (6, 3),
    (7, 3),
    (8, 1),
    (9, 1),
    (10, 1),
    (11, 3),
    (12, 3),
    (13, 2),
    (14, 3),
    (15, 1),
    (16, 1),
    (17, 2),
    (18, 1);

INSERT INTO `estoque_livro` (`id`, `data_entrada`, `fornecedor`, `quantidade`, `valor`, `livro_id`)
VALUES
    (1, '2024-01-01', 'Fornecedor 1', 20, 39.99, 1),
    (2, '2024-01-01', 'Fornecedor 2', 20, 39.99, 2),
    (3, '2024-01-01', 'Fornecedor 3', 20, 39.99, 3),
    (4, '2024-01-01', 'Fornecedor 4', 20, 39.99, 4),
    (5, '2024-01-01', 'Fornecedor 5', 20, 39.99, 5),
    (6, '2024-01-01', 'Fornecedor 1', 20, 39.99, 6),
    (7, '2024-01-01', 'Fornecedor 2', 20, 39.99, 7),
    (8, '2024-01-01', 'Fornecedor 3', 20, 39.99, 8),
    (9, '2024-01-01', 'Fornecedor 4', 20, 39.99, 9),
    (10, '2024-01-01', 'Fornecedor 5', 20, 39.99, 10),
    (11, '2024-01-01', 'Fornecedor 1', 20, 39.99, 11),
    (12, '2024-01-01', 'Fornecedor 2', 20, 39.99, 12),
    (13, '2024-01-01', 'Fornecedor 3', 20, 39.99, 13),
    (14, '2024-01-01', 'Fornecedor 4', 20, 39.99, 14),
    (15, '2024-01-01', 'Fornecedor 5', 20, 39.99, 15),
    (16, '2024-01-01', 'Fornecedor 1', 20, 39.99, 16),
    (17, '2024-01-01', 'Fornecedor 2', 20, 39.99, 17),
    (18, '2024-01-01', 'Fornecedor 3', 20, 39.99, 18);