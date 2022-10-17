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
console.log(newBoard.shipPositions);
console.log(newBoard.receiveAttack(3, 1));
console.log(newBoard.receiveAttack(3, 2));
console.log(newBoard.receiveAttack(3, 3));
console.log(newBoard.receiveAttack(3, 4));
console.log(newBoard.receiveAttack(4, 1));
console.log(newBoard.receiveAttack(4, 2));
console.log(newBoard.receiveAttack(4, 3));
console.log(newBoard.receiveAttack(6, 3));
console.log(newBoard.receiveAttack(7, 3));
console.log(newBoard.shipsArray[0].sunkStatus());
