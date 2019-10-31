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

/***/ "./src/events/SlideEvent.ts":
/*!**********************************!*\
  !*** ./src/events/SlideEvent.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    NEXT: 'slide_next',
    PREV: 'slide_prev',
    TRIGGER: 'slide_trigger'
});


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
/* harmony import */ var _views_deck_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/deck/deck */ "./src/views/deck/deck.ts");
/* harmony import */ var _models_slideTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/slideTypes */ "./src/models/slideTypes.ts");


class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.slideTypes = _models_slideTypes__WEBPACK_IMPORTED_MODULE_1__["default"];
        this._consoleStyle = [
            'background: #44918F',
            'color: white',
            'font-weight: bold',
            'padding: 0.2em'
        ];
        let message = `%c//${this.name} v${this.version}\\\\`;
        let consoleStyle = this._consoleStyle.join('; ');
        console.log(message, consoleStyle);
    }
    generate(selector = '.athena-slide') {
        this.deck = new _views_deck_deck__WEBPACK_IMPORTED_MODULE_0__["default"](selector);
    }
}
if (!window.Athena) {
    window.Athena = new Athena();
}
else {
    console.warn('Athena already defined');
}


/***/ }),

/***/ "./src/models/deckModel.ts":
/*!*********************************!*\
  !*** ./src/models/deckModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let DeckModel = {
    currentSlide: 0
};
/* harmony default export */ __webpack_exports__["default"] = (DeckModel);


/***/ }),

/***/ "./src/models/slideTypes.ts":
/*!**********************************!*\
  !*** ./src/models/slideTypes.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/deck/slides/slide */ "./src/views/deck/slides/slide.ts");
/* harmony import */ var _views_deck_slides_slideStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/deck/slides/slideStep */ "./src/views/deck/slides/slideStep.ts");


;
let SlideTypes = {
    basic: _views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_0__["default"],
    step: _views_deck_slides_slideStep__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (SlideTypes);


/***/ }),

/***/ "./src/views/deck/deck.ts":
/*!********************************!*\
  !*** ./src/views/deck/deck.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deck; });
/* harmony import */ var _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!src/athena.css */ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");
/* harmony import */ var _models_slideTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var _models_deckModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/deckModel */ "./src/models/deckModel.ts");
// @ts-ignore




