"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,244,862];
exports.modules = {

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_HomePage_containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);


const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_HomePage_containers__WEBPACK_IMPORTED_MODULE_1__.HomePageContainer, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [973,536], () => (__webpack_exec__(75)));
module.exports = __webpack_exports__;

})();