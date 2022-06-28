CREATE DATABASE IF NOT EXISTS commercedb;

USE commercedb;

CREATE TABLE IF NOT EXISTS produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    foto LONGTEXT,
    formatoImagem VARCHAR(45),
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Data for table 'produto'
-- -----------------------------------------------------
START TRANSACTION;

INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (1, 'Mesa Jantar', 1200, 'Mesa de jantar 4 lugares', '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJ....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (2, 'Cadeira', 134, 'Cadeira de madeira', '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAK....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (3, 'Poltrona', 930, 'Poltrona reclinável', '/9j/2wBDAAYEBQYFBAYGBQYHBwYIC....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (4, 'Luminária', 75, 'Luminária de mesa', 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIAAAB....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (5, 'Ventilador', 399, 'Ventilador de teto', 'iVBORw0KGgoAAAANSUhEUgAAALQAA....', 'image/gif;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `descricao`, `foto`, `formatoImagem`) VALUES (6, 'Cesto/Lixeira', 68, 'Cesto para lixo', 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIA....', 'image/gif;base64');

COMMIT;
