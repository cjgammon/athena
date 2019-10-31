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
/* harmony default export */ __webpack_exports__["default"] = ("#athena-root{\n\tposition: relative;\n}\n\n.athena-slide{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.athena-slide.current{\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n.athena-iframe-clickarea{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.athena-iframe-clickarea.focus{\n\tpointer-events: none;\n\tcursor: auto;\n}\n\n.athena-iframe.focus{\n\toutline: 100px solid rgba(255, 255, 255, .75);\n}\n");

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
/* harmony import */ var _views_deck_slides_slideIframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/deck/slides/slideIframe */ "./src/views/deck/slides/slideIframe.ts");



;
let SlideTypes = {
    basic: _views_deck_slides_slide__WEBPACK_IMPORTED_MODULE_0__["default"],
    step: _views_deck_slides_slideStep__WEBPACK_IMPORTED_MODULE_1__["default"],
    iframe: _views_deck_slides_slideIframe__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        if (el.dataset['slideType']) {
            let slideTypeName = el.dataset['slideType'];
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

/***/ "./src/views/deck/slides/slideIframe.ts":
/*!**********************************************!*\
  !*** ./src/views/deck/slides/slideIframe.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideIframe; });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/views/deck/slides/slide.ts");

class SlideIframe extends _slide__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(_index, _el) {
        super(_index, _el);
    }
    animIn() {
        this.iframe = this.el.querySelector('iframe');
        if (!this.iframe) {
            this.iframe = document.createElement('iframe');
            this.iframe.classList.add('athena-iframe');
            this.el.appendChild(this.iframe);
        }
        if (this.el.dataset.width) { // automatically interactive if custom w/h
            this.iframe.style.width = this.el.dataset.width;
            this.iframe.style.height = this.el.dataset.height;
        }
        else if (this.el.dataset.interactive) {
            this.iframe.style.width = '95vw';
            this.iframe.style.height = '95vh';
        }
        else {
            this.iframe.style.width = '100vw';
            this.iframe.style.height = '100vh';
        }
        if (this.el.dataset.width || this.el.dataset.interactive) {
            this.addClickArea();
        }
        else {
            this.iframe.style.pointerEvents = 'none';
        }
        this.iframe.style.opacity = '0';
        this.iframe.addEventListener('load', () => this.loaded());
        this.iframe.setAttribute('src', this.el.dataset['src']);
        super.animIn();
    }
    animOut() {
        if (this.clickArea) {
            this.el.removeChild(this.clickArea);
        }
        this.el.removeChild(this.iframe);
        return super.animOut();
    }
    addClickArea() {
        this.clickArea = document.createElement('div');
        this.clickArea.classList.add('athena-iframe-clickarea');
        this.clickArea.addEventListener('click', (e) => this.handle_clickArea_CLICK(e));
        this.el.appendChild(this.clickArea);
    }
    loaded() {
        this.iframe.style.opacity = '1';
    }
    handle_clickArea_CLICK(e) {
        e.stopPropagation();
        this.clickArea.classList.add('focus');
        this.iframe.classList.add('focus');
        this.iframe.focus();
        this.boundHandler = (e) => this.handle_el_CLICK(e);
        this.el.addEventListener('click', this.boundHandler);
    }
    handle_el_CLICK(e) {
        e.stopPropagation();
        this.clickArea.classList.remove('focus');
        this.iframe.classList.remove('focus');
        this.el.removeEventListener('click', this.boundHandler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9TbGlkZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbmZpZ01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZGVja01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvc2xpZGVUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9kZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVJZnJhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0NBQ0oiLCJmaWxlIjoiYXRoZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNhdGhlbmEtcm9vdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGUuY3VycmVudHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uYXRoZW5hLWlmcmFtZS1jbGlja2FyZWF7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUtY2xpY2thcmVhLmZvY3Vze1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUuZm9jdXN7XFxuXFx0b3V0bGluZTogMTAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xcbn1cXG5cIiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIE5FWFQ6ICdzbGlkZV9uZXh0JyxcbiAgICBQUkVWOiAnc2xpZGVfcHJldicsXG4gICAgVFJJR0dFUjogJ3NsaWRlX3RyaWdnZXInXG59OyIsIlxuaW1wb3J0IERlY2sgZnJvbSAnc3JjL3ZpZXdzL2RlY2svZGVjayc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IENvbmZpZ01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvY29uZmlnTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRkZWNrOiBEZWNrO1xuXHRzbGlkZVR5cGVzOiBhbnkgPSBTbGlkZVR5cGVzOyAvL2ZvciBhZGRpbmcgbmV3IHR5cGVzXG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXHR9XG5cblx0Z2VuZXJhdGUoY29uZmlnOiBhbnkpIHtcblx0XHRmb3IgKGxldCBpIGluIGNvbmZpZykge1xuXHRcdFx0Q29uZmlnTW9kZWxbaV0gPSBjb25maWdbaV07XG5cdFx0fVxuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJpbnRlcmZhY2UgSUNvbmZpZ01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgQ29uZmlnTW9kZWw6IElDb25maWdNb2RlbCA9IHtcbiAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcbiAgICBzdGVwU2VsZWN0b3I6ICcuc3RlcCcsXG4gICAgc3RlcExpc3RJdGVtczogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kZWw7IiwiaW50ZXJmYWNlIElEZWNrTW9kZWwge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBEZWNrTW9kZWw6IElEZWNrTW9kZWwgPSB7XG4gICAgY3VycmVudFNsaWRlOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNrTW9kZWw7IiwiXG5pbXBvcnQgQmFzaWNTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5pbXBvcnQgU3RlcFNsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcCc7XG5pbXBvcnQgSWZyYW1lU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGVJZnJhbWUnO1xuXG5pbnRlcmZhY2UgSVNsaWRlVHlwZXMge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBTbGlkZVR5cGVzOiBJU2xpZGVUeXBlcyA9IHtcbiAgICBiYXNpYzogQmFzaWNTbGlkZSxcbiAgICBzdGVwOiBTdGVwU2xpZGUsXG4gICAgaWZyYW1lOiBJZnJhbWVTbGlkZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVUeXBlczsiLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5pbXBvcnQgU2xpZGVCYXNpYyBmcm9tICcuL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2t7XG4gICAgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRzbGlkZXM6IEFycmF5PFNsaWRlQmFzaWM+ID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRTdHlsZXMoKTtcblxuXHRcdHRoaXMuY3JlYXRlUm9vdCgpO1xuXHRcdHRoaXMuY3JlYXRlU2xpZGVzKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0dGhpcy5yZXNldEFsbFNsaWRlcygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG4gICAgfVxuXG5cdGdvdG9TbGlkZUJ5SW5kZXgoX246IG51bWJlcikge1xuXHRcdGxldCBzbGlkZSA9IHRoaXMuc2xpZGVzW19uXTtcblx0XHRsZXQgc2xpZGVJZCA9IHNsaWRlLmlkO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJZChzbGlkZUlkKTtcblx0fVxuXG5cdGdvdG9TbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzbGlkZS8ke19pZH1gO1xuXHR9XG5cblx0Z2V0U2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnNsaWRlc1tpXS5pZCA9PSBfaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2xpZGVzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPCB0aGlzLnNsaWRlcy5sZW5ndGggLSAxID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSArIDEgOiB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0cHJldmlvdXMoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPiAwID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSAtIDEgOiAwO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXS50cmlnZ2VyKCk7XG5cdH1cblxuXHQvKipcblx0ICogc2V0cyBjdXJyZW50IHNsaWRlXG5cdCAqIEBwYXJhbSBuIG51bWJlciBvciBzdHJpbmcgLSBpbmRleCBvciBpZCBvZiBzbGlkZSB0byBzZXRcblx0ICovXG5cdHByaXZhdGUgc2V0U2xpZGUoX246IGFueSkge1xuXG5cdFx0aWYgKHRoaXMuc2xpZGVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljO1xuXHRcdGlmICghaXNOYU4oX24pKSB7XG5cdFx0XHRzbGlkZSA9IHRoaXMuc2xpZGVzW19uXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUgPSB0aGlzLmdldFNsaWRlQnlJZChfbik7XG5cdFx0fVxuXG5cdFx0bGV0IHByZXZTbGlkZTogU2xpZGVCYXNpYyA9IHRoaXMuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdO1xuXHRcdGlmIChwcmV2U2xpZGUuaW4pIHtcblx0XHRcdHByZXZTbGlkZS5hbmltT3V0KClcblx0XHRcdC50aGVuKCgpID0+IHNsaWRlLmFuaW1JbigpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUuYW5pbUluKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbGlkZUZyb21IYXNoKCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0bGV0IHNsaWRlOnN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyNzbGlkZS8nLCAnJyk7XG5cdFx0XHRsZXQgbjogbnVtYmVyID0gcGFyc2VJbnQoc2xpZGUpO1xuXHRcdFx0aWYgKCFpc05hTihuKSkge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKG4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShzbGlkZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U2xpZGUoRGVja01vZGVsLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoKSB7XG5cdFx0bGV0IHNsaWRlRWxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3RvcikpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZUVscy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgc2xpZGVFbDogSFRNTEVsZW1lbnQgPSBzbGlkZUVsc1tpXTtcblx0XHRcdHNsaWRlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZUVsKTtcblxuXHRcdFx0bGV0IFNsaWRlQ2xhc3M6IHR5cGVvZiBTbGlkZUJhc2ljID0gdGhpcy5maW5kU2xpZGVUeXBlKHNsaWRlRWwpO1xuXHRcdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljID0gbmV3IFNsaWRlQ2xhc3MoaSwgc2xpZGVFbCk7XG5cdFx0XHRzbGlkZS5zZXRQYXJlbnQodGhpcy5yb290RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zbGlkZXMubGVuZ3RoID09IDApIHtcblx0XHRcdGNvbnNvbGUud2Fybignbm8gc2xpZGVzIHdpdGggc2VsZWN0b3I6ICcsIENvbmZpZ01vZGVsLnNsaWRlU2VsZWN0b3IpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkU3R5bGVzKCkge1xuXHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gQXRoZW5hQ1NTO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5ORVhULCAoKSA9PiB0aGlzLm5leHQoKSk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5UUklHR0VSLCAoKSA9PiB0aGlzLnRyaWdnZXIoKSk7XG5cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHRoaXMuaGFzaENoYW5nZShlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcChlKSk7XG5cdH1cblxuXHQvL0VWRU5UIEhBTkRMRVJTXG5cblx0cHJpdmF0ZSBoYXNoQ2hhbmdlKGU6SGFzaENoYW5nZUV2ZW50KSB7XG5cdFx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcblx0fVxuXG5cdHByaXZhdGUga2V5RG93bihlOktleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2goZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuUFJFVikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1NwYWNlJzpcblx0XHRcdFx0dGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50LlRSSUdHRVIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBrZXlVcChlOktleWJvYXJkRXZlbnQpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kU2xpZGVUeXBlKGVsOiBIVE1MRWxlbWVudCk6IHR5cGVvZiBTbGlkZUJhc2ljIHtcblxuXHRcdC8vY3VzdG9tIHNsaWRlXG5cdFx0aWYgKGVsLmRhdGFzZXRbJ3NsaWRlVHlwZSddKSB7XG5cdFx0XHRsZXQgc2xpZGVUeXBlTmFtZTogc3RyaW5nID0gZWwuZGF0YXNldFsnc2xpZGVUeXBlJ107XG5cdFx0XHRpZiAoU2xpZGVUeXBlcy5oYXNPd25Qcm9wZXJ0eShzbGlkZVR5cGVOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gU2xpZGVUeXBlc1tzbGlkZVR5cGVOYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL3N0ZXAgcmV2ZWFsXG5cdFx0bGV0IHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG5cdFx0aWYgKENvbmZpZ01vZGVsLnN0ZXBMaXN0SXRlbXMpIHtcblx0XHRcdGxldCBsaXN0czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcblx0XHRcdHN0ZXBzID0gc3RlcHMuY29uY2F0KGxpc3RzKTtcblx0XHR9XG5cdFx0aWYgKHN0ZXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBTbGlkZVR5cGVzWydzdGVwJ107XG5cdFx0fVxuXG5cdFx0Ly9iYXNpYyBzbGlkZVxuXHRcdHJldHVybiBTbGlkZVR5cGVzWydiYXNpYyddO1xuXHR9XG5cdFxuXHRwcml2YXRlIHJlc2V0QWxsU2xpZGVzKCkge1xuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnNsaWRlc1tpXS5zZXRDdXJyZW50KGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGluOiBib29sZWFuO1xuXG4gICAgYW5pbUluOiBGdW5jdGlvbjtcbiAgICBhbmltT3V0OiBGdW5jdGlvbjtcbiAgICB0cmlnZ2VyOiBGdW5jdGlvbjtcblxuICAgIHNldFBhcmVudDogRnVuY3Rpb247XG4gICAgc2V0Q3VycmVudDogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZUJhc2ljIGltcGxlbWVudHMgSVNsaWRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBpbjogYm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gX2luZGV4O1xuICAgICAgICB0aGlzLmVsID0gX2VsO1xuICAgICAgICB0aGlzLmlkID0gX2VsLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBgc2xpZGUke19pbmRleH1gO1xuICAgICAgICB0aGlzLnVybCA9IGBzbGlkZS8ke3RoaXMuaWR9YDtcbiAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuXG4gICAgICAgIF9lbC5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtc2xpZGUnKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0cnVlKTtcbiAgICAgICAgdGhpcy5pbiA9IHRydWU7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgIH1cblxuICAgIHNldFBhcmVudChfcGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIF9wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudChfY3VycmVudDogYm9vbGVhbikge1xuICAgICAgICBpZiAoX2N1cnJlbnQpIHtcbiAgICAgICAgICAgIERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlSWZyYW1lIGV4dGVuZHMgU2xpZGV7XG5cbiAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIGNsaWNrQXJlYTogSFRNTEVsZW1lbnQ7XG4gICAgYm91bmRIYW5kbGVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihfaW5kZXgsIF9lbCk7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pZnJhbWUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgICBpZiAoIXRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLWlmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoKSB7IC8vIGF1dG9tYXRpY2FsbHkgaW50ZXJhY3RpdmUgaWYgY3VzdG9tIHcvaFxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSB0aGlzLmVsLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLmRhdGFzZXQuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSAnOTV2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDB2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZWwuZGF0YXNldC53aWR0aCB8fCB0aGlzLmVsLmRhdGFzZXQuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2tBcmVhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgICB0aGlzLmlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5sb2FkZWQoKSk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5lbC5kYXRhc2V0WydzcmMnXSk7XG5cbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jbGlja0FyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICByZXR1cm4gc3VwZXIuYW5pbU91dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2xpY2tBcmVhKCkge1xuICAgICAgICB0aGlzLmNsaWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lLWNsaWNrYXJlYScpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZV9jbGlja0FyZWFfQ0xJQ0soZSkpXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZGVkKCkge1xuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLmJvdW5kSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLmhhbmRsZV9lbF9DTElDSyhlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZV9lbF9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU3RlcCBleHRlbmRzIFNsaWRle1xuICAgIHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcbiAgICBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICBsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG4gICAgICAgIGlmIChDb25maWdNb2RlbC5zdGVwTGlzdEl0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuICAgICAgICAgICAgc3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RlcDogSFRNTEVsZW1lbnQgPSB0aGlzLnN0ZXBzW2ldO1xuICAgICAgICAgICAgc3RlcC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9