/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ShipFactory = (name, length) => {
  let health = length;
  const hitMarks = [];
 
  const isSunk = () => "Bye Bye";
  const hit = (location) => {
    hitMarks[location] = "X";
    health -= 1;
    if (health <= 0) {
      return isSunk();
    }
    return "Ouch";
  };

  const getLength = () => length;

  const getName = () => name;

  const getHealth = () => health;

  const setCoords = (coords) => hitMarks.push(coords);

  return { hitMarks, hit, getHealth, setCoords, getName, getLength };
};

export default ShipFactory;
