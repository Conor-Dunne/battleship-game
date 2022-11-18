/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMinteraction.js":
/*!*******************************!*\
  !*** ./src/DOMinteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackHighlight": () => (/* binding */ attackHighlight),
/* harmony export */   "attackUnhighlight": () => (/* binding */ attackUnhighlight),
/* harmony export */   "displayAttack": () => (/* binding */ displayAttack),
/* harmony export */   "displayMessage": () => (/* binding */ displayMessage),
/* harmony export */   "displayShips": () => (/* binding */ displayShips),
/* harmony export */   "highlight": () => (/* binding */ highlight),
/* harmony export */   "resestBoardDisplay": () => (/* binding */ resestBoardDisplay),
/* harmony export */   "shipAxis": () => (/* binding */ shipAxis),
/* harmony export */   "unHighlight": () => (/* binding */ unHighlight)
/* harmony export */ });
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */

var shipAxis = "Y";
var axisBtn = document.getElementById("axis");
var highlight = function highlight(el, length) {
  var data = el.dataset.coords;
  data = data.split(",");
  if (shipAxis === "X") {
    for (var i = 0; i < length; i += 1) {
      var square = document.querySelector("[data-coords=\"".concat(data[0], ",").concat(Number(data[1]) + i, "\"]"));
      square.classList.add("ship-four");
    }
  } else {
    for (var _i = 0; _i < length; _i += 1) {
      var _square = document.querySelector("[data-coords=\"".concat(Number(data[0]) + _i, ",").concat(data[1], "\"]"));
      _square.classList.add("ship-four");
    }
  }
};
var unHighlight = function unHighlight(el, length) {
  var data = el.dataset.coords;
  data = data.split(",");
  if (shipAxis === "X") {
    for (var i = 0; i < length; i += 1) {
      var square = document.querySelector("[data-coords=\"".concat(data[0], ",").concat(Number(data[1]) + i, "\"]"));
      square.classList.remove("ship-four");
    }
  } else {
    for (var _i2 = 0; _i2 < length; _i2 += 1) {
      var _square2 = document.querySelector("[data-coords=\"".concat(Number(data[0]) + _i2, ",").concat(data[1], "\"]"));
      _square2.classList.remove("ship-four");
    }
  }
};
var changeAxis = function changeAxis() {
  if (shipAxis === "Y") {
    shipAxis = "X";
  } else shipAxis = "Y";
};
var displayShips = function displayShips(shipSquares) {
  var allSquares = document.querySelectorAll("#player-board > div");
  allSquares.forEach(function (div) {
    return div.className = "square";
  });
  if (!shipSquares) return;
  for (var i = 0; i < shipSquares.length; i += 1) {
    var square = document.querySelector("[data-coords=\"".concat(shipSquares[i], "\"]"));
    square.classList.add("placed-ship");
  }
};
var attackHighlight = function attackHighlight(el) {
  el.classList.add("ship-four");
};
var attackUnhighlight = function attackUnhighlight(el) {
  el.classList.remove("ship-four");
};
var displayMessage = function displayMessage(message) {
  var messageBox = document.getElementById("message-box");
  messageBox.textContent = message;
};
var displayAttack = function displayAttack(el, result) {
  var square = el;
  if (result === false) square.classList = "miss";
  if (result === true || result === "Game Over") square.classList = "hit";
};
var resestBoardDisplay = function resestBoardDisplay() {
  var allPlayerSquares = document.querySelectorAll("#player-board > div");
  var allCompSquares = document.querySelectorAll("#computer-board > div");
  allPlayerSquares.forEach(function (div) {
    return div.classList = "square";
  });
  allCompSquares.forEach(function (div) {
    return div.classList = "square";
  });
};
axisBtn.addEventListener("click", changeAxis);


/***/ }),

/***/ "./src/Factories/gameboard.js":
/*!************************************!*\
  !*** ./src/Factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */

var GameboardFactory = function GameboardFactory(name, opponent) {
  var PlayerName = name;
  var unHitSquares = [];
  var shipPositions = [];
  var shipsArray = [];
  var missedHits = [];
  var takenSquares = [];
  var receivedAttacksCoords = [];
  var positionAvailable = true;
  var getUnHitSquares = function getUnHitSquares() {
    return unHitSquares;
  };
  var getPositionAvailable = function getPositionAvailable() {
    return positionAvailable;
  };
  var getTakenSquares = function getTakenSquares() {
    return takenSquares;
  };
  var getreceivedAttacksCoords = function getreceivedAttacksCoords() {
    return receivedAttacksCoords;
  };
  var checkIfGameOver = function checkIfGameOver() {
    return shipsArray.every(function (ship) {
      return ship.sunkStatus() === true;
    });
  };
  for (var i = 1; i < 11; i += 1) {
    for (var j = 1; j < 11; j += 1) {
      unHitSquares.push([i, j].toString());
    }
  }

  // PLace ship on board
  var placeShip = function placeShip(ship, direction, x, y) {
    var coords = [[x, y]];
    positionAvailable = true;
    // Get coords for placing
    for (var _i = 1; _i < ship.getLength(); _i += 1) {
      if (direction === "X") {
        coords.push([x, y + _i]);
      } else coords.push([x + _i, y]);
    }
    // Check if outside board
    if (coords[coords.length - 1][1] > 10 || coords[coords.length - 1][0] > 10) {
      positionAvailable = false;
      (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("Please place ship inside grid");
      return;
    }
    coords = coords.map(function (arr) {
      return arr.toString();
    });
    // Check if squares are taken
    for (var _i2 = 0; _i2 < takenSquares.length; _i2 += 1) {
      for (var _j = 0; _j < coords.length; _j += 1) {
        if (takenSquares.includes(coords[_j])) {
          positionAvailable = false;
          (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("Can't place ship here.");
          return;
        }
      }
    }
    shipsArray.push(ship);
    // coords.forEach((arr) => shipPositions.push(arr.toString()));
    shipPositions.push({
      name: ship.getName(),
      coords: coords
    });
    coords.forEach(function (coord) {
      return takenSquares.push(coord);
    });
    return coords;
  };

  // receive attack coords
  var receiveAttack = function receiveAttack(x, y) {
    console.log(receivedAttacksCoords);
    var hitShip = "";
    var indexToHit = "";
    var hitPos = "";
    if (receivedAttacksCoords.indexOf([x, y].toString()) > -1) {
      console.log([x, y], receivedAttacksCoords);
      (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("Please select another square");
      return;
    }
    receivedAttacksCoords.push([x, y].toString());
    var indexInBoard = unHitSquares.indexOf([x, y].toString());
    if (takenSquares.indexOf([x, y].toString()) === -1) {
      missedHits.push([x, y].toString());
      unHitSquares.splice(indexInBoard, 1);
      (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("".concat(opponent, " miss!"));
      return false;
    }
    shipPositions.forEach(function (obj) {
      return obj.coords.includes([x, y].toString()) ? hitShip = obj : "Nashi";
    });
    hitPos = hitShip.coords.indexOf([x, y].toString());
    shipsArray.forEach(function (obj) {
      if (obj.getName() === hitShip.name) {
        indexToHit = shipsArray.indexOf(obj);
      }
    });
    shipsArray[indexToHit].hit(hitPos);
    if (checkIfGameOver()) {
      (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("Game over! ".concat(opponent, " wins!"));
      return "Game Over";
    }
    unHitSquares.splice(indexInBoard, 1);
    (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayMessage)("Hit for ".concat(opponent));
    return true;
  };
  var resetBoard = function resetBoard() {
    unHitSquares = [];
    for (var _i3 = 1; _i3 < 11; _i3 += 1) {
      for (var _j2 = 1; _j2 < 11; _j2 += 1) {
        unHitSquares.push([_i3, _j2].toString());
      }
    }
    shipPositions = [];
    shipsArray = [];
    missedHits = [];
    takenSquares = [];
    receivedAttacksCoords = [];
    positionAvailable = true;
    console.log("reset!");
  };
  return {
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    shipPositions: shipPositions,
    shipsArray: shipsArray,
    getTakenSquares: getTakenSquares,
    getPositionAvailable: getPositionAvailable,
    resetBoard: resetBoard,
    getreceivedAttacksCoords: getreceivedAttacksCoords,
    getUnHitSquares: getUnHitSquares
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardFactory);

/***/ }),

/***/ "./src/Factories/player.js":
/*!*********************************!*\
  !*** ./src/Factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.js");
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");


var Player = function Player(name, enemyBoard) {
  // no of unplaced ships
  var playerName = name;

  // take a shot (random or manual)

  var randomShot = function randomShot() {
    var squaresToHit = enemyBoard.getUnHitSquares();
    var attackSquare = squaresToHit[(0,_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.randomNum)(squaresToHit.length - 1)];
    var playerSquareEl = document.querySelector("#player-board > [data-coords=\"".concat(attackSquare, "\"]"));
    attackSquare = attackSquare.split(",");
    var result = enemyBoard.receiveAttack(Number(attackSquare[0]), Number(attackSquare[1]));
    (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_1__.displayAttack)(playerSquareEl, result);
  };
  var takeShot = function takeShot(el) {
    var data = el.dataset.coords;
    data = data.split(",");
    return enemyBoard.receiveAttack(Number(data[0]), Number(data[1]));
  };
  return {
    playerName: playerName,
    takeShot: takeShot,
    randomShot: randomShot
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/Factories/ship.js":
/*!*******************************!*\
  !*** ./src/Factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
var ShipFactory = function ShipFactory(name, length) {
  var health = length;
  var sunk = false;
  var hitMarks = [];
  var isSunk = function isSunk() {
    sunk = true;
    console.log("Ship sunk");
    return "Bye Bye";
  };
  var hit = function hit(location) {
    hitMarks[location] = "X";
    health -= 1;
    if (health <= 0) {
      return isSunk();
    }
    console.log("It's a hit!");
    return "Ouch";
  };
  var sunkStatus = function sunkStatus() {
    return sunk;
  };
  var getLength = function getLength() {
    return length;
  };
  var getName = function getName() {
    return name;
  };
  var getHealth = function getHealth() {
    return health;
  };
  var setCoords = function setCoords(coords) {
    return hitMarks.push(coords);
  };
  var reset = function reset() {
    sunk = false;
    health = length;
    hitMarks = [];
  };
  return {
    hitMarks: hitMarks,
    hit: hit,
    getHealth: getHealth,
    setCoords: setCoords,
    getName: getName,
    getLength: getLength,
    sunkStatus: sunkStatus,
    reset: reset,
    sunk: sunk
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipFactory);

/***/ }),

/***/ "./src/components/boards.js":
/*!**********************************!*\
  !*** ./src/components/boards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-undef */

var renderBoard = function renderBoard(id) {
  var board = document.getElementById(id);
  for (var i = 1; i <= 10; i += 1) {
    for (var j = 1; j <= 10; j += 1) {
      var square = document.createElement("div");
      square.classList.add("square");
      square.dataset.coords = "".concat(i, ",").concat(j);
      board.appendChild(square);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);

/***/ }),

/***/ "./src/components/gameControls.js":
/*!****************************************!*\
  !*** ./src/components/gameControls.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restartGame": () => (/* binding */ restartGame)
/* harmony export */ });
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.js");
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");
/* harmony import */ var _helpers_ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ships */ "./src/helpers/ships.js");
/* eslint-disable no-import-assign */
/* eslint-disable import/prefer-default-export */



