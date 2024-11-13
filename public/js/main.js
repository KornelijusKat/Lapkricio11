/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api/WeatherApi.js":
/*!**********************************!*\
  !*** ./src/js/api/WeatherApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_ajaxService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/ajaxService */ "./src/js/modules/ajaxService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var WeatherApi = /*#__PURE__*/function () {
  function WeatherApi(cityName, countryCode) {
    _classCallCheck(this, WeatherApi);
    this.cityName = cityName;
    this.countryCode = countryCode;
    this.key = 'fdf2b36efb14a784acff8e5979be8adc';
  }
  return _createClass(WeatherApi, [{
    key: "getGeoLocation",
    value: function getGeoLocation() {
      var uri = "http://api.openweathermap.org/geo/1.0/direct?q=".concat(this.cityName, ",").concat(this.countryCode, "&limit=1&appid=").concat(this.key);
      return (0,_modules_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(uri).then(function (response) {
        var location = response[0];
        return {
          lat: location.lat,
          lon: location.lon
        };
      });
    }
  }, {
    key: "getTemperature",
    value: function getTemperature() {
      var _this = this;
      return this.getGeoLocation().then(function (response) {
        console.log(response);
        console.log(response.lon);
        var uri = "http://api.openweathermap.org/data/2.5/weather?lat=".concat(response.lat, "&lon=").concat(response.lon, "&appid=").concat(_this.key);
        return (0,_modules_ajaxService__WEBPACK_IMPORTED_MODULE_0__["default"])(uri);
      }).then(function (weatherData) {
        return weatherData;
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherApi);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_WeatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/WeatherApi */ "./src/js/api/WeatherApi.js");
/* harmony import */ var _utils_TemperatureUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/TemperatureUtils */ "./src/js/utils/TemperatureUtils.js");
/* harmony import */ var _modules_renderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCard */ "./src/js/modules/renderCard.js");



//let weather = new WeatherApi('london','GB');
//weather.getTemperature().then(result => console.log(result))
//let temp = new TemperatureUtils('london',"GB");
//console.log(temp.getCelciusTemperature())
(0,_modules_renderCard__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/js/modules/ajaxService.js":
/*!***************************************!*\
  !*** ./src/js/modules/ajaxService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ajaxService = function ajaxService(uri) {
  return fetch(uri).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
  })["catch"](function (error) {
    throw error;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxService);

/***/ }),

/***/ "./src/js/modules/renderCard.js":
/*!**************************************!*\
  !*** ./src/js/modules/renderCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherService */ "./src/js/modules/weatherService.js");
/* harmony import */ var _weatherCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherCard */ "./src/js/modules/weatherCard.js");


var renderCard = function renderCard() {
  document.querySelector('.card__form').addEventListener('submit', function (e) {
    e.preventDefault();
    var cityInput = document.querySelector('.card__input--city');
    var countryInput = document.querySelector('.card__input--country');
    (0,_weatherService__WEBPACK_IMPORTED_MODULE_0__["default"])(cityInput.value, countryInput.value).then(function (emoji) {
      console.log("".concat(emoji, " + hi"));
      document.querySelector('.card__body').appendChild((0,_weatherCard__WEBPACK_IMPORTED_MODULE_1__["default"])(cityInput.value, emoji));
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCard);

/***/ }),

/***/ "./src/js/modules/weatherCard.js":
/*!***************************************!*\
  !*** ./src/js/modules/weatherCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var weatherCard = function weatherCard(city, emoji) {
  var weatherDiv = document.createElement('div');
  weatherDiv.innerHTML = "<div class=\"card__weatherDiv\">\n                                <div>\n                                    <h2>".concat(city, "</h2>\n                                </div>\n                                <div>\n                                    <p>").concat(emoji, "</p>\n                                </div>\n                            </div>");
  return weatherDiv;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCard);

/***/ }),

/***/ "./src/js/modules/weatherService.js":
/*!******************************************!*\
  !*** ./src/js/modules/weatherService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_EmojiUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/EmojiUI */ "./src/js/ui/EmojiUI.js");
/* harmony import */ var _utils_TemperatureUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/TemperatureUtils */ "./src/js/utils/TemperatureUtils.js");
/* harmony import */ var _api_WeatherApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/WeatherApi */ "./src/js/api/WeatherApi.js");



var weatherService = function weatherService(city, countryCode) {
  var api = new _api_WeatherApi__WEBPACK_IMPORTED_MODULE_2__["default"](city, countryCode);
  return api.getTemperature().then(function (result) {
    var tempe = new _utils_TemperatureUtils__WEBPACK_IMPORTED_MODULE_1__["default"](city, countryCode, result.main.temp);
    console.log(result.main.temp);
    var temperature = tempe.getCelciusTemperature();
    var emoji = new _ui_EmojiUI__WEBPACK_IMPORTED_MODULE_0__["default"](temperature);
    return emoji.showEmoji();
  });
  //let temp = new TemperatureUtils(city,countryCode);
  // const temperature = temp.getCelciusTemperature()
  //console.log(temp.getCelciusTemperature());
  // let emoji = new EmojiUI(temperature);
  //return emoji.showEmoji();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherService);

/***/ }),

/***/ "./src/js/ui/EmojiUI.js":
/*!******************************!*\
  !*** ./src/js/ui/EmojiUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var EmojiUI = /*#__PURE__*/function () {
  function EmojiUI(temperature) {
    _classCallCheck(this, EmojiUI);
    this.temperature = temperature;
  }
  return _createClass(EmojiUI, [{
    key: "showEmoji",
    value: function showEmoji() {
      console.log("".concat(this.temperature, " hello"));
      if (this.temperature <= 0) return "\u2744\uFE0F ".concat(this.temperature, "\xB0C");else if (this.temperature > 0 && this.temperature <= 15) {
        return "\u2601\uFE0F ".concat(this.temperature, "\xB0C");
      } else {
        return "\u2600\uFE0F ".concat(this.temperature, "\xB0C");
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      this.showEmoji();
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiUI);

/***/ }),

/***/ "./src/js/utils/TemperatureUtils.js":
/*!******************************************!*\
  !*** ./src/js/utils/TemperatureUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_WeatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WeatherApi */ "./src/js/api/WeatherApi.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TemperatureUtils = /*#__PURE__*/function () {
  function TemperatureUtils(city, countryCode, kelvin) {
    _classCallCheck(this, TemperatureUtils);
    this.city = city, this.countryCode = countryCode, this.kelvin = kelvin;
  }
  return _createClass(TemperatureUtils, [{
    key: "getCelciusTemperature",
    value: function getCelciusTemperature() {
      return Math.round(this.kelvin - 273.15);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemperatureUtils);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknovember_11"] = self["webpackChunknovember_11"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;