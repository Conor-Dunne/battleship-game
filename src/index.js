/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import renderBoard from "./components/boards";
import { gameSetup } from "./components/gameSetup";
import {
  displayMessage,
  attackHighlight,
  attackUnhighlight,
  displayAttack,
} from "./DOMinteraction";
import { hide, unhide } from "./helpers/functions";
import { randomShipPlacement } from "./helpers/randomPlacement";
import { computerShips } from "./helpers/ships";
import Player from "./Factories/player";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");
const human = new Player("Player", computerBoard);

displayMessage("Place your ships!");

renderBoard("player-board");
renderBoard("computer-board");

gameSetup(playerboard);

const compSquares = document.querySelectorAll("#computer-board > .square");

const startGame = function () {
  randomShipPlacement(computerBoard, computerShips);
  hide("setup-btns");
  unhide("computer");
  displayMessage("Player turn");
  hide("start-btn");
  compSquares.forEach((el) =>
    el.addEventListener("mouseover", () => attackHighlight(el))
  );
  compSquares.forEach((el) =>
    el.addEventListener("mouseout", () => attackUnhighlight(el))
  );
  compSquares.forEach((el) =>
    el.addEventListener("click", () => {
      const result = human.takeShot(el);
      displayAttack(el, result);
      console.log(computerBoard.getreceivedAttacksCoords());
    })
  );
};

const startGameBtn = document.getElementById("start");

startGameBtn.addEventListener("click", startGame);
