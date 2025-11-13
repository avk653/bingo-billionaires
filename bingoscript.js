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


// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            console.error("Invalid range for random number generation.");
            return 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to update the square with a random number
function generateRandomNumber() {
        const randomNum = getRandomInt(1, 100); // Change range here if needed
        document.getElementByClass('num').textContent = randomNum;
    }

// Generate a number when the page loads
window.onload = generateRandomNumber;