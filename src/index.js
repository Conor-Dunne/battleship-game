import "./styles.css";
import GameboardFactory from "./Factories/gameboard";

console.log("hi");

const newBoard = GameboardFactory();

console.log(newBoard.placeShip("across", 3, 4, 2));
console.log(newBoard.placeShip("down", 4, 8, 2));

