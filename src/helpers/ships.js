import ShipFactory from "../Factories/ship";

const playerShips = [];
const computerShips = [];

const playerCarrier = new ShipFactory("carrier", 5);
const playerBattleship = new ShipFactory("battleship", 4);
const playerCruiser = new ShipFactory("cruiser", 3);
const playerSub = new ShipFactory("sub", 3);
const playerDestroyer = new ShipFactory("destroyer", 2);

const compCarrier = new ShipFactory("carrier", 5);
const compBattleship = new ShipFactory("battleship", 4);
const compCruiser = new ShipFactory("cruiser", 3);
const compSub = new ShipFactory("sub", 3);
const compDestroyer = new ShipFactory("destroyer", 2);

playerShips.push(
  playerCarrier,
  playerBattleship,
  playerCruiser,
  playerSub,
  playerDestroyer
);

computerShips.push(
  compCarrier,
  compBattleship,
  compCruiser,
  compSub,
  compDestroyer
);

export default playerShips;
