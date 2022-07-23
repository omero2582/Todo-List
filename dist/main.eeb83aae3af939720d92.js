/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --nav-bar-color: hsl(0, 100%, 87%);\r\n    --side-bar-color:hsl(194, 100%, 76%);\r\n    --side-bar-hover: hsl(194, 100%, 60%);\r\n    --content-color: #fdffd0;\r\n    --background-color:hsl(160, 100%, 87%);\r\n    --options-color: rgb(255, 255, 255);\r\n    --font-stack:Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-family: var(--font-stack);\r\n    /*\r\n    hsl(194, 100%, 76%);\r\n    hsl(160, 100%, 87%)\r\n    #fdffd0\r\n    beige\r\n    aquamarine;\r\n    lightskyblue\r\n    lightsalmon;\r\n    lightcoral\r\n\r\n    lightgreen\r\n    lightslategray*/\r\n\r\n    --close-btn-color: hsl(0, 0%, 0%);\r\n    --close-btn-hover: hsl(0, 0%, 22%);\r\n    /* box-sizing: border-box; */\r\n\r\n    --modal-txt-color: white;\r\n    --modal-background-color: rgb(0, 0, 0, 0.4);\r\n    --modal-content-color: teal;\r\n}\r\n\r\nbody{\r\n    background-color: var(--background-color);\r\n    display: grid;\r\n    grid-template-columns: 240px 1fr;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n.header{\r\n    background-color: var(--nav-bar-color);\r\n    grid-column: 1/-1;\r\n}\r\n\r\n.side-bar{\r\n    background-color: var(--side-bar-color);\r\n}\r\n\r\n.side-bar ul{\r\n    padding: 0px;\r\n}\r\n\r\n\r\n.side-bar ul li:hover{\r\n    cursor: pointer;\r\n    background-color: var(--side-bar-hover);\r\n}\r\n\r\n.side-bar ul li{\r\n    padding: 10px 0px;\r\n    padding-left:40px;\r\n    font-size: 1.10rem;\r\n}\r\n\r\n.side-bar .new-project-txt{\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.side-bar .new-project-buttons button{\r\n    /* width: 70px; */\r\n    font-size: 0.95rem;\r\n    margin-top: 5px;\r\n    padding: 3px 10px;\r\n}\r\n\r\n.side-bar .new-project-buttons{\r\n    padding-left: 30px;\r\n}\r\n\r\n.side-bar .project-form{\r\n    display: none;\r\n    padding-top: 0;\r\n    padding-left: 15px;\r\n}\r\n\r\n.side-bar #new-project{\r\n    font-size: 1rem;\r\n    width: 200px;\r\n}\r\n\r\n.side-bar #new-project:focus-visible{    /*input:focus-visible, textarea:focus-visible*/\r\n    outline: -webkit-focus-ring-color solid 1px;\r\n}\r\n\r\n.main{\r\n    background-color: var(--content-color);\r\n}\r\n\r\n.main .options {\r\n    background-color: var(--options-color);\r\n}\r\n\r\n.side-bar ul .project{\r\n    display: grid;\r\n    grid-template-columns: 1fr max-content;\r\n    align-items: center;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.close-button{\r\n    margin-right: 7px;\r\n    padding: 0px 8px;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.new-todo .todo-form{\r\n    display: none;\r\n}\r\n\r\n/*TABLE*/\r\n.todos-table{\r\n    border-collapse: collapse;\r\n}\r\n\r\n.todos-table th, .todos-table td{\r\n    padding: 5px 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}\r\n\r\n.todos-table tr{\r\n    background-color: var(--background-color);\r\n}\r\n.todos-table tr:hover{\r\n    background-color: aqua;\r\n    cursor: pointer;\r\n}\r\n\r\n/*MODAL ------------*/\r\n\r\n.modal{\r\n    background-color: var(--modal-background-color);\r\n    color: var(--modal-txt-color);\r\n \r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    padding-top: 100px;     /*moves modal content down*/\r\n    display: none;\r\n    z-index: 1;\r\n}\r\n\r\n.modal-content{\r\n    background-color:var(--modal-content-color);\r\n    width: 350px;\r\n    position: relative;\r\n    margin: auto;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n.modal-content h2{\r\n    font-weight: 500;\r\n    margin: 0;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.modal-content .modal-header{\r\n    padding: 23px 16px 12px;\r\n}\r\n\r\n.modal-header .close-modal{\r\n    background-color: var(--close-btn-color);\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 16px;\r\n    display: flex;      /*center X*/\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header .close-modal:hover{\r\n    cursor: pointer;\r\n    background-color: var(--close-btn-hover);\r\n}\r\n\r\n.modal-body form{\r\n    padding: 0 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\r\n\r\n.modal-body label{\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.modal form p{\r\n    display: grid;\r\n    /* margin: 16px 0px;   default */\r\n    margin: 16px 0px;\r\n}\r\n\r\n.modal input{\r\n    font-size: 1.20rem;\r\n    width: 90%;\r\n}\r\n\r\n.modal input[type=\"number\"]{\r\n    font-size: 1.15rem;\r\n    width: 80px;\r\n}\r\n\r\n.modal textarea{\r\n    font-size: 1.15rem;\r\n    font-family: var(--font-stack);\r\n}\r\n\r\n.modal button[type=\"submit\"]{\r\n    font-size: 1.25rem;\r\n    width: 35%;\r\n    justify-self: center;\r\n    /* padding: 1px 6px;  default*/\r\n    padding: 4px 6px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,kCAAkC;IAClC,oCAAoC;IACpC,qCAAqC;IACrC,wBAAwB;IACxB,sCAAsC;IACtC,mCAAmC;IACnC,mJAAmJ;IACnJ,8BAA8B;IAC9B;;;;;;;;;;;mBAWe;;IAEf,iCAAiC;IACjC,kCAAkC;IAClC,4BAA4B;;IAE5B,wBAAwB;IACxB,2CAA2C;IAC3C,2BAA2B;AAC/B;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA,yCAAyC,8CAA8C;IACnF,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA,QAAQ;AACR;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;AAC7C;AACA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA,qBAAqB;;AAErB;IACI,+CAA+C;IAC/C,6BAA6B;;IAE7B,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,kBAAkB,MAAM,2BAA2B;IACnD,aAAa;IACb,UAAU;AACd;;AAEA;IACI,2CAA2C;IAC3C,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,aAAa,OAAO,WAAW;IAC/B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,8BAA8B;IAC9B,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\r\n\r\n:root{\r\n    --nav-bar-color: hsl(0, 100%, 87%);\r\n    --side-bar-color:hsl(194, 100%, 76%);\r\n    --side-bar-hover: hsl(194, 100%, 60%);\r\n    --content-color: #fdffd0;\r\n    --background-color:hsl(160, 100%, 87%);\r\n    --options-color: rgb(255, 255, 255);\r\n    --font-stack:Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-family: var(--font-stack);\r\n    /*\r\n    hsl(194, 100%, 76%);\r\n    hsl(160, 100%, 87%)\r\n    #fdffd0\r\n    beige\r\n    aquamarine;\r\n    lightskyblue\r\n    lightsalmon;\r\n    lightcoral\r\n\r\n    lightgreen\r\n    lightslategray*/\r\n\r\n    --close-btn-color: hsl(0, 0%, 0%);\r\n    --close-btn-hover: hsl(0, 0%, 22%);\r\n    /* box-sizing: border-box; */\r\n\r\n    --modal-txt-color: white;\r\n    --modal-background-color: rgb(0, 0, 0, 0.4);\r\n    --modal-content-color: teal;\r\n}\r\n\r\nbody{\r\n    background-color: var(--background-color);\r\n    display: grid;\r\n    grid-template-columns: 240px 1fr;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n.header{\r\n    background-color: var(--nav-bar-color);\r\n    grid-column: 1/-1;\r\n}\r\n\r\n.side-bar{\r\n    background-color: var(--side-bar-color);\r\n}\r\n\r\n.side-bar ul{\r\n    padding: 0px;\r\n}\r\n\r\n\r\n.side-bar ul li:hover{\r\n    cursor: pointer;\r\n    background-color: var(--side-bar-hover);\r\n}\r\n\r\n.side-bar ul li{\r\n    padding: 10px 0px;\r\n    padding-left:40px;\r\n    font-size: 1.10rem;\r\n}\r\n\r\n.side-bar .new-project-txt{\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.side-bar .new-project-buttons button{\r\n    /* width: 70px; */\r\n    font-size: 0.95rem;\r\n    margin-top: 5px;\r\n    padding: 3px 10px;\r\n}\r\n\r\n.side-bar .new-project-buttons{\r\n    padding-left: 30px;\r\n}\r\n\r\n.side-bar .project-form{\r\n    display: none;\r\n    padding-top: 0;\r\n    padding-left: 15px;\r\n}\r\n\r\n.side-bar #new-project{\r\n    font-size: 1rem;\r\n    width: 200px;\r\n}\r\n\r\n.side-bar #new-project:focus-visible{    /*input:focus-visible, textarea:focus-visible*/\r\n    outline: -webkit-focus-ring-color solid 1px;\r\n}\r\n\r\n.main{\r\n    background-color: var(--content-color);\r\n}\r\n\r\n.main .options {\r\n    background-color: var(--options-color);\r\n}\r\n\r\n.side-bar ul .project{\r\n    display: grid;\r\n    grid-template-columns: 1fr max-content;\r\n    align-items: center;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.close-button{\r\n    margin-right: 7px;\r\n    padding: 0px 8px;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.new-todo .todo-form{\r\n    display: none;\r\n}\r\n\r\n/*TABLE*/\r\n.todos-table{\r\n    border-collapse: collapse;\r\n}\r\n\r\n.todos-table th, .todos-table td{\r\n    padding: 5px 10px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n}\r\n\r\n.todos-table tr{\r\n    background-color: var(--background-color);\r\n}\r\n.todos-table tr:hover{\r\n    background-color: aqua;\r\n    cursor: pointer;\r\n}\r\n\r\n/*MODAL ------------*/\r\n\r\n.modal{\r\n    background-color: var(--modal-background-color);\r\n    color: var(--modal-txt-color);\r\n \r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    padding-top: 100px;     /*moves modal content down*/\r\n    display: none;\r\n    z-index: 1;\r\n}\r\n\r\n.modal-content{\r\n    background-color:var(--modal-content-color);\r\n    width: 350px;\r\n    position: relative;\r\n    margin: auto;\r\n    padding-bottom: 16px;\r\n}\r\n\r\n.modal-content h2{\r\n    font-weight: 500;\r\n    margin: 0;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.modal-content .modal-header{\r\n    padding: 23px 16px 12px;\r\n}\r\n\r\n.modal-header .close-modal{\r\n    background-color: var(--close-btn-color);\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 16px;\r\n    display: flex;      /*center X*/\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header .close-modal:hover{\r\n    cursor: pointer;\r\n    background-color: var(--close-btn-hover);\r\n}\r\n\r\n.modal-body form{\r\n    padding: 0 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n}\r\n\r\n.modal-body label{\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.modal form p{\r\n    display: grid;\r\n    /* margin: 16px 0px;   default */\r\n    margin: 16px 0px;\r\n}\r\n\r\n.modal input{\r\n    font-size: 1.20rem;\r\n    width: 90%;\r\n}\r\n\r\n.modal input[type=\"number\"]{\r\n    font-size: 1.15rem;\r\n    width: 80px;\r\n}\r\n\r\n.modal textarea{\r\n    font-size: 1.15rem;\r\n    font-family: var(--font-stack);\r\n}\r\n\r\n.modal button[type=\"submit\"]{\r\n    font-size: 1.25rem;\r\n    width: 35%;\r\n    justify-self: center;\r\n    /* padding: 1px 6px;  default*/\r\n    padding: 4px 6px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/Date-item.js":
/*!**************************!*\
  !*** ./src/Date-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DateItem = () => {
    const date = new Date();
    const getDate = () => date;
    const sortByDateOld = (array) => {
        array.sort( (a,b) => a.getDate().getTime() - b.getDate().getTime());
    };
    const sortByDateNew = (array) => {
        array.sort( (a,b) => b.getDate().getTime() - a.getDate().getTime());
    };
    return {getDate, sortByDateNew, sortByDateOld}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateItem);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _Date_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Date-item */ "./src/Date-item.js");



