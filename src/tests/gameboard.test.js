/* eslint-disable no-undef */
import GameboardFactory from "../Factories/gameboard";
import ShipFactory from "../Factories/ship";

const testShipForBoard = ShipFactory("testShipForBoard", 4);
const secondShip = ShipFactory("secondShip", 3);

const testBoard = GameboardFactory();

testBoard.placeShip(testShipForBoard, "across", 4, 1);

test("Will place a ship across on gameboard", () => {
  expect(testBoard.placeShip(testShipForBoard, "across", 4, 1)).toEqual([
    "4,1",
    "4,2",
    "4,3",
    "4,4",
  ]);
});

test("Will place a ship down on gameboard", () => {
  expect(testBoard.placeShip(testShipForBoard, "down", 5, 1)).toEqual([
    "5,1",
    "6,1",
    "7,1",
    "8,1",
  ]);
});

test("Will not place ship on occupied square", () => {
  expect(testBoard.placeShip(secondShip, "across", 4, 1)).toBe("Not here");
});
