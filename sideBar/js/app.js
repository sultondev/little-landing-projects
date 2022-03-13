const sideBar = document.querySelector(".header");
const closeBtn = document.querySelector(".nav-toggle");
const menuLinks = document.querySelectorAll('.header-list__items');
const menuLinksText = document.querySelectorAll('.header-list__items-text');
// Events

closeBtn.addEventListener("click", closeOrOpen)

// function

function closeOrOpen(e) {
    e.preventDefault();
    sideBar.classList.toggle('header-full');
    e.target.classList.toggle("bx-chevron-left");
}