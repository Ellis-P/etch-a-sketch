const gridContainer = document.querySelector(".grid-container");

function changeTileColour(event) {
  event.target.style.backgroundColor = "green";
}

function createTile() {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.addEventListener("mouseenter", changeTileColour);
  return tile;
}

function generateGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const tile = createTile();
      gridContainer.appendChild(tile);
    }
  }
}

generateGrid();