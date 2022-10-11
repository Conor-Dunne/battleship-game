import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";

console.log("hi");

const newBoard = GameboardFactory();

const SizeFourA = ShipFactory("SizeFourA", 4);
const SizeFourB = ShipFactory("SizeFourB", 4);

console.log(
  newBoard.placeShip(SizeFourA.getName(), "across", SizeFourA.getLength(), 3, 1)
);

console.log(newBoard.shipPositions[0].coords[0].toString());
