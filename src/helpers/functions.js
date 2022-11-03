/* eslint-disable import/prefer-default-export */
export const randomNum = function (range) {
  return Math.floor(Math.random() * range) + 1;
};

export const randomXorY = function () {
  const arr = ["X", "Y"];
  return arr[randomNum(2) - 1];
};

