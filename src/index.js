/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";
import Player from "./Factories/player";
import renderBoard from "./components/boards";
import { highlight, unHighlight, displayShips } from "./DOMinteraction";
import playerShips from "./helpers/ships";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

playerboard.placeShip(playerShips[0], "X", 3, 1);
playerboard.placeShip(playerShips[1], "Y", 4, 1);



renderBoard("player-board");
renderBoard("computer-board");

displayShips(playerboard.takenSquares);

const playerSquares = document.querySelectorAll("#player-board > .square");

playerSquares.forEach((el) =>
  el.addEventListener("mouseover", () => highlight(el, 4))
);

playerSquares.forEach((el) =>
  el.addEventListener("mouseout", () => unHighlight(el, 4))
);
