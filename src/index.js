/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import renderBoard from "./components/boards";
import { gameSetup, allShipsPlaced } from "./components/gameSetup";
import { displayMessage } from "./DOMinteraction";
import { hide, unhide } from "./helpers/functions";
import { randomShipPlacement } from "./helpers/randomPlacement";
import { computerShips } from "./helpers/ships";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

displayMessage("Place your ships!");

renderBoard("player-board");
renderBoard("computer-board");

gameSetup(playerboard);

const startGame = function () {
  randomShipPlacement(computerBoard, computerShips);
  hide("setup-btns");
  unhide("computer");
  displayMessage("Player turn");
};

const startGameBtn = document.getElementById("start");

startGameBtn.addEventListener("click", startGame);
