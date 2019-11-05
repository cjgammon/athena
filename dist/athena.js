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
/* harmony default export */ __webpack_exports__["default"] = ("#athena-root{\n\tposition: relative;\n}\n\n.athena-slide{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.athena-slide.current{\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n.athena-iframe-clickarea{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.athena-iframe-clickarea.focus{\n\tpointer-events: none;\n\tcursor: auto;\n}\n\n.athena-iframe.focus{\n\toutline: 100px solid rgba(255, 255, 255, .75);\n}\n\n.athena-hud{\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, 0.5);\n\tz-index: 100;\n\tdisplay: none;\n}\n\n.athena-hud.visible{\n\tdisplay: block;\n}\n");

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
/* harmony import */ var _views_hud_hud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/hud/hud */ "./src/views/hud/hud.ts");




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
        this.hud = new _views_hud_hud__WEBPACK_IMPORTED_MODULE_3__["default"]();
        window.addEventListener('keydown', (e) => this.keyDown(e));
    }
    keyDown(e) {
        switch (e.code) {
            case 'Escape':
                this.hud.toggle();
                break;
        }
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
    currentSlide: 0,
    slides: []
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
        this.addStyles();
        this.createRoot();
        this.createSlides();
        this.registerEvents();
        this.resetAllSlides();
        this.getSlideFromHash();
    }
    gotoSlideByIndex(_n) {
        let slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[_n];
        let slideId = slide.id;
        this.gotoSlideById(slideId);
    }
    gotoSlideById(_id) {
        window.location.hash = `slide/${_id}`;
    }
    getSlideById(_id) {
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length; i++) {
            if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i].id == _id) {
                return src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i];
            }
        }
    }
    next() {
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length - 1 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide + 1 : src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length - 1;
        this.gotoSlideByIndex(nextSlide);
    }
    previous() {
        let nextSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide > 0 ? src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide - 1 : 0;
        this.gotoSlideByIndex(nextSlide);
    }
    trigger() {
        src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide].trigger();
    }
    /**
     * sets current slide
     * @param n number or string - index or id of slide to set
     */
    setSlide(_n) {
        if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length == 0) {
            return;
        }
        let slide;
        if (!isNaN(_n)) {
            slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[_n];
        }
        else {
            slide = this.getSlideById(_n);
        }
        let prevSlide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].currentSlide];
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
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.push(slide);
        }
        if (src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length == 0) {
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
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides.length; i++) {
            src_models_deckModel__WEBPACK_IMPORTED_MODULE_3__["default"].slides[i].setCurrent(false);
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


/***/ }),

