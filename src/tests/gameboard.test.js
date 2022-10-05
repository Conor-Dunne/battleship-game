/* eslint-disable no-undef */
import GameboardFactory from "../Factories/gameboard";

const testBoard = GameboardFactory();

test("Will place a ship on gameboard", () => {
  expect(testBoard.placeShip("across", 3, 4, 1)).toEqual([
    [4, 1],
    [4, 2],
    [4, 3],
  ]);
});
