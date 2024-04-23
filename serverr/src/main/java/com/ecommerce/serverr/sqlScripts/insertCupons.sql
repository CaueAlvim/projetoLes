DELETE FROM `cupom`;

INSERT INTO `cupom` (`id`, `codigo`, `data_geracao`, `is_ativo`, `is_desconto`, `is_troca`, `porcentagem_desconto`, `valor`, `cliente_id`)
VALUES (1, 'teste', '2000-01-01', 1, 1, 0, 0.2, null, null);