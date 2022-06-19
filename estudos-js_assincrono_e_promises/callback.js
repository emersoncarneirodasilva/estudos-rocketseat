/* Funções que aceitam qualquer tipo de dado como argumento */

function imprimirDado(dado) {
  console.log("Outras tarefas")
  console.log(dado())
};

imprimirDado(function() {
  return "Olá Mundo!"
});