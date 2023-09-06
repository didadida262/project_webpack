/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({
    
        './index.js' : 
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            
__webpack_require__.r(__webpack_exports__);

 var ____WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./helloGirl.js");
const helloWorldStr = ____WEBPACK_IMPORTED_MODULE_0__.default();
function component() {
  const element = document.createElement("div");
  element.innerHTML = helloWorldStr;
  return element;
}
document.body.appendChild(component());
        }),
    
        './helloGirl.js' : 
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            
__webpack_require__.r(__webpack_exports__);

 
__webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});

 var ____WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./hello.js");
const world = 'girl';
const helloWorld = () => `${____WEBPACK_IMPORTED_MODULE_0__.default} ${world}`;
const __WEBPACK_DEFAULT_EXPORT__ = helloWorld;
        }),
    
        './hello.js' : 
        ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            
__webpack_require__.r(__webpack_exports__);

 
__webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});

 const hello = 'hello';
const __WEBPACK_DEFAULT_EXPORT__ = hello;
        }),
    
});

/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__('./index.js');
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map