const imagesField = document.querySelectorAll(".meal-list__items-img"),
    namesField = document.querySelectorAll(".meal-list__items-names"),
    pricesField = document.querySelectorAll(".meal-list__items-prices"),
    descField = document.querySelectorAll(".meal-list__items-description"),
    listItems = document.querySelectorAll(".meal-list__items");
const typeBtns = document.querySelectorAll(".main-list__items-btn");

const mealList = [{
    id: 1,
    name: "Buttermilk Pancakes",
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: '15.99',
    img: "img/meal/item-1.jpeg",
    type: "breakfast",
}, {
    id: 2,
    name: "Diner Double",
    description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    price: '13.99',
    img: "img/meal/item-2.jpeg",
    type: "lunch",
}, {
    id: 3,
    name: "Godzilla Milkshake",
    description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    price: '6.99',
    img: "img/meal/item-3.jpeg",
    type: "shakes",
}, {
    id: 4,
    name: "Country Delight",
    description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    price: '20.99',
    img: "img/meal/item-4.jpeg",
    type: "breakfast",
}, {
    id: 5,
    name: "Egg Attack",
    description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    price: "22.99",
    img: "img/meal/item-5.jpeg",
    type: "lunch",
}, {
    id: 6,
    name: "Oreo Dream",
    description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    price: "18.99",
    img: "img/meal/item-6.jpeg",
    type: "shakes",
}, {
    id: 7,
    name: "Bacon Overflow",
    description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    price: "8.99",
    img: "img/meal/item-7.jpeg",
    type: "breakfast",
}, {
    id: 8,
    name: "American Classic",
    description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    price: "12.99",
    img: "img/meal/item-8.jpeg",
    type: "lunch",
}, {
    id: 9,
    name: "Quarantine Buddy",
    description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    price: "16.99",
    img: "img/meal/item-9.jpeg",
    type: "shakes",
}, {
    id: 10,
    name: "Steak Dinner",
    description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    price: "39.99",
    img: "img/meal/item-10.jpeg",
    type: "dinner",
}, ]

////Events
document.addEventListener("DOMContentLoaded", (e) => {
    for (let i = 0; i < mealList.length; i++) {
        showMeals(i);
    }
})


typeBtns.forEach(elements => {
    elements.addEventListener("click", e => {
        const type = e.target.innerText.toLowerCase();
        for (let i = 0; i < mealList.length; i++) {
            if (type == "all") {
                addToList(i);
                showMeals(i)
            } else if (mealList[i].type == type) {
                addToList(i);
                showMeals(i);
            } else {
                removeFromList(i);
            }
        }
    })
})


////Functions
function addToList(i) {
    listItems[i].classList.remove("display-none")
    // imagesField[i].classList.remove("display-none")
    // namesField[i].classList.remove("display-none")
    // pricesField[i].classList.remove("display-none")
    // descField[i].classList.remove("display-none")
}

function removeFromList(i) {
    listItems[i].classList.add("display-none")
    // imagesField[i].classList.add("display-none")
    // namesField[i].classList.add("display-none")
    // pricesField[i].classList.add("display-none")
    // descField[i].classList.add("display-none")
}

function showMeals(i) {
    const item = mealList[i];
    imagesField[i].src = item.img;
    namesField[i].textContent = item.name;
    pricesField[i].textContent = "$" + item.price;
    descField[i].textContent = item.description;
}