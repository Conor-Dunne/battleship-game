/* eslint-disable no-undef */
import "./styles.css";
import GameboardFactory from "./Factories/gameboard";
import renderBoard from "./components/boards";
import { gameSetup } from "./components/gameSetup";

const playerboard = GameboardFactory("player");
const computerBoard = GameboardFactory("computer");

renderBoard("player-board");
renderBoard("computer-board");

gameSetup(playerboard);
