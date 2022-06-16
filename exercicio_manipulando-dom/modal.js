const buttonOpenModal = document.getElementById("openModal")
const modalWrapper = document.querySelector(".modal-wrapper")

buttonOpenModal.onclick = () => {
  modalWrapper.classList.remove("invisible")
}

document.addEventListener("keydown", (event) => {
  console.log(event)  // Enontrar a tecla
  const isEcKey = event.key === "Escape"

  if (isEcKey) {
    modalWrapper.classList.add("invisible")
  }
})