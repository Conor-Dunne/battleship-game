/* eslint-disable no-undef */

const renderBoard = function (id) {
  const board = document.getElementById(id);

  for (let i = 1; i <= 10; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.dataset.coords = `${i},${j}`;
      board.appendChild(square);
    }
  }
};

export default renderBoard;
