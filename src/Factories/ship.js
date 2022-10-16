/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ShipFactory = (name, length) => {
  let health = length;
  let sunk = false;
  const hitMarks = [];

  const isSunk = () => {
    sunk = true;
    return "Bye Bye";
  };
  const hit = (location) => {
    hitMarks[location] = "X";
    health -= 1;
    if (health <= 0) {
      return isSunk();
    }
    return "Ouch";
  };

  const sunkStatus = () => sunk;

  const getLength = () => length;

  const getName = () => name;

  const getHealth = () => health;

  const setCoords = (coords) => hitMarks.push(coords);

  return {
    hitMarks,
    hit,
    getHealth,
    setCoords,
    getName,
    getLength,
    sunkStatus,
    sunk,
  };
};

export default ShipFactory;
