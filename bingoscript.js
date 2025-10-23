const squares = document.querySelectorAll('.square');
const scoreBoard = document.getElementById('score');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const timeDisplay = document.getElementById('time');

const grid = document.getElementById('grid');
    const gridSize = 81; // 9x9 grid
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }