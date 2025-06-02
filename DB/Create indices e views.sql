use moneyflowdb;

-- Criação de Índices
CREATE INDEX idx_transacoes_data ON transacoes(data_transacao);

-- Criação de Views

-- Visualizar saldo total por categoria
CREATE VIEW vw_saldo_por_categoria AS
SELECT c.nome_categoria, 
       SUM(CASE WHEN t.tipo = 'receita' THEN t.valor ELSE -t.valor END) AS saldo_total
FROM transacoes t
JOIN categorias c ON t.id_categoria = c.id_categoria
GROUP BY c.nome_categoria;

-- Visualizar transações por categoria
CREATE VIEW vw_transacoes_por_categoria AS
SELECT t.id_transacao, t.descricao, t.valor, t.tipo, t.data_transacao, c.nome_categoria
FROM transacoes t
JOIN categorias c ON t.id_categoria = c.id_categoria;