var restartGame = function restartGame() {
  // boardOne.resetBoard();
  // boardTwo.resetBoard();
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.unhide)("setup-btns");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.hide)("computer");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.hide)("start-btn");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_0__.hide)("replay-btn");
  (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_1__.resestBoardDisplay)();
  (0,_helpers_ships__WEBPACK_IMPORTED_MODULE_2__.resetAllShips)();
};

/***/ }),

/***/ "./src/components/gameSetup.js":
/*!*************************************!*\
  !*** ./src/components/gameSetup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameSetup": () => (/* binding */ gameSetup)
/* harmony export */ });
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");
/* harmony import */ var _helpers_ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ships */ "./src/helpers/ships.js");
/* harmony import */ var _helpers_randomPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/randomPlacement */ "./src/helpers/randomPlacement.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */




var shipIndex = 0;
var gameSetup = function gameSetup(playerboard) {
  var playerSquares = document.querySelectorAll("#player-board > .square");
  playerSquares.forEach(function (el) {
    return el.addEventListener("mouseover", function () {
      return (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.highlight)(el, _helpers_ships__WEBPACK_IMPORTED_MODULE_1__.playerShips[shipIndex].getLength());
    });
  });
  playerSquares.forEach(function (el) {
    return el.addEventListener("mouseout", function () {
      return (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.unHighlight)(el, _helpers_ships__WEBPACK_IMPORTED_MODULE_1__.playerShips[shipIndex].getLength());
    });
  });
  playerSquares.forEach(function (el) {
    return el.addEventListener("click", function () {
      var data = el.dataset.coords;
      data = data.split(",");
      playerboard.placeShip(_helpers_ships__WEBPACK_IMPORTED_MODULE_1__.playerShips[shipIndex], _DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.shipAxis, Number(data[0]), Number(data[1]));
      if (playerboard.getPositionAvailable()) {
        shipIndex += 1;
        (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayShips)(playerboard.getTakenSquares());
      }
      if (shipIndex === 5) (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.unhide)("start-btn");
    });
  });
  var randomPlacementBtn = document.getElementById("random");
  randomPlacementBtn.addEventListener("click", function () {
    shipIndex = 0;
    playerboard.resetBoard();
    (0,_helpers_randomPlacement__WEBPACK_IMPORTED_MODULE_2__.randomShipPlacement)(playerboard, _helpers_ships__WEBPACK_IMPORTED_MODULE_1__.playerShips);
    (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayShips)(playerboard.getTakenSquares());
    shipIndex = 5;
    (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.unhide)("start-btn");
  });
  var resestBtn = document.getElementById("reset");
  var replayBtn = document.getElementById("replay");
  resestBtn.addEventListener("click", function () {
    shipIndex = 0;
    playerboard.resetBoard();
    (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_0__.displayShips)();
    (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_3__.hide)("start-btn");
  });
  replayBtn.addEventListener("click", function () {
    return shipIndex = 0;
  });
};

