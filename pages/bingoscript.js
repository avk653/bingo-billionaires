const squares = document.querySelectorAll('.square');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timeDisplay = document.getElementById('time');
const numbers = document.querySelectorAll('.num');



function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min);
}

let lastSquare;
let timeUp = false;
let score = 0;

function randomSquare(squares) {
const idx = Math.floor(Math.random() * squares.length);
const square = squares[idx];
if (square === lastSquare) {
return randomSquare(squares);
}


lastSquare = square;
return square;
}

function generateRandomNumber(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function peep() {
    const time = 1000;
    const square = randomSquare(squares);
    square.classList.add('up');
    const numDiv = square.querySelector(".num");

    // put random number in it
    numDiv.textContent = generateRandomNumber(1, 99);
    setTimeout(() => {
    
        square.classList.remove('up');
        numDiv.textContent = " ";
    

    if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000);
    let timeLeft = 30;
    const timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(timer);}
    , 1000);
}

function whack(e) {
    if (!this.classList.contains('up')) return;
score++;
this.classList.remove('up');
scoreBoard.textContent = score;
}

squares.forEach(square => square.addEventListener('click', whack));

startButton.addEventListener('click', startGame);
