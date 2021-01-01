/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGLO"]("main",{

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar getData = function getData() {\n  var cards = document.querySelector('.cards');\n  fetch('https://marvel-4ee1f-default-rtdb.firebaseio.com/test.json').then(function (response) {\n    if (response.status !== 200) {\n      throw 'error';\n    }\n\n    return response.json();\n  }).then(function (data) {\n    data.forEach(function (item) {\n      var heroCard = \"<div class=\\\"hero-card\\\">\\n\\t\\t\\t\\t\\t\\t<img src=\\\"https://raw.githubusercontent.com/Quper24/dbHeroes/master/\".concat(item.photo, \"\\\" alt=\\\"\").concat(item.name, \"\\\" class=\\\"hero-photo\\\" />\\n\\t\\t\\t\\t\\t\\t<div class=\\\"hero-info\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"hero-label\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Name:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Real name:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Species:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Citizenship:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Gender:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Birthday:</span>\\n                                <span class=\\\"key\\\">Actors:</span>\\n                                <span class=\\\"key\\\">Status:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"key\\\">Movies:</span>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"hero-descr\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"name\\\">\").concat(item.name, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"real-name\\\">\").concat(item.realName, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"species\\\">\").concat(item.species, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"citizenship\\\">\").concat(item.citizenship, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"gender\\\">\").concat(item.gender, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"birthday\\\">\").concat(item.birthDay, \"</span>\\n                                <span class=\\\"sense\\\" id=\\\"actors\\\">\").concat(item.actors, \"</span>\\n                                <span class=\\\"sense\\\" id=\\\"status\\\">\").concat(item.status, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"sense\\\" id=\\\"movies\\\">\").concat(item.movies, \"</span>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n                    </div>\");\n      cards.insertAdjacentHTML('beforeend', heroCard);\n    });\n  })[\"catch\"](function (error) {\n    console.error(error);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://3DGLO/./src/modules/getData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "e4043825f4cbaefacecd"
/******/ 	})();
/******/ 	
/******/ }
);