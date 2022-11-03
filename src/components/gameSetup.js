/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import {
  highlight,
  unHighlight,
  displayShips,
  shipAxis,
} from "../DOMinteraction";
import { playerShips } from "../helpers/ships";
import { randomShipPlacement } from "../helpers/randomPlacement";

export const gameSetup = (playerboard) => {
  const playerSquares = document.querySelectorAll("#player-board > .square");

  let shipIndex = 0;

  playerSquares.forEach((el) =>
    el.addEventListener("mouseover", () =>
      highlight(el, playerShips[shipIndex].getLength())
    )
  );

  playerSquares.forEach((el) =>
    el.addEventListener("mouseout", () =>
      unHighlight(el, playerShips[shipIndex].getLength())
    )
  );

  playerSquares.forEach((el) =>
    el.addEventListener("click", () => {
      let data = el.dataset.coords;
      data = data.split(",");
      playerboard.placeShip(
        playerShips[shipIndex],
        shipAxis,
        Number(data[0]),
        Number(data[1])
      );

      if (playerboard.getPositionAvailable()) {
        shipIndex += 1;
        displayShips(playerboard.getTakenSquares());
      }
    })
  );

  const randomPlacementBtn = document.getElementById("random");

  randomPlacementBtn.addEventListener("click", () => {
    shipIndex = 0;
    playerboard.resetBoard();
    randomShipPlacement(playerboard, playerShips);
    displayShips(playerboard.getTakenSquares());
    shipIndex = 5;
  });

  const resestBtn = document.getElementById("reset");

  resestBtn.addEventListener("click", () => {
    shipIndex = 0;
    playerboard.resetBoard();
    displayShips();
  });
};
