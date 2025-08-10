const gridContainer = document.querySelector(".grid-container");

function createTile() {
  const tile = document.createElement("div");
  tile.className = "tile";
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