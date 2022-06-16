/* clearInterval irá cancelar o setInterval */
const timeOut = 2000
const checking = () => console.log("Checking!")

let interval = setInterval(checking, timeOut) // Aqui o checking é passado como referêcia, se passado como função ("checking()") será execultado imediatamente

//clearInterval(interval)

setTimeout(() => clearInterval(interval), 7000)