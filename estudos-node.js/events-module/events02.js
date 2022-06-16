const { inherits } = require("util")
const { EventEmitter } = require("events")

function Character(name) {   // Função contrutora
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on("help", () => {    // Ouvirá o evento emitido
  console.log(`Eu! O ${chapolin.name} colorado!!!`)
})

console.log("Oh! E agora...Quem poderá me defender?")
chapolin.emit("help")     // Emitindo o evento