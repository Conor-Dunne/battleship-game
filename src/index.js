import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import ShipFactory from "./Factories/ship";

console.log("hi");

const newBoard = GameboardFactory();

const SizeFourA = ShipFactory("SizeFourA", 4);
const SizeFourB = ShipFactory("SizeFourB", 4);

console.log(newBoard.placeShip(SizeFourA, "across", 3, 1));
console.log(newBoard.placeShip(SizeFourB, "across", 5, 1));

console.log(newBoard.shipPositions);

console.log(newBoard.receiveAttack(3, 4));
