import { randomNum, randomXorY } from "./functions";
import { displayShips } from "../DOMinteraction";

// generate random coords

// can't place on used squares

// keep going until all ships placed

// eslint-disable-next-line import/prefer-default-export
export const randomShipPlacement = function (board, ships) {
  let currentShip = 0;

  // need random coords
  // need random X or Y

  while (currentShip < 5) {
    board.placeShip(
      ships[currentShip],
      randomXorY(),
      randomNum(10),
      randomNum(10)
    );
    if (board.getPositionAvailable()) {
      currentShip += 1;
      displayShips(board.takenSquares);
    }
  }
};
