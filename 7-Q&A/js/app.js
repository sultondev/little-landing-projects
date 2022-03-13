const openBtns = document.querySelectorAll('.content-list__items-btn');
const textList = document.querySelectorAll(".content-list__items-text");


// //Events
openBtns.forEach((value, key, array) => {
    value.addEventListener('click', e => {
        e.stopPropagation();
        if (textList[key].classList.contains("show-text")) {
            removeClass()
        } else {
            removeClass()
            textList[key].classList.toggle("show-text");
        }
    })
})


//Functions
function removeClass() {
    for (let i = 0; i < textList.length; i++) {
        textList[i].classList.remove("show-text")
    }
}