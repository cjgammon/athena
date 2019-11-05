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

/***/ "./src/events/EventBus.ts":
/*!********************************!*\
  !*** ./src/events/EventBus.ts ***!
  \********************************/
/*! exports provided: EventBus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
class SubscriptionReference {
    constructor(_bus, _eventType, _id, _callback) {
        this.bus = _bus;
        this.eventType = _eventType;
        this.id = _id;
        this.callback = _callback;
    }
    unsubscribe() {
        delete this.bus.subscriptions[this.eventType][this.id];
        if (Object.keys(this.bus.subscriptions[this.eventType]).length === 0) {
            delete this.bus.subscriptions[this.eventType];
        }
    }
}
class EventBus {
    constructor() {
        this.subscriptions = {};
        this.getNextUniqueId = this.getIdGenerator();
    }
    subscribe(_eventType, callback) {
        let id = this.getNextUniqueId(); //unique id.
        if (!this.subscriptions[_eventType]) {
            this.subscriptions[_eventType] = {};
        }
        let subRef = new SubscriptionReference(this, _eventType, id, callback);
        this.subscriptions[_eventType][id] = subRef;
        return subRef;
    }
    unsubscribe(_eventType, _id) {
        delete this.subscriptions[_eventType][_id];
        if (Object.keys(this.subscriptions[_eventType]).length === 0) {
            delete this.subscriptions[_eventType];
        }
    }
    dispatch(_eventType, _arg = null) {
        if (!this.subscriptions[_eventType]) {
            return;
        }
        for (let id in this.subscriptions[_eventType]) {
            let subRef = this.subscriptions[_eventType][id];
            subRef.callback(_arg);
            //TODO:: if once then destroy
        }
    }
    getIdGenerator() {
        let lastId = 0;
        return function getNextUniqueId() {
            lastId += 1;
            return lastId;
        };
    }
}
let bus = new EventBus();
/* harmony default export */ __webpack_exports__["default"] = (bus);


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
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");





