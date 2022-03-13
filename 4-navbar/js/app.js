const navList = document.querySelector(".nav-list");
const toggleBtn = document.querySelector(".nav-header__toggle");


//Events
toggleBtn.addEventListener("click", showMenu)



//Function

function showMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    navList.classList.toggle("nav-list__show-menu");
}