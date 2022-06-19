const url = "http://localhost:5500/api";

/* Método GET geral*/
function getUsers() {
  fetch(url)
    .then(response => response.json()) 
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))          
};

/* Método GET individual */
function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
};

/* Método POST */
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
};

const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/500",
  city: "Rio do Sul"
};

/* Método PUT */
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
};

const updatedUser = {
  nome: "Marcelo Clovis",
  avatar: "https://picsum.photos/500",
  city: "Recife"
};

/* Método DELETE */
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",    
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
};


getUsers();
getUser(1);                     // O id é passado como argumento
//addUser(newUser);
//updateUser(updatedUser, 1);   // O id é passado como argumento
deleteUser(5);                  // O id é passado como argumento


