const squares = document.querySelectorAll('.square');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timeDisplay = document.getElementById('time');



// generate random numbers to appear on the grid at a 1s interval
const intervalTime = 1000; 
function generateRandomNum() {
   return Math.random();}

function generateRandomPos() {
    return Math.random(0, 81); }

const number = document.getElementsByClassName("num");

setInterval(
    function () {
    // A number appears 
   number[generateRandomPos()].innerHTML  = generateRandomNum();} 
   , intervalTime );