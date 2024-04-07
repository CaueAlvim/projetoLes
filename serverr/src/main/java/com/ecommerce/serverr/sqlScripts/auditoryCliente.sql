DROP TABLE IF EXISTS auditory_cliente;
CREATE TABLE auditory_cliente (
    audit_action varchar(255) DEFAULT NULL,
    audit_created_at datetime DEFAULT NULL,
    `id` INTEGER(11) NULL,
    `cpf` VARCHAR(255) NULL,
    `data_cadastro` datetime NULL,
    `data_nascimento` datetime NULL,
    `email` VARCHAR(255) NULL,
    `genero` VARCHAR(255) NULL,
    `nome` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NULL,
    `telefone` VARCHAR(255) NULL,
    `is_admin` BIT(1) NULL
);

DROP TRIGGER IF EXISTS create_cliente;
CREATE TRIGGER `create_cliente` AFTER INSERT ON `cliente`
    FOR EACH ROW INSERT INTO auditory_cliente
        SELECT 'CREATE', now(), cliente.* FROM cliente WHERE id = NEW.id;

DROP TRIGGER IF EXISTS after_update_cliente;
CREATE TRIGGER `after_update_cliente` AFTER UPDATE ON `cliente`
    FOR EACH ROW INSERT INTO auditory_cliente
        SELECT 'AFTER_UPDATE', now(), cliente.* FROM cliente WHERE id = NEW.id;

DROP TRIGGER IF EXISTS before_update_cliente;
CREATE TRIGGER `before_update_cliente` BEFORE UPDATE ON `cliente`
    FOR EACH ROW INSERT INTO auditory_cliente
        SELECT 'BEFORE_UPDATE', now(), cliente.* FROM cliente WHERE id = NEW.id;

DROP TRIGGER IF EXISTS delete_cliente;
CREATE TRIGGER `delete_cliente` BEFORE DELETE ON `cliente`
    FOR EACH ROW INSERT INTO auditory_cliente
        SELECT 'DELETE', now(), cliente.* FROM cliente WHERE id = OLD.id;