/* Async/Await */
// Uma maneira de escrever promises (Syntactic Sugar)

let resp = true;
//let resp = false;

const promessa = new Promise( function (resolve, reject) {
  if (resp) {
    return resolve("OK, deu certo!")
  };
  
  return reject ("Não deu certo :(")
});

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Sempre será execultado!")
  };  
};

start();

/*promessa
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    console.log("Sempre será execultado!")
  });*/