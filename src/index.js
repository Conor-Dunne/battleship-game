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
import { randomShipPlacement } from "./helpers/randomPlacement";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

renderBoard("player-board");
renderBoard("computer-board");

const playerSquares = document.querySelectorAll("#player-board > .square");

let i = 0;

playerSquares.forEach((el) =>
  el.addEventListener("mouseover", () =>
    highlight(el, playerShips[i].getLength())
  )
);

playerSquares.forEach((el) =>
  el.addEventListener("mouseout", () =>
    unHighlight(el, playerShips[i].getLength())
  )
);

playerSquares.forEach((el) =>
  el.addEventListener("click", () => {
    let data = el.dataset.coords;
    data = data.split(",");
    playerboard.placeShip(
      playerShips[i],
      shipAxis,
      Number(data[0]),
      Number(data[1])
    );

    if (playerboard.getPositionAvailable()) {
      i += 1;
      displayShips(playerboard.takenSquares);
    }
  })
);

randomShipPlacement(playerboard, playerShips);