class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.eventBus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"];
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
        this.hud = new _views_hud_hud__WEBPACK_IMPORTED_MODULE_3__["default"](this.deck.rootElement);
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
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
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
        //NOTE:: if any fun camera work it would go here.
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
        /*
        this.rootElement.addEventListener(SlideEvent.NEXT, () => this.next());
        this.rootElement.addEventListener(SlideEvent.PREV, () => this.previous());
        this.rootElement.addEventListener(SlideEvent.TRIGGER, () => this.trigger());
        */
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT, () => this.next());
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV, () => this.previous());
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].subscribe(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER, () => this.trigger());
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
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].NEXT);
                //this.rootElement.dispatchEvent(new Event(SlideEvent.NEXT));
                break;
            case 'ArrowLeft':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV);
                //this.rootElement.dispatchEvent(new Event(SlideEvent.PREV));
                break;
            case 'Space':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER);
                //this.rootElement.dispatchEvent(new Event(SlideEvent.TRIGGER));
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
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");



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
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].NEXT);
        //this.el.dispatchEvent(new Event(SlideEvent.NEXT, {bubbles: true}));
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
    constructor(parent) {
        this.list = [];
        this.visible = false;
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);
        window.addEventListener('keydown', (e) => this.checkToggle(e));
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
    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
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
    checkToggle(e) {
        switch (e.code) {
            case 'Escape':
                this.toggle();
                break;
        }
    }
    keyDown(e) {
        console.log('keydown..', e.code);
    }
    keyUp(e) {
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudEJ1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL1NsaWRlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kZWNrTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zbGlkZVR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL2RlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9odWQvaHVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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TUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVPLE9BQU8sQ0FBQyxDQUFnQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLEtBQUssQ0FBQyxDQUFnQjtJQUU5QixDQUFDO0NBQ0oiLCJmaWxlIjoiYXRoZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNhdGhlbmEtcm9vdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGUuY3VycmVudHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uYXRoZW5hLWlmcmFtZS1jbGlja2FyZWF7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUtY2xpY2thcmVhLmZvY3Vze1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUuZm9jdXN7XFxuXFx0b3V0bGluZTogMTAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xcbn1cXG5cXG4uYXRoZW5hLWh1ZHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmF0aGVuYS1odWQudmlzaWJsZXtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXCIiLCJcbmludGVyZmFjZSBJRXZlbnR7XG4gICAgW2lkOiBzdHJpbmddOiBTdWJzY3JpcHRpb25SZWZlcmVuY2Vcbn1cblxuaW50ZXJmYWNlIElFdmVudFR5cGVMaXN0e1xuICAgIFtldmVudFR5cGU6IHN0cmluZ106IElFdmVudFxufVxuXG5jbGFzcyBTdWJzY3JpcHRpb25SZWZlcmVuY2Uge1xuICAgIGJ1czogRXZlbnRCdXM7XG4gICAgZXZlbnRUeXBlOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihfYnVzOiBFdmVudEJ1cywgX2V2ZW50VHlwZTogc3RyaW5nLCBfaWQ6IG51bWJlciwgX2NhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmJ1cyA9IF9idXM7XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gX2V2ZW50VHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IF9pZDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IF9jYWxsYmFjaztcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVzLnN1YnNjcmlwdGlvbnNbdGhpcy5ldmVudFR5cGVdW3RoaXMuaWRdO1xuICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLmJ1cy5zdWJzY3JpcHRpb25zW3RoaXMuZXZlbnRUeXBlXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5idXMuc3Vic2NyaXB0aW9uc1t0aGlzLmV2ZW50VHlwZV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50QnVze1xuICAgIFxuICAgIHN1YnNjcmlwdGlvbnM6IElFdmVudFR5cGVMaXN0ID0ge307XG4gICAgZ2V0TmV4dFVuaXF1ZUlkOiBGdW5jdGlvbiA9IHRoaXMuZ2V0SWRHZW5lcmF0b3IoKTtcblxuICAgIHN1YnNjcmliZShfZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHRoaXMuZ2V0TmV4dFVuaXF1ZUlkKCk7IC8vdW5pcXVlIGlkLlxuXG4gICAgICAgIGlmKCF0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0pe1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdID0geyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN1YlJlZiA9IG5ldyBTdWJzY3JpcHRpb25SZWZlcmVuY2UodGhpcywgX2V2ZW50VHlwZSwgaWQsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdW2lkXSA9IHN1YlJlZjtcbiAgICAgICAgcmV0dXJuIHN1YlJlZjtcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZShfZXZlbnRUeXBlOiBzdHJpbmcsIF9pZDogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1bX2lkXTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaChfZXZlbnRUeXBlOiBzdHJpbmcsIF9hcmc6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYoIXRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKSB7XG4gICAgICAgICAgICBsZXQgc3ViUmVmOiBTdWJzY3JpcHRpb25SZWZlcmVuY2UgPSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1baWRdO1xuICAgICAgICAgICAgc3ViUmVmLmNhbGxiYWNrKF9hcmcpO1xuICAgICAgICAgICAgLy9UT0RPOjogaWYgb25jZSB0aGVuIGRlc3Ryb3lcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldElkR2VuZXJhdG9yKCkge1xuICAgICAgICBsZXQgbGFzdElkID0gMFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldE5leHRVbmlxdWVJZCgpIHtcbiAgICAgICAgICAgIGxhc3RJZCArPSAxXG4gICAgICAgICAgICByZXR1cm4gbGFzdElkXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBidXM6RXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKTtcbmV4cG9ydCBkZWZhdWx0IGJ1czsiLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBORVhUOiAnc2xpZGVfbmV4dCcsXG4gICAgUFJFVjogJ3NsaWRlX3ByZXYnLFxuICAgIFRSSUdHRVI6ICdzbGlkZV90cmlnZ2VyJ1xufTsiLCJcbmltcG9ydCBEZWNrIGZyb20gJ3NyYy92aWV3cy9kZWNrL2RlY2snO1xuaW1wb3J0IFNsaWRlVHlwZXMgZnJvbSAnc3JjL21vZGVscy9zbGlkZVR5cGVzJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcbmltcG9ydCBIdWQgZnJvbSAnLi92aWV3cy9odWQvaHVkJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcblxuZXhwb3J0IGNsYXNzIEF0aGVuYSB7XG5cdG5hbWU6IHN0cmluZyA9IFwiQXRoZW5hXCI7XG5cdHZlcnNpb246IG51bWJlciA9IDAuMTtcblx0ZGVjazogRGVjaztcblx0aHVkOiBIdWQ7XG5cdGV2ZW50QnVzOiBFdmVudEJ1cyA9IGJ1cztcblx0c2xpZGVUeXBlczogYW55ID0gU2xpZGVUeXBlczsgLy9mb3IgYWRkaW5nIG5ldyB0eXBlc1xuXG5cdHByaXZhdGUgX2NvbnNvbGVTdHlsZTogQXJyYXk8c3RyaW5nPiA9IFtcblx0XHQnYmFja2dyb3VuZDogIzQ0OTE4RicsXG5cdFx0J2NvbG9yOiB3aGl0ZScsXG5cdFx0J2ZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHQncGFkZGluZzogMC4yZW0nXG5cdF07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGAlYy8vJHt0aGlzLm5hbWV9IHYke3RoaXMudmVyc2lvbn1cXFxcXFxcXGA7XG5cdFx0bGV0IGNvbnNvbGVTdHlsZTogc3RyaW5nID0gdGhpcy5fY29uc29sZVN0eWxlLmpvaW4oJzsgJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSwgY29uc29sZVN0eWxlKTtcblx0fVxuXG5cdGdlbmVyYXRlKGNvbmZpZzogYW55KSB7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb25maWcpIHtcblx0XHRcdENvbmZpZ01vZGVsW2ldID0gY29uZmlnW2ldO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG5cdFx0dGhpcy5odWQgPSBuZXcgSHVkKHRoaXMuZGVjay5yb290RWxlbWVudCk7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJpbnRlcmZhY2UgSUNvbmZpZ01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgQ29uZmlnTW9kZWw6IElDb25maWdNb2RlbCA9IHtcbiAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcbiAgICBzdGVwU2VsZWN0b3I6ICcuc3RlcCcsXG4gICAgc3RlcExpc3RJdGVtczogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kZWw7IiwiaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcblxuaW50ZXJmYWNlIElEZWNrTW9kZWwge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnksXG4gICAgc2xpZGVzOiBBcnJheTxTbGlkZUJhc2ljPlxufTtcblxubGV0IERlY2tNb2RlbDogSURlY2tNb2RlbCA9IHtcbiAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgc2xpZGVzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVja01vZGVsOyIsIlxuaW1wb3J0IEJhc2ljU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuaW1wb3J0IFN0ZXBTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZVN0ZXAnO1xuaW1wb3J0IElmcmFtZVNsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlSWZyYW1lJztcblxuaW50ZXJmYWNlIElTbGlkZVR5cGVzIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgU2xpZGVUeXBlczogSVNsaWRlVHlwZXMgPSB7XG4gICAgYmFzaWM6IEJhc2ljU2xpZGUsXG4gICAgc3RlcDogU3RlcFNsaWRlLFxuICAgIGlmcmFtZTogSWZyYW1lU2xpZGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlVHlwZXM7IiwiXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgQXRoZW5hQ1NTIGZyb20gXCIhIXJhdy1sb2FkZXIhc3JjL2F0aGVuYS5jc3NcIjtcblxuaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnLi9zbGlkZXMvc2xpZGUnO1xuXG5pbXBvcnQgU2xpZGVFdmVudCBmcm9tICdzcmMvZXZlbnRzL1NsaWRlRXZlbnQnO1xuaW1wb3J0IFNsaWRlVHlwZXMgZnJvbSAnc3JjL21vZGVscy9zbGlkZVR5cGVzJztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuaW1wb3J0IENvbmZpZ01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvY29uZmlnTW9kZWwnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIGJ1cywgRXZlbnRCdXN9IGZyb20gJ3NyYy9ldmVudHMvRXZlbnRCdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNre1xuICAgIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFkZFN0eWxlcygpO1xuXG5cdFx0dGhpcy5jcmVhdGVSb290KCk7XG5cdFx0dGhpcy5jcmVhdGVTbGlkZXMoKTtcblxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblx0XHR0aGlzLnJlc2V0QWxsU2xpZGVzKCk7XG5cblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcbiAgICB9XG5cblx0Z290b1NsaWRlQnlJbmRleChfbjogbnVtYmVyKSB7XG5cdFx0bGV0IHNsaWRlID0gRGVja01vZGVsLnNsaWRlc1tfbl07XG5cdFx0bGV0IHNsaWRlSWQgPSBzbGlkZS5pZDtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SWQoc2xpZGVJZCk7XG5cdH1cblxuXHRnb3RvU2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2xpZGUvJHtfaWR9YDtcblx0fVxuXG5cdGdldFNsaWRlQnlJZChfaWQ6IHN0cmluZykge1xuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChEZWNrTW9kZWwuc2xpZGVzW2ldLmlkID09IF9pZCkge1xuXHRcdFx0XHRyZXR1cm4gRGVja01vZGVsLnNsaWRlc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGxldCBuZXh0U2xpZGUgPSBEZWNrTW9kZWwuY3VycmVudFNsaWRlIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGggLSAxID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSArIDEgOiBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUluZGV4KG5leHRTbGlkZSk7XG5cdH1cblxuXHRwcmV2aW91cygpIHtcblx0XHRsZXQgbmV4dFNsaWRlID0gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA+IDAgPyBEZWNrTW9kZWwuY3VycmVudFNsaWRlIC0gMSA6IDA7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUluZGV4KG5leHRTbGlkZSk7XG5cdH1cblxuXHR0cmlnZ2VyKCkge1xuXHRcdERlY2tNb2RlbC5zbGlkZXNbRGVja01vZGVsLmN1cnJlbnRTbGlkZV0udHJpZ2dlcigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHNldHMgY3VycmVudCBzbGlkZVxuXHQgKiBAcGFyYW0gbiBudW1iZXIgb3Igc3RyaW5nIC0gaW5kZXggb3IgaWQgb2Ygc2xpZGUgdG8gc2V0XG5cdCAqL1xuXHRwcml2YXRlIHNldFNsaWRlKF9uOiBhbnkpIHtcblxuXHRcdGlmIChEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljO1xuXHRcdGlmICghaXNOYU4oX24pKSB7XG5cdFx0XHRzbGlkZSA9IERlY2tNb2RlbC5zbGlkZXNbX25dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbGlkZSA9IHRoaXMuZ2V0U2xpZGVCeUlkKF9uKTtcblx0XHR9XG5cblx0XHQvL05PVEU6OiBpZiBhbnkgZnVuIGNhbWVyYSB3b3JrIGl0IHdvdWxkIGdvIGhlcmUuXG5cblx0XHRsZXQgcHJldlNsaWRlOiBTbGlkZUJhc2ljID0gRGVja01vZGVsLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXTtcblx0XHRpZiAocHJldlNsaWRlLmluKSB7XG5cdFx0XHRwcmV2U2xpZGUuYW5pbU91dCgpXG5cdFx0XHRcdC50aGVuKCgpID0+IHNsaWRlLmFuaW1JbigpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUuYW5pbUluKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbGlkZUZyb21IYXNoKCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdFx0bGV0IHNsaWRlOnN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyNzbGlkZS8nLCAnJyk7XG5cdFx0XHRsZXQgbjogbnVtYmVyID0gcGFyc2VJbnQoc2xpZGUpO1xuXHRcdFx0aWYgKCFpc05hTihuKSkge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKG4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShzbGlkZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U2xpZGUoRGVja01vZGVsLmN1cnJlbnRTbGlkZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb290KCkge1xuXHRcdHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmlkID0gJ2F0aGVuYS1yb290Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucm9vdEVsZW1lbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVTbGlkZXMoKSB7XG5cdFx0bGV0IHNsaWRlRWxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3RvcikpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZUVscy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRsZXQgc2xpZGVFbDogSFRNTEVsZW1lbnQgPSBzbGlkZUVsc1tpXTtcblx0XHRcdHNsaWRlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZUVsKTtcblxuXHRcdFx0bGV0IFNsaWRlQ2xhc3M6IHR5cGVvZiBTbGlkZUJhc2ljID0gdGhpcy5maW5kU2xpZGVUeXBlKHNsaWRlRWwpO1xuXHRcdFx0bGV0IHNsaWRlOiBTbGlkZUJhc2ljID0gbmV3IFNsaWRlQ2xhc3MoaSwgc2xpZGVFbCk7XG5cdFx0XHRzbGlkZS5zZXRQYXJlbnQodGhpcy5yb290RWxlbWVudCk7XG5cdFx0XHREZWNrTW9kZWwuc2xpZGVzLnB1c2goc2xpZGUpO1xuXHRcdH1cblxuXHRcdGlmIChEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ25vIHNsaWRlcyB3aXRoIHNlbGVjdG9yOiAnLCBDb25maWdNb2RlbC5zbGlkZVNlbGVjdG9yKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZFN0eWxlcygpIHtcblx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXHRcdHN0eWxlLmlubmVySFRNTCA9IEF0aGVuYUNTUztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XG5cdFx0Lypcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5ORVhULCAoKSA9PiB0aGlzLm5leHQoKSk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHR0aGlzLnJvb3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoU2xpZGVFdmVudC5UUklHR0VSLCAoKSA9PiB0aGlzLnRyaWdnZXIoKSk7XG5cdFx0Ki9cblx0XHRidXMuc3Vic2NyaWJlKFNsaWRlRXZlbnQuTkVYVCwgKCkgPT4gdGhpcy5uZXh0KCkpO1xuXHRcdGJ1cy5zdWJzY3JpYmUoU2xpZGVFdmVudC5QUkVWLCAoKSA9PiB0aGlzLnByZXZpb3VzKCkpO1xuXHRcdGJ1cy5zdWJzY3JpYmUoU2xpZGVFdmVudC5UUklHR0VSLCAoKSA9PiB0aGlzLnRyaWdnZXIoKSk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIChlKSA9PiB0aGlzLmhhc2hDaGFuZ2UoZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5RG93bihlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5VXAoZSkpO1xuXHR9XG5cblx0Ly9FVkVOVCBIQU5ETEVSU1xuXG5cdHByaXZhdGUgaGFzaENoYW5nZShlOkhhc2hDaGFuZ2VFdmVudCkge1xuXHRcdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG5cdH1cblxuXHRwcml2YXRlIGtleURvd24oZTpLZXlib2FyZEV2ZW50KSB7XG5cdFx0c3dpdGNoKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50Lk5FWFQpO1xuXHRcdFx0XHQvL3RoaXMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoU2xpZGVFdmVudC5ORVhUKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0YnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuUFJFVik7XG5cdFx0XHRcdC8vdGhpcy5yb290RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChTbGlkZUV2ZW50LlBSRVYpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LlRSSUdHRVIpO1xuXHRcdFx0XHQvL3RoaXMucm9vdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoU2xpZGVFdmVudC5UUklHR0VSKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUga2V5VXAoZTpLZXlib2FyZEV2ZW50KSB7XG5cblx0fVxuXG5cdHByaXZhdGUgZmluZFNsaWRlVHlwZShlbDogSFRNTEVsZW1lbnQpOiB0eXBlb2YgU2xpZGVCYXNpYyB7XG5cblx0XHQvL2N1c3RvbSBzbGlkZVxuXHRcdGlmIChlbC5kYXRhc2V0WydzbGlkZVR5cGUnXSkge1xuXHRcdFx0bGV0IHNsaWRlVHlwZU5hbWU6IHN0cmluZyA9IGVsLmRhdGFzZXRbJ3NsaWRlVHlwZSddO1xuXHRcdFx0aWYgKFNsaWRlVHlwZXMuaGFzT3duUHJvcGVydHkoc2xpZGVUeXBlTmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbc2xpZGVUeXBlTmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly9zdGVwIHJldmVhbFxuXHRcdGxldCBzdGVwczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKENvbmZpZ01vZGVsLnN0ZXBTZWxlY3RvcikpO1xuXHRcdGlmIChDb25maWdNb2RlbC5zdGVwTGlzdEl0ZW1zKSB7XG5cdFx0XHRsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG5cdFx0XHRzdGVwcyA9IHN0ZXBzLmNvbmNhdChsaXN0cyk7XG5cdFx0fVxuXHRcdGlmIChzdGVwcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gU2xpZGVUeXBlc1snc3RlcCddO1xuXHRcdH1cblxuXHRcdC8vYmFzaWMgc2xpZGVcblx0XHRyZXR1cm4gU2xpZGVUeXBlc1snYmFzaWMnXTtcblx0fVxuXHRcblx0cHJpdmF0ZSByZXNldEFsbFNsaWRlcygpIHtcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHREZWNrTW9kZWwuc2xpZGVzW2ldLnNldEN1cnJlbnQoZmFsc2UpO1xuXHRcdH1cblx0fVxuXHRcbn0iLCJpbXBvcnQgU2xpZGVFdmVudCBmcm9tICdzcmMvZXZlbnRzL1NsaWRlRXZlbnQnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgYnVzLCBFdmVudEJ1c30gZnJvbSAnc3JjL2V2ZW50cy9FdmVudEJ1cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZWw6IEhUTUxFbGVtZW50O1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgaW46IGJvb2xlYW47XG5cbiAgICBhbmltSW46IEZ1bmN0aW9uO1xuICAgIGFuaW1PdXQ6IEZ1bmN0aW9uO1xuICAgIHRyaWdnZXI6IEZ1bmN0aW9uO1xuXG4gICAgc2V0UGFyZW50OiBGdW5jdGlvbjtcbiAgICBzZXRDdXJyZW50OiBGdW5jdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlQmFzaWMgaW1wbGVtZW50cyBJU2xpZGV7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICB1cmw6IHN0cmluZztcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIGluOiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBfaW5kZXg7XG4gICAgICAgIHRoaXMuZWwgPSBfZWw7XG4gICAgICAgIHRoaXMuaWQgPSBfZWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzbGlkZSR7X2luZGV4fWA7XG4gICAgICAgIHRoaXMudXJsID0gYHNsaWRlLyR7dGhpcy5pZH1gO1xuICAgICAgICB0aGlzLmluID0gZmFsc2U7XG5cbiAgICAgICAgX2VsLmNsYXNzTGlzdC5hZGQoJ2F0aGVuYS1zbGlkZScpO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRydWUpO1xuICAgICAgICB0aGlzLmluID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuICAgICAgICBidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5ORVhUKTtcbiAgICAgICAgLy90aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFNsaWRlRXZlbnQuTkVYVCwge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KF9wYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50KF9jdXJyZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfY3VycmVudCkge1xuICAgICAgICAgICAgRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVJZnJhbWUgZXh0ZW5kcyBTbGlkZXtcblxuICAgIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgY2xpY2tBcmVhOiBIVE1MRWxlbWVudDtcbiAgICBib3VuZEhhbmRsZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlmcmFtZSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVsLmRhdGFzZXQud2lkdGgpIHsgLy8gYXV0b21hdGljYWxseSBpbnRlcmFjdGl2ZSBpZiBjdXN0b20gdy9oXG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9IHRoaXMuZWwuZGF0YXNldC53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwuZGF0YXNldC5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbC5kYXRhc2V0LmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICc5NXZ3JztcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICc5NXZoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLndpZHRoID0gJzEwMHZ3JztcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoIHx8IHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDbGlja0FyZWEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgIHRoaXMuaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLmxvYWRlZCgpKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLmVsLmRhdGFzZXRbJ3NyYyddKTtcblxuICAgICAgICBzdXBlci5hbmltSW4oKTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQXJlYSkge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmNsaWNrQXJlYSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIHJldHVybiBzdXBlci5hbmltT3V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDbGlja0FyZWEoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhLmNsYXNzTGlzdC5hZGQoJ2F0aGVuYS1pZnJhbWUtY2xpY2thcmVhJyk7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlKSlcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNsaWNrQXJlYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkZWQoKSB7XG4gICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVfY2xpY2tBcmVhX0NMSUNLKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMuYm91bmRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMuaGFuZGxlX2VsX0NMSUNLKGUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2VsX0NMSUNLKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSGFuZGxlcik7XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVTdGVwIGV4dGVuZHMgU2xpZGV7XG4gICAgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdO1xuICAgIGN1cnJlbnRTdGVwOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoX2luZGV4OiBudW1iZXIsIF9lbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoX2luZGV4LCBfZWwpO1xuXG4gICAgICAgIGxldCBzdGVwczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcbiAgICAgICAgaWYgKENvbmZpZ01vZGVsLnN0ZXBMaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBsaXN0czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG4gICAgICAgICAgICBzdGVwcyA9IHN0ZXBzLmNvbmNhdChsaXN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwOiBIVE1MRWxlbWVudCA9IHRoaXMuc3RlcHNbaV07XG4gICAgICAgICAgICBzdGVwLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICBzdXBlci5hbmltSW4oKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcblxuaW50ZXJmYWNlIElIdWRJdGVtIHtcbiAgICBudW1iZXI6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZHtcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuICAgIGxpc3RDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICAgIGxpc3Q6IEFycmF5PElIdWRJdGVtPiA9IFtdO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBrZXlEb3duSGFuZGxlcjogYW55O1xuICAgIGtleVVwSGFuZGxlcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZCc7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5jaGVja1RvZ2dsZShlKSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVzZXRMaXN0KCk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVMaXN0KCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMua2V5RG93bihlKTtcbiAgICAgICAgdGhpcy5rZXlVcEhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5rZXlVcChlKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50cygpIHtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0TGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2xpZGU6IFNsaWRlQmFzaWMgPSBEZWNrTW9kZWwuc2xpZGVzW2ldO1xuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe251bWJlcjogaSwgbmFtZTogc2xpZGUuaWR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcG9wdWxhdGVMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdhdGhlbmEtaHVkLWxpc3QnO1xuXG4gICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkgKysgKXtcbiAgICAgICAgICAgIGxldCBzbGlkZTogSUh1ZEl0ZW0gPSB0aGlzLmxpc3RbaV07XG4gICAgICAgICAgICBsZXQgaXRlbTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ2F0aGVuYS1odWQtbGlzdC1pdGVtJztcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gYCR7c2xpZGUubnVtYmVyfTogJHtzbGlkZS5uYW1lfWA7XG4gICAgICAgICAgICBpdGVtLmRhdGFzZXQuaW5kZXggPSBzbGlkZS5udW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja1RvZ2dsZShlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUga2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXlkb3duLi4nLCBlLmNvZGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUga2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=