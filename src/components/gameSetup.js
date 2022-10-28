import playerShips from "../helpers/ships";
import { displayShips } from "../DOMinteraction";

const playerSquares = document.querySelectorAll("#player-board > .square");


let shipNumber = 0;
let allShipsPlaced = false;

const placeYourShips = function (board) {
  
  if (allShipsPlaced) {
    console.log("All ships are placed")
    return;
  }

    playerSquares.forEach((sq) =>
      sq.addEventListener("click", () => addShip(board))
    );
  
};

export function addShip(board, ships) {
  board.placeShip(ships[shipNumber]);
  displayShips();
  shipNumber += 1;
  if (shipNumber === 4) {
    allShipsPlaced = true;
  }
}
