import "./styles.css";
import GameboardFactory from "./Factories/gameboard";

console.log("hi");

const newBoard = GameboardFactory();

newBoard.placeShip("across", 3, 4, 1);
