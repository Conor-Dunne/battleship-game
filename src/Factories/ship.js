/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const ShipFactory = (length) => {
  let health = length;
  const hitMarks = [];
  for (let i = 0; i < length; i++) {
    hitMarks.push("O");
  }
  const isSunk = () => {
    console.log("Bye Bye!");
  };
  const hit = (location) => {
    hitMarks[location] = "X";
    health -= 1;
    if (health <= 0) {
      isSunk();
    }
  };
  return { hitMarks, hit, health };
};

const sizeThreeShip = ShipFactory(3);

console.log(sizeThreeShip.hitMarks);

export default ShipFactory;
