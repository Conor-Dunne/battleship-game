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
import { hide, unhide, getRandomUnhitSquare } from "./helpers/functions";
import { randomShipPlacement } from "./helpers/randomPlacement";
import { computerShips } from "./helpers/ships";
import Player from "./Factories/player";
import { restartGame } from "./components/gameControls";

const playerboard = GameboardFactory("player", "Computer");
const computerBoard = GameboardFactory("computer", "Player");

const human = new Player("Player", computerBoard);
const computer = new Player("Computer", playerboard);

displayMessage("Place your ships!");

renderBoard("player-board");
renderBoard("computer-board");

gameSetup(playerboard);

const compSquares = document.querySelectorAll("#computer-board > .square");
const playerSquares = document.querySelectorAll("#player-board > .square");

const startGame = function () {
  randomShipPlacement(computerBoard, computerShips);
  hide("setup-btns");
  unhide("computer");
  displayMessage("Player turn");
  hide("start-btn");
  hide("replay-btn");
  compSquares.forEach((el) =>
    el.addEventListener("mouseover", () => attackHighlight(el))
  );
  compSquares.forEach((el) =>
    el.addEventListener("mouseout", () => attackUnhighlight(el))
  );

  let result;

  compSquares.forEach((el) =>
    el.addEventListener("click", () => {
      console.log(result);
      if (result === "Game Over") {
        unhide("replay-btn");
        return;
      }
      result = human.takeShot(el);
      displayAttack(el, result);
      if (result === "Game Over") {
        unhide("replay-btn");
        return;
      }
      result = setTimeout(() => {
        computer.randomShot();
      }, 1.5 * 1000);
    })
  );
};

const startGameBtn = document.getElementById("start");
const replayBtn = document.getElementById("replay");

startGameBtn.addEventListener("click", startGame);
replayBtn.addEventListener("click", () =>
  restartGame(playerboard, computerBoard)
);
