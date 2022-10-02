/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import ShipFactory from "../Factories/ship";

const smallShip = ShipFactory(3);

test("Has corrrect length", () => {
  expect(smallShip.hitMarks).toStrictEqual(["O", "O", "O"]);
});
