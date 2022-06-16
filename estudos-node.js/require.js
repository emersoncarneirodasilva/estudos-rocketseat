// Módulos nativos
const path = require("path")

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

// Módulos construídos
const meuModulo = require("./exports")

console.log(meuModulo)