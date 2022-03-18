const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const startNumber = document.querySelector('.start-number')


increaseBtn.addEventListener('click', function() {
    startNumber.innerText++
});

decreaseBtn.addEventListener('click', function() {
    startNumber.innerText--
})