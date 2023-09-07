const currentNum = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreseBtn = document.getElementById('decrease');

let newNum;

increaseBtn.addEventListener('click' , function(){
    newNum =  Number(currentNum.innerHTML) +1;
    currentNum.innerHTML = newNum;
});

resetBtn.addEventListener('click' , function(){
    currentNum.innerHTML = 0;
});


decreseBtn.addEventListener('click' , function(){
    newNum = Number(currentNum.innerHTML) -1;
    currentNum.innerHTML = newNum;
});