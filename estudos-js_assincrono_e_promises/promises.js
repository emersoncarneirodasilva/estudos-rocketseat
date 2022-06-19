/* Promises */
// A promessa de algo irá acontecer, poderá dar certo ou errado, mas irá acontecer !

let aceitar = true
//let aceitar = false

console.log("Pedir Uber");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve ("Carro chegou!")
  }

  return reject ("Corrida cancelada :(")
});

promessa
  .then((result) => { console.log(result) })    // then (então) quando tiver o resultado (result) do resolve
  .catch((erro) => { console.log(erro) })       // catch (pegará) o erro (erro) do reject
  .finally(() => { console.log("finalizado") }) // Finalizado a promessa independente do resultado (resolve ou reject)
    
console.log("Aguardando");