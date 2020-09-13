# Portabilidade de Conta

API criada para acessar dados presentes no processo da portabilidade de conta. Foram criados endpoints para cada uma das tabelas configuradas para a solução com rotas para as requisições de GET, POST, DELETE e PATCH. API rodando em um servidor na AWS.


# Endpoints e Rotas

Abaixo a lista de todos os endpoints e rotas, para realizar a chamada utilizar o ip **13.58.189.94**:

## /usuario

Responsável por gerenciar a tabela *USUARIO*. Para as operações de GET (sem parâmetro retorna todos os dados presentes an tabela), DELETE e POST é necessário passar um parâmetro *id*, com um int. Elementos do body para realizar operações de POST e PATCH:

 - agencia
 - conta
 - senha
 - email

## /repjson

Responsável por gerenciar a tabela *REPOSITORIO_JSON*. Para as operações de GET (sem parâmetro retorna todos os dados presentes an tabela), DELETE e POST é necessário passar um parâmetro *id* com o valor do token. Elementos do body para realizar operações de POST e PATCH:

 - token
 - json_file


## /portfact

Responsável por gerenciar a tabela *USUARIO*. Para as operações de GET (sem parâmetro retorna todos os dados presentes an tabela), DELETE e POST é necessário passar um parâmetro *id*, com um int. Elementos do body para realizar operações de POST e PATCH:

 - nome_cliente
 - telefone
 - banco_origem
 - banco_destino
 - token
 - motivo_transferencia_combo
 - motivo_transferencia_text
