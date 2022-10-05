const GameboardFactory = () => {
  const placeShip = (direction, length, x, y) => {
    let coords = [[x, y]];

    if (direction === "across") {
      for (let i = 1; i < length; i += 1) {
        coords.push([x, y + i]);
      }
    }

    if (coords[length - 1][1] > 10) return "Please place ship inside grid";

    coords.forEach((arr) =>
      arr.toString() === "3,2" ? (coords = "Not here") : (coords = coords)
    );
    console.log(coords);
    return coords;
  };
  return { placeShip };
};

export default GameboardFactory;
