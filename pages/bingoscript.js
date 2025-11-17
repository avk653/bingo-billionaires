const squares = document.querySelectorAll('.square');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timeDisplay = document.getElementById('time');



/* generate random numbers to appear on the grid at a 1s interval
const intervalTime = 1000; 
function generateRandomNum() {
   return Math.random();}

function generateRandomPos() {
    return Math.random(1, 81); }

const number = document.getElementsByClassName("num");

setInterval(
    function () {
    // A number appears 
   number[generateRandomPos()].innerHTML  = generateRandomNum();} , intervalTime ); */

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

function peep() {
    const time = 1000;
    const square = randomSquare(squares);
    square.classList.add('up');
    
    setTimeout(() => {
    
        square.classList.remove('up');
    
    if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 300000);
    let timeLeft = 300;
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