const Project = (name) =>{
    let {getDate} = (0,_Date_item__WEBPACK_IMPORTED_MODULE_1__["default"])();
    let todoItems = [];
    const getName = () => name;
    const getTodoItems = () => todoItems;
    const setName = (string) => name = string;
    const addItem = (todoItem) => todoItems.push(todoItem);
    const removeItem = (timeInMs) => todoItems.find(item => item.getDate().getTime() === timeInMs);
    const getId = () => getDate().getTime();
    return {getName, getTodoItems, getDate, getId, setName, addItem, removeItem}; 
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

//d1.toLocaleTimeString() = 8:05:33 AM

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");




const DisplayController = () => {
    //cache
    //sidebar
    const myProjectsText = document.querySelector('.my-projects-txt');// need to add when we click on this ->  show projects in .content
    const listMyProjects = document.querySelector('.my-projects');
    const newProjectText = document.querySelector('.new-project-txt');
    const formNewProject = document.querySelector('.project-form');
    const btnCancelNewProject = document.querySelector('.cancel-project');
    //newProject
    const newProjectName = document.querySelector('#new-project');
    
    //content
    const content = document.querySelector(".content");
    const tableProjectTodos = document.querySelector('.todos-table');
    const projectTodoOptions = document.querySelector('.project-todo-options');
    const newTodoText = document.querySelector('.new-todo-txt');
    const todosHeader = document.querySelector('.todos-header');

    //table headers
    const nameHeader= document.querySelector('.name-header');
    const descriptionHeader= document.querySelector('.description-header');
    const dateHeader= document.querySelector('.date-header');
    const priorityHeader= document.querySelector('.priority-header');

    //modal Todo template
    const template = document.querySelector('.modal-template');

    //modal newTodo
    const clone1 = template.content.cloneNode(true);
    const modal = clone1.querySelector('.modal');
    document.body.appendChild(modal);
    const formNewTodo = modal.querySelector('.todo-form');
    const btnCloseModal = modal.querySelector('.close-modal');
    //inputs newTodo
    const newTodoName = modal.querySelector('#todo-name');
    const newTodoDescription = modal.querySelector('#todo-description');
    const newTodoPriority = modal.querySelector('#todo-priority');
    const newTodoDueDate = modal.querySelector('#todo-due-date');

    //modal editTodo
    const cloneEdit = template.content.cloneNode(true);
    const modalEditTodo = cloneEdit.querySelector('.modal');
    document.body.appendChild(modalEditTodo);
    const formEditTodo = modalEditTodo.querySelector('.todo-form');
    const btnCloseEditModal = modalEditTodo.querySelector('.close-modal');
    //inputs editTodo
    const editTodoName = modalEditTodo.querySelector('#todo-name');
    const editTodoDescription = modalEditTodo.querySelector('#todo-description');
    const editTodoPriority = modalEditTodo.querySelector('#todo-priority');
    const editTodoDueDate = modalEditTodo.querySelector('#todo-due-date');


    const checkTarget = (e) => {
        if (e.target === modal){
            closeModal(modal);
        }else if (e.target == modalEditTodo){
            closeModal(modalEditTodo);
        }
    }

    const submitNewProject = (e) => {
        e.preventDefault();
        let p1 = (0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])(newProjectName.value);
        _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('addProject', p1);
        closeNewProjectForm();
        formNewProject.reset();
    };
    
    const submitNewTodo = (e) => {
        e.preventDefault();
        let t1 = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__["default"])(newTodoName.value);
        t1.setDescription(newTodoDescription.value);
        t1.setPriority(newTodoPriority.value);
        t1.setDueDate(newTodoDueDate.value);
        _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('addTodo', t1);
        closeModal(modal);
        formNewTodo.reset();
    };
    
    const openNewProjectForm = () => {
        formNewProject.style.display = 'inline-block';
        newProjectName.focus();
    };

    const closeNewProjectForm = () => {
        formNewProject.style.display = 'none';
    };
    const openModal = (modal) => {
        modal.style.display = 'block';
        console.log(modal);
        newTodoName.focus();
    };

    const closeModal = (modal) => {
        modal.style.display = 'none';
    };

    const renderProjectsBar  = (projectsArray) => {
        console.log('render Projects Bar')
        listMyProjects.innerHTML = '';
        
        listMyProjects.appendChild(myProjectsText);
        projectsArray.forEach(project => {
            const id = project.getId();
            const li = document.createElement('li');
            const closeButton = document.createElement('span');
            closeButton.innerHTML = '&times';
            closeButton.classList.add('close-button');
            li.textContent = project.getName();
            li.classList.add('project');
            li.setAttribute('data-key', id);
            li.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('selectProject', project));
            closeButton.addEventListener( 'click', e => {
                e.stopPropagation();    //stops the li click event, and only fires this close btn event
                _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('removeProject', id);   
            });
            li.appendChild(closeButton);
            listMyProjects.appendChild(li);
        });
    };

    const renderProjectTodos = (project) => {
        console.log(`---render projectTodos for ${project.getName()}`);
        content.innerHTML = '';
        tableProjectTodos.innerHTML = '';
        tableProjectTodos.appendChild(todosHeader);
        const tableBody = getTodoTableBody(project.getTodoItems());
        tableProjectTodos.appendChild(tableBody);
        content.appendChild(tableProjectTodos);
        content.appendChild(projectTodoOptions);
        closeModal(modal);
        formNewTodo.reset();
    };

    const getTodoTableItemRow = (item) =>{
        const {getName, getDescription, getDueDate, getPriority, getId} = item;
        const todoItemInfo = [getName(), getDescription(), getDueDate().toDateString(), getPriority()];
        const tableRow = document.createElement('tr');
        todoItemInfo.forEach(property => {
            const tableData = document.createElement('td');
            tableData.textContent = property;
            tableRow.appendChild(tableData);
        });
        tableRow.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('selectTodoItemRow', item));
        return tableRow;
    };

    const getTodoTableBody = (todoItems) => {
        const tableBody = document.createElement('tbody');
        todoItems.forEach(item => tableBody.appendChild(getTodoTableItemRow(item)));
        return tableBody;
    };

    const renderNoSelection = () => {
        content.innerHTML = 'No Selection';
    };

    const submitEditTodo = (item) => {
        // e.preventDefault(); put in caller
        item.setName(editTodoName.value);
        item.setDescription(editTodoDescription.value);
        item.setPriority(editTodoPriority.value);
        item.setDueDate(editTodoDueDate.value);
        
        closeModal(modalEditTodo);
        formEditTodo.reset();
        console.log(`${item.getName()} updated!`);
        
    };

    const renderEditTodoModal = (todoItem) =>{
        console.log('renderEditTODO');

        editTodoName.value = todoItem.getName();
        editTodoDescription.value = todoItem.getDescription();
        editTodoPriority.value = todoItem.getPriority();
        editTodoDueDate.valueAsDate = todoItem.getDueDate(); 

        openModal(modalEditTodo);
    };

    //Bind
    //NewProject
    newProjectText.addEventListener('click', openNewProjectForm);
    formNewProject.addEventListener('submit', submitNewProject);
    btnCancelNewProject.addEventListener('click', closeNewProjectForm);

    //Modals
    window.addEventListener('click', checkTarget);

    //modal NewTodo
    formNewTodo.addEventListener('submit', submitNewTodo);
    newTodoText.addEventListener('click', () => openModal(modal));
    btnCloseModal.addEventListener('click', () => closeModal(modal));

    //modal EditTodo
    btnCloseEditModal.addEventListener('click', () => closeModal(modalEditTodo));
    formEditTodo.addEventListener('submit', e => {
        e.preventDefault();
        _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('submitEditTodo');
    });

    //table
    nameHeader.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('sortName'));
    descriptionHeader.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('sortDescription'));
    dateHeader.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('sortDueDate'));
    priorityHeader.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].emit('sortPriority'));


    return {renderProjectsBar, renderProjectTodos, renderNoSelection, openModal, renderEditTodoModal, submitEditTodo};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayController);

