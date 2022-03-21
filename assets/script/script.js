const generalBox = document.createElement('div');
generalBox.className = 'counter';
const title = document.createElement('h1');
title.innerHTML = "Current count:";
const divCounterBox = document.createElement('div');
divCounterBox.className = 'counter-box';
const increaseBtn = document.createElement('button');
increaseBtn.className = 'increase';
increaseBtn.innerHTML = "+";
const decreaseBtn = document.createElement('button');
decreaseBtn.className = 'decrease';
decreaseBtn.innerHTML = "-";
const startNumber = document.createElement('p');
startNumber.className = 'start-number';
startNumber.innerHTML = "0";

document.body.appendChild(generalBox);
generalBox.appendChild(title);
generalBox.appendChild(divCounterBox);
divCounterBox.appendChild(increaseBtn);
divCounterBox.appendChild(startNumber);
divCounterBox.appendChild(decreaseBtn);

increaseBtn.addEventListener('click', function() {
    startNumber.innerText++
});
decreaseBtn.addEventListener('click', function() {
    startNumber.innerText--
});