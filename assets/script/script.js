const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const startNumber = document.querySelector('.start-number');
let start = 0;

increaseBtn.addEventListener('click', function() {
    startNumber.innerText = start++;
});

decreaseBtn.addEventListener('click', function() {
    startNumber.innerText = start--;
})