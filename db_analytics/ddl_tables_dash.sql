CREATE TABLE portabilidade.dbo.DATE_TIME_DIM (
	date_key int IDENTITY(1,1) NOT NULL,
	data_disc date NOT NULL,
	dia varchar(2) COLLATE Latin1_General_CI_AS NULL,
	mes varchar(2) COLLATE Latin1_General_CI_AS NULL,
	ano varchar(4) COLLATE Latin1_General_CI_AS NULL,
	CONSTRAINT PK_DATE_TIME_DIM PRIMARY KEY (date_key)
) GO

CREATE TABLE portabilidade.dbo.MOTIVO_DIM (
	motivo_key int IDENTITY(1,1) NOT NULL,
	motivo varchar(40) COLLATE Latin1_General_CI_AS NULL,
	CONSTRAINT PK_MOTIVO_DIM PRIMARY KEY (motivo_key)
) GO

CREATE TABLE portabilidade.dbo.AG2_MOTIVO (
	date_key int NOT NULL,
	motivo_key int NOT NULL,
	qtde int NOT NULL,
	CONSTRAINT PK_AG2_MOTIVO PRIMARY KEY (date_key,motivo_key),
	CONSTRAINT FK__ag2_motiv__date___403A8C7D FOREIGN KEY (date_key) REFERENCES portabilidade.dbo.DATE_TIME_DIM(date_key),
	CONSTRAINT FK__ag2_motiv__motiv__4222D4EF FOREIGN KEY (motivo_key) REFERENCES portabilidade.dbo.MOTIVO_DIM(motivo_key)
) GO

