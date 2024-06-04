DELETE FROM pedido_venda_cartao;
DELETE FROM pedido_venda_cupom;
DELETE FROM pedido_troca;
DELETE FROM pedido_venda_item;
DELETE FROM pedido_venda;

INSERT INTO pedido_venda (data_pedido, status, valor_frete, valor_pedido, cliente_id, endereco_cobranca_id, endereco_entrega_id)
VALUES
    ('2024-01-01', 'ENTREGUE', 30, 149.97, 2, 2, 2),
    ('2024-01-04', 'ENTREGUE', 25, 99.99, 2, 2, 2),
    ('2024-01-06', 'ENTREGUE', 35, 199.99, 2, 2, 2),
    ('2024-01-15', 'ENTREGUE', 40, 249.99, 2, 2, 2),
    ('2024-01-25', 'ENTREGUE', 30, 149.97, 2, 2, 2),
    ('2024-02-15', 'ENTREGUE', 25, 99.99, 2, 2, 2),
    ('2024-03-10', 'ENTREGUE', 35, 199.99, 2, 2, 2),
    ('2024-03-01', 'ENTREGUE', 40, 249.99, 2, 2, 2),
    ('2024-03-02', 'ENTREGUE', 30, 149.97, 2, 2, 2),
    ('2024-03-03', 'ENTREGUE', 25, 99.99, 2, 2, 2);

INSERT INTO pedido_venda_item (quantidade_unitaria, valor_unitario, estoque_livro_id, pedido_venda_id)
VALUES
    (1, 39.99, 1, 1),
    (1, 39.99, 2, 1),
    (5, 39.99, 2, 2),
    (2, 39.99, 4, 2),
    (1, 39.99, 5, 2),
    (3, 39.99, 3, 3),
    (4, 39.99, 4, 4),
    (1, 39.99, 5, 5),
    (5, 39.99, 3, 5),
    (6, 39.99, 1, 6),
    (2, 39.99, 2, 7),
    (7, 39.99, 3, 8),
    (1, 39.99, 4, 9),
    (3, 39.99, 5, 10);