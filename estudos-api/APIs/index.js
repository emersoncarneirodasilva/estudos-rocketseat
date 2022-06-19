const express = require('express');

const app = express();

app.listen('3000');

// Middleware
app.use(express.json());  // Usado para transformar as informações em json

// Método get
/*app.route('/').get((req, res) => {
  res.send("Olá!")
});

app.route('/sobre').get((req, res) => {
  res.send("Sobre mim")
});*/

// Método post
/*app.route('/').post((req, res) => {
  res.send(req.body)
});*/

// Método put
/*let author = "Emerson";
app.route('/').get((req, res) => res.send(author)); // Só para ver o author inicialmente no insomnia

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
});*/

// Método delete
/*let author = "Emerson";

app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador)
});*/

console.log("Funcionando");