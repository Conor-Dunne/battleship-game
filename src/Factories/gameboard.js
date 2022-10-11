/* eslint-disable no-return-assign */
const GameboardFactory = () => {
  const board = [];
  const shipPositions = [];

  for (let i = 1; i < 11; i += 1) {
    for (let j = 1; j < 11; j += 1) {
      board.push([i, j]);
    }
  }

  // PLace ship on board
  const placeShip = (name, direction, length, x, y) => {
    const coords = [[x, y]];

    // Get coords for placing
    for (let i = 1; i < length; i += 1) {
      if (direction === "across") {
        coords.push([x, y + i]);
      } else coords.push([x + i, y]);
    }

    console.log(coords);

    // Check if outside board
    // if (coords[length - 1][1] > 10) return "Please place ship inside grid";

    // Check if squares are taken
    for (let i = 0; i < coords.length; i += 1) {
      if (shipPositions.includes(coords[i].toString())) {
        console.log("Stop");
        return "Not here";
      }
    }

    // coords.forEach((arr) => shipPositions.push(arr.toString()));
    shipPositions.push({ name, coords });
  };

  const receiveAttack = (x, y) => {
    console.log(`Attack received at coordinares [${[x, y]}]`);
  };
  return {
    placeShip,
    receiveAttack,
    shipPositions,
  };
};

export default GameboardFactory;
