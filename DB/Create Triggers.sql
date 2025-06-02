use moneyflowdb;

-- Criação de Triggers

-- Atualizar saldo do usuário após transações
DELIMITER //

CREATE TRIGGER trg_atualiza_saldo_insert
AFTER INSERT ON transacoes
FOR EACH ROW
BEGIN
    IF NEW.tipo = 'receita' THEN
        UPDATE usuarios SET saldo = saldo + NEW.valor WHERE id_usuario = NEW.id_usuario;
    ELSE
        UPDATE usuarios SET saldo = saldo - NEW.valor WHERE id_usuario = NEW.id_usuario;
    END IF;
END;
//

DELIMITER ;

DELIMITER //

CREATE TRIGGER trg_atualiza_saldo_update
AFTER UPDATE ON transacoes
FOR EACH ROW
BEGIN
    IF OLD.tipo = 'receita' THEN
        UPDATE usuarios SET saldo = saldo - OLD.valor WHERE id_usuario = OLD.id_usuario;
    ELSE
        UPDATE usuarios SET saldo = saldo + OLD.valor WHERE id_usuario = OLD.id_usuario;
    END IF;

    IF NEW.tipo = 'receita' THEN
        UPDATE usuarios SET saldo = saldo + NEW.valor WHERE id_usuario = NEW.id_usuario;
    ELSE
        UPDATE usuarios SET saldo = saldo - NEW.valor WHERE id_usuario = NEW.id_usuario;
    END IF;
END;
//

DELIMITER ;

DELIMITER //

CREATE TRIGGER trg_atualiza_saldo_delete
AFTER DELETE ON transacoes
FOR EACH ROW
BEGIN
    IF OLD.tipo = 'receita' THEN
        UPDATE usuarios SET saldo = saldo - OLD.valor WHERE id_usuario = OLD.id_usuario;
    ELSE
        UPDATE usuarios SET saldo = saldo + OLD.valor WHERE id_usuario = OLD.id_usuario;
    END IF;
END;
//

DELIMITER ;