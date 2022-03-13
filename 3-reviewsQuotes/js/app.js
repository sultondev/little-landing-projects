//Fields of Elements 
const
    imgField = document.querySelector(".card-admin__img"),
    nameField = document.querySelector(".card-admin__name"),
    skillField = document.querySelector(".card-admin__skill"),
    quotesField = document.querySelector(".card-admin__quotes");
root = document.querySelector(':root');
//Just variable
let countClick = 0;
//Buttons
const
    prevBtn = document.querySelector('.card-group__btns-left'),
    nextBtn = document.querySelector(".card-group__btns-right"),
    randomBtn = document.querySelector(".card-group__random");
//Create admins objects
const adminsList = [{
        id: 1,
        name: 'shahboz abdullaev',
        skill: 'VueJs developer',
        quotes: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ullam nihil temporibus quos cumque, quae illum nostrum quisquam mollitia exercitationem.Beatae maxime illum libero, hic officia dolor dolorem architecto consectetur delectus!`,
        styleColor: "rgb(41, 175, 108)",
        img: `img/admins/1.jpg`
    },
    {
        id: 2,
        name: 'raupov manuchehr',
        skill: 'VueJs developer',
        quotes: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ullam nihil temporibus quos cumque, quae illum nostrum quisquam mollitia exercitationem.Beatae maxime illum libero, hic officia dolor dolorem architecto consectetur delectus!`,
        styleColor: "rgb(41, 175, 108)",
        img: `img/admins/2.jpg`,
    },
    {
        id: 3,
        name: 'berdiyev behruz',
        skill: 'React developer',
        quotes: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ullam nihil temporibus quos cumque, quae illum nostrum quisquam mollitia exercitationem.Beatae maxime illum libero, hic officia dolor dolorem architecto consectetur delectus!`,
        styleColor: "rgb(39, 144, 243)",
        img: `img/admins/3.jpg`
    },
    {
        id: 4,
        name: 'oblokulov sultonkhon',
        skill: 'React developer',
        quotes: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ullam nihil temporibus quos cumque, quae illum nostrum quisquam mollitia exercitationem.Beatae maxime illum libero, hic officia dolor dolorem architecto consectetur delectus!`,
        styleColor: "rgb(39, 144, 243)",
        img: `img/admins/4.jpg`
    }
]
//Events
window.addEventListener("DOMContentLoaded", (e) => {
    showAdmin(countClick);
})
nextBtn.addEventListener('click', nextFunc);
prevBtn.addEventListener('click', prevFunc);
randomBtn.addEventListener('click', randomFunc);
//Functions

function showAdmin(count) {
    const item = adminsList[count];
    imgField.src = item.img;
    nameField.textContent = item.name.toUpperCase();
    skillField.textContent = item.skill;
    quotesField.textContent = item.quotes;
    root.style.setProperty("--style-color", item.styleColor);
}

function nextFunc() {
    countClick++;
    if (countClick >= adminsList.length) {
        countClick = 0
    }
    showAdmin(countClick);
}

function prevFunc() {
    countClick--;
    if (countClick < 0) {
        countClick = adminsList.length - 1;
        showAdmin(countClick);
    }
    showAdmin(countClick);
}

function randomFunc() {
    countClick = Math.floor(Math.random() * adminsList.length);
    showAdmin(countClick);
}