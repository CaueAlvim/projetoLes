DELETE FROM `carrinho`;
DELETE FROM `cartao`;
DELETE FROM `endereco`;
DELETE FROM `cliente`;

INSERT INTO `cliente` (`id`, `cpf`, `data_cadastro`, `data_nascimento`, `email`, `genero`, `is_admin`, `nome`, `senha`, `telefone`, `is_ativo`)
VALUES (1, '123.123.123-12', '2024-04-07', '2024-04-07', 'caue@mail.com', 'Masculino', b'1', 'Caue', '1234', '(11)91234-5678', 1);

INSERT INTO `endereco` (`id`, `bairro`, `cep`, `cidade`, `estado`, `numero`, `observacoes`, `pais`, `rua`, `tipo_logradouro`, `tipo_residencia`, `cliente_id`, `is_entrega`, `is_cobranca`)
VALUES (1, 'Bairro 1', '01234-142', 'Mogi das Cruzes', 'SP', '123', 'obsteste', 'Brasil', 'Rua 1', 'logradouro', 'Casa', 1, b'1', b'1');

INSERT INTO `cartao` (`id`, `bandeira`, `cvc`, `nome_cartao`, `numero_cartao`, `cliente_id`)
VALUES (1, 'Visa', '123', 'caue eyti alvim', '1234.1234.1234.1234', 1);

INSERT INTO `carrinho` (`id`, `cliente_id`)
VALUES (1, 1);