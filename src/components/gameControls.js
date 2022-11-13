/* eslint-disable import/prefer-default-export */
import { hide, unhide } from "../helpers/functions";
import { resestBoardDisplay } from "../DOMinteraction";

export const restartGame = (boardOne, boardTwo) => {
  boardOne.resetBoard();
  boardTwo.resetBoard();
  unhide("setup-btns");
  hide("computer");
  hide("start-btn");
  hide("replay-btn");
  resestBoardDisplay();
};