//TODO
//let clone = template.content.cloneNode(true);
// ^^ with ES6 template
// maybe not actually... works fine now, just have to conclude whether or not it is good practice to 
// cache the new projects UL, and then set the .content and the UL's innerHtml to empty
// then append back in the UL

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//events - a super-basic Javascript (publish subscribe) pattern

const events = {
    events: {},
    on: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    },
    emit: function (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Date_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date-item */ "./src/Date-item.js");

const TodoItem = (name) => {
    let {getDate} = (0,_Date_item__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let description, priority, dueDate;
    const setName = (string) => name = string;
    const setDescription = (string) => description = string;
    const setPriority = (string) => priority = string;
    const setDueDate = (string) => dueDate = new Date(string);  //can add an if to check if theres a valid string
                                                                //in case i want to display a blank date
    const getName = () => name;
    const getDescription = () => description;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getId = () => getDate().getTime();
    return {setName, setDescription, setDueDate, setPriority, getDate, getId, getName, getDueDate, getDescription, getPriority};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _Date_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Date-item */ "./src/Date-item.js");






//TODO think about ID setting for Projects when you load them from localStorage...
// id counter will end up resetting to 0, and new Book IDs will CLASH
// have to save the currentID counter somewhere in the JSON ?? 
// either way, dont know if I should set the ID here, or inside Projects' prototype
// Same problem will happen with our old Library project
let allProjects = [];
let selectedProject;
let selectedTodoItem;
let d1 = (0,_display_controller__WEBPACK_IMPORTED_MODULE_3__["default"])();
const sortBy = {
    name: true,
    description: true,
    dueDate: true,
    priority: true,
};

const addProject = (project) => {
    allProjects.push(project)
    d1.renderProjectsBar(allProjects);
    if (allProjects.length == 1){
        selectProject(project);
    };
    //sortBy(sortInput.value);
    //bookId++;
};

const removeProject = (id) => {
    let index = allProjects.findIndex(project => project.getId() === id);
    allProjects.splice(index, 1)
    d1.renderProjectsBar(allProjects);
    console.log(`removed project index ${id}`);
    if (index == selectedProject.getId() || allProjects.length == 0){
        d1.renderNoSelection();
    }
};

const addTodoToSelected = (todoItem) =>{
    console.log(`added ${todoItem.getName()} to ${selectedProject.getName()}`);
    selectedProject.addItem(todoItem);
    d1.renderProjectTodos(selectedProject);
};

const selectProject = (project) => {
    selectedProject = project;
    d1.renderProjectTodos(project);
};

const sortName = () =>{
    if (sortBy.name){
        selectedProject.getTodoItems().sort( (t1, t2) => t1.getName().localeCompare(t2.getName()) );
    }else{
        selectedProject.getTodoItems().sort( (t1, t2) => t2.getName().localeCompare(t1.getName()) );
    }
    sortBy.name = !(sortBy.name);
    d1.renderProjectTodos(selectedProject);
};

const sortDescription = () =>{
    if (sortBy.description){
        selectedProject.getTodoItems().sort( (t1, t2) => t1.getDescription().length - t2.getDescription().length );
    }else{
        selectedProject.getTodoItems().sort( (t1, t2) => t2.getDescription().length - t1.getDescription().length );
    }
    sortBy.description = !(sortBy.description);
    d1.renderProjectTodos(selectedProject);
};

const sortCreationDate = () =>{
    if (sortBy.creationDate){
        selectedProject.getTodoItems().sort( (a,b) => b.getId() - a.getId());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => a.getId() - b.getId());
    }
    sortBy.creationDate = !(sortBy.creationDate);
    d1.renderProjectTodos(selectedProject);
};