/***/ }),

/***/ "./src/helpers/functions.js":
/*!**********************************!*\
  !*** ./src/helpers/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomUnhitSquare": () => (/* binding */ getRandomUnhitSquare),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "randomNum": () => (/* binding */ randomNum),
/* harmony export */   "randomXorY": () => (/* binding */ randomXorY),
/* harmony export */   "unhide": () => (/* binding */ unhide)
/* harmony export */ });
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");
/* eslint-disable no-undef */



/* eslint-disable import/prefer-default-export */
var randomNum = function randomNum(range) {
  return Math.floor(Math.random() * range) + 1;
};
var randomXorY = function randomXorY() {
  var arr = ["X", "Y"];
  return arr[randomNum(2) - 1];
};
var hide = function hide(elementId) {
  var elementToHide = document.getElementById(elementId);
  elementToHide.classList.add("hide");
};
var unhide = function unhide(elementId) {
  var elementToUnHide = document.getElementById(elementId);
  elementToUnHide.classList.remove("hide");
};
var getRandomUnhitSquare = function getRandomUnhitSquare(board) {
  var squaresToHit = enemyBoard.getUnHitSquares();
  var attackSquare = squaresToHit[randomNum(squaresToHit.length - 1)];
};

/***/ }),

/***/ "./src/helpers/randomPlacement.js":
/*!****************************************!*\
  !*** ./src/helpers/randomPlacement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomShipPlacement": () => (/* binding */ randomShipPlacement)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/helpers/functions.js");
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMinteraction */ "./src/DOMinteraction.js");
/* eslint-disable import/prefer-default-export */


