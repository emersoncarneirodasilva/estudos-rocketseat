const url = "http://localhost:5500/api";

/* Método GET geral*/
function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
};

/* Método GET individual */
function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userID.textContent = response.data.id
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
};

/* Método POST */
function addNewUser() {
  axios.post(url, { 
    name: "Mario Mario",
    avatar: "https://picsum.photos/500",
    city: "Brooklyn" 
  })
    .then(response => console.log(response))
    .catch(error => console.error(error))
};

/* Método PUT */
function updateUser(id) {
  axios.put(`${url}/${id}`, {
    name: "Marcelo Calvis",
    avatar: "https://picsum.photos/500",
    city: "Recife"
  })
    .then(response => console.log(response))
    .catch(error => console.error(error))
};

/* Método DELETE */
function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
};

getUsers();
getUser(1);
//addNewUser();
updateUser(2);
deleteUser(2);