class Deck {
    constructor(selector = '.athena-slide') {
        this.slides = [];
        this.addStyles();
        this.createRoot();
        this.createSlides(selector);
        this.registerEvents();
        this.resetAllSlides();
        this.getSlideFromHash();
    }
    gotoSlideByIndex(_n) {
        let slide = this.slides[_n];
        let slideId = slide.id;
        this.gotoSlideById(slideId);
    }
    gotoSlideById(_id) {
        window.location.hash = `slide/${_id}`;
    }
    getSlideById(_id) {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].id == _id) {
                return this.slides[i];
            }
        }
    }
    next() {
        let nextSlide = _models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide < this.slides.length - 1 ? _models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide + 1 : this.slides.length - 1;
        this.gotoSlideByIndex(nextSlide);
    }
    previous() {
        let nextSlide = _models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide > 0 ? _models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide - 1 : 0;
        this.gotoSlideByIndex(nextSlide);
    }
    trigger() {
        this.slides[_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide].trigger();
    }
    /**
     * sets current slide
     * @param n number or string - index or id of slide to set
     */
    setSlide(_n) {
        let slide;
        if (!isNaN(_n)) {
            slide = this.slides[_n];
        }
        else {
            slide = this.getSlideById(_n);
        }
        let prevSlide = this.slides[_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide];
        if (prevSlide.in) {
            prevSlide.animOut()
                .then(() => slide.animIn());
        }
        else {
            slide.animIn();
        }
    }
    getSlideFromHash() {
        if (window.location.hash) {
            let slide = window.location.hash.replace('#slide/', '');
            let n = parseInt(slide);
            if (!isNaN(n)) {
                this.setSlide(n);
            }
            else {
                this.setSlide(slide);
            }
        }
        else {
            this.setSlide(_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide);
        }
    }
    createRoot() {
        this.rootElement = document.createElement('div');
        this.rootElement.id = 'athena-root';
        document.body.appendChild(this.rootElement);
    }
    createSlides(_selector) {
        let slideEls = document.querySelectorAll(_selector);
        for (let i = 0; i < slideEls.length; i++) {
            let slideEl = slideEls[i];
            slideEl.parentNode.removeChild(slideEl);
            let SlideClass = this.findSlideType(slideEl);
            let slide = new SlideClass(i, slideEl);
            slide.setParent(this.rootElement);
            this.slides.push(slide);
        }
    }
    addStyles() {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__["default"];
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    registerEvents() {
        this.rootElement.addEventListener(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT, () => this.next());
        this.rootElement.addEventListener(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV, () => this.previous());
        this.rootElement.addEventListener(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER, () => this.trigger());
        window.addEventListener('hashchange', (e) => this.hashChange(e));
        window.addEventListener('keydown', (e) => this.keyDown(e));
        window.addEventListener('keyup', (e) => this.keyUp(e));
    }
    //EVENT HANDLERS
    hashChange(e) {
        let hash = window.location.hash;
        this.getSlideFromHash();
    }
    keyDown(e) {
        switch (e.code) {
            case 'ArrowRight':
                this.rootElement.dispatchEvent(new Event(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT));
                break;
            case 'ArrowLeft':
                this.rootElement.dispatchEvent(new Event(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV));
                break;
            case 'Space':
                this.rootElement.dispatchEvent(new Event(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER));
                break;
        }
    }
    keyUp(e) {
    }
    findSlideType(el) {
        if (el.dataset['slide-type']) {
            let slideTypeName = el.dataset['slide-type'];
            if (_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProperty(slideTypeName)) {
                return _models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"][slideTypeName];
            }
        }
        let lists = el.querySelectorAll('li');
        if (lists.length > 0) {
            console.log('yhes');
            return _models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['step'];
        }
        return _models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['basic'];
    }
    resetAllSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].setCurrent(false);
        }
    }
}


/***/ }),

/***/ "./src/views/deck/slides/slide.ts":
/*!****************************************!*\
  !*** ./src/views/deck/slides/slide.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideBasic; });
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");


;
class SlideBasic {
    constructor(_index, _el) {
        this.index = _index;
        this.el = _el;
        this.id = _el.getAttribute('id') || `slide${_index}`;
        this.url = `slide/${this.id}`;
        this.in = false;
        _el.classList.add('athena-slide');
    }
    animIn() {
        this.setCurrent(true);
        this.in = true;
    }
    animOut() {
        return new Promise((resolve, reject) => {
            this.setCurrent(false);
            this.in = false;
            resolve();
        });
    }
    trigger() {
        //TODO:: handle <video> or <li> or "step"
        this.el.dispatchEvent(new Event(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].NEXT, { bubbles: true }));
    }
    setParent(_parent) {
        this.parent = _parent;
        _parent.appendChild(this.el);
    }
    setCurrent(_current) {
        if (_current) {
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__["default"].currentSlide = this.index;
            this.el.classList.add('current');
        }
        else {
            this.el.classList.remove('current');
        }
    }
}


/***/ }),

/***/ "./src/views/deck/slides/slideStep.ts":
/*!********************************************!*\
  !*** ./src/views/deck/slides/slideStep.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideStep; });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/views/deck/slides/slide.ts");
/* harmony import */ var _events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../events/SlideEvent */ "./src/events/SlideEvent.ts");


