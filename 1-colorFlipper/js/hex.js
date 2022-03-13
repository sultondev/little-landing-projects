const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.content-btn');
const color = document.querySelector('.random-color');

//Events
btn.addEventListener('click', () => {
    let hexColors = "#";
    for (let i = 0; i < 6; i++) {
        hexColors += hex[getRandomNumber()];
    }
    color.textContent = hexColors;
    document.querySelector('.content').style.backgroundColor = hexColors;

})

//
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}