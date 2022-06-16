const { EventEmitter } = require("events")
const ev = new EventEmitter()

ev.on("digaAlgo", (message) => {        // Ouvirá o evento
  console.log("Mensagem: ", message)
})       

/*ev.once("digaAlgo", (message) => {   // Ouvirá o evento uma única vez, ou seja, o primeiro que encontrar
  console.log("Mensagem: ", message)
})*/

ev.emit("digaAlgo", "Olá, tudo bem?")   // "emit" emitirá um evento
ev.emit("digaAlgo", "Como você está?")
ev.emit("digaAlgo", "Espero te vê novamente!")