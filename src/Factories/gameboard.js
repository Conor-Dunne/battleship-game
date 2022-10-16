/* eslint-disable no-return-assign */
const GameboardFactory = () => {
  const board = [];
  const shipPositions = [];
  const shipsArray = [];

  for (let i = 1; i < 11; i += 1) {
    for (let j = 1; j < 11; j += 1) {
      board.push([i, j]);
    }
  }

  // PLace ship on board
  const placeShip = (ship, direction, x, y) => {
    let coords = [[x, y]];

    // Get coords for placing
    for (let i = 1; i < ship.getLength(); i += 1) {
      if (direction === "across") {
        coords.push([x, y + i]);
      } else coords.push([x + i, y]);
    }
    coords = coords.map((arr) => arr.toString());

    // Check if outside board
    // if (coords[length - 1][1] > 10) return "Please place ship inside grid";

    // Check if squares are taken
    for (let i = 0; i < shipPositions.length; i += 1) {
      for (let j = 0; j < coords.length - 1; j += 1) {
        if (shipPositions[i].coords.includes(coords[j])) {
          return "Can't place ship here.";
        }
      }
    }

    // coords.forEach((arr) => shipPositions.push(arr.toString()));
    shipPositions.push({
      name: ship.getName(),
      coords,
    });
    return coords;
  };

  // receive attack coords
  const receiveAttack = (x, y) => {
    let hitShip = "";
    let hitIndex = "";
    let hitPos = "";

    shipPositions.forEach((obj) =>
      obj.coords.includes([x, y].toString()) ? (hitShip = obj) : "Nashi"
    );

    hitPos = hitShip.coords.indexOf([x, y].toString());

    console.log("HitShip", hitShip, hitPos);

    const matchShipName = (obj) => obj.shipName === hitShip.name;

    const indexToHit = shipsArray.findIndex(matchShipName);

    shipsArray[indexToHit].hit(hitPos);
  };
  return {
    placeShip,
    receiveAttack,
    shipPositions,
    shipsArray,
  };
};

export default GameboardFactory;
