/* eslint-disable no-undef */
import GameboardFactory from "../Factories/gameboard";
import ShipFactory from "../Factories/ship";

const testShipForBoard = ShipFactory("testShipForBoard", 4);
const secondShip = ShipFactory("secondShip", 3);

const testBoard = GameboardFactory();

test("Will place a ship across on gameboard", () => {
  expect(testBoard.placeShip(testShipForBoard, "X", 4, 1)).toEqual([
    "4,1",
    "4,2",
    "4,3",
    "4,4",
  ]);
});

test("Will place a ship down on gameboard", () => {
  expect(testBoard.placeShip(secondShip, "Y", 5, 1)).toEqual([
    "5,1",
    "6,1",
    "7,1",
  ]);
});

test("Will not place ship on occupied square", () => {
  expect(testBoard.placeShip(secondShip, "X", 4, 1)).toBe(
    "Can't place ship here."
  );
});

test("Will send hit coords to correct", () => {
  expect(testBoard.receiveAttack(4, 1)).toBe("It's a hit!");
});

test("Doesn't allow same square to be attacked twice", () => {
  expect(testBoard.receiveAttack(4, 1)).toBe("Please select another square");
});

test("Should have a total of two ships on the board", () => {
  expect(testBoard.shipsArray.length).toBe(2);
});

test("Will report gameover if all ships are sunk", () => {
  expect(testBoard.receiveAttack(4, 2)).toBe("It's a hit!");
  expect(testBoard.receiveAttack(4, 3)).toBe("It's a hit!");
  expect(testBoard.receiveAttack(4, 4)).toBe("It's a hit!");
  expect(testBoard.receiveAttack(5, 1)).toBe("It's a hit!");
  expect(testBoard.receiveAttack(6, 1)).toBe("It's a hit!");
  expect(testBoard.receiveAttack(7, 1)).toBe("Game Over");
});

test("Will log a missed hit on empty square", () => {
  expect(testBoard.receiveAttack(8, 3)).toBe("Miss!");
});
