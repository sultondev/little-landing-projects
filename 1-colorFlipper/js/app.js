const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.content-btn');
const color = document.querySelector('.random-color');



//Events 
btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber(colors.length);
    console.log(randomNumber)
    document.querySelector('.content').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(numbers) {
    return Math.floor(Math.random() * numbers)
}