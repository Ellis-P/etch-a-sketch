function getRandomNum() {
  return Math.floor((Math.random() * 256));
}

function changeTileColour(event) {
  const r = getRandomNum();
  const g = getRandomNum();
  const b = getRandomNum();
  let a = +(getComputedStyle(event.target).getPropertyValue("opacity"));
  event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  event.target.style.opacity = a - 0.1;
}

function createTile() {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.addEventListener("mouseenter", changeTileColour);
  return tile;
}

function generateRow(userInputSize) {
  const tileWidth = 640 / +userInputSize;
  for (let i = 0; i < userInputSize; i++) {
    const tile = createTile();
    tile.style.width = `${tileWidth}px`;
    gridContainer.appendChild(tile);
  }
}

function generateGrid(userInputSize) {
  for (let i = 0; i < userInputSize; i++) {
    generateRow(userInputSize);
  }
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");

newGridBtn.addEventListener("click", () => {
  resetGrid();
  let userInput;
  
  while ((isNaN(userInput) || userInput < 1 || userInput > 100)) {
    userInput = Math.round(+prompt("Please choose a grid size, 1 - 100!"))
    if (!userInput) break;
  }

  generateGrid(userInput);
});

generateGrid(16);