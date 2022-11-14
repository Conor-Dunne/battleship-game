/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { displayMessage } from "../DOMinteraction";

const GameboardFactory = (name, opponent) => {
  const PlayerName = name;
  const unHitSquares = [];
  let shipPositions = [];
  let shipsArray = [];
  let missedHits = [];
  let takenSquares = [];
  let receivedAttacksCoords = [];
  let positionAvailable = true;

  const getUnHitSquares = () => unHitSquares;

  const getPositionAvailable = () => positionAvailable;

  const getTakenSquares = () => takenSquares;

  const getreceivedAttacksCoords = () => receivedAttacksCoords;

  const checkIfGameOver = () =>
    shipsArray.every((ship) => ship.sunkStatus() === true);

  for (let i = 1; i < 11; i += 1) {
    for (let j = 1; j < 11; j += 1) {
      unHitSquares.push([i, j].toString());
    }
  }

  // PLace ship on board
  const placeShip = (ship, direction, x, y) => {
    let coords = [[x, y]];
    positionAvailable = true;
    // Get coords for placing
    for (let i = 1; i < ship.getLength(); i += 1) {
      if (direction === "X") {
        coords.push([x, y + i]);
      } else coords.push([x + i, y]);
    }
    // Check if outside board
    if (
      coords[coords.length - 1][1] > 10 ||
      coords[coords.length - 1][0] > 10
    ) {
      positionAvailable = false;
      displayMessage("Please place ship inside grid");
      return;
    }

    coords = coords.map((arr) => arr.toString());
    // Check if squares are taken
    for (let i = 0; i < takenSquares.length; i += 1) {
      for (let j = 0; j < coords.length; j += 1) {
        if (takenSquares.includes(coords[j])) {
          positionAvailable = false;
          displayMessage("Can't place ship here.");
          return;
        }
      }
    }
    shipsArray.push(ship);
    // coords.forEach((arr) => shipPositions.push(arr.toString()));
    shipPositions.push({
      name: ship.getName(),
      coords,
    });

    coords.forEach((coord) => takenSquares.push(coord));

    return coords;
  };

  // receive attack coords
  const receiveAttack = (x, y) => {
    let hitShip = "";
    let indexToHit = "";
    let hitPos = "";
    if (receivedAttacksCoords.indexOf([x, y].toString()) > -1) {
      displayMessage("Please select another square");
      return;
    }

    receivedAttacksCoords.push([x, y].toString());
    const indexInBoard = unHitSquares.indexOf([x, y].toString());

    if (takenSquares.indexOf([x, y].toString()) === -1) {
      missedHits.push([x, y].toString());
      unHitSquares.splice(indexInBoard, 1);
      displayMessage(`${opponent} miss!`);
      return false;
    }

    shipPositions.forEach((obj) =>
      obj.coords.includes([x, y].toString()) ? (hitShip = obj) : "Nashi"
    );

    hitPos = hitShip.coords.indexOf([x, y].toString());

    shipsArray.forEach((obj) => {
      if (obj.getName() === hitShip.name) {
        indexToHit = shipsArray.indexOf(obj);
      }
    });

    shipsArray[indexToHit].hit(hitPos);
    if (checkIfGameOver()) {
      displayMessage(`Game over! ${opponent} wins!`);
      return "Game Over";
    }
    unHitSquares.splice(indexInBoard, 1);
    displayMessage(`Hit for ${opponent}`);
    return true;
  };

  const resetBoard = () => {
    shipPositions = [];
    shipsArray = [];
    missedHits = [];
    takenSquares = [];
    receivedAttacksCoords = [];
    positionAvailable = true;
  };
  return {
    placeShip,
    receiveAttack,
    shipPositions,
    shipsArray,
    getTakenSquares,
    getPositionAvailable,
    resetBoard,
    getreceivedAttacksCoords,
    getUnHitSquares,
  };
};

export default GameboardFactory;
