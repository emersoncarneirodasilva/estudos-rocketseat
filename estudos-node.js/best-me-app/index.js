const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido, e o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje",
  "Quantas pessoas ajudei hoje?",
]

/* process.stdout.write() ecreve a saida no terminal */
const ask = (index = 0) => {
  return process.stdout.write("\n\n" + questions[index] + " -> ")    // O return é opcional nessa ocasião, pois o "process.stdout.write" ja vai ser executado 
}

ask();

/* process.stdin.on() fica "ouvindo/atento" a eventos (data) */
const anwsers = []

process.stdin.on("data", (data) => {       // O data vai pegar os dados escritos do "process.stdout.write"   
  anwsers.push(data.toString().trim())     // O trim() é usado pra retirar os espaços vazios 
  if (anwsers.length < questions.length) {
    ask(anwsers.length)
  } else {  
      console.log(anwsers)
      process.exit()                       // Para finalizar o process
    }
})

/* process.on(), ouvirá eventos */
process.on("exit", () => {
  console.log(`
    Bacana!

    O que você aprendeu hoje foi:
    ${anwsers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${anwsers[1]}

    O que te deixou feliz hoje foi:
    ${anwsers[2]}

    Você ajudou ${anwsers[3]} pessoas hoje!!!
    
    Volte amanhã para ouvir novas reflexões ;)  
  `)
})