const express = require('express');

const app = express();

app.listen('3000');

// Middleware
app.use(express.json());  // Usado para transformar as informações em json

// Parâmetros (esses são os 3 tipos de envios de parâmetros por requisição)
/*app.route('/').get((req, res) => {
  res.send(req.query.name)
});

app.route('/').put((req, res) => {
  res.send(req.body.author)
});

app.route('/').get((req, res) => {
  res.send(req.params.parametro)
});*/


// Body Params
/*app.route('/').post((req, res) => {
  const { nome, cidade, livros_preferidos } = req.body
  res.send(`Meu nome é ${nome}, sou da cidade do ${cidade} e meus livros preferidos são: ${livros_preferidos}`)
});*/

// Route Params
/*app.route('/').get((req, res) => res.send("Olá!"))

app.route('/:variavel').get((req, res) => {
  res.send(req.params.variavel)
});

app.route('/identidade/:nome').get((req, res) => {
  res.send(req.params.nome)
});*/

// Query Params
app.route('/').get((req, res) => {
  res.send(req.query.nome)
});

app.route('/about/user').get((req, res) => {
  res.send(req.query)
});


console.log("Funcionando");