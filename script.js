function changeTileColour(event) {
  event.target.style.backgroundColor = "green";
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
  let userInput = prompt("Choose a grid size from 1 - 100.");
  while (isNaN(userInput) || userInput < 1 || userInput > 100) {
    userInput = prompt("Please choose a valid grid size, 1 - 100!")
  }
  generateGrid(userInput);
});