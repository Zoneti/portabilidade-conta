INSERT INTO portabilidade.dbo.MOTIVO_DIM (motivo) VALUES ('Outro'),('Melhores Taxas'),('Indicação'),('Nível do Atendimento');

INSERT INTO portabilidade.dbo.DATE_TIME_DIM (data_disc,dia,mes,ano) VALUES ('2020-01-01','01','01','2020'),('2020-02-01','01','02','2020'),('2020-03-01','01','03','2020'),('2020-04-01','01','04','2020'),('2020-05-01','01','05','2020'),('2020-06-01','01','06','2020'),('2020-07-01','01','07','2020'),('2020-08-01','01','08','2020'),('2020-09-01','01','09','2020');

INSERT INTO portabilidade.dbo.AG2_MOTIVO (date_key,motivo_key,qtde) VALUES (1,1,10),(1,2,15),(1,3,20),(1,4,12),(2,1,1),(2,2,16),(2,3,40),(2,4,17),(3,1,11),(3,2,12);
INSERT INTO portabilidade.dbo.AG2_MOTIVO (date_key,motivo_key,qtde) VALUES (3,3,1),(3,4,2),(4,1,1),(4,2,0),(4,3,6),(4,4,18),(5,1,16),(5,2,13),(5,3,40),(5,4,20);
INSERT INTO portabilidade.dbo.AG2_MOTIVO (date_key,motivo_key,qtde) VALUES (6,1,20),(6,2,16),(6,3,11),(6,4,16),(7,1,18),(7,2,15),(7,3,13),(7,4,12),(8,1,18),(8,2,11);
INSERT INTO portabilidade.dbo.AG2_MOTIVO (date_key,motivo_key,qtde) VALUES (8,3,1),(8,4,0),(9,1,18),(9,2,13),(9,3,15),(9,4,11);