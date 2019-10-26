/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/athena.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#athena-root{\n\tposition: relative;\n}\n\n.athena-slide{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.athena-slide.current{\n\topacity: 1;\n\tpointer-events: auto;\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Athena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Athena", function() { return Athena; });
/* harmony import */ var src_views_pres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/views/pres */ "./src/views/pres.ts");

var Athena = /** @class */ (function () {
    function Athena() {
        this.name = "Athena";
        this.version = 0.1;
        this._consoleStyle = [
            'background: #44918F',
            'color: white',
            'font-weight: bold',
            'padding: 0.2em'
        ];
        var message = "%c//" + this.name + " v" + this.version + "\\\\";
        var consoleStyle = this._consoleStyle.join('; ');
        console.log(message, consoleStyle);
    }
    Athena.prototype.generate = function (selector) {
        if (selector === void 0) { selector = '.athena-slide'; }
        this.pres = new src_views_pres__WEBPACK_IMPORTED_MODULE_0__["default"](selector);
    };
    return Athena;
}());

if (!window.Athena) {
    window.Athena = new Athena();
}
else {
    console.warn('Athena already defined');
}


/***/ }),

/***/ "./src/views/pres.ts":
/*!***************************!*\
  !*** ./src/views/pres.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!src/athena.css */ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css");
// @ts-ignore

