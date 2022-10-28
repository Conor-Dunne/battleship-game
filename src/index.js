/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";
import Player from "./Factories/player";
import renderBoard from "./components/boards";
import {
  highlight,
  unHighlight,
  displayShips,
  shipAxis,
} from "./DOMinteraction";
import playerShips from "./helpers/ships";
import { addShip } from "./components/gameSetup";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

// playerboard.placeShip(playerShips[0], "X", 3, 1);
// playerboard.placeShip(playerShips[1], "Y", 4, 1);

renderBoard("player-board");
renderBoard("computer-board");

const playerSquares = document.querySelectorAll("#player-board > .square");

let i = 0;
console.log("here", playerShips);

playerSquares.forEach((el) =>
  el.addEventListener("mouseover", () => highlight(el, playerShips[i].getLength()))
);

playerSquares.forEach((el) =>
  el.addEventListener("mouseout", () => unHighlight(el, playerShips[i].getLength()))
);

playerSquares.forEach((el) =>
  el.addEventListener("click", () => {
    console.log(i);
    let data = el.dataset.coords;
    data = data.split(",");
    console.log(playerShips[i].getName());
    playerboard.placeShip(
      playerShips[i],
      shipAxis,
      Number(data[0]),
      Number(data[1])
    );
    i += 1;
    displayShips(playerboard.takenSquares);
  })
);
