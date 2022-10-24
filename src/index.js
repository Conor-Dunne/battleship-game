/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";
import Player from "./Factories/player";
import renderBoard from "./components/boards";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

renderBoard("player-board");
renderBoard("computer-board");

const domShip = function (el, length) {
  const x = el.target.dataset.coords[0];
  const y = el.target.dataset.coords[2];
  console.log(y);
  const placePoint = document.querySelector(
    `div#player-board > [data-coords = "${x},${y}"]`
  );

  const ship = document.createElement("div");
  ship.classList.add("ship");

  for (let i = 1; i <= length; i += 1) {
    const oneSquare = document.createElement("div");
    oneSquare.classList.add("ship-square");
    ship.appendChild(oneSquare);
  }

  placePoint.appendChild(ship);

  setTimeout(() => {
    placePoint.removeChild(ship);
  }, 100);
};

const highlight = function (el) {
  el.classList.toggle("ship-four");
};

const unHighlight = function (el) {
  el.classList.remove("ship-four");
};

const playerSquares = document.querySelectorAll("#player-board > .square");

playerSquares.forEach((el) =>
  el.addEventListener("mouseover", () => highlight(el))
);

playerSquares.forEach((el) =>
  el.addEventListener("mouseout", () => unHighlight(el))
);
