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

/***/ "./src/events/UserEvent.ts":
/*!*********************************!*\
  !*** ./src/events/UserEvent.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    KEYDOWN: 'key_down',
    KEYUP: 'key_up'
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
/* harmony import */ var src_models_slideTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/slideTypes */ "./src/models/slideTypes.ts");
/* harmony import */ var src_models_configModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/configModel */ "./src/models/configModel.ts");
/* harmony import */ var _views_hud_hud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/hud/hud */ "./src/views/hud/hud.ts");
/* harmony import */ var src_views_deck_deck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/views/deck/deck */ "./src/views/deck/deck.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
/* harmony import */ var src_events_UserEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/events/UserEvent */ "./src/events/UserEvent.ts");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");







class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.eventBus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.slideTypes = src_models_slideTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; //for adding new types
        this.eventTypes = {
            UserEvent: src_events_UserEvent__WEBPACK_IMPORTED_MODULE_5__["default"],
            SlideEvent: src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_6__["default"]
        };
        this._consoleStyle = [
            'background: #44918F',
            'color: white',
            'font-weight: bold',
            'padding: 0.2em'
        ];
        let message = `%c//${this.name} v${this.version}\\\\`;
        let consoleStyle = this._consoleStyle.join('; ');
        console.log(message, consoleStyle);
        window.addEventListener('keydown', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_5__["default"].KEYDOWN, e));
        window.addEventListener('keyup', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_5__["default"].KEYUP, e));
    }
    generate(config) {
        for (let i in config) {
            src_models_configModel__WEBPACK_IMPORTED_MODULE_1__["default"][i] = config[i];
        }
        this.deck = new src_views_deck_deck__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.hud = new _views_hud_hud__WEBPACK_IMPORTED_MODULE_2__["default"](this.deck.rootElement);
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
                break;
            case 'ArrowLeft':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].PREV);
                break;
            case 'Space':
                src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_1__["default"].TRIGGER);
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
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
/* harmony import */ var src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/events/UserEvent */ "./src/events/UserEvent.ts");



