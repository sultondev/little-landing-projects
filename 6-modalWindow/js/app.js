const openModal = document.querySelector(".modal-btn");
const closeModal = document.querySelector(".close-btn");
const modalWindow = document.querySelector(".modal-overlay");
//Events

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalWindow.classList.add("show-modal")
});
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalWindow.classList.remove("show-modal")
});