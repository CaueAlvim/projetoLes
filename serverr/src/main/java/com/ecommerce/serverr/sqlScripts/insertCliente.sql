DELETE FROM `carrinho`;
DELETE FROM `cartao`;
DELETE FROM `endereco`;
DELETE FROM `cliente`;

INSERT INTO `cliente` (`id`, `cpf`, `data_cadastro`, `data_nascimento`, `email`, `genero`, `is_admin`, `nome`, `senha`, `telefone`, `is_ativo`)
VALUES (1, '123.123.123-12', '2024-04-07', '2000-01-01', 'admin', 'Masculino', b'1', 'Caue', '1234', '(11)91234-5678', 1),
       (2, '456.456.456-45', '2024-04-22', '2000-01-01', 'teste', 'Masculino', b'0', 'Teste', '1234', '(11)94567-8910', 1);

INSERT INTO `endereco` (`id`, `bairro`, `cep`, `cidade`, `estado`, `numero`, `observacoes`, `pais`, `rua`, `tipo_logradouro`, `tipo_residencia`, `cliente_id`, `is_entrega`, `is_cobranca`)
VALUES (1, 'Bairro 1', '01234-142', 'Mogi das Cruzes', 'SP', '123', 'obsteste', 'Brasil', 'Rua 1', 'logradouro', 'Casa', 1, b'1', b'1'),
       (2, 'Bairro Teste', '04567-891', 'Mogi das Cruzes', 'SP', '123', null, 'Brasil', 'Rua 2', 'logradouro', 'Casa', 2, b'1', b'1');

INSERT INTO `cartao` (`id`, `bandeira`, `cvc`, `nome_cartao`, `numero_cartao`, `cliente_id`)
VALUES (1, 'Visa', '123', 'caue eyti alvim', '1234.1234.1234.1234', 1),
       (2, 'Visa', '111', 'Nome teste 1', '1111.1111.1111.1111', 2),
       (3, 'Mastercard', '222', 'Nome teste 2', '2222.2222.2222.2222', 2),
       (4, 'AmericanExpress', '333', 'Nome teste 3', '3333.3333.3333.3333', 2);

INSERT INTO `carrinho` (`id`, `cliente_id`)
VALUES (1, 1),
       (2, 2);