var Pres = /** @class */ (function () {
    function Pres(selector) {
        if (selector === void 0) { selector = '.athena-slide'; }
        this.slides = [];
        this.currentSlide = 0;
        this.addStyles();
        this.createRoot();
        this.createSlides(selector);
        this.registerEvents();
        this.getSlideFromHash();
    }
    //TODO:: abstract set slide by number id vs setslide by string id
    Pres.prototype.gotoSlide = function (n) {
        window.location.hash = "slide/" + n;
    };
    Pres.prototype.setSlide = function (n) {
        var currentSlides = document.querySelectorAll('.current');
        for (var i = 0; i < currentSlides.length; i++) {
            currentSlides[i].classList.remove('current');
        }
        this.slides[n].classList.add('current');
        this.currentSlide = n;
    };
    Pres.prototype.getSlideFromHash = function () {
        if (window.location.hash) {
            var slide = window.location.hash.replace('#slide/', '');
            var n = parseInt(slide);
            if (!isNaN(n)) {
                this.setSlide(n);
            }
            else {
                //TODO:: set slide by stringId
            }
        }
        else {
            this.setSlide(this.currentSlide);
        }
    };
    Pres.prototype.createRoot = function () {
        this.rootElement = document.createElement('div');
        this.rootElement.id = 'athena-root';
        document.body.appendChild(this.rootElement);
    };
    Pres.prototype.createSlides = function (selector) {
        var slides = document.querySelectorAll(selector);
        for (var i = 0; i < slides.length; i++) {
            var slide = slides[i];
            slide.parentNode.removeChild(slide);
            slide.classList.add('athena-slide');
            this.rootElement.appendChild(slide);
            this.slides.push(slide);
        }
    };
    Pres.prototype.addStyles = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__["default"];
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    Pres.prototype.registerEvents = function () {
        var _this = this;
        window.addEventListener('hashchange', function (e) { return _this.hashChange(e); });
        window.addEventListener('keydown', function (e) { return _this.keyDown(e); });
        window.addEventListener('keyup', function (e) { return _this.keyUp(e); });
    };
    //event handlers
    Pres.prototype.hashChange = function (e) {
        var hash = window.location.hash;
        this.getSlideFromHash();
    };
    Pres.prototype.keyDown = function (e) {
        var nextSlide;
        switch (e.code) {
            case 'ArrowRight':
                nextSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : this.slides.length - 1;
                this.gotoSlide(nextSlide);
                break;
            case 'ArrowLeft':
                nextSlide = this.currentSlide > 0 ? this.currentSlide - 1 : 0;
                this.gotoSlide(nextSlide);
                break;
        }
    };
    Pres.prototype.keyUp = function (e) {
    };
    return Pres;
}());
/* harmony default export */ __webpack_exports__["default"] = (Pres);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSw2RUFBYyx1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxlQUFlLHlCQUF5QixHQUFHLDBCQUEwQixlQUFlLHlCQUF5QixHQUFHLEM7Ozs7Ozs7Ozs7OztBQ0N2TztBQUFBO0FBQUE7QUFBa0M7QUFFbEM7SUFZQztRQVhBLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUdkLGtCQUFhLEdBQWtCO1lBQ3RDLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsbUJB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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNhdGhlbmEtcm9vdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGUuY3VycmVudHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cIiIsIlxuaW1wb3J0IFByZXMgZnJvbSAnc3JjL3ZpZXdzL3ByZXMnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRwcmVzOiBQcmVzO1xuXG5cdHByaXZhdGUgX2NvbnNvbGVTdHlsZTogQXJyYXk8c3RyaW5nPiA9IFtcblx0XHQnYmFja2dyb3VuZDogIzQ0OTE4RicsXG5cdFx0J2NvbG9yOiB3aGl0ZScsXG5cdFx0J2ZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHQncGFkZGluZzogMC4yZW0nXG5cdF07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGAlYy8vJHt0aGlzLm5hbWV9IHYke3RoaXMudmVyc2lvbn1cXFxcXFxcXGA7XG5cdFx0bGV0IGNvbnNvbGVTdHlsZTogc3RyaW5nID0gdGhpcy5fY29uc29sZVN0eWxlLmpvaW4oJzsgJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSwgY29uc29sZVN0eWxlKTtcblx0fVxuXG5cdGdlbmVyYXRlKHNlbGVjdG9yOiBzdHJpbmcgPSAnLmF0aGVuYS1zbGlkZScpIHtcblx0XHR0aGlzLnByZXMgPSBuZXcgUHJlcyhzZWxlY3Rvcik7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXN7XG4gICAgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRzbGlkZXM6IEFycmF5PEVsZW1lbnQ+ID0gW107XG4gICAgY3VycmVudFNsaWRlOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcgPSAnLmF0aGVuYS1zbGlkZScpIHtcblx0XHR0aGlzLmFkZFN0eWxlcygpO1xuXG5cdFx0dGhpcy5jcmVhdGVSb290KCk7XG5cdFx0dGhpcy5jcmVhdGVTbGlkZXMoc2VsZWN0b3IpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG4gICAgfVxuXG4gICAgLy9UT0RPOjogYWJzdHJhY3Qgc2V0IHNsaWRlIGJ5IG51bWJlciBpZCB2cyBzZXRzbGlkZSBieSBzdHJpbmcgaWRcblx0Z290b1NsaWRlKG46IG51bWJlcikge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNsaWRlLyR7bn1gO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRTbGlkZShuOiBudW1iZXIpIHtcblx0XHRsZXQgY3VycmVudFNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50Jyk7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY3VycmVudFNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVzW25dLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHR0aGlzLmN1cnJlbnRTbGlkZSA9IG47XG5cdH1cblxuXHRwcml2YXRlIGdldFNsaWRlRnJvbUhhc2goKSB7XG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRsZXQgc2xpZGU6c3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnI3NsaWRlLycsICcnKTtcblx0XHRcdGxldCBuOiBudW1iZXIgPSBwYXJzZUludChzbGlkZSk7XG5cdFx0XHRpZiAoIWlzTmFOKG4pKSB7XG5cdFx0XHRcdHRoaXMuc2V0U2xpZGUobik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvL1RPRE86OiBzZXQgc2xpZGUgYnkgc3RyaW5nSWRcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTbGlkZSh0aGlzLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoc2VsZWN0b3I6IHN0cmluZykge1xuXHRcdGxldCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgc2xpZGUgPSBzbGlkZXNbaV07XG5cblx0XHRcdHNsaWRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2xpZGUpO1xuXHRcdFx0c2xpZGUuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLXNsaWRlJyk7XG5cdFx0XHR0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHNsaWRlKTtcblxuXHRcdFx0dGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRTdHlsZXMoKSB7XG5cdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblx0XHRzdHlsZS5pbm5lckhUTUwgPSBBdGhlbmFDU1M7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHRoaXMuaGFzaENoYW5nZShlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcChlKSk7XG5cdH1cblxuXHQvL2V2ZW50IGhhbmRsZXJzXG5cdHByaXZhdGUgaGFzaENoYW5nZShlOkhhc2hDaGFuZ2VFdmVudCkge1xuXHRcdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG5cdH1cblxuXHRwcml2YXRlIGtleURvd24oZTpLZXlib2FyZEV2ZW50KSB7XG5cblx0XHRsZXQgbmV4dFNsaWRlOiBudW1iZXI7XG5cblx0XHRzd2l0Y2goZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0bmV4dFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgPCB0aGlzLnNsaWRlcy5sZW5ndGggLSAxID8gdGhpcy5jdXJyZW50U2xpZGUgKyAxIDogdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0dGhpcy5nb3RvU2xpZGUobmV4dFNsaWRlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRuZXh0U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSA+IDAgPyB0aGlzLmN1cnJlbnRTbGlkZSAtIDEgOiAwO1xuXHRcdFx0XHR0aGlzLmdvdG9TbGlkZShuZXh0U2xpZGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGtleVVwKGU6S2V5Ym9hcmRFdmVudCkge1xuXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9