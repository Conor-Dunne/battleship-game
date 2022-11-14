/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ShipFactory = (name, length) => {
  let health = length;
  let sunk = false;
  let hitMarks = [];

  const isSunk = () => {
    sunk = true;
    console.log("Ship sunk");
    return "Bye Bye";
  };
  const hit = (location) => {
    hitMarks[location] = "X";
    health -= 1;
    if (health <= 0) {
      return isSunk();
    }
    console.log("It's a hit!");
    return "Ouch";
  };

  const sunkStatus = () => sunk;

  const getLength = () => length;

  const getName = () => name;

  const getHealth = () => health;

  const setCoords = (coords) => hitMarks.push(coords);

  const reset = () => {
    sunk = false;
    health = length;
    hitMarks = [];
  }

  return {
    hitMarks,
    hit,
    getHealth,
    setCoords,
    getName,
    getLength,
    sunkStatus,
    reset,
    sunk,
  };
};

export default ShipFactory;
