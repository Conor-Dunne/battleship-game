/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import ShipFactory from "../Factories/ship";

const smallShip = ShipFactory("smallShip", 3);

const loop = function (num) {
  const thisShip = ShipFactory("thisShip", num);
  for (let i = 0; i < num - 1; i++) {
    thisShip.hit(i);
  }
  return thisShip.hit(num - 1);
};

test("Has corrrect length", () => {
  expect(smallShip.getLength()).toStrictEqual(3);
});

test("Will sink after hits equal length", () => {
  expect(loop(3)).toBe("Bye Bye");
});

test("Will sink after hits equal length", () => {
  expect(loop(9)).toBe("Bye Bye");
});

test("Will sink after hits equal length", () => {
  expect(loop(99)).toBe("Bye Bye");
});
