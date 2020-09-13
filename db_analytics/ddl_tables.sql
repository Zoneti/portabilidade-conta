CREATE TABLE portabilidade.dbo.PORTABILIDADE_FACT (
	id numeric(18,0) NOT NULL,
	nome_cliente varchar(1024) COLLATE Latin1_General_CI_AS NULL,
	telefone varchar(25) COLLATE Latin1_General_CI_AS NULL,
	banco_origem varchar(255) COLLATE Latin1_General_CI_AS NULL,
	banco_destino varchar(255) COLLATE Latin1_General_CI_AS NULL,
	token varchar(1024) COLLATE Latin1_General_CI_AS NULL,
	motivo_transferencia_combo varchar(255) COLLATE Latin1_General_CI_AS NULL,
	motivo_transferencia_text varchar(255) COLLATE Latin1_General_CI_AS NULL,
	CONSTRAINT PORTABILIDADE_FACT_PK PRIMARY KEY (id)
) GO

CREATE TABLE portabilidade.dbo.USUARIO (
	id int NOT NULL,
	agencia varchar(255) COLLATE Latin1_General_CI_AS NULL,
	conta varchar(255) COLLATE Latin1_General_CI_AS NULL,
	senha varchar(255) COLLATE Latin1_General_CI_AS NULL,
	email varchar(255) COLLATE Latin1_General_CI_AS NULL
) GO

CREATE TABLE portabilidade.dbo.repositorio_json (
	token varchar(2048) IDENTITY(0,1) NULL,
	json_file varchar(10000) NULL
) GO