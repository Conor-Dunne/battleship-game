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
  const placeShip = (direction, length, x, y) => {
    let coords = [[x, y]];

    // Get coords for placing

    // Across or Down

    for (let i = 1; i < length; i += 1) {
      if (direction === "across") {
        coords.push([x, y + i]);
      } else coords.push([x + i, y]);
    }

    // Check if outside board
    if (coords[length - 1][1] > 10) return "Please place ship inside grid";

    // Check if squares are taken
    coords.forEach((arr) => console.log(arr.toString()));
    shipPositions.push(coords);
    console.log(coords);
    console.log(`Taken squares`, shipPositions);
  };

  const receiveAttack = (x, y) => {
    console.log(`Attack received at coordinares [${[x, y]}]`);
  };
  return { placeShip, receiveAttack };
};

export default GameboardFactory;
