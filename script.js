const gridContainer = document.querySelector(".grid-container");

function createTile() {
  const tile = document.createElement("div");
  tile.className = "tile";
  return tile;
}

function generateGrid() {
  for (let i = 0; i < 16; i++) {
    const tile = createTile();
    gridContainer.appendChild(tile);
  }
}