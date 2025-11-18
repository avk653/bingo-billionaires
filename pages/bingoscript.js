const squares = document.querySelectorAll('.square');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timeDisplay = document.getElementById('time');

let lastSquare;
let timeUp = false;
let score = 0;
let timer;
let timeLeft = 300; // 5 minutes in seconds

function randomSquare(squares) {
    const idx = Math.floor(Math.random() * squares.length);
    const square = squares[idx];
    if (square === lastSquare || square.classList.contains("locked")) {
        return randomSquare(squares);
    }
    lastSquare = square;
    return square;
}

function generateRandomNumber(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function peep() {
    if (timeUp) return;

    const square = randomSquare(squares);
    square.classList.add('up');
    const numDiv = square.querySelector('.num');
    const value = generateRandomNumber(1, 99);
    numDiv.textContent = value;

    setTimeout(() => {
        if (!square.classList.contains("locked")) {
            square.classList.remove('up');
            numDiv.textContent = '';
        }
        peep();
    }, 2000);
}

function startGame() {
    // Stop current game
    timeUp = true;
    clearInterval(timer);

    // Reset squares
    squares.forEach(square => {
        square.classList.remove('up', 'locked');
        square.querySelector('.num').textContent = '';
    });

    // Regenerate static sheet
    generateStaticSheet();

    // Reset score & timer
    score = 0;
    scoreBoard.textContent = score;
    timeLeft = 300;
    timeDisplay.textContent = formatTime(timeLeft);

    timeUp = false;
    peep();

    // Countdown timer
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp = true;
            gameOver();
        }
    }, 1000);

    startButton.style.display = 'none';
}

function restartGame() {
    stopGame();
    startGame();
}

function whack() {
    if (!this.classList.contains('up')) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    this.classList.add('locked'); // lock the number in place
}

squares.forEach(square => square.addEventListener('click', whack));

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function generateStaticSheet() {
    const staticNums = document.querySelectorAll('.numStat');
    staticNums.forEach(span => {
        span.textContent = generateRandomNumber(1, 99);
    });
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}
function stopGame() {
    timeUp = true;           // stops the peep loop
    clearInterval(timer);    // stops countdown timer
    squares.forEach(square => {
        square.classList.remove('up', 'locked');
        square.querySelector('.num').textContent = '';
    });
}
function gameOver() {
    document.getElementById('gameOverMessage').style.display = 'block';
    startButton.style.display = 'inline-block';
}

