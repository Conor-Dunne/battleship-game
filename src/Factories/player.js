import { randomXorY, randomNum } from "../helpers/functions";

const Player = (name, enemyBoard) => {
  // no of unplaced ships
  const playerName = name;

  // take a shot (random or manual)

  const randomShot = function () {
    const squaresToHit = enemyBoard.getUnHitSquares();
    let attackSquare = squaresToHit[randomNum(squaresToHit.length - 1)];
    attackSquare = attackSquare.split(",");
    console.log("this", attackSquare);
    console.log(squaresToHit);
    return enemyBoard.receiveAttack(
      Number(attackSquare[0]),
      Number(attackSquare[1])
    );
    
  };

  const takeShot = (el) => {
    let data = el.dataset.coords;
    data = data.split(",");

    return enemyBoard.receiveAttack(Number(data[0]), Number(data[1]));
  };

  return {
    playerName,
    takeShot,
    randomShot,
  };
};

export default Player;
