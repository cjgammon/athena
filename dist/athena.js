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
/* harmony import */ var src_views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/views/deck/slides/slide */ "./src/views/deck/slides/slide.ts");



class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.slideTypes = src_models_slideTypes__WEBPACK_IMPORTED_MODULE_1__["default"]; //for adding new types
        this.BasicSlide = src_views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_2__["default"]; //base class for slides
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
        this.deck = new src_views_deck_deck__WEBPACK_IMPORTED_MODULE_0__["default"](selector);
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
    currentSlide: 0,
    stepSelector: '.step'
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
    createSlides(_selector) {
        let slideEls = [].slice.call(document.querySelectorAll(_selector));
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
        //custom slide
        if (el.dataset['slide-type']) {
            let slideTypeName = el.dataset['slide-type'];
            if (src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProperty(slideTypeName)) {
                return src_models_slideTypes__WEBPACK_IMPORTED_MODULE_2__["default"][slideTypeName];
            }
        }
        //step reveal
        let lists = [].slice.call(el.querySelectorAll('li'));
        let steps = [].slice.call(el.querySelectorAll(src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].stepSelector));
        steps = steps.concat(lists);
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
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");


class SlideStep extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
        this.steps = [];
        this.currentStep = 0;
        let lists = [].slice.call(_el.querySelectorAll('li'));
        let steps = [].slice.call(_el.querySelectorAll(src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__["default"].stepSelector));
        steps = steps.concat(lists);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9TbGlkZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2RlY2tNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3NsaWRlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svZGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsNkVBQWMsdUJB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QUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7Q0FDSiIsImZpbGUiOiJhdGhlbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiI2F0aGVuYS1yb290e1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmF0aGVuYS1zbGlkZXtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmF0aGVuYS1zbGlkZS5jdXJyZW50e1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0cG9pbnRlci1ldmVudHM6IGF1dG87XFxufVwiIiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTkVYVDogJ3NsaWRlX25leHQnLFxuICAgIFBSRVY6ICdzbGlkZV9wcmV2JyxcbiAgICBUUklHR0VSOiAnc2xpZGVfdHJpZ2dlcidcbn07IiwiXG5pbXBvcnQgRGVjayBmcm9tICdzcmMvdmlld3MvZGVjay9kZWNrJztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgU2xpZGVCYXNpYyBmcm9tICdzcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRkZWNrOiBEZWNrO1xuXHRzbGlkZVR5cGVzOiBhbnkgPSBTbGlkZVR5cGVzOyAvL2ZvciBhZGRpbmcgbmV3IHR5cGVzXG5cdEJhc2ljU2xpZGU6IGFueSA9IFNsaWRlQmFzaWM7IC8vYmFzZSBjbGFzcyBmb3Igc2xpZGVzXG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXHR9XG5cblx0Z2VuZXJhdGUoc2VsZWN0b3I6IHN0cmluZyA9ICcuYXRoZW5hLXNsaWRlJykge1xuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKHNlbGVjdG9yKTtcblx0fVxuXG59XG5cbi8qIEFkZCB0byBnbG9iYWwgd2luZG93IG9iamVjdCAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBBdGhlbmE6IGFueTtcbiAgfVxufVxuXG5pZiAoIXdpbmRvdy5BdGhlbmEpIHtcblx0d2luZG93LkF0aGVuYSA9IG5ldyBBdGhlbmEoKTtcbn0gZWxzZSB7XG5cdGNvbnNvbGUud2FybignQXRoZW5hIGFscmVhZHkgZGVmaW5lZCcpO1xufSBcbiIsImxldCBEZWNrTW9kZWwgPSB7XG4gICAgY3VycmVudFNsaWRlOiAwLFxuICAgIHN0ZXBTZWxlY3RvcjogJy5zdGVwJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVja01vZGVsOyIsIlxuaW1wb3J0IEJhc2ljU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuaW1wb3J0IFN0ZXBTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZVN0ZXAnO1xuXG5pbnRlcmZhY2UgU2xpZGVUeXBlc01hcCB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxubGV0IFNsaWRlVHlwZXM6IFNsaWRlVHlwZXNNYXAgPSB7XG4gICAgYmFzaWM6IEJhc2ljU2xpZGUsXG4gICAgc3RlcDogU3RlcFNsaWRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZVR5cGVzOyIsIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEF0aGVuYUNTUyBmcm9tIFwiISFyYXctbG9hZGVyIXNyYy9hdGhlbmEuY3NzXCI7XG5cbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJy4vc2xpZGVzL3NsaWRlJztcblxuaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja3tcbiAgICByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHNsaWRlczogQXJyYXk8U2xpZGVCYXNpYz4gPSBbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nID0gJy5hdGhlbmEtc2xpZGUnKSB7XG5cdFx0dGhpcy5hZGRTdHlsZXMoKTtcblxuXHRcdHRoaXMuY3JlYXRlUm9vdCgpO1xuXHRcdHRoaXMuY3JlYXRlU2xpZGVzKHNlbGVjdG9yKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblx0XHR0aGlzLnJlc2V0QWxsU2xpZGVzKCk7XG5cblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcbiAgICB9XG5cblx0Z290b1NsaWRlQnlJbmRleChfbjogbnVtYmVyKSB7XG5cdFx0bGV0IHNsaWRlID0gdGhpcy5zbGlkZXNbX25dO1xuXHRcdGxldCBzbGlkZUlkID0gc2xpZGUuaWQ7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUlkKHNsaWRlSWQpO1xuXHR9XG5cblx0Z290b1NsaWRlQnlJZChfaWQ6IHN0cmluZykge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNsaWRlLyR7X2lkfWA7XG5cdH1cblxuXHRnZXRTbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuc2xpZGVzW2ldLmlkID09IF9pZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zbGlkZXNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRsZXQgbmV4dFNsaWRlID0gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA8IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEgPyBEZWNrTW9kZWwuY3VycmVudFNsaWRlICsgMSA6IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUluZGV4KG5leHRTbGlkZSk7XG5cdH1cblxuXHRwcmV2aW91cygpIHtcblx0XHRsZXQgbmV4dFNsaWRlID0gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA+IDAgPyBEZWNrTW9kZWwuY3VycmVudFNsaWRlIC0gMSA6IDA7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUluZGV4KG5leHRTbGlkZSk7XG5cdH1cblxuXHR0cmlnZ2VyKCkge1xuXHRcdHRoaXMuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdLnRyaWdnZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBzZXRzIGN1cnJlbnQgc2xpZGVcblx0ICogQHBhcmFtIG4gbnVtYmVyIG9yIHN0cmluZyAtIGluZGV4IG9yIGlkIG9mIHNsaWRlIHRvIHNldFxuXHQgKi9cblx0cHJpdmF0ZSBzZXRTbGlkZShfbjogYW55KSB7XG5cblx0XHRsZXQgc2xpZGU6IFNsaWRlQmFzaWM7XG5cdFx0aWYgKCFpc05hTihfbikpIHtcblx0XHRcdHNsaWRlID0gdGhpcy5zbGlkZXNbX25dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbGlkZSA9IHRoaXMuZ2V0U2xpZGVCeUlkKF9uKTtcblx0XHR9XG5cblx0XHRsZXQgcHJldlNsaWRlOiBTbGlkZUJhc2ljID0gdGhpcy5zbGlkZXNbRGVja01vZGVsLmN1cnJlbnRTbGlkZV07XG5cdFx0aWYgKHByZXZTbGlkZS5pbikge1xuXHRcdFx0cHJldlNsaWRlLmFuaW1PdXQoKVxuXHRcdFx0LnRoZW4oKCkgPT4gc2xpZGUuYW5pbUluKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbGlkZS5hbmltSW4oKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2xpZGVGcm9tSGFzaCgpIHtcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdGxldCBzbGlkZTpzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjc2xpZGUvJywgJycpO1xuXHRcdFx0bGV0IG46IG51bWJlciA9IHBhcnNlSW50KHNsaWRlKTtcblx0XHRcdGlmICghaXNOYU4obikpIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U2xpZGUoc2xpZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFNsaWRlKERlY2tNb2RlbC5jdXJyZW50U2xpZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUm9vdCgpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5pZCA9ICdhdGhlbmEtcm9vdCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJvb3RFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlU2xpZGVzKF9zZWxlY3Rvcjogc3RyaW5nKSB7XG5cdFx0bGV0IHNsaWRlRWxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoX3NlbGVjdG9yKSk7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNsaWRlRWxzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGxldCBzbGlkZUVsOiBIVE1MRWxlbWVudCA9IHNsaWRlRWxzW2ldO1xuXHRcdFx0c2xpZGVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNsaWRlRWwpO1xuXG5cdFx0XHRsZXQgU2xpZGVDbGFzczogdHlwZW9mIFNsaWRlQmFzaWMgPSB0aGlzLmZpbmRTbGlkZVR5cGUoc2xpZGVFbCk7XG5cdFx0XHRsZXQgc2xpZGU6IFNsaWRlQmFzaWMgPSBuZXcgU2xpZGVDbGFzcyhpLCBzbGlkZUVsKTtcblx0XHRcdHNsaWRlLnNldFBhcmVudCh0aGlzLnJvb3RFbGVtZW50KTtcblx0XHRcdHRoaXMuc2xpZGVzLnB1c2goc2xpZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkU3R5bGVzKCkge1xuXHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gQXRoZW5hQ1NTO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5ORVhULCAoKSA9PiB0aGlzLm5leHQoKSk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5UUklHR0VSLCAoKSA9PiB0aGlzLnRyaWdnZXIoKSk7XG5cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHRoaXMuaGFzaENoYW5nZShlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcChlKSk7XG5cdH1cblxuXHQvL0VWRU5UIEhBTkRMRVJTXG5cblx0cHJpdmF0ZSBoYXNoQ2hhbmdlKGU6SGFzaENoYW5nZUV2ZW50KSB7XG5cdFx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcblx0fVxuXG5cdHByaXZhdGUga2V5RG93bihlOktleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2goZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuUFJFVikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NwYWNlJzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50LlRSSUdHRVIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBrZXlVcChlOktleWJvYXJkRXZlbnQpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kU2xpZGVUeXBlKGVsOiBIVE1MRWxlbWVudCk6IHR5cGVvZiBTbGlkZUJhc2ljIHtcblxuXHRcdC8vY3VzdG9tIHNsaWRlXG5cdFx0aWYgKGVsLmRhdGFzZXRbJ3NsaWRlLXR5cGUnXSkge1xuXHRcdFx0bGV0IHNsaWRlVHlwZU5hbWU6IHN0cmluZyA9IGVsLmRhdGFzZXRbJ3NsaWRlLXR5cGUnXTtcblx0XHRcdGlmIChTbGlkZVR5cGVzLmhhc093blByb3BlcnR5KHNsaWRlVHlwZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBTbGlkZVR5cGVzW3NsaWRlVHlwZU5hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc3RlcCByZXZlYWxcblx0XHRsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG5cdFx0bGV0IHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoRGVja01vZGVsLnN0ZXBTZWxlY3RvcikpO1xuXHRcdHN0ZXBzID0gc3RlcHMuY29uY2F0KGxpc3RzKTtcblx0XHRpZiAoc3RlcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ3N0ZXAnXTtcblx0XHR9XG5cblx0XHQvL2Jhc2ljIHNsaWRlXG5cdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ2Jhc2ljJ107XG5cdH1cblx0XG5cdHByaXZhdGUgcmVzZXRBbGxTbGlkZXMoKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuc2xpZGVzW2ldLnNldEN1cnJlbnQoZmFsc2UpO1xuXHRcdH1cblx0fVxuXHRcbn0iLCJpbXBvcnQgU2xpZGVFdmVudCBmcm9tICdzcmMvZXZlbnRzL1NsaWRlRXZlbnQnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZWw6IEhUTUxFbGVtZW50O1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW46IGJvb2xlYW47XG5cbiAgICBhbmltSW46IEZ1bmN0aW9uO1xuICAgIGFuaW1PdXQ6IEZ1bmN0aW9uO1xuICAgIHRyaWdnZXI6IEZ1bmN0aW9uO1xuXG4gICAgc2V0UGFyZW50OiBGdW5jdGlvbjtcbiAgICBzZXRDdXJyZW50OiBGdW5jdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlQmFzaWMgaW1wbGVtZW50cyBJU2xpZGV7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICB1cmw6IHN0cmluZztcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIGluOiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBfaW5kZXg7XG4gICAgICAgIHRoaXMuZWwgPSBfZWw7XG4gICAgICAgIHRoaXMuaWQgPSBfZWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzbGlkZSR7X2luZGV4fWA7XG4gICAgICAgIHRoaXMudXJsID0gYHNsaWRlLyR7dGhpcy5pZH1gO1xuICAgICAgICB0aGlzLmluID0gZmFsc2U7XG5cbiAgICAgICAgX2VsLmNsYXNzTGlzdC5hZGQoJ2F0aGVuYS1zbGlkZScpO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRydWUpO1xuICAgICAgICB0aGlzLmluID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuTkVYVCwge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KF9wYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50KF9jdXJyZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfY3VycmVudCkge1xuICAgICAgICAgICAgRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZVN0ZXAgZXh0ZW5kcyBTbGlkZXtcbiAgICBzdGVwczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107XG4gICAgY3VycmVudFN0ZXA6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihfaW5kZXgsIF9lbCk7XG5cbiAgICAgICAgbGV0IGxpc3RzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKF9lbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcbiAgICAgICAgbGV0IHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKF9lbC5xdWVyeVNlbGVjdG9yQWxsKERlY2tNb2RlbC5zdGVwU2VsZWN0b3IpKTtcbiAgICAgICAgc3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuICAgICAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5zdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0ZXA6IEhUTUxFbGVtZW50ID0gdGhpcy5zdGVwc1tpXTtcbiAgICAgICAgICAgIHN0ZXAuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHN1cGVyLmFuaW1JbigpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwc1t0aGlzLmN1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci50cmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==