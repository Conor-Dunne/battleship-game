import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";

console.log("hi");

const newBoard = GameboardFactory();

const SizeFourA = ShipFactory("SizeFourA", 4);
const SizeFourB = ShipFactory("SizeFourB", 4);
const SizeThreeA = ShipFactory("SizeThreeA", 3);

newBoard.placeShip(SizeFourA, "across", 3, 1);
newBoard.placeShip(SizeFourB, "across", 4, 1);
newBoard.placeShip(SizeThreeA, "across", 3, 3);

console.log("Ship Positions", newBoard.shipPositions);