;
class Hud {
    constructor(parent) {
        this.list = [];
        this.visible = false;
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYDOWN, (e) => this.checkToggle(e));
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
        this.keyDownEvent = src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYDOWN, (e) => this.keyDown(e));
        this.keyUpEvent = src_events_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_2__["default"].KEYUP, (e) => this.keyUp(e));
    }
    removeEvents() {
        this.keyDownEvent.unsubscribe();
        this.keyUpEvent.unsubscribe();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudEJ1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL1NsaWRlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Vc2VyRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kZWNrTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zbGlkZVR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL2RlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9odWQvaHVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxDQUFnQjtRQUNoQyxRQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDWCxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFTyxPQUFPLENBQUMsQ0FBZ0I7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxLQUFLLENBQUMsQ0FBZ0I7SUFFOUIsQ0FBQztDQUNKIiwiZmlsZSI6ImF0aGVuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIjYXRoZW5hLXJvb3R7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRle1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRlLmN1cnJlbnR7XFxuXFx0b3BhY2l0eTogMTtcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUtY2xpY2thcmVhe1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hdGhlbmEtaWZyYW1lLWNsaWNrYXJlYS5mb2N1c3tcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5hdGhlbmEtaWZyYW1lLmZvY3Vze1xcblxcdG91dGxpbmU6IDEwMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjc1KTtcXG59XFxuXFxuLmF0aGVuYS1odWR7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtaHVkLnZpc2libGV7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiIiwiXG5pbnRlcmZhY2UgSUV2ZW50e1xuICAgIFtpZDogc3RyaW5nXTogU3Vic2NyaXB0aW9uUmVmZXJlbmNlXG59XG5cbmludGVyZmFjZSBJRXZlbnRUeXBlTGlzdHtcbiAgICBbZXZlbnRUeXBlOiBzdHJpbmddOiBJRXZlbnRcbn1cblxuY2xhc3MgU3Vic2NyaXB0aW9uUmVmZXJlbmNlIHtcbiAgICBidXM6IEV2ZW50QnVzO1xuICAgIGV2ZW50VHlwZTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoX2J1czogRXZlbnRCdXMsIF9ldmVudFR5cGU6IHN0cmluZywgX2lkOiBudW1iZXIsIF9jYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5idXMgPSBfYnVzO1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IF9ldmVudFR5cGU7XG4gICAgICAgIHRoaXMuaWQgPSBfaWQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBfY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1cy5zdWJzY3JpcHRpb25zW3RoaXMuZXZlbnRUeXBlXVt0aGlzLmlkXTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5idXMuc3Vic2NyaXB0aW9uc1t0aGlzLmV2ZW50VHlwZV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYnVzLnN1YnNjcmlwdGlvbnNbdGhpcy5ldmVudFR5cGVdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRCdXN7XG4gICAgXG4gICAgc3Vic2NyaXB0aW9uczogSUV2ZW50VHlwZUxpc3QgPSB7fTtcbiAgICBnZXROZXh0VW5pcXVlSWQ6IEZ1bmN0aW9uID0gdGhpcy5nZXRJZEdlbmVyYXRvcigpO1xuXG4gICAgc3Vic2NyaWJlKF9ldmVudFR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gdGhpcy5nZXROZXh0VW5pcXVlSWQoKTsgLy91bmlxdWUgaWQuXG5cbiAgICAgICAgaWYoIXRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSl7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0gPSB7IH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3ViUmVmID0gbmV3IFN1YnNjcmlwdGlvblJlZmVyZW5jZSh0aGlzLCBfZXZlbnRUeXBlLCBpZCwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1baWRdID0gc3ViUmVmO1xuICAgICAgICByZXR1cm4gc3ViUmVmO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKF9ldmVudFR5cGU6IHN0cmluZywgX2lkOiBudW1iZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXVtfaWRdO1xuICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRpc3BhdGNoKF9ldmVudFR5cGU6IHN0cmluZywgX2FyZzogYW55ID0gbnVsbCkge1xuICAgICAgICBpZighdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0pIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWY6IFN1YnNjcmlwdGlvblJlZmVyZW5jZSA9IHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXVtpZF07XG4gICAgICAgICAgICBzdWJSZWYuY2FsbGJhY2soX2FyZyk7XG4gICAgICAgICAgICAvL1RPRE86OiBpZiBvbmNlIHRoZW4gZGVzdHJveVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SWRHZW5lcmF0b3IoKSB7XG4gICAgICAgIGxldCBsYXN0SWQgPSAwXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0TmV4dFVuaXF1ZUlkKCkge1xuICAgICAgICAgICAgbGFzdElkICs9IDFcbiAgICAgICAgICAgIHJldHVybiBsYXN0SWRcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGJ1czpFdmVudEJ1cyA9IG5ldyBFdmVudEJ1cygpO1xuZXhwb3J0IGRlZmF1bHQgYnVzOyIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIE5FWFQ6ICdzbGlkZV9uZXh0JyxcbiAgICBQUkVWOiAnc2xpZGVfcHJldicsXG4gICAgVFJJR0dFUjogJ3NsaWRlX3RyaWdnZXInXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEtFWURPV046ICdrZXlfZG93bicsXG4gICAgS0VZVVA6ICdrZXlfdXAnXG59OyIsIlxuaW1wb3J0IFNsaWRlVHlwZXMgZnJvbSAnc3JjL21vZGVscy9zbGlkZVR5cGVzJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcbmltcG9ydCBIdWQgZnJvbSAnLi92aWV3cy9odWQvaHVkJztcbmltcG9ydCBEZWNrIGZyb20gJ3NyYy92aWV3cy9kZWNrL2RlY2snO1xuXG5pbXBvcnQge2RlZmF1bHQgYXMgYnVzLCBFdmVudEJ1c30gZnJvbSAnc3JjL2V2ZW50cy9FdmVudEJ1cyc7XG5pbXBvcnQgVXNlckV2ZW50IGZyb20gJ3NyYy9ldmVudHMvVXNlckV2ZW50JztcbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBBdGhlbmEge1xuXHRuYW1lOiBzdHJpbmcgPSBcIkF0aGVuYVwiO1xuXHR2ZXJzaW9uOiBudW1iZXIgPSAwLjE7XG5cdGRlY2s6IERlY2s7XG5cdGh1ZDogSHVkO1xuXHRldmVudEJ1czogRXZlbnRCdXMgPSBidXM7XG5cdHNsaWRlVHlwZXM6IGFueSA9IFNsaWRlVHlwZXM7IFx0Ly9mb3IgYWRkaW5nIG5ldyB0eXBlc1xuXHRldmVudFR5cGVzOiBvYmplY3QgPSB7IFx0XHRcdC8vZ2xvYmFsbHkgYWNjZXNzaWJsZSBldmVudCB0eXBlc1xuXHRcdFVzZXJFdmVudCxcblx0XHRTbGlkZUV2ZW50XG5cdH07XG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gYnVzLmRpc3BhdGNoKFVzZXJFdmVudC5LRVlET1dOLCBlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IGJ1cy5kaXNwYXRjaChVc2VyRXZlbnQuS0VZVVAsIGUpKTtcblxuXHR9XG5cblx0Z2VuZXJhdGUoY29uZmlnOiBhbnkpIHtcblx0XHRmb3IgKGxldCBpIGluIGNvbmZpZykge1xuXHRcdFx0Q29uZmlnTW9kZWxbaV0gPSBjb25maWdbaV07XG5cdFx0fVxuXG5cdFx0dGhpcy5kZWNrID0gbmV3IERlY2soKTtcblx0XHR0aGlzLmh1ZCA9IG5ldyBIdWQodGhpcy5kZWNrLnJvb3RFbGVtZW50KTtcblx0fVxuXG59XG5cbi8qIEFkZCB0byBnbG9iYWwgd2luZG93IG9iamVjdCAqL1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBBdGhlbmE6IGFueTtcbiAgfVxufVxuXG5pZiAoIXdpbmRvdy5BdGhlbmEpIHtcblx0d2luZG93LkF0aGVuYSA9IG5ldyBBdGhlbmEoKTtcbn0gZWxzZSB7XG5cdGNvbnNvbGUud2FybignQXRoZW5hIGFscmVhZHkgZGVmaW5lZCcpO1xufSBcbiIsImludGVyZmFjZSBJQ29uZmlnTW9kZWwge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBDb25maWdNb2RlbDogSUNvbmZpZ01vZGVsID0ge1xuICAgIHNsaWRlU2VsZWN0b3I6ICcuc2xpZGUnLFxuICAgIHN0ZXBTZWxlY3RvcjogJy5zdGVwJyxcbiAgICBzdGVwTGlzdEl0ZW1zOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWdNb2RlbDsiLCJpbXBvcnQgU2xpZGVCYXNpYyBmcm9tICdzcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGUnO1xuXG5pbnRlcmZhY2UgSURlY2tNb2RlbCB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueSxcbiAgICBzbGlkZXM6IEFycmF5PFNsaWRlQmFzaWM+XG59O1xuXG5sZXQgRGVja01vZGVsOiBJRGVja01vZGVsID0ge1xuICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICBzbGlkZXM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWNrTW9kZWw7IiwiXG5pbXBvcnQgQmFzaWNTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5pbXBvcnQgU3RlcFNsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlU3RlcCc7XG5pbXBvcnQgSWZyYW1lU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGVJZnJhbWUnO1xuXG5pbnRlcmZhY2UgSVNsaWRlVHlwZXMge1xuICAgIFtuYW1lOiBzdHJpbmddOiBhbnlcbn07XG5cbmxldCBTbGlkZVR5cGVzOiBJU2xpZGVUeXBlcyA9IHtcbiAgICBiYXNpYzogQmFzaWNTbGlkZSxcbiAgICBzdGVwOiBTdGVwU2xpZGUsXG4gICAgaWZyYW1lOiBJZnJhbWVTbGlkZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVUeXBlczsiLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5pbXBvcnQgU2xpZGVCYXNpYyBmcm9tICcuL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IERlY2tNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2RlY2tNb2RlbCc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgYnVzLCBFdmVudEJ1c30gZnJvbSAnc3JjL2V2ZW50cy9FdmVudEJ1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2t7XG4gICAgcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYWRkU3R5bGVzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZVJvb3QoKTtcblx0XHR0aGlzLmNyZWF0ZVNsaWRlcygpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXHRcdHRoaXMucmVzZXRBbGxTbGlkZXMoKTtcblxuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuICAgIH1cblxuXHRnb3RvU2xpZGVCeUluZGV4KF9uOiBudW1iZXIpIHtcblx0XHRsZXQgc2xpZGUgPSBEZWNrTW9kZWwuc2xpZGVzW19uXTtcblx0XHRsZXQgc2xpZGVJZCA9IHNsaWRlLmlkO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJZChzbGlkZUlkKTtcblx0fVxuXG5cdGdvdG9TbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGBzbGlkZS8ke19pZH1gO1xuXHR9XG5cblx0Z2V0U2xpZGVCeUlkKF9pZDogc3RyaW5nKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKERlY2tNb2RlbC5zbGlkZXNbaV0uaWQgPT0gX2lkKSB7XG5cdFx0XHRcdHJldHVybiBEZWNrTW9kZWwuc2xpZGVzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aCAtIDEgPyBEZWNrTW9kZWwuY3VycmVudFNsaWRlICsgMSA6IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHByZXZpb3VzKCkge1xuXHRcdGxldCBuZXh0U2xpZGUgPSBEZWNrTW9kZWwuY3VycmVudFNsaWRlID4gMCA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgLSAxIDogMDtcblx0XHR0aGlzLmdvdG9TbGlkZUJ5SW5kZXgobmV4dFNsaWRlKTtcblx0fVxuXG5cdHRyaWdnZXIoKSB7XG5cdFx0RGVja01vZGVsLnNsaWRlc1tEZWNrTW9kZWwuY3VycmVudFNsaWRlXS50cmlnZ2VyKCk7XG5cdH1cblxuXHQvKipcblx0ICogc2V0cyBjdXJyZW50IHNsaWRlXG5cdCAqIEBwYXJhbSBuIG51bWJlciBvciBzdHJpbmcgLSBpbmRleCBvciBpZCBvZiBzbGlkZSB0byBzZXRcblx0ICovXG5cdHByaXZhdGUgc2V0U2xpZGUoX246IGFueSkge1xuXG5cdFx0aWYgKERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2xpZGU6IFNsaWRlQmFzaWM7XG5cdFx0aWYgKCFpc05hTihfbikpIHtcblx0XHRcdHNsaWRlID0gRGVja01vZGVsLnNsaWRlc1tfbl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlID0gdGhpcy5nZXRTbGlkZUJ5SWQoX24pO1xuXHRcdH1cblxuXHRcdC8vTk9URTo6IGlmIGFueSBmdW4gY2FtZXJhIHdvcmsgaXQgd291bGQgZ28gaGVyZS5cblxuXHRcdGxldCBwcmV2U2xpZGU6IFNsaWRlQmFzaWMgPSBEZWNrTW9kZWwuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdO1xuXHRcdGlmIChwcmV2U2xpZGUuaW4pIHtcblx0XHRcdHByZXZTbGlkZS5hbmltT3V0KClcblx0XHRcdFx0LnRoZW4oKCkgPT4gc2xpZGUuYW5pbUluKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbGlkZS5hbmltSW4oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFNsaWRlRnJvbUhhc2goKSB7XG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0XHRsZXQgc2xpZGU6c3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnI3NsaWRlLycsICcnKTtcblx0XHRcdGxldCBuOiBudW1iZXIgPSBwYXJzZUludChzbGlkZSk7XG5cdFx0XHRpZiAoIWlzTmFOKG4pKSB7XG5cdFx0XHRcdHRoaXMuc2V0U2xpZGUobik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFNsaWRlKHNsaWRlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTbGlkZShEZWNrTW9kZWwuY3VycmVudFNsaWRlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJvb3QoKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMucm9vdEVsZW1lbnQuaWQgPSAnYXRoZW5hLXJvb3QnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yb290RWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVNsaWRlcygpIHtcblx0XHRsZXQgc2xpZGVFbHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zbGlkZVNlbGVjdG9yKSk7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNsaWRlRWxzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGxldCBzbGlkZUVsOiBIVE1MRWxlbWVudCA9IHNsaWRlRWxzW2ldO1xuXHRcdFx0c2xpZGVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNsaWRlRWwpO1xuXG5cdFx0XHRsZXQgU2xpZGVDbGFzczogdHlwZW9mIFNsaWRlQmFzaWMgPSB0aGlzLmZpbmRTbGlkZVR5cGUoc2xpZGVFbCk7XG5cdFx0XHRsZXQgc2xpZGU6IFNsaWRlQmFzaWMgPSBuZXcgU2xpZGVDbGFzcyhpLCBzbGlkZUVsKTtcblx0XHRcdHNsaWRlLnNldFBhcmVudCh0aGlzLnJvb3RFbGVtZW50KTtcblx0XHRcdERlY2tNb2RlbC5zbGlkZXMucHVzaChzbGlkZSk7XG5cdFx0fVxuXG5cdFx0aWYgKERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoID09IDApIHtcblx0XHRcdGNvbnNvbGUud2Fybignbm8gc2xpZGVzIHdpdGggc2VsZWN0b3I6ICcsIENvbmZpZ01vZGVsLnNsaWRlU2VsZWN0b3IpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkU3R5bGVzKCkge1xuXHRcdGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaW5uZXJIVE1MID0gQXRoZW5hQ1NTO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcblxuXHRcdGJ1cy5zdWJzY3JpYmUoU2xpZGVFdmVudC5ORVhULCAoKSA9PiB0aGlzLm5leHQoKSk7XG5cdFx0YnVzLnN1YnNjcmliZShTbGlkZUV2ZW50LlBSRVYsICgpID0+IHRoaXMucHJldmlvdXMoKSk7XG5cdFx0YnVzLnN1YnNjcmliZShTbGlkZUV2ZW50LlRSSUdHRVIsICgpID0+IHRoaXMudHJpZ2dlcigpKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGUpID0+IHRoaXMuaGFzaENoYW5nZShlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcChlKSk7XG5cdH1cblxuXHQvL0VWRU5UIEhBTkRMRVJTXG5cblx0cHJpdmF0ZSBoYXNoQ2hhbmdlKGU6SGFzaENoYW5nZUV2ZW50KSB7XG5cdFx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcblx0fVxuXG5cdHByaXZhdGUga2V5RG93bihlOktleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2goZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0YnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuTkVYVCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0YnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuUFJFVik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnU3BhY2UnOlxuXHRcdFx0XHRidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5UUklHR0VSKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBrZXlVcChlOktleWJvYXJkRXZlbnQpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBmaW5kU2xpZGVUeXBlKGVsOiBIVE1MRWxlbWVudCk6IHR5cGVvZiBTbGlkZUJhc2ljIHtcblxuXHRcdC8vY3VzdG9tIHNsaWRlXG5cdFx0aWYgKGVsLmRhdGFzZXRbJ3NsaWRlVHlwZSddKSB7XG5cdFx0XHRsZXQgc2xpZGVUeXBlTmFtZTogc3RyaW5nID0gZWwuZGF0YXNldFsnc2xpZGVUeXBlJ107XG5cdFx0XHRpZiAoU2xpZGVUeXBlcy5oYXNPd25Qcm9wZXJ0eShzbGlkZVR5cGVOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gU2xpZGVUeXBlc1tzbGlkZVR5cGVOYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL3N0ZXAgcmV2ZWFsXG5cdFx0bGV0IHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG5cdFx0aWYgKENvbmZpZ01vZGVsLnN0ZXBMaXN0SXRlbXMpIHtcblx0XHRcdGxldCBsaXN0czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKTtcblx0XHRcdHN0ZXBzID0gc3RlcHMuY29uY2F0KGxpc3RzKTtcblx0XHR9XG5cdFx0aWYgKHN0ZXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBTbGlkZVR5cGVzWydzdGVwJ107XG5cdFx0fVxuXG5cdFx0Ly9iYXNpYyBzbGlkZVxuXHRcdHJldHVybiBTbGlkZVR5cGVzWydiYXNpYyddO1xuXHR9XG5cdFxuXHRwcml2YXRlIHJlc2V0QWxsU2xpZGVzKCkge1xuXHRcdGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdERlY2tNb2RlbC5zbGlkZXNbaV0uc2V0Q3VycmVudChmYWxzZSk7XG5cdFx0fVxuXHR9XG5cdFxufSIsImltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5pbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2xpZGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICB1cmw6IHN0cmluZztcbiAgICBpbjogYm9vbGVhbjtcblxuICAgIGFuaW1JbjogRnVuY3Rpb247XG4gICAgYW5pbU91dDogRnVuY3Rpb247XG4gICAgdHJpZ2dlcjogRnVuY3Rpb247XG5cbiAgICBzZXRQYXJlbnQ6IEZ1bmN0aW9uO1xuICAgIHNldEN1cnJlbnQ6IEZ1bmN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVCYXNpYyBpbXBsZW1lbnRzIElTbGlkZXtcbiAgICBpZDogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZWw6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XG4gICAgaW46IGJvb2xlYW47XG4gICAgXG4gICAgY29uc3RydWN0b3IoX2luZGV4OiBudW1iZXIsIF9lbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IF9pbmRleDtcbiAgICAgICAgdGhpcy5lbCA9IF9lbDtcbiAgICAgICAgdGhpcy5pZCA9IF9lbC5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgYHNsaWRlJHtfaW5kZXh9YDtcbiAgICAgICAgdGhpcy51cmwgPSBgc2xpZGUvJHt0aGlzLmlkfWA7XG4gICAgICAgIHRoaXMuaW4gPSBmYWxzZTtcblxuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLXNsaWRlJyk7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGFuaW1PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmluID0gZmFsc2U7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyaWdnZXIoKSB7XG4gICAgICAgIGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50Lk5FWFQpO1xuICAgIH1cblxuICAgIHNldFBhcmVudChfcGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIF9wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudChfY3VycmVudDogYm9vbGVhbikge1xuICAgICAgICBpZiAoX2N1cnJlbnQpIHtcbiAgICAgICAgICAgIERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlSWZyYW1lIGV4dGVuZHMgU2xpZGV7XG5cbiAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIGNsaWNrQXJlYTogSFRNTEVsZW1lbnQ7XG4gICAgYm91bmRIYW5kbGVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihfaW5kZXgsIF9lbCk7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pZnJhbWUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgICBpZiAoIXRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLWlmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoKSB7IC8vIGF1dG9tYXRpY2FsbHkgaW50ZXJhY3RpdmUgaWYgY3VzdG9tIHcvaFxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSB0aGlzLmVsLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLmRhdGFzZXQuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSAnOTV2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDB2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZWwuZGF0YXNldC53aWR0aCB8fCB0aGlzLmVsLmRhdGFzZXQuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2tBcmVhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgICB0aGlzLmlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5sb2FkZWQoKSk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5lbC5kYXRhc2V0WydzcmMnXSk7XG5cbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jbGlja0FyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICByZXR1cm4gc3VwZXIuYW5pbU91dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2xpY2tBcmVhKCkge1xuICAgICAgICB0aGlzLmNsaWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lLWNsaWNrYXJlYScpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZV9jbGlja0FyZWFfQ0xJQ0soZSkpXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZGVkKCkge1xuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLmJvdW5kSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLmhhbmRsZV9lbF9DTElDSyhlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZV9lbF9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU3RlcCBleHRlbmRzIFNsaWRle1xuICAgIHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcbiAgICBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICBsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG4gICAgICAgIGlmIChDb25maWdNb2RlbC5zdGVwTGlzdEl0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuICAgICAgICAgICAgc3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RlcDogSFRNTEVsZW1lbnQgPSB0aGlzLnN0ZXBzW2ldO1xuICAgICAgICAgICAgc3RlcC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJ3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcbmltcG9ydCBVc2VyRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9Vc2VyRXZlbnQnO1xuXG5pbnRlcmZhY2UgSUh1ZEl0ZW0ge1xuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVke1xuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgbGlzdENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgbGlzdDogQXJyYXk8SUh1ZEl0ZW0+ID0gW107XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGtleURvd25FdmVudDogYW55O1xuICAgIGtleVVwRXZlbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ2F0aGVuYS1odWQnO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIGJ1cy5zdWJzY3JpYmUoVXNlckV2ZW50LktFWURPV04sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmNoZWNrVG9nZ2xlKGUpKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXNldExpc3QoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUxpc3QoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50ID0gYnVzLnN1YnNjcmliZShVc2VyRXZlbnQuS0VZRE9XTiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMua2V5RG93bihlKSk7XG4gICAgICAgIHRoaXMua2V5VXBFdmVudCA9IGJ1cy5zdWJzY3JpYmUoVXNlckV2ZW50LktFWVVQLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5rZXlVcChlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudHMoKSB7XG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMua2V5VXBFdmVudC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBzbGlkZTogU2xpZGVCYXNpYyA9IERlY2tNb2RlbC5zbGlkZXNbaV07XG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7bnVtYmVyOiBpLCBuYW1lOiBzbGlkZS5pZH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXIuY2xhc3NOYW1lID0gJ2F0aGVuYS1odWQtbGlzdCc7XG5cbiAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSArKyApe1xuICAgICAgICAgICAgbGV0IHNsaWRlOiBJSHVkSXRlbSA9IHRoaXMubGlzdFtpXTtcbiAgICAgICAgICAgIGxldCBpdGVtOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZC1saXN0LWl0ZW0nO1xuICAgICAgICAgICAgaXRlbS5pbm5lclRleHQgPSBgJHtzbGlkZS5udW1iZXJ9OiAke3NsaWRlLm5hbWV9YDtcbiAgICAgICAgICAgIGl0ZW0uZGF0YXNldC5pbmRleCA9IHNsaWRlLm51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVG9nZ2xlKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBrZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2tleWRvd24uLicsIGUuY29kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBrZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==