const sortDueDate = () =>{
    if (sortBy.dueDate){
        selectedProject.getTodoItems().sort( (a,b) => a.getDueDate().getTime() - b.getDueDate().getTime());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => b.getDueDate().getTime() - a.getDueDate().getTime());
    }
    sortBy.dueDate = !(sortBy.dueDate);
    d1.renderProjectTodos(selectedProject);
};

const sortPriority = () =>{
    if (sortBy.priority){
        selectedProject.getTodoItems().sort( (a,b) => a.getPriority() - b.getPriority());
    }else{
        selectedProject.getTodoItems().sort( (a,b) => b.getPriority() - a.getPriority());
    }
    sortBy.priority = !(sortBy.priority);
    d1.renderProjectTodos(selectedProject);
};

const selectTodoItemRow = (todoItem) =>{
    // const todoItem = selectedProject.getTodoItems().find(item => item.getId() == id);
    selectedTodoItem = todoItem;
    d1.renderEditTodoModal(todoItem);
};

const submitEditTodo = () => {
    d1.submitEditTodo(selectedTodoItem);
    d1.renderProjectTodos(selectedProject);
};

//events
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('addProject', addProject);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('removeProject', removeProject);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('addTodo', addTodoToSelected); 
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('selectProject', selectProject);

//table events
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('sortName', sortName);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('sortDescription', sortDescription);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('sortDueDate', sortDueDate);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('sortPriority', sortPriority);
_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('selectTodoItemRow', selectTodoItemRow);

_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].on('submitEditTodo', submitEditTodo);

d1.renderNoSelection();
const p1 = (0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])('test');
addProject((0,_Project__WEBPACK_IMPORTED_MODULE_2__["default"])('Default'));

// !!!!!!! TODO 
// we dont know which project to add the new todo to
// from just the display Controllers' new Todo submit
//maybe have a global projectSelected here ?
//TODO prob take out the rendering TodoList inside displayController after selecting a project,
// and instead call it from out here. not sure

//all this kinda half done now ^^^^
})();

/******/ })()
;
//# sourceMappingURL=main.eeb83aae3af939720d92.js.map