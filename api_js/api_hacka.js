const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const sql = require('mssql');
const connStr = "Server=hackathontime32.cyrrf5jy4b4x.us-east-2.rds.amazonaws.com;Database=portabilidade;User Id=technee;Password=;";

//fazendo a conexão global
sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}
/*Teste */
router.get('/teste', (req, res) =>{
    execSQLQuery('SELECT * FROM TesteConexao', res);
})

router.get('/teste/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE teste_chave=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM TesteConexao' + filter, res);
})

router.delete('/teste/:id', (req, res) =>{
    execSQLQuery('DELETE TesteConexao WHERE teste_chave=' + parseInt(req.params.id), res);
})

router.post('/teste', (req, res) =>{
    const teste_valor = parseInt(req.body.teste_valor);
    const teste_chave = parseInt(req.body.teste_chave);
    execSQLQuery(`INSERT INTO TesteConexao(teste_valor, teste_chave) VALUES(${teste_valor},'${teste_chave}')`, res);
})

router.patch('/teste/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const teste_valor = parseInt(req.body.teste_valor);
    execSQLQuery(`UPDATE TesteConexao SET teste_valor=${teste_valor} WHERE teste_chave=${id}`, res);
})


/*Usuario*/

router.get('/usuario', (req, res) =>{
    execSQLQuery('SELECT * FROM Usuario', res);
})

router.get('/usuario/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Usuario' + filter, res);
})

router.delete('/usuario/:id', (req, res) =>{
    execSQLQuery('DELETE Usuario WHERE id =' + parseInt(req.params.id), res);
})

router.post('/usuario', (req, res) =>{
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    const senha = req.body.senha;
    const email = req.body.email;
    execSQLQuery(`INSERT INTO Usuario(agencia, conta, senha, email) VALUES('${agencia}','${conta}','${senha}','${email}')`, res);
})

router.patch('/usuario/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    const senha = req.body.senha;
    const email = req.body.email;
    execSQLQuery(`UPDATE Usuario SET agencia='${agencia}',conta='${conta}',senha='${senha}',email='${email}' WHERE id=${id}`, res);
})


/*Repositorio Json*/

router.get('/repjson', (req, res) =>{
    execSQLQuery('SELECT * FROM REPOSITORIO_JSON', res);
})

router.get('/repjson/:id?', (req, res) =>{
    let filter = '';
    const token = req.params.id;
    if(req.params.id) filter = ` WHERE token='${token}'`;
    execSQLQuery('SELECT * FROM REPOSITORIO_JSON' + filter, res);
})

router.delete('/repjson/:id', (req, res) =>{
    const token = req.params.id;
    execSQLQuery(`DELETE REPOSITORIO_JSON WHERE token = '${token}'`, res);
})

router.post('/repjson', (req, res) =>{
    const token = req.body.token;
    const json_file = req.body.json_file;
    execSQLQuery(`INSERT INTO REPOSITORIO_JSON(token, json_file) VALUES('${token}','${json_file}')`, res);
})

router.patch('/repjson/:id', (req, res) =>{
    const token = req.params.id;
    const json_file = req.body.json_file;
    execSQLQuery(`UPDATE REPOSITORIO_JSON SET json_file='${json_file}' WHERE token='${token}'`, res);
})


/*PORTABILIDADE FACT*/

router.get('/portfact', (req, res) =>{
    execSQLQuery('SELECT * FROM PORTABILIDADE_FACT', res);
})

router.get('/portfact/:id?', (req, res) =>{
    let filter = '';
    const id = parseInt(req.params.id);
    if(req.params.id) filter = ` WHERE id='${id}'`;
    execSQLQuery('SELECT * FROM PORTABILIDADE_FACT' + filter, res);
})

router.delete('/portfact/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    execSQLQuery(`DELETE PORTABILIDADE_FACT WHERE id = '${id}'`, res);
})

router.post('/portfact', (req, res) =>{
    const id = parseInt(req.body.id);
    const nome_cliente = req.body.nome_cliente;
    const telefone = req.body.telefone;
    const banco_origem = req.body.banco_origem;
    const banco_destino = req.body.banco_destino;
    const token = req.body.token;
    const motivo_transferencia_combo = req.body.motivo_transferencia_combo;
    const motivo_transferencia_text = req.body.motivo_transferencia_text;
    execSQLQuery(`INSERT INTO PORTABILIDADE_FACT(id, nome_cliente, telefone, banco_origem, banco_destino, token, motivo_transferencia_combo, motivo_transferencia_text) VALUES(${id},'${nome_cliente}', '${telefone}', '${banco_origem}', '${banco_destino}', '${token}', '${motivo_transferencia_combo}', '${motivo_transferencia_text}')`, res);
})

router.patch('/portfact/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome_cliente = req.body.nome_cliente;
    const telefone = req.body.telefone;
    const banco_origem = req.body.banco_origem;
    const banco_destino = req.body.banco_destino;
    const token = req.body.token;
    const motivo_transferencia_combo = req.body.motivo_transferencia_combo;
    const motivo_transferencia_text = req.body.motivo_transferencia_text;
    execSQLQuery(`UPDATE PORTABILIDADE_FACT SET nome_cliente='${nome_cliente}', telefone='${telefone}', banco_origem='${banco_origem}', banco_destino='${banco_destino}', token='${token}', motivo_transferencia_combo='${motivo_transferencia_combo}', motivo_transferencia_text='${motivo_transferencia_text}' WHERE id='${id}'`, res);
})