/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-mutable-exports */
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
import { hide, unhide } from "../helpers/functions";

let shipIndex = 0;

export const gameSetup = (playerboard) => {
  const playerSquares = document.querySelectorAll("#player-board > .square");

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
      if (shipIndex === 5) unhide("start-btn");
    })
  );

  const randomPlacementBtn = document.getElementById("random");

  randomPlacementBtn.addEventListener("click", () => {
    shipIndex = 0;
    playerboard.resetBoard();
    randomShipPlacement(playerboard, playerShips);
    displayShips(playerboard.getTakenSquares());
    shipIndex = 5;
    unhide("start-btn");
  });

  const resestBtn = document.getElementById("reset");
  const replayBtn = document.getElementById("replay");

  resestBtn.addEventListener("click", () => {
    shipIndex = 0;
    playerboard.resetBoard();
    displayShips();
    hide("start-btn");
  });

  replayBtn.addEventListener("click", () => (shipIndex = 0));
};
