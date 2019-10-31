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
/* harmony import */ var src_views_deck_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/views/deck/deck */ "./src/views/deck/deck.ts");
/* harmony import */ var src_models_slideTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");



class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.slideTypes = src_models_slideTypes__WEBPACK_IMPORTED_MODULE_1__["default"]; //for adding new types
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
    generate(config) {
        for (let i in config) {
            src_models_configModel__WEBPACK_IMPORTED_MODULE_2__["default"][i] = config[i];
        }
        console.log(src_models_configModel__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.deck = new src_views_deck_deck__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
}
if (!window.Athena) {
    window.Athena = new Athena();
}
else {
    console.warn('Athena already defined');
}


/***/ }),

/***/ "./src/models/configModel.ts":
/*!***********************************!*\
  !*** ./src/models/configModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
let ConfigModel = {
    slideSelector: '.slide',
    stepSelector: '.step',
    stepListItems: true
};
/* harmony default export */ __webpack_exports__["default"] = (ConfigModel);


/***/ }),

/***/ "./src/models/deckModel.ts":
/*!*********************************!*\
  !*** ./src/models/deckModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
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
/* harmony import */ var src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");
// @ts-ignore





class Deck {
    constructor() {
        this.slides = [];
        this.addStyles();
        this.createRoot();
        this.createSlides();
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
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide < this.slides.length - 1 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide + 1 : this.slides.length - 1;
        this.gotoSlideByIndex(nextSlide);
    }
    previous() {
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide > 0 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide - 1 : 0;
        this.gotoSlideByIndex(nextSlide);
    }
    trigger() {
        this.slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide].trigger();
    }
    /**
     * sets current slide
     * @param n number or string - index or id of slide to set
     */
    setSlide(_n) {
        if (this.slides.length == 0) {
            return;
        }
        let slide;
        if (!isNaN(_n)) {
            slide = this.slides[_n];
        }
        else {
            slide = this.getSlideById(_n);
        }
        let prevSlide = this.slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide];
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
            this.setSlide(src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide);
        }
    }
    createRoot() {
        this.rootElement = document.createElement('div');
        this.rootElement.id = 'athena-root';
        document.body.appendChild(this.rootElement);
    }
    createSlides() {
        let slideEls = [].slice.call(document.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].slideSelector));
        for (let i = 0; i < slideEls.length; i++) {
            let slideEl = slideEls[i];
            slideEl.parentNode.removeChild(slideEl);
            let SlideClass = this.findSlideType(slideEl);
            let slide = new SlideClass(i, slideEl);
            slide.setParent(this.rootElement);
            this.slides.push(slide);
        }
        if (this.slides.length == 0) {
            console.warn('no slides with selector: ', src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].slideSelector);
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
        //custom slide
        if (el.dataset['slide-type']) {
            let slideTypeName = el.dataset['slide-type'];
            if (src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProperty(slideTypeName)) {
                return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"][slideTypeName];
            }
        }
        //step reveal
        let steps = [].slice.call(el.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].stepSelector));
        if (src_models_configModel__WEBPACK_IMPORTED_MODULE_4__["default"].stepListItems) {
            let lists = [].slice.call(el.querySelectorAll('li'));
            steps = steps.concat(lists);
        }
        if (steps.length > 0) {
            return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['step'];
        }
        //basic slide
        return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"]['basic'];
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
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");


