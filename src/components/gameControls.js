/* eslint-disable no-import-assign */
/* eslint-disable import/prefer-default-export */
import { hide, unhide } from "../helpers/functions";
import { resestBoardDisplay } from "../DOMinteraction";
import { resetAllShips } from "../helpers/ships";

export const restartGame = () => {
  // boardOne.resetBoard();
  // boardTwo.resetBoard();
  unhide("setup-btns");
  hide("computer");
  hide("start-btn");
  hide("replay-btn");
  resestBoardDisplay();
  resetAllShips();
};
