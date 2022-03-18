const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const startNumber = document.querySelector('.start-number');
let count = 0;

increaseBtn.addEventListener('click', function() {
    startNumber.innerText = count++;
});

decreaseBtn.addEventListener('click', function() {
    startNumber.innerText = count--;
})