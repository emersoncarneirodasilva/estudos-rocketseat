/* setInterval irá executar uma função "n" vezes após "x" milissegundos */
const timeOut = 2000
const checking = () => console.log("Checking!")

setInterval(checking, timeOut) // Aqui o checking é passado como referêcia, se passado como função ("checking()") será execultado imediatamente
