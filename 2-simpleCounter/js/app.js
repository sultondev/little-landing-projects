const number = document.querySelector('.header-count__number');
const decreaseBtn = document.querySelector('.header-list__items-decrease');
const resetBtn = document.querySelector('.header-list__items-reset');
const increaseBtn = document.querySelector('.header-list__items-increase');

let count = 0;

//Events
decreaseBtn.addEventListener('click', setNumber(decreaseNumber));
resetBtn.addEventListener('click', setNumber(resetNumber));
increaseBtn.addEventListener('click', setNumber(increaseNumber));

//Functions
function decreaseNumber() {
    count--;
    return count;
}
function resetNumber() {
    count = 0;
    return count;
}
function increaseNumber() {
    count++;
    return count;
}
function setNumber(callback) {
    return (e) => {
        callback();
        number.textContent = count;
        testCondition();
    }
}


function testCondition() {
    if (count >= 1) {
        number.style.color = 'green';
    } else if (count < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
}