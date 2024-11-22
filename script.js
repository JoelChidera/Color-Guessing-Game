const banner = document.querySelector("h1");
const resetButton = document.querySelector(".resetBtn");
const colorDisplay = document.querySelector("h1 .colorDisplay");
const squares = document.querySelectorAll(".square");
const hardModeButton = document.querySelector(".btn.hard");
const easyModeButton = document.querySelector(".btn.easy");
const messageSpan = document.getElementById('message');

let colors;
let targetColor;
let numSquares = 6;

reset();

squares.forEach((square) => {
  square.addEventListener("click", () => {
    let selectedColor = square.style.backgroundColor;
    if (selectedColor === targetColor) {
      messageSpan.textContent = "Correct!"
      squares.forEach((square) => {
        square.style.backgroundColor = selectedColor;
      });
      banner.style.backgroundColor = selectedColor;
      resetButton.textContent = 'Play Again'
    } else {
      messageSpan.textContent = "Try again!"
      square.style.backgroundColor = "rgb(11, 11, 11)";
    }
  });
});

resetButton.addEventListener("click", () => {
  reset();
  messageSpan.textContent = ""
  resetButton.textContent = "New Colors"
});

hardModeButton.addEventListener("click", () => {
  messageSpan.textContent =''
  numSquares = 6;
  reset();
  easyModeButton.classList.remove("active");
  hardModeButton.classList.add("active");
});

easyModeButton.addEventListener("click", () => {
  messageSpan.textContent =''
  numSquares = 3;
  reset();
  hardModeButton.classList.remove("active");
  easyModeButton.classList.add("active");
});

function reset() {
  colors = generateColors(numSquares);
  targetColor = getRandomColor(numSquares);

  for (let i = 0; i < colors.length; i++) {
    if (numSquares > 3) {
      squares[i].style.display = "block"
    } else {
      squares[i + 3].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  banner.style.backgroundColor = "rgb(0, 95, 239)";
  colorDisplay.textContent = targetColor;
}

function generateColors(num) {
  let arr = [];
  let newColor;
  for (let i = 0; i < num; i++) {
    newColor = makeColor();
    arr.push(newColor);
  }
  return arr;
}

function makeColor() {
  //Generate values for individual color channels
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  //return a new color string
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomColor(num) {
  let rand = Math.floor(Math.random() * num);
  return colors[rand];
}