class SlideStep extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
        this.steps = [];
        this.currentStep = 0;
        let steps = [].slice.call(_el.querySelectorAll(src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"].stepSelector));
        if (src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"].stepListItems) {
            let lists = [].slice.call(_el.querySelectorAll('li'));
            steps = steps.concat(lists);
        }
        this.steps = steps;
    }
    animIn() {
        for (let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            step.style.opacity = "0";
        }
        this.currentStep = 0;
        super.animIn();
    }
    trigger() {
        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].style.opacity = "1";
            this.currentStep++;
        }
        else {
            super.trigger();
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9TbGlkZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbmZpZ01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZGVja01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvc2xpZGVUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9kZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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TCxDQUFDO0NBQ0oiLCJmaWxlIjoiYXRoZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNhdGhlbmEtcm9vdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGUuY3VycmVudHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cIiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIE5FWFQ6ICdzbGlkZV9uZXh0JyxcbiAgICBQUkVWOiAnc2xpZGVfcHJldicsXG4gICAgVFJJR0dFUjogJ3NsaWRlX3RyaWdnZXInXG59OyIsIlxuaW1wb3J0IERlY2sgZnJvbSAnc3JjL3ZpZXdzL2RlY2svZGVjayc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IENvbmZpZ01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvY29uZmlnTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRkZWNrOiBEZWNrO1xuXHRzbGlkZVR5cGVzOiBhbnkgPSBTbGlkZVR5cGVzOyAvL2ZvciBhZGRpbmcgbmV3IHR5cGVzXG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXHR9XG5cblx0Z2VuZXJhdGUoY29uZmlnOiBhbnkpIHtcblx0XHRmb3IgKGxldCBpIGluIGNvbmZpZykge1xuXHRcdFx0Q29uZmlnTW9kZWxbaV0gPSBjb25maWdbaV07XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coQ29uZmlnTW9kZWwpO1xuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJpbnRlcmZhY2UgSUNvbmZpZ01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgQ29uZmlnTW9kZWw6IElDb25maWdNb2RlbCA9IHtcbiAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcbiAgICBzdGVwU2VsZWN0b3I6ICcuc3RlcCcsXG4gICAgc3RlcExpc3RJdGVtczogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kZWw7IiwiaW50ZXJmYWNlIElEZWNrTW9kZWwge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBEZWNrTW9kZWw6IElEZWNrTW9kZWwgPSB7XG4gICAgY3VycmVudFNsaWRlOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNrTW9kZWw7IiwiXG5pbXBvcnQgQmFzaWNTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5pbXBvcnQgU3RlcFNsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcCc7XG5cbmludGVyZmFjZSBJU2xpZGVUeXBlcyB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxubGV0IFNsaWRlVHlwZXM6IElTbGlkZVR5cGVzID0ge1xuICAgIGJhc2ljOiBCYXNpY1NsaWRlLFxuICAgIHN0ZXA6IFN0ZXBTbGlkZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVUeXBlczsiLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5pbXBvcnQgU2xpZGVCYXNpYyBmcm9tICcuL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2t7XG4gICAgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRzbGlkZXM6IEFycmF5PFNsaWRlQmFzaWM+ID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRTdHlsZXMoKTtcblxuXHRcdHRoaXMuY3JlYXRlUm9vdCgpO1xuXHRcdHRoaXMuY3JlYXRlU2xpZGVzKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0dGhpcy5yZXNldEFsbFNsaWRlcygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG4gICAgfVxuXG5cdGdvdG9TbGlkZUJ5SW5kZXgoX246IG51bWJlcikge1xuXHRcdGxldCBzbGlkZSA9IHRoaXMuc2xpZGVzW19uXTtcblx0XHRsZXQgc2xpZGVJZCA9IHNsaWRlLmlkO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJZChzbGlkZUlkKTtcblx0fVxuXG5cdGdvdG9TbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzbGlkZS8ke19pZH1gO1xuXHR9XG5cblx0Z2V0U2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnNsaWRlc1tpXS5pZCA9PSBfaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2xpZGVzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPCB0aGlzLnNsaWRlcy5sZW5ndGggLSAxID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSArIDEgOiB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0cHJldmlvdXMoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPiAwID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSAtIDEgOiAwO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXS50cmlnZ2VyKCk7XG5cdH1cblxuXHQvKipcblx0ICogc2V0cyBjdXJyZW50IHNsaWRlXG5cdCAqIEBwYXJhbSBuIG51bWJlciBvciBzdHJpbmcgLSBpbmRleCBvciBpZCBvZiBzbGlkZSB0byBzZXRcblx0ICovXG5cdHByaXZhdGUgc2V0U2xpZGUoX246IGFueSkge1xuXG5cdFx0aWYgKHRoaXMuc2xpZGVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljO1xuXHRcdGlmICghaXNOYU4oX24pKSB7XG5cdFx0XHRzbGlkZSA9IHRoaXMuc2xpZGVzW19uXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUgPSB0aGlzLmdldFNsaWRlQnlJZChfbik7XG5cdFx0fVxuXG5cdFx0bGV0IHByZXZTbGlkZTogU2xpZGVCYXNpYyA9IHRoaXMuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdO1xuXHRcdGlmIChwcmV2U2xpZGUuaW4pIHtcblx0XHRcdHByZXZTbGlkZS5hbmltT3V0KClcblx0XHRcdC50aGVuKCgpID0+IHNsaWRlLmFuaW1JbigpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUuYW5pbUluKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbGlkZUZyb21IYXNoKCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0bGV0IHNsaWRlOnN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyNzbGlkZS8nLCAnJyk7XG5cdFx0XHRsZXQgbjogbnVtYmVyID0gcGFyc2VJbnQoc2xpZGUpO1xuXHRcdFx0aWYgKCFpc05hTihuKSkge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKG4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShzbGlkZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U2xpZGUoRGVja01vZGVsLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoKSB7XG5cdFx0bGV0IHNsaWRlRWxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3RvcikpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZUVscy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgc2xpZGVFbDogSFRNTEVsZW1lbnQgPSBzbGlkZUVsc1tpXTtcblx0XHRcdHNsaWRlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZUVsKTtcblxuXHRcdFx0bGV0IFNsaWRlQ2xhc3M6IHR5cGVvZiBTbGlkZUJhc2ljID0gdGhpcy5maW5kU2xpZGVUeXBlKHNsaWRlRWwpO1xuXHRcdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljID0gbmV3IFNsaWRlQ2xhc3MoaSwgc2xpZGVFbCk7XG5cdFx0XHRzbGlkZS5zZXRQYXJlbnQodGhpcy5yb290RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zbGlkZXMubGVuZ3RoID09IDApIHtcblx0XHRcdGNvbnNvbGUud2Fybignbm8gc2xpZGVzIHdpdGggc2VsZWN0b3I6ICcsIENvbmZpZ01vZGVsLnNsaWRlU2VsZWN0b3IpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkU3R5bGVzKCkge1xuXHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gQXRoZW5hQ1NTO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5ORVhULCAoKSA9PiB0aGlzLm5leHQoKSk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5UUklHR0VSLCAoKSA9PiB0aGlzLnRyaWdnZXIoKSk7XG5cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHRoaXMuaGFzaENoYW5nZShlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcChlKSk7XG5cdH1cblxuXHQvL0VWRU5UIEhBTkRMRVJTXG5cblx0cHJpdmF0ZSBoYXNoQ2hhbmdlKGU6SGFzaENoYW5nZUV2ZW50KSB7XG5cdFx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcblx0fVxuXG5cdHByaXZhdGUga2V5RG93bihlOktleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2goZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuUFJFVikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NwYWNlJzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50LlRSSUdHRVIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBrZXlVcChlOktleWJvYXJkRXZlbnQpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kU2xpZGVUeXBlKGVsOiBIVE1MRWxlbWVudCk6IHR5cGVvZiBTbGlkZUJhc2ljIHtcblxuXHRcdC8vY3VzdG9tIHNsaWRlXG5cdFx0aWYgKGVsLmRhdGFzZXRbJ3NsaWRlLXR5cGUnXSkge1xuXHRcdFx0bGV0IHNsaWRlVHlwZU5hbWU6IHN0cmluZyA9IGVsLmRhdGFzZXRbJ3NsaWRlLXR5cGUnXTtcblx0XHRcdGlmIChTbGlkZVR5cGVzLmhhc093blByb3BlcnR5KHNsaWRlVHlwZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBTbGlkZVR5cGVzW3NsaWRlVHlwZU5hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc3RlcCByZXZlYWxcblx0XHRsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcblx0XHRpZiAoQ29uZmlnTW9kZWwuc3RlcExpc3RJdGVtcykge1xuXHRcdFx0bGV0IGxpc3RzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuXHRcdFx0c3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuXHRcdH1cblx0XHRpZiAoc3RlcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ3N0ZXAnXTtcblx0XHR9XG5cblx0XHQvL2Jhc2ljIHNsaWRlXG5cdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ2Jhc2ljJ107XG5cdH1cblx0XG5cdHByaXZhdGUgcmVzZXRBbGxTbGlkZXMoKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc2xpZGVzW2ldLnNldEN1cnJlbnQoZmFsc2UpO1xuXHRcdH1cblx0fVxuXHRcbn0iLCJpbXBvcnQgU2xpZGVFdmVudCBmcm9tICdzcmMvZXZlbnRzL1NsaWRlRXZlbnQnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZWw6IEhUTUxFbGVtZW50O1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW46IGJvb2xlYW47XG5cbiAgICBhbmltSW46IEZ1bmN0aW9uO1xuICAgIGFuaW1PdXQ6IEZ1bmN0aW9uO1xuICAgIHRyaWdnZXI6IEZ1bmN0aW9uO1xuXG4gICAgc2V0UGFyZW50OiBGdW5jdGlvbjtcbiAgICBzZXRDdXJyZW50OiBGdW5jdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlQmFzaWMgaW1wbGVtZW50cyBJU2xpZGV7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICB1cmw6IHN0cmluZztcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIGluOiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBfaW5kZXg7XG4gICAgICAgIHRoaXMuZWwgPSBfZWw7XG4gICAgICAgIHRoaXMuaWQgPSBfZWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzbGlkZSR7X2luZGV4fWA7XG4gICAgICAgIHRoaXMudXJsID0gYHNsaWRlLyR7dGhpcy5pZH1gO1xuICAgICAgICB0aGlzLmluID0gZmFsc2U7XG5cbiAgICAgICAgX2VsLmNsYXNzTGlzdC5hZGQoJ2F0aGVuYS1zbGlkZScpO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRydWUpO1xuICAgICAgICB0aGlzLmluID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuTkVYVCwge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KF9wYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50KF9jdXJyZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfY3VycmVudCkge1xuICAgICAgICAgICAgRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVTdGVwIGV4dGVuZHMgU2xpZGV7XG4gICAgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdO1xuICAgIGN1cnJlbnRTdGVwOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoX2luZGV4OiBudW1iZXIsIF9lbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoX2luZGV4LCBfZWwpO1xuXG4gICAgICAgIGxldCBzdGVwczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcbiAgICAgICAgaWYgKENvbmZpZ01vZGVsLnN0ZXBMaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBsaXN0czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG4gICAgICAgICAgICBzdGVwcyA9IHN0ZXBzLmNvbmNhdChsaXN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwOiBIVE1MRWxlbWVudCA9IHRoaXMuc3RlcHNbaV07XG4gICAgICAgICAgICBzdGVwLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICBzdXBlci5hbmltSW4oKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=