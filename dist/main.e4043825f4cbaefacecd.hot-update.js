/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGLO"]("main",{

/***/ "./src/modules/audioControl.js":
/*!*************************************!*\
  !*** ./src/modules/audioControl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar audioControl = function audioControl() {\n  var music = document.querySelector('.music'),\n      range = document.querySelector('.range'),\n      volume = document.querySelector('.volume-icon'),\n      volumeStatus = volume.querySelector('use');\n  music.volume = range.value / 100;\n  range.addEventListener('input', function () {\n    music.volume = range.value / 100;\n\n    if (range.value == 0) {\n      volumeStatus.setAttribute('xlink:href', 'sprite.svg#volume-off');\n    } else {\n      volumeStatus.setAttribute('xlink:href', 'sprite.svg#volume');\n    }\n  });\n  volume.addEventListener('click', function () {\n    if (music.volume !== 0) {\n      music.volume = 0;\n      range.value = 0;\n      volumeStatus.setAttribute('xlink:href', 'sprite.svg#volume-off');\n    } else {\n      volumeStatus.setAttribute('xlink:href', 'sprite.svg#volume');\n      range.value = 10;\n      music.volume = range.value / 100;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioControl);\n\n//# sourceURL=webpack://3DGLO/./src/modules/audioControl.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c56d78940c9ef4796979"
/******/ 	})();
/******/ 	
/******/ }
);