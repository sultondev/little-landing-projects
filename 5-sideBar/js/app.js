const openBtn = document.querySelector('.btn-open-toggle');
const closeBtn = document.querySelector('.btn-close-toggle');
const sideBar = document.querySelector('.aside');

openBtn.addEventListener('click', testSidebar);
closeBtn.addEventListener('click', testSidebar);

//Function
function testSidebar(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target)
    sideBar.classList.toggle('show-menu');
}