/* setTimeout() executa uma função após "x" milissegundos */
const timeOut = 3000
const finished = () => console.log("done!")

setTimeout(finished, timeOut) // Aqui o finished é passado como referêcia, se passado como função ("finished()") será execultado imediatamente
console.log("Mostrar")