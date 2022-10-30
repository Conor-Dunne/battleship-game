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
  for (let i = 0; i < shipSquares.length; i += 1) {
    const square = document.querySelector(`[data-coords="${shipSquares[i]}"]`);
    square.classList.add("placed-ship");
  }
};

axisBtn.addEventListener("click", changeAxis);

export { shipAxis };
