use moneyflowdb;

-- População do Banco de Dados

-- Inserir Usuários (5 usuários, sendo 1 admin)
INSERT INTO usuarios (nome, email, senha, permissao) VALUES
('Admin', 'admin@email.com', 'admin123', 'admin'),
('João Silva', 'joao@email.com', 'senha123', 'usuario'),
('Maria Oliveira', 'maria@email.com', 'senha456', 'usuario'),
('Carlos Santos', 'carlos@email.com', 'senha789', 'usuario'),
('Ana Souza', 'ana@email.com', 'senha321', 'usuario');

-- Inserir Categorias
INSERT INTO categorias (nome_categoria) VALUES
('Alimentação'),
('Transporte'),
('Lazer'),
('Educação'),
('Receitas/Despesas Pessoais');

-- Inserir Transações
INSERT INTO transacoes (descricao, valor, tipo, id_categoria, id_usuario) VALUES
('Salário Mensal', 3000.00, 'receita', 5, 1),
('Compra de Supermercado', 150.00, 'despesa', 1, 2),
('Mensalidade da Academia', 80.00, 'despesa', 3, 3),
('Abastecimento de Combustível', 200.00, 'despesa', 2, 4),
('Curso Online', 250.00, 'despesa', 4, 5),
('Investimento em Ações', 500.00, 'receita', 5, 1),
('Cinema com Amigos', 60.00, 'despesa', 3, 2),
('Pagamento de Aluguel', 900.00, 'despesa', 4, 3),
('Compra de Livro', 45.00, 'despesa', 4, 4),
('Venda de Móveis', 350.00, 'receita', 5, 5);