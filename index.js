const Restify = require('restify');
const server = Restify.createServer();

// Plugins
server.use(Restify.plugins.queryParser());

// Endpoints da API

// Calcular a area do quadrado
server.get('/calculo', (req, res, next) => {
    let v1 = req.query.v1;
    let v2 = req.query.v2;
    let resultado = v1 * v2;
    let retorno = {
        resposta: resultado
    };
    res.json(retorno);
});

server.listen(8080, () => {
    console.info('servidor rodando');

})