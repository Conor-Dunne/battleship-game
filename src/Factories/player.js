const Player = (name, enemyBoard) => {
  // no of unplaced ships
  const playerName = name;

  // take a shot (random or manual)

  const takeShot = (el) => {
    let data = el.dataset.coords;
    data = data.split(",");

    return enemyBoard.receiveAttack(Number(data[0]), Number(data[1]));
  };

  return {
    playerName,
    takeShot,
  };
};

export default Player;
