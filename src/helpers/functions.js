/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const randomNum = function (range) {
  return Math.floor(Math.random() * range) + 1;
};

export const randomXorY = function () {
  const arr = ["X", "Y"];
  return arr[randomNum(2) - 1];
};

export const hide = function (elementId) {
  const elementToHide = document.getElementById(elementId);
  elementToHide.classList.add("hide");
};

export const unhide = function (elementId) {
  const elementToUnHide = document.getElementById(elementId);
  elementToUnHide.classList.remove("hide");
};