import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";
import Player from "./Factories/player";
import renderBoard from "./components/boards";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

const playerShipFourA = ShipFactory("SizeFourA", 4);
const playerShipFourB = ShipFactory("SizeFourB", 4);
const playerShipThreeA = ShipFactory("SizeThreeA", 3);

const computerShipFourA = ShipFactory("SizeFourA", 4);
const computerShipFourB = ShipFactory("SizeFourB", 4);
const computerShipThreeA = ShipFactory("SizeThreeA", 3);

const human = Player("Conor", computerBoard);
const computer = Player("computer", playerboard);

playerboard.placeShip(playerShipFourA, "down", 2, 1);
playerboard.placeShip(playerShipFourB, "across", 5, 5);
playerboard.placeShip(playerShipThreeA, "across", 9, 6);

computerBoard.placeShip(computerShipFourA, "across", 3, 4);
computerBoard.placeShip(computerShipFourB, "down", 7, 4);
computerBoard.placeShip(computerShipThreeA, "down", 2, 3);

console.log(human.takeShot(3, 4));
console.log(human.takeShot(3, 5));
console.log(human.takeShot(3, 6));
console.log(human.takeShot(3, 7));

console.log(human.takeShot(7, 4));
console.log(human.takeShot(8, 4));
console.log(human.takeShot(9, 4));
console.log(human.takeShot(10, 4));

console.log(human.takeShot(2, 3));
console.log(human.takeShot(3, 3));
console.log(human.takeShot(4, 3));

renderBoard("player-board");
renderBoard("computer-board");

const domShip = function (x, y, length) {
  const placePoint = document.querySelector(
    `div#player-board > [data-coords = "${x},${y}"]`
  );

  const ship = document.createElement("div");
  ship.classList.add("ship");

  for (let i = 1; i <= length; i += 1) {
    const oneSquare = document.createElement("div");
    oneSquare.classList.add("ship-square");
    ship.appendChild(oneSquare);
  }

  placePoint.appendChild(ship);
};

domShip(3,1, 4);
