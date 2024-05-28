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
    (5, '24 cm', '1990', 'J.K. Rowling', '1ª Edição', 'Bloomsbury', b'1', '978-0747532699', NULL, NULL, '13 cm', 256, '1.4 kg', '10 cm', 'A história de Harry Potter, um jovem bruxo que descobre que é um mago e tem poderes especiais.', 'Harry Potter e a Câmara Secreta', 'hpCamaraSecreta.jpg', 1, 4365342342);

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
    (5, 1);

INSERT INTO `estoque_livro` (`id`, `data_entrada`, `fornecedor`, `quantidade`, `valor`, `livro_id`)
VALUES
    (1, '2024-01-01', 'Fornecedor 1', 20, 39.99, 1),
    (2, '2024-01-01', 'Fornecedor 2', 20, 39.99, 2),
    (3, '2024-01-01', 'Fornecedor 3', 20, 39.99, 3),
    (4, '2024-01-01', 'Fornecedor 4', 20, 39.99, 4),
    (5, '2024-01-01', 'Fornecedor 5', 20, 39.99, 5);