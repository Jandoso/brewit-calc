const express = require('express');
const app = express();
const port = 8080;
const routes = require('./src/routes');

app.all('*', (req, res, next) => {
    next();
});

app.use(routes);

app.listen(port, (err) => {
    if(err){
        console.log('Houve um erro ao iniciar o servidor');
    }else{
        console.log(`Servidor rodando na porta ${port}`);
    };
});

