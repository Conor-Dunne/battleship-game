const Player = (name, enemyBoard) => {
  const playerName = name;

  // no of unplaced ships

  // take a shot (random or manual)

  const takeShot = (x, y) => enemyBoard.receiveAttack(x, y);

  return {
    playerName,
    takeShot,
  };
};

export default Player;