var randomShipPlacement = function randomShipPlacement(board, ships) {
  var currentShip = 0;
  while (currentShip < 5) {
    board.placeShip(ships[currentShip], (0,_functions__WEBPACK_IMPORTED_MODULE_0__.randomXorY)(), (0,_functions__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10), (0,_functions__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10));
    if (board.getPositionAvailable()) {
      currentShip += 1;
    }
  }
};

/***/ }),

/***/ "./src/helpers/ships.js":
/*!******************************!*\
  !*** ./src/helpers/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerShips": () => (/* binding */ computerShips),
/* harmony export */   "playerShips": () => (/* binding */ playerShips),
/* harmony export */   "resetAllShips": () => (/* binding */ resetAllShips)
/* harmony export */ });
/* harmony import */ var _Factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Factories/ship */ "./src/Factories/ship.js");

var playerShips = [];
var computerShips = [];
var playerCarrier = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("carrier", 5);
var playerBattleship = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("battleship", 4);
var playerCruiser = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("cruiser", 3);
var playerSub = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("sub", 3);
var playerDestroyer = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 2);
var compCarrier = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("carrier", 5);
var compBattleship = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("battleship", 4);
var compCruiser = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("cruiser", 3);
var compSub = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("sub", 3);
var compDestroyer = new _Factories_ship__WEBPACK_IMPORTED_MODULE_0__["default"]("destroyer", 2);
playerShips.push(playerCarrier, playerBattleship, playerCruiser, playerSub, playerDestroyer);
computerShips.push(compCarrier, compBattleship, compCruiser, compSub, compDestroyer);
var resetAllShips = function resetAllShips() {
  playerShips.forEach(function (ship) {
    return ship.reset();
  });
  computerShips.forEach(function (ship) {
    return ship.reset();
  });
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n    padding: 0;\n    margin: 0;\n    font-size: 10px;\n}\n\nh1 {\n    font-size: 2rem;\n    color: blue;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background: pink;\n    text-align: center;\n}\n\n#message-box {\n    font-size: 1.5rem;\n    width: 70%;\n    margin: 0 auto;\n    border: 1px solid blue;\n    padding: 10px;\n    background: gray;\n    color: rgb(136, 231, 121);\n}\n\n.square {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background: grey;\n    border: 1px solid black;\n\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows: repeat(10, 20px);\n    overflow: hidden;\n}\n\n.boards-wrapper {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 20px;\n}\n\n.ship-four {\n    height: 20px;\n    width: 20px;\n    background: blue;\n    border: 1px solid black;\n    z-index: 0;\n\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: yellow;\n}\n\n.ship {\n    display: flex;\n    flex-direction: column;\n    z-index: 0;\n    height: fit-content;\n}\n\nbutton {\n    margin: 10px;\n    min-width: 90px;\n}\n\n#setup-btns {\n    max-width: 300px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#start {\n    font-size: 20px;\n    padding: 10px;\n}\n\n.placed-ship {\n    height: 23px;\n    width: 23px;\n    background: rgb(49, 231, 21);\n    border: 1px solid black;\n\n}\n\n.hide {\n    display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,cAAc;IACd,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,uBAAuB;IACvB,UAAU;;AAEd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,uBAAuB;;AAE3B;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["html,\nbody {\n    padding: 0;\n    margin: 0;\n    font-size: 10px;\n}\n\nh1 {\n    font-size: 2rem;\n    color: blue;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background: pink;\n    text-align: center;\n}\n\n#message-box {\n    font-size: 1.5rem;\n    width: 70%;\n    margin: 0 auto;\n    border: 1px solid blue;\n    padding: 10px;\n    background: gray;\n    color: rgb(136, 231, 121);\n}\n\n.square {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background: grey;\n    border: 1px solid black;\n\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows: repeat(10, 20px);\n    overflow: hidden;\n}\n\n.boards-wrapper {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 20px;\n}\n\n.ship-four {\n    height: 20px;\n    width: 20px;\n    background: blue;\n    border: 1px solid black;\n    z-index: 0;\n\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: yellow;\n}\n\n.ship {\n    display: flex;\n    flex-direction: column;\n    z-index: 0;\n    height: fit-content;\n}\n\nbutton {\n    margin: 10px;\n    min-width: 90px;\n}\n\n#setup-btns {\n    max-width: 300px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#start {\n    font-size: 20px;\n    padding: 10px;\n}\n\n.placed-ship {\n    height: 23px;\n    width: 23px;\n    background: rgb(49, 231, 21);\n    border: 1px solid black;\n\n}\n\n.hide {\n    display: none !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/gameboard */ "./src/Factories/gameboard.js");
/* harmony import */ var _components_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/boards */ "./src/components/boards.js");
/* harmony import */ var _components_gameSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gameSetup */ "./src/components/gameSetup.js");
/* harmony import */ var _DOMinteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMinteraction */ "./src/DOMinteraction.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/functions */ "./src/helpers/functions.js");
/* harmony import */ var _helpers_randomPlacement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/randomPlacement */ "./src/helpers/randomPlacement.js");
/* harmony import */ var _helpers_ships__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/ships */ "./src/helpers/ships.js");
/* harmony import */ var _Factories_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Factories/player */ "./src/Factories/player.js");
/* harmony import */ var _components_gameControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gameControls */ "./src/components/gameControls.js");
/* eslint-disable no-undef */










