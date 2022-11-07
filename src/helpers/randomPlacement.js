/* eslint-disable import/prefer-default-export */
import { randomNum, randomXorY } from "./functions";
import { displayShips } from "../DOMinteraction";

export const randomShipPlacement = function (board, ships) {
  let currentShip = 0;

  while (currentShip < 5) {
    board.placeShip(
      ships[currentShip],
      randomXorY(),
      randomNum(10),
      randomNum(10)
    );
    if (board.getPositionAvailable()) {
      currentShip += 1;
    }
  }
};