/***/ "./src/views/hud/hud.ts":
/*!******************************!*\
  !*** ./src/views/hud/hud.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hud; });
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");

;
class Hud {
    constructor() {
        this.list = [];
        this.visible = false;
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        document.body.appendChild(this.container);
    }
    show() {
        this.container.classList.add('visible');
        this.registerEvents();
        this.resetList();
        this.populateList();
    }
    hide() {
        this.container.classList.remove('visible');
        this.container.innerHTML = '';
        this.removeEvents();
    }
    registerEvents() {
        this.keyDownHandler = (e) => this.keyDown(e);
        this.keyUpHandler = (e) => this.keyUp(e);
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
    }
    removeEvents() {
        window.removeEventListener('keydown', this.keyDownHandler);
        window.removeEventListener('keyup', this.keyUpHandler);
    }
    resetList() {
        this.list = [];
        for (let i = 0; i < src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides.length; i++) {
            let slide = src_models_deckModel__WEBPACK_IMPORTED_MODULE_0__["default"].slides[i];
            this.list.push({ number: i, name: slide.id });
        }
    }
    populateList() {
        this.listContainer = document.createElement('div');
        this.listContainer.className = 'athena-hud-list';
        for (let i = 0; i < this.list.length; i++) {
            let slide = this.list[i];
            let item = document.createElement('div');
            item.className = 'athena-hud-list-item';
            item.innerText = `${slide.number}: ${slide.name}`;
            item.dataset.index = slide.number.toString();
            this.listContainer.appendChild(item);
        }
        this.container.appendChild(this.listContainer);
    }
    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    keyDown(e) {
        console.log('keuydoen', e.code);
    }
    keyUp(e) {
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9TbGlkZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2NvbmZpZ01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZGVja01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvc2xpZGVUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9kZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVJZnJhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaHVkL2h1ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsNkVBQWMsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksZUFBZSx5QkFBeUIsR0FBRywwQkFBMEIsZUFBZSx5QkFBeUIsR0FBRyw2QkFBNkIsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLEdBQUcsbUNBQW1DLHlCQUF5QixpQkFBaUIsR0FBRyx5QkFBeUIsa0RBQWtELEdBQUcsZ0JBQWdCLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixtQ0FBbUMsaUJBQWlCLGtCQUFrQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyxHOzs7Ozs7Ozs7Ozs7QUNDdnNCO0FBQWU7SUFDWCxJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsWUFBWTtJQUNsQixPQUFPLEVBQUUsZUFBZTtDQUMzQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1E7QUFDRTtBQUNmO0FBRTNCLE1BQU0sTUFBTTtJQWNsQjtRQWJBLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixlQUFVLEdBQVEsNkRBQVUsQ0FBQyxDQUFDLHNCQUFzQjtRQUU1QyxrQkFBYSxHQUFrQjtZQUN0QyxxQkFBcUI7WUFDckIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixnQkFBZ0I7U0FDaEIsQ0FBQztRQUdELElBQUksT0FBTyxHQUFXLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxNQUFNLENBQUM7UUFDOUQsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ25CLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ3JCLDhEQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDJEQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksc0RBQUcsRUFBRSxDQUFDO1FBRXJCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sT0FBTyxDQUFDLENBQWdCO1FBQ3pCLFFBQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNYLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixNQUFNO1NBQ2I7SUFDTCxDQUFDO0NBRUo7QUFTRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7Q0FDN0I7S0FBTTtJQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztDQUN2Qzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBLENBQUM7QUFFRixJQUFJLFdBQVcsR0FBaUI7SUFDNUIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsWUFBWSxFQUFFLE9BQU87SUFDckIsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQztBQUVhLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNMMUI7QUFBQSxDQUFDO0FBRUYsSUFBSSxTQUFTLEdBQWU7SUFDeEIsWUFBWSxFQUFFLENBQUM7SUFDZixNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFYSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWHpCO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ0c7QUFDSTtBQUkxRCxDQUFDO0FBRUYsSUFBSSxVQUFVLEdBQWdCO0lBQzFCLEtBQUssRUFBRSxnRUFBVTtJQUNqQixJQUFJLEVBQUUsb0VBQVM7SUFDZixNQUFNLEVBQUUsc0VBQVc7Q0FDdEIsQ0FBQztBQUVhLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFhO0FBQ3VDO0FBSUw7QUFDQTtBQUNGO0FBQ0k7QUFFbEMsTUFBTSxJQUFJO0lBR3JCO1FBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUosZ0JBQWdCLENBQUMsRUFBVTtRQUMxQixJQUFJLEtBQUssR0FBRyw0REFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyw0REFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEQsSUFBSSw0REFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFO2dCQUNsQyxPQUFPLDREQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksU0FBUyxHQUFHLDREQUFTLENBQUMsWUFBWSxHQUFHLDREQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDREQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsNERBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLFNBQVMsR0FBRyw0REFBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDREQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTztRQUNOLDREQUFTLENBQUMsTUFBTSxDQUFDLDREQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFFBQVEsQ0FBQyxFQUFPO1FBRXZCLElBQUksNERBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLEtBQWlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLEtBQUssR0FBRyw0REFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ04sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLFNBQVMsR0FBZSw0REFBUyxDQUFDLE1BQU0sQ0FBQyw0REFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JFLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUNqQixTQUFTLENBQUMsT0FBTyxFQUFFO2lCQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNOLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0YsQ0FBQztJQUVPLGdCQUFnQjtRQUN2QixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQUksS0FBSyxHQUFVLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsNERBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN0QztJQUNGLENBQUM7SUFFTyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxZQUFZO1FBQ25CLElBQUksUUFBUSxHQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsOERBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWpELElBQUksT0FBTyxHQUFnQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEMsSUFBSSxVQUFVLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsSUFBSSxLQUFLLEdBQWUsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xDLDREQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksNERBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLDhEQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckU7SUFDRixDQUFDO0lBRU8sU0FBUztRQUNoQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0VBQVMsQ0FBQztRQUM1QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyxjQUFjO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsNkRBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyw2REFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLDZEQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxnQkFBZ0I7SUFFUixVQUFVLENBQUMsQ0FBaUI7UUFDbkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLE9BQU8sQ0FBQyxDQUFlO1FBQzlCLFFBQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNkLEtBQUssWUFBWTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsNkRBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNO1lBQ1AsS0FBSyxXQUFXO2dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLDZEQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsTUFBTTtZQUNQLEtBQUssT0FBTztnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyw2REFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU07U0FDUDtJQUNGLENBQUM7SUFFTyxLQUFLLENBQUMsQ0FBZTtJQUU3QixDQUFDO0lBRU8sYUFBYSxDQUFDLEVBQWU7UUFFcEMsY0FBYztRQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QixJQUFJLGFBQWEsR0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELElBQUksNkRBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzdDLE9BQU8sNkRBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNqQztTQUNEO1FBRUQsYUFBYTtRQUNiLElBQUksS0FBSyxHQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsOERBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksOERBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDOUIsSUFBSSxLQUFLLEdBQXVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLDZEQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7UUFFRCxhQUFhO1FBQ2IsT0FBTyw2REFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxjQUFjO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyw0REFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEQsNERBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7Ozs7Ozs7O0FDbE1EO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0Y7QUFnQjVDLENBQUM7QUFFYSxNQUFNLFVBQVU7SUFRM0IsWUFBWSxNQUFjLEVBQUUsR0FBZ0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxNQUFNLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRWhCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNoQixPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyw2REFBVSxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFvQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQWlCO1FBQ3hCLElBQUksUUFBUSxFQUFFO1lBQ1YsNERBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ25FRDtBQUFBO0FBQUE7QUFBNEI7QUFFYixNQUFNLFdBQVksU0FBUSw4Q0FBSztJQU0xQyxZQUFZLE1BQWMsRUFBRSxHQUFnQjtRQUN4QyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSwwQ0FBMEM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDdEM7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV4RCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxZQUFZO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVPLHNCQUFzQixDQUFDLENBQWE7UUFDeEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sZUFBZSxDQUFDLENBQWE7UUFDakMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3BGRDtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNxQjtBQUVsQyxNQUFNLFNBQVUsU0FBUSw4Q0FBSztJQUl4QyxZQUFZLE1BQWMsRUFBRSxHQUFnQjtRQUN4QyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBSnZCLFVBQUssR0FBdUIsRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBS3BCLElBQUksS0FBSyxHQUF1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsOERBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksOERBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDM0IsSUFBSSxLQUFLLEdBQXVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDRixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBRUgsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUE2QztBQU01QyxDQUFDO0FBRWEsTUFBTSxHQUFHO0lBUXBCO1FBTEEsU0FBSSxHQUFvQixFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUtyQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVk7UUFDZCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDREQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUM3QyxJQUFJLEtBQUssR0FBZSw0REFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFFakQsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUFFO1lBQy9DLElBQUksS0FBSyxHQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBZ0I7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBZ0I7SUFFdEIsQ0FBQztDQUNKIiwiZmlsZSI6ImF0aGVuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIjYXRoZW5hLXJvb3R7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRle1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRlLmN1cnJlbnR7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUtY2xpY2thcmVhe1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hdGhlbmEtaWZyYW1lLWNsaWNrYXJlYS5mb2N1c3tcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5hdGhlbmEtaWZyYW1lLmZvY3Vze1xcblxcdG91dGxpbmU6IDEwMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcXG59XFxuXFxuLmF0aGVuYS1odWR7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtaHVkLnZpc2libGV7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiIiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTkVYVDogJ3NsaWRlX25leHQnLFxuICAgIFBSRVY6ICdzbGlkZV9wcmV2JyxcbiAgICBUUklHR0VSOiAnc2xpZGVfdHJpZ2dlcidcbn07IiwiXG5pbXBvcnQgRGVjayBmcm9tICdzcmMvdmlld3MvZGVjay9kZWNrJztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5pbXBvcnQgSHVkIGZyb20gJy4vdmlld3MvaHVkL2h1ZCc7XG5cbmV4cG9ydCBjbGFzcyBBdGhlbmEge1xuXHRuYW1lOiBzdHJpbmcgPSBcIkF0aGVuYVwiO1xuXHR2ZXJzaW9uOiBudW1iZXIgPSAwLjE7XG5cdGRlY2s6IERlY2s7XG5cdGh1ZDogSHVkO1xuXHRzbGlkZVR5cGVzOiBhbnkgPSBTbGlkZVR5cGVzOyAvL2ZvciBhZGRpbmcgbmV3IHR5cGVzXG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXHR9XG5cblx0Z2VuZXJhdGUoY29uZmlnOiBhbnkpIHtcblx0XHRmb3IgKGxldCBpIGluIGNvbmZpZykge1xuXHRcdFx0Q29uZmlnTW9kZWxbaV0gPSBjb25maWdbaV07XG5cdFx0fVxuXG5cdFx0dGhpcy5kZWNrID0gbmV3IERlY2soKTtcblx0XHR0aGlzLmh1ZCA9IG5ldyBIdWQoKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5RG93bihlKSk7XG5cdH1cblxuXHRwcml2YXRlIGtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuaHVkLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8qIEFkZCB0byBnbG9iYWwgd2luZG93IG9iamVjdCAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBBdGhlbmE6IGFueTtcbiAgfVxufVxuXG5pZiAoIXdpbmRvdy5BdGhlbmEpIHtcblx0d2luZG93LkF0aGVuYSA9IG5ldyBBdGhlbmEoKTtcbn0gZWxzZSB7XG5cdGNvbnNvbGUud2FybignQXRoZW5hIGFscmVhZHkgZGVmaW5lZCcpO1xufSBcbiIsImludGVyZmFjZSBJQ29uZmlnTW9kZWwge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBDb25maWdNb2RlbDogSUNvbmZpZ01vZGVsID0ge1xuICAgIHNsaWRlU2VsZWN0b3I6ICcuc2xpZGUnLFxuICAgIHN0ZXBTZWxlY3RvcjogJy5zdGVwJyxcbiAgICBzdGVwTGlzdEl0ZW1zOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdNb2RlbDsiLCJpbXBvcnQgU2xpZGVCYXNpYyBmcm9tICdzcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuXG5pbnRlcmZhY2UgSURlY2tNb2RlbCB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueSxcbiAgICBzbGlkZXM6IEFycmF5PFNsaWRlQmFzaWM+XG59O1xuXG5sZXQgRGVja01vZGVsOiBJRGVja01vZGVsID0ge1xuICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICBzbGlkZXM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNrTW9kZWw7IiwiXG5pbXBvcnQgQmFzaWNTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5pbXBvcnQgU3RlcFNsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcCc7XG5pbXBvcnQgSWZyYW1lU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGVJZnJhbWUnO1xuXG5pbnRlcmZhY2UgSVNsaWRlVHlwZXMge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBTbGlkZVR5cGVzOiBJU2xpZGVUeXBlcyA9IHtcbiAgICBiYXNpYzogQmFzaWNTbGlkZSxcbiAgICBzdGVwOiBTdGVwU2xpZGUsXG4gICAgaWZyYW1lOiBJZnJhbWVTbGlkZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVUeXBlczsiLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5pbXBvcnQgU2xpZGVCYXNpYyBmcm9tICcuL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2t7XG4gICAgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYWRkU3R5bGVzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZVJvb3QoKTtcblx0XHR0aGlzLmNyZWF0ZVNsaWRlcygpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXHRcdHRoaXMucmVzZXRBbGxTbGlkZXMoKTtcblxuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuICAgIH1cblxuXHRnb3RvU2xpZGVCeUluZGV4KF9uOiBudW1iZXIpIHtcblx0XHRsZXQgc2xpZGUgPSBEZWNrTW9kZWwuc2xpZGVzW19uXTtcblx0XHRsZXQgc2xpZGVJZCA9IHNsaWRlLmlkO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJZChzbGlkZUlkKTtcblx0fVxuXG5cdGdvdG9TbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzbGlkZS8ke19pZH1gO1xuXHR9XG5cblx0Z2V0U2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKERlY2tNb2RlbC5zbGlkZXNbaV0uaWQgPT0gX2lkKSB7XG5cdFx0XHRcdHJldHVybiBEZWNrTW9kZWwuc2xpZGVzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCAtIDEgPyBEZWNrTW9kZWwuY3VycmVudFNsaWRlICsgMSA6IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHByZXZpb3VzKCkge1xuXHRcdGxldCBuZXh0U2xpZGUgPSBEZWNrTW9kZWwuY3VycmVudFNsaWRlID4gMCA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgLSAxIDogMDtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHRyaWdnZXIoKSB7XG5cdFx0RGVja01vZGVsLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXS50cmlnZ2VyKCk7XG5cdH1cblxuXHQvKipcblx0ICogc2V0cyBjdXJyZW50IHNsaWRlXG5cdCAqIEBwYXJhbSBuIG51bWJlciBvciBzdHJpbmcgLSBpbmRleCBvciBpZCBvZiBzbGlkZSB0byBzZXRcblx0ICovXG5cdHByaXZhdGUgc2V0U2xpZGUoX246IGFueSkge1xuXG5cdFx0aWYgKERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2xpZGU6IFNsaWRlQmFzaWM7XG5cdFx0aWYgKCFpc05hTihfbikpIHtcblx0XHRcdHNsaWRlID0gRGVja01vZGVsLnNsaWRlc1tfbl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlID0gdGhpcy5nZXRTbGlkZUJ5SWQoX24pO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2U2xpZGU6IFNsaWRlQmFzaWMgPSBEZWNrTW9kZWwuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdO1xuXHRcdGlmIChwcmV2U2xpZGUuaW4pIHtcblx0XHRcdHByZXZTbGlkZS5hbmltT3V0KClcblx0XHRcdC50aGVuKCgpID0+IHNsaWRlLmFuaW1JbigpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUuYW5pbUluKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbGlkZUZyb21IYXNoKCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0bGV0IHNsaWRlOnN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyNzbGlkZS8nLCAnJyk7XG5cdFx0XHRsZXQgbjogbnVtYmVyID0gcGFyc2VJbnQoc2xpZGUpO1xuXHRcdFx0aWYgKCFpc05hTihuKSkge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKG4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShzbGlkZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U2xpZGUoRGVja01vZGVsLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoKSB7XG5cdFx0bGV0IHNsaWRlRWxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3RvcikpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZUVscy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgc2xpZGVFbDogSFRNTEVsZW1lbnQgPSBzbGlkZUVsc1tpXTtcblx0XHRcdHNsaWRlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZUVsKTtcblxuXHRcdFx0bGV0IFNsaWRlQ2xhc3M6IHR5cGVvZiBTbGlkZUJhc2ljID0gdGhpcy5maW5kU2xpZGVUeXBlKHNsaWRlRWwpO1xuXHRcdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljID0gbmV3IFNsaWRlQ2xhc3MoaSwgc2xpZGVFbCk7XG5cdFx0XHRzbGlkZS5zZXRQYXJlbnQodGhpcy5yb290RWxlbWVudCk7XG5cdFx0XHREZWNrTW9kZWwuc2xpZGVzLnB1c2goc2xpZGUpO1xuXHRcdH1cblxuXHRcdGlmIChEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ25vIHNsaWRlcyB3aXRoIHNlbGVjdG9yOiAnLCBDb25maWdNb2RlbC5zbGlkZVNlbGVjdG9yKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZFN0eWxlcygpIHtcblx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXHRcdHN0eWxlLmlubmVySFRNTCA9IEF0aGVuYUNTUztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuTkVYVCwgKCkgPT4gdGhpcy5uZXh0KCkpO1xuXHRcdHRoaXMucm9vdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihTbGlkZUV2ZW50LlBSRVYsICgpID0+IHRoaXMucHJldmlvdXMoKSk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuVFJJR0dFUiwgKCkgPT4gdGhpcy50cmlnZ2VyKCkpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZSkgPT4gdGhpcy5oYXNoQ2hhbmdlKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd24oZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVVwKGUpKTtcblx0fVxuXG5cdC8vRVZFTlQgSEFORExFUlNcblxuXHRwcml2YXRlIGhhc2hDaGFuZ2UoZTpIYXNoQ2hhbmdlRXZlbnQpIHtcblx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlEb3duKGU6S2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuTkVYVCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoU2xpZGVFdmVudC5QUkVWKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnU3BhY2UnOlxuXHRcdFx0XHR0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuVFJJR0dFUikpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGtleVVwKGU6S2V5Ym9hcmRFdmVudCkge1xuXG5cdH1cblxuXHRwcml2YXRlIGZpbmRTbGlkZVR5cGUoZWw6IEhUTUxFbGVtZW50KTogdHlwZW9mIFNsaWRlQmFzaWMge1xuXG5cdFx0Ly9jdXN0b20gc2xpZGVcblx0XHRpZiAoZWwuZGF0YXNldFsnc2xpZGVUeXBlJ10pIHtcblx0XHRcdGxldCBzbGlkZVR5cGVOYW1lOiBzdHJpbmcgPSBlbC5kYXRhc2V0WydzbGlkZVR5cGUnXTtcblx0XHRcdGlmIChTbGlkZVR5cGVzLmhhc093blByb3BlcnR5KHNsaWRlVHlwZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBTbGlkZVR5cGVzW3NsaWRlVHlwZU5hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc3RlcCByZXZlYWxcblx0XHRsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcblx0XHRpZiAoQ29uZmlnTW9kZWwuc3RlcExpc3RJdGVtcykge1xuXHRcdFx0bGV0IGxpc3RzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuXHRcdFx0c3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuXHRcdH1cblx0XHRpZiAoc3RlcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ3N0ZXAnXTtcblx0XHR9XG5cblx0XHQvL2Jhc2ljIHNsaWRlXG5cdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ2Jhc2ljJ107XG5cdH1cblx0XG5cdHByaXZhdGUgcmVzZXRBbGxTbGlkZXMoKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0RGVja01vZGVsLnNsaWRlc1tpXS5zZXRDdXJyZW50KGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGluOiBib29sZWFuO1xuXG4gICAgYW5pbUluOiBGdW5jdGlvbjtcbiAgICBhbmltT3V0OiBGdW5jdGlvbjtcbiAgICB0cmlnZ2VyOiBGdW5jdGlvbjtcblxuICAgIHNldFBhcmVudDogRnVuY3Rpb247XG4gICAgc2V0Q3VycmVudDogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZUJhc2ljIGltcGxlbWVudHMgSVNsaWRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBpbjogYm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gX2luZGV4O1xuICAgICAgICB0aGlzLmVsID0gX2VsO1xuICAgICAgICB0aGlzLmlkID0gX2VsLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBgc2xpZGUke19pbmRleH1gO1xuICAgICAgICB0aGlzLnVybCA9IGBzbGlkZS8ke3RoaXMuaWR9YDtcbiAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuXG4gICAgICAgIF9lbC5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtc2xpZGUnKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0cnVlKTtcbiAgICAgICAgdGhpcy5pbiA9IHRydWU7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50Lk5FWFQsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgIH1cblxuICAgIHNldFBhcmVudChfcGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIF9wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudChfY3VycmVudDogYm9vbGVhbikge1xuICAgICAgICBpZiAoX2N1cnJlbnQpIHtcbiAgICAgICAgICAgIERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlSWZyYW1lIGV4dGVuZHMgU2xpZGV7XG5cbiAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIGNsaWNrQXJlYTogSFRNTEVsZW1lbnQ7XG4gICAgYm91bmRIYW5kbGVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihfaW5kZXgsIF9lbCk7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pZnJhbWUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgICBpZiAoIXRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLWlmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoKSB7IC8vIGF1dG9tYXRpY2FsbHkgaW50ZXJhY3RpdmUgaWYgY3VzdG9tIHcvaFxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSB0aGlzLmVsLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLmRhdGFzZXQuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSAnOTV2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDB2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZWwuZGF0YXNldC53aWR0aCB8fCB0aGlzLmVsLmRhdGFzZXQuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2tBcmVhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgICB0aGlzLmlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5sb2FkZWQoKSk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5lbC5kYXRhc2V0WydzcmMnXSk7XG5cbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jbGlja0FyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICByZXR1cm4gc3VwZXIuYW5pbU91dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2xpY2tBcmVhKCkge1xuICAgICAgICB0aGlzLmNsaWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lLWNsaWNrYXJlYScpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZV9jbGlja0FyZWFfQ0xJQ0soZSkpXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZGVkKCkge1xuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLmJvdW5kSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLmhhbmRsZV9lbF9DTElDSyhlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZV9lbF9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU3RlcCBleHRlbmRzIFNsaWRle1xuICAgIHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcbiAgICBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICBsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG4gICAgICAgIGlmIChDb25maWdNb2RlbC5zdGVwTGlzdEl0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuICAgICAgICAgICAgc3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RlcDogSFRNTEVsZW1lbnQgPSB0aGlzLnN0ZXBzW2ldO1xuICAgICAgICAgICAgc3RlcC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJ3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5cbmludGVyZmFjZSBJSHVkSXRlbSB7XG4gICAgbnVtYmVyOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWR7XG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBsaXN0Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBsaXN0OiBBcnJheTxJSHVkSXRlbT4gPSBbXTtcbiAgICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAga2V5RG93bkhhbmRsZXI6IGFueTtcbiAgICBrZXlVcEhhbmRsZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVzZXRMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVMaXN0KCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmtleURvd24oZSk7XG4gICAgICAgIHRoaXMua2V5VXBIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMua2V5VXAoZSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRzKCkge1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJlc2V0TGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2xpZGU6IFNsaWRlQmFzaWMgPSBEZWNrTW9kZWwuc2xpZGVzW2ldO1xuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe251bWJlcjogaSwgbmFtZTogc2xpZGUuaWR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW5lci5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZC1saXN0JztcblxuICAgICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpICsrICl7XG4gICAgICAgICAgICBsZXQgc2xpZGU6IElIdWRJdGVtID0gdGhpcy5saXN0W2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdhdGhlbmEtaHVkLWxpc3QtaXRlbSc7XG4gICAgICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGAke3NsaWRlLm51bWJlcn06ICR7c2xpZGUubmFtZX1gO1xuICAgICAgICAgICAgaXRlbS5kYXRhc2V0LmluZGV4ID0gc2xpZGUubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygna2V1eWRvZW4nLCBlLmNvZGUpO1xuICAgIH1cblxuICAgIGtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9