var playerboard = new _Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]("player", "Computer");
var computerBoard = new _Factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]("computer", "Player");
var human = new _Factories_player__WEBPACK_IMPORTED_MODULE_8__["default"]("Player", computerBoard);
var computer = new _Factories_player__WEBPACK_IMPORTED_MODULE_8__["default"]("Computer", playerboard);
(0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.displayMessage)("Place your ships!");
(0,_components_boards__WEBPACK_IMPORTED_MODULE_2__["default"])("player-board");
(0,_components_boards__WEBPACK_IMPORTED_MODULE_2__["default"])("computer-board");
(0,_components_gameSetup__WEBPACK_IMPORTED_MODULE_3__.gameSetup)(playerboard);
var compSquares = document.querySelectorAll("#computer-board > .square");
var playerSquares = document.querySelectorAll("#player-board > .square");
var result;
var gameOver = false;
var firstRound = true;
var startGame = function startGame() {
  gameOver = false;
  (0,_helpers_randomPlacement__WEBPACK_IMPORTED_MODULE_6__.randomShipPlacement)(computerBoard, _helpers_ships__WEBPACK_IMPORTED_MODULE_7__.computerShips);
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.hide)("setup-btns");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.unhide)("computer");
  (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.displayMessage)("Player turn");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.hide)("start-btn");
  (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.hide)("replay-btn");
  compSquares.forEach(function (el) {
    return el.addEventListener("mouseover", function () {
      return (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.attackHighlight)(el);
    });
  });
  compSquares.forEach(function (el) {
    return el.addEventListener("mouseout", function () {
      return (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.attackUnhighlight)(el);
    });
  });
  if (firstRound === true) {
    compSquares.forEach(function (el) {
      return el.addEventListener("click", function () {
        if (gameOver === true) {
          (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.unhide)("replay-btn");
          return;
        }
        result = human.takeShot(el);
        (0,_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.displayAttack)(el, result);
        if (result === "Game Over") gameOver = true;
        if (gameOver === true) {
          (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_5__.unhide)("replay-btn");
          return;
        }
        result = setTimeout(function () {
          computer.randomShot();
        }, 1.5 * 1000);
        if (result === "Game Over") gameOver = true;
        firstRound = false;
      });
    });
  }
};
var startGameBtn = document.getElementById("start");
var replayBtn = document.getElementById("replay");
startGameBtn.addEventListener("click", startGame);
replayBtn.addEventListener("click", function () {
  playerboard.resetBoard();
  computerBoard.resetBoard();
  (0,_components_gameControls__WEBPACK_IMPORTED_MODULE_9__.restartGame)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle15ab0a0e6caf3d4c6bb5.js.map