class SlideStep extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
        this.steps = [];
        this.currentStep = 0;
        this.steps = _el.querySelectorAll('li');
    }
    animIn() {
        console.log('animin');
        for (let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            step.style.opacity = "0";
        }
        this.setCurrent(true);
        this.in = true;
        this.currentStep = 0;
    }
    trigger() {
        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].style.opacity = "1";
            this.currentStep++;
        }
        else {
            this.el.dispatchEvent(new Event(_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT, { bubbles: true }));
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9TbGlkZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2RlY2tNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3NsaWRlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svZGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsNkVBQWMsdUJB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QyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQztDQUNKIiwiZmlsZSI6ImF0aGVuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIjYXRoZW5hLXJvb3R7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRle1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRlLmN1cnJlbnR7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bztcXG59XCIiLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBORVhUOiAnc2xpZGVfbmV4dCcsXG4gICAgUFJFVjogJ3NsaWRlX3ByZXYnLFxuICAgIFRSSUdHRVI6ICdzbGlkZV90cmlnZ2VyJ1xufTsiLCJcbmltcG9ydCBEZWNrIGZyb20gJy4vdmlld3MvZGVjay9kZWNrJztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJy4vbW9kZWxzL3NsaWRlVHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRkZWNrOiBEZWNrO1xuXHRzbGlkZVR5cGVzOiBhbnkgPSBTbGlkZVR5cGVzO1xuXG5cdHByaXZhdGUgX2NvbnNvbGVTdHlsZTogQXJyYXk8c3RyaW5nPiA9IFtcblx0XHQnYmFja2dyb3VuZDogIzQ0OTE4RicsXG5cdFx0J2NvbG9yOiB3aGl0ZScsXG5cdFx0J2ZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHQncGFkZGluZzogMC4yZW0nXG5cdF07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGAlYy8vJHt0aGlzLm5hbWV9IHYke3RoaXMudmVyc2lvbn1cXFxcXFxcXGA7XG5cdFx0bGV0IGNvbnNvbGVTdHlsZTogc3RyaW5nID0gdGhpcy5fY29uc29sZVN0eWxlLmpvaW4oJzsgJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSwgY29uc29sZVN0eWxlKTtcblx0fVxuXG5cdGdlbmVyYXRlKHNlbGVjdG9yOiBzdHJpbmcgPSAnLmF0aGVuYS1zbGlkZScpIHtcblx0XHR0aGlzLmRlY2sgPSBuZXcgRGVjayhzZWxlY3Rvcik7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJsZXQgRGVja01vZGVsID0ge1xuICAgIGN1cnJlbnRTbGlkZTogMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVja01vZGVsOyIsIlxuaW1wb3J0IEJhc2ljU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuaW1wb3J0IFN0ZXBTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZVN0ZXAnO1xuXG5pbnRlcmZhY2UgU2xpZGVUeXBlc01hcCB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxubGV0IFNsaWRlVHlwZXM6IFNsaWRlVHlwZXNNYXAgPSB7XG4gICAgYmFzaWM6IEJhc2ljU2xpZGUsXG4gICAgc3RlcDogU3RlcFNsaWRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZVR5cGVzOyIsIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEF0aGVuYUNTUyBmcm9tIFwiISFyYXctbG9hZGVyIXNyYy9hdGhlbmEuY3NzXCI7XG5cbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJy4vc2xpZGVzL3NsaWRlJztcbmltcG9ydCB7SVNsaWRlfSBmcm9tICcuL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICcuLi8uLi9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgRGVja01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9kZWNrTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNre1xuICAgIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0c2xpZGVzOiBBcnJheTxTbGlkZUJhc2ljPiA9IFtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcgPSAnLmF0aGVuYS1zbGlkZScpIHtcblx0XHR0aGlzLmFkZFN0eWxlcygpO1xuXG5cdFx0dGhpcy5jcmVhdGVSb290KCk7XG5cdFx0dGhpcy5jcmVhdGVTbGlkZXMoc2VsZWN0b3IpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXHRcdHRoaXMucmVzZXRBbGxTbGlkZXMoKTtcblxuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuICAgIH1cblxuXHRnb3RvU2xpZGVCeUluZGV4KF9uOiBudW1iZXIpIHtcblx0XHRsZXQgc2xpZGUgPSB0aGlzLnNsaWRlc1tfbl07XG5cdFx0bGV0IHNsaWRlSWQgPSBzbGlkZS5pZDtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SWQoc2xpZGVJZCk7XG5cdH1cblxuXHRnb3RvU2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2xpZGUvJHtfaWR9YDtcblx0fVxuXG5cdGdldFNsaWRlQnlJZChfaWQ6IHN0cmluZykge1xuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5zbGlkZXNbaV0uaWQgPT0gX2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNsaWRlc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGxldCBuZXh0U2xpZGUgPSBEZWNrTW9kZWwuY3VycmVudFNsaWRlIDwgdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgKyAxIDogdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHByZXZpb3VzKCkge1xuXHRcdGxldCBuZXh0U2xpZGUgPSBEZWNrTW9kZWwuY3VycmVudFNsaWRlID4gMCA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgLSAxIDogMDtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5zbGlkZXNbRGVja01vZGVsLmN1cnJlbnRTbGlkZV0udHJpZ2dlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHNldHMgY3VycmVudCBzbGlkZVxuXHQgKiBAcGFyYW0gbiBudW1iZXIgb3Igc3RyaW5nIC0gaW5kZXggb3IgaWQgb2Ygc2xpZGUgdG8gc2V0XG5cdCAqL1xuXHRwcml2YXRlIHNldFNsaWRlKF9uOiBhbnkpIHtcblxuXHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYztcblx0XHRpZiAoIWlzTmFOKF9uKSkge1xuXHRcdFx0c2xpZGUgPSB0aGlzLnNsaWRlc1tfbl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlID0gdGhpcy5nZXRTbGlkZUJ5SWQoX24pO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2U2xpZGU6IFNsaWRlQmFzaWMgPSB0aGlzLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXTtcblx0XHRpZiAocHJldlNsaWRlLmluKSB7XG5cdFx0XHRwcmV2U2xpZGUuYW5pbU91dCgpXG5cdFx0XHQudGhlbigoKSA9PiBzbGlkZS5hbmltSW4oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlLmFuaW1JbigpO1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbGlkZUZyb21IYXNoKCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0bGV0IHNsaWRlOnN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyNzbGlkZS8nLCAnJyk7XG5cdFx0XHRsZXQgbjogbnVtYmVyID0gcGFyc2VJbnQoc2xpZGUpO1xuXHRcdFx0aWYgKCFpc05hTihuKSkge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKG4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShzbGlkZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U2xpZGUoRGVja01vZGVsLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoX3NlbGVjdG9yOiBzdHJpbmcpIHtcblx0XHRsZXQgc2xpZGVFbHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IDxIVE1MRWxlbWVudFtdPjxhbnk+ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChfc2VsZWN0b3IpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZUVscy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgc2xpZGVFbDogSFRNTEVsZW1lbnQgPSBzbGlkZUVsc1tpXTtcblx0XHRcdHNsaWRlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZUVsKTtcblxuXHRcdFx0bGV0IFNsaWRlQ2xhc3M6IGFueSA9IHRoaXMuZmluZFNsaWRlVHlwZShzbGlkZUVsKTtcblx0XHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYyA9IG5ldyBTbGlkZUNsYXNzKGksIHNsaWRlRWwpO1xuXHRcdFx0c2xpZGUuc2V0UGFyZW50KHRoaXMucm9vdEVsZW1lbnQpO1xuXHRcdFx0dGhpcy5zbGlkZXMucHVzaChzbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRTdHlsZXMoKSB7XG5cdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblx0XHRzdHlsZS5pbm5lckhUTUwgPSBBdGhlbmFDU1M7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihTbGlkZUV2ZW50Lk5FWFQsICgpID0+IHRoaXMubmV4dCgpKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5QUkVWLCAoKSA9PiB0aGlzLnByZXZpb3VzKCkpO1xuXHRcdHRoaXMucm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihTbGlkZUV2ZW50LlRSSUdHRVIsICgpID0+IHRoaXMudHJpZ2dlcigpKTtcblxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZSkgPT4gdGhpcy5oYXNoQ2hhbmdlKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd24oZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVVwKGUpKTtcblx0fVxuXG5cdC8vRVZFTlQgSEFORExFUlNcblxuXHRwcml2YXRlIGhhc2hDaGFuZ2UoZTpIYXNoQ2hhbmdlRXZlbnQpIHtcblx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlEb3duKGU6S2V5Ym9hcmRFdmVudCkge1xuXG5cdFx0c3dpdGNoKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdHRoaXMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoU2xpZGVFdmVudC5ORVhUKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50LlBSRVYpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdHRoaXMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoU2xpZGVFdmVudC5UUklHR0VSKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUga2V5VXAoZTpLZXlib2FyZEV2ZW50KSB7XG5cblx0fVxuXG5cdHByaXZhdGUgZmluZFNsaWRlVHlwZShlbDogSFRNTEVsZW1lbnQpIHtcblx0XHRpZiAoZWwuZGF0YXNldFsnc2xpZGUtdHlwZSddKSB7XG5cdFx0XHRsZXQgc2xpZGVUeXBlTmFtZTogc3RyaW5nID0gZWwuZGF0YXNldFsnc2xpZGUtdHlwZSddO1xuXHRcdFx0aWYgKFNsaWRlVHlwZXMuaGFzT3duUHJvcGVydHkoc2xpZGVUeXBlTmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbc2xpZGVUeXBlTmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IGxpc3RzOiBOb2RlTGlzdCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0aWYgKGxpc3RzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnNvbGUubG9nKCd5aGVzJyk7XG5cdFx0XHRyZXR1cm4gU2xpZGVUeXBlc1snc3RlcCddO1xuXHRcdH1cblxuXHRcdHJldHVybiBTbGlkZVR5cGVzWydiYXNpYyddO1xuXHR9XG5cdFxuXHRwcml2YXRlIHJlc2V0QWxsU2xpZGVzKCkge1xuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnNsaWRlc1tpXS5zZXRDdXJyZW50KGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGluOiBib29sZWFuO1xuXG4gICAgYW5pbUluOiBGdW5jdGlvbjtcbiAgICBhbmltT3V0OiBGdW5jdGlvbjtcbiAgICB0cmlnZ2VyOiBGdW5jdGlvbjtcblxuICAgIHNldFBhcmVudDogRnVuY3Rpb247XG4gICAgc2V0Q3VycmVudDogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZUJhc2ljIGltcGxlbWVudHMgSVNsaWRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBpbjogYm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gX2luZGV4O1xuICAgICAgICB0aGlzLmVsID0gX2VsO1xuICAgICAgICB0aGlzLmlkID0gX2VsLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBgc2xpZGUke19pbmRleH1gO1xuICAgICAgICB0aGlzLnVybCA9IGBzbGlkZS8ke3RoaXMuaWR9YDtcbiAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuXG4gICAgICAgIF9lbC5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtc2xpZGUnKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0cnVlKTtcbiAgICAgICAgdGhpcy5pbiA9IHRydWU7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmluID0gZmFsc2U7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaWdnZXIoKSB7XG4gICAgICAgIC8vVE9ETzo6IGhhbmRsZSA8dmlkZW8+IG9yIDxsaT4gb3IgXCJzdGVwXCJcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgIH1cblxuICAgIHNldFBhcmVudChfcGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIF9wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudChfY3VycmVudDogYm9vbGVhbikge1xuICAgICAgICBpZiAoX2N1cnJlbnQpIHtcbiAgICAgICAgICAgIERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgU2xpZGVFdmVudCBmcm9tICcuLi8uLi8uLi9ldmVudHMvU2xpZGVFdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU3RlcCBleHRlbmRzIFNsaWRle1xuICAgIHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcbiAgICBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICB0aGlzLnN0ZXBzID0gPEhUTUxFbGVtZW50W10+PGFueT5fZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbmltaW4nKTtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwOiBIVE1MRWxlbWVudCA9IHRoaXMuc3RlcHNbaV07XG4gICAgICAgICAgICBzdGVwLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0cnVlKTtcbiAgICAgICAgdGhpcy5pbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgIH1cblxuICAgIHRyaWdnZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuTkVYVCwge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==