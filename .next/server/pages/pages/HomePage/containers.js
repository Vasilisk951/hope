"use strict";
(() => {
var exports = {};
exports.id = 862;
exports.ids = [862,244];
exports.modules = {

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageContainer": () => (/* binding */ HomePageContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(973);
/* harmony import */ var _components_HomePageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);




const HomePageContainer = ()=>{
    const { 0: activeItem , 1: setActiveItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data__WEBPACK_IMPORTED_MODULE_3__.helpPhrases[0]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInterval(()=>{
            setActiveItem(_data__WEBPACK_IMPORTED_MODULE_3__.helpPhrases[getRandomInt(_data__WEBPACK_IMPORTED_MODULE_3__.helpPhrases.length - 1)]);
        }, 15000);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomePageLayout__WEBPACK_IMPORTED_MODULE_2__.HomePageLayout, {
        activeItem: activeItem
    });
};


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [973,536], () => (__webpack_exec__(181)));
module.exports = __webpack_exports__;

})();