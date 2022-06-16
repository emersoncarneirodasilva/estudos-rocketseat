/* clearTimeout() irá concelar o setTimeout */
const timeOut = 3000
const finished = () => console.log("done!")

let timer = setTimeout(finished, timeOut) // Aqui o finished é passado como referêcia, se passado como função ("finished()") será execultado imediatamente

clearTimeout(timer)                      // Cancelará o setTimeout
