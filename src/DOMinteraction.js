/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */

let shipAxis = "Y";
const axisBtn = document.getElementById("axis");

export const highlight = function (el, length) {
  let data = el.dataset.coords;
  data = data.split(",");
  if (shipAxis === "X") {
    for (let i = 0; i < length; i += 1) {
      const square = document.querySelector(
        `[data-coords="${data[0]},${Number(data[1]) + i}"]`
      );
      square.classList.add("ship-four");
    }
  } else {
    for (let i = 0; i < length; i += 1) {
      const square = document.querySelector(
        `[data-coords="${Number(data[0]) + i},${data[1]}"]`
      );
      square.classList.add("ship-four");
    }
  }
};

export const unHighlight = function (el, length) {
  let data = el.dataset.coords;
  data = data.split(",");
  if (shipAxis === "X") {
    for (let i = 0; i < length; i += 1) {
      const square = document.querySelector(
        `[data-coords="${data[0]},${Number(data[1]) + i}"]`
      );
      square.classList.remove("ship-four");
    }
  } else {
    for (let i = 0; i < length; i += 1) {
      const square = document.querySelector(
        `[data-coords="${Number(data[0]) + i},${data[1]}"]`
      );
      square.classList.remove("ship-four");
    }
  }
};

const changeAxis = function () {
  if (shipAxis === "Y") {
    shipAxis = "X";
  } else shipAxis = "Y";
};

export const displayShips = function (shipSquares) {
  const allSquares = document.querySelectorAll("#player-board > div");
  allSquares.forEach((div) => (div.className = "square"));
  if (!shipSquares) return;
  for (let i = 0; i < shipSquares.length; i += 1) {
    const square = document.querySelector(`[data-coords="${shipSquares[i]}"]`);
    square.classList.add("placed-ship");
  }
};

export const attackHighlight = function (el) {
  el.classList.add("ship-four");
};

export const attackUnhighlight = function (el) {
  el.classList.remove("ship-four");
};

export const displayMessage = function (message) {
  const messageBox = document.getElementById("message-box");
  messageBox.textContent = message;
};

export const displayAttack = function (el, result) {
  const square = el;
  if (result === false) square.classList = "miss";
  if (result === true || result === "Game Over") square.classList = "hit";
};

export const resestBoardDisplay = function () {
  const allPlayerSquares = document.querySelectorAll("#player-board > div");
  const allCompSquares = document.querySelectorAll("#computer-board > div");

  allPlayerSquares.forEach((div) => (div.classList = "square"));
  allCompSquares.forEach((div) => (div.classList = "square"));
};

axisBtn.addEventListener("click", changeAxis);

export { shipAxis };
