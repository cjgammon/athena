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
    TRIGGER: 'slide_trigger',
    ANIMIN: 'anim_in',
    ANIMOUT: 'anim_out',
    RESOLVE: 'slide_resolve',
    DISSOLVE: 'slide_dissolve'
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
/* harmony import */ var src_models_deckModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/deckModel */ "./src/models/deckModel.ts");
/* harmony import */ var src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/events/EventBus */ "./src/events/EventBus.ts");
/* harmony import */ var src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/events/UserEvent */ "./src/events/UserEvent.ts");
/* harmony import */ var src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/events/SlideEvent */ "./src/events/SlideEvent.ts");








class Athena {
    constructor() {
        this.name = "Athena";
        this.version = 0.1;
        this.slides = src_models_deckModel__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.eventBus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.slideTypes = src_models_slideTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; //exposed for adding new types
        this.events = {
            UserEvent: src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"],
            SlideEvent: src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_7__["default"]
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
        window.addEventListener('keydown', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"].KEYDOWN, e));
        window.addEventListener('keyup', (e) => src_events_EventBus__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(src_events_UserEvent__WEBPACK_IMPORTED_MODULE_6__["default"].KEYUP, e));
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
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMIN);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].RESOLVE);
        this.in = true;
    }
    animOut() {
        return new Promise((resolve, reject) => {
            this.setCurrent(false);
            src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMOUT);
            src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].DISSOLVE);
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
        this.transition = _el.dataset.transitionDuration ? parseFloat(_el.dataset.transitionDuration) : 0;
    }
    animIn() {
        let delay = this.transition * 1000;
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
        super.animIn();
        setTimeout(() => {
            this.iframe.setAttribute('src', this.el.dataset['src']);
        }, delay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudEJ1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL1NsaWRlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Vc2VyRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kZWNrTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zbGlkZVR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL2RlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9odWQvaHVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVPLE9BQU8sQ0FBQyxDQUFnQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLEtBQUssQ0FBQyxDQUFnQjtJQUU5QixDQUFDO0NBQ0oiLCJmaWxlIjoiYXRoZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNhdGhlbmEtcm9vdHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGV7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5hdGhlbmEtc2xpZGUuY3VycmVudHtcXG5cXHRvcGFjaXR5OiAxO1xcblxcdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uYXRoZW5hLWlmcmFtZS1jbGlja2FyZWF7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUtY2xpY2thcmVhLmZvY3Vze1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmF0aGVuYS1pZnJhbWUuZm9jdXN7XFxuXFx0b3V0bGluZTogMTAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xcbn1cXG5cXG4uYXRoZW5hLWh1ZHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXHR6LWluZGV4OiAxMDA7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmF0aGVuYS1odWQudmlzaWJsZXtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXCIiLCJcbmludGVyZmFjZSBJRXZlbnR7XG4gICAgW2lkOiBzdHJpbmddOiBTdWJzY3JpcHRpb25SZWZlcmVuY2Vcbn1cblxuaW50ZXJmYWNlIElFdmVudFR5cGVMaXN0e1xuICAgIFtldmVudFR5cGU6IHN0cmluZ106IElFdmVudFxufVxuXG5jbGFzcyBTdWJzY3JpcHRpb25SZWZlcmVuY2Uge1xuICAgIGJ1czogRXZlbnRCdXM7XG4gICAgZXZlbnRUeXBlOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihfYnVzOiBFdmVudEJ1cywgX2V2ZW50VHlwZTogc3RyaW5nLCBfaWQ6IG51bWJlciwgX2NhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmJ1cyA9IF9idXM7XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gX2V2ZW50VHlwZTtcbiAgICAgICAgdGhpcy5pZCA9IF9pZDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IF9jYWxsYmFjaztcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVzLnN1YnNjcmlwdGlvbnNbdGhpcy5ldmVudFR5cGVdW3RoaXMuaWRdO1xuICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLmJ1cy5zdWJzY3JpcHRpb25zW3RoaXMuZXZlbnRUeXBlXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5idXMuc3Vic2NyaXB0aW9uc1t0aGlzLmV2ZW50VHlwZV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudEJ1c3tcbiAgICBcbiAgICBzdWJzY3JpcHRpb25zOiBJRXZlbnRUeXBlTGlzdCA9IHt9O1xuICAgIGdldE5leHRVbmlxdWVJZDogRnVuY3Rpb24gPSB0aGlzLmdldElkR2VuZXJhdG9yKCk7XG5cbiAgICBzdWJzY3JpYmUoX2V2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGlkOiBudW1iZXIgPSB0aGlzLmdldE5leHRVbmlxdWVJZCgpOyAvL3VuaXF1ZSBpZC5cblxuICAgICAgICBpZighdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKXtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSA9IHsgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWJSZWYgPSBuZXcgU3Vic2NyaXB0aW9uUmVmZXJlbmNlKHRoaXMsIF9ldmVudFR5cGUsIGlkLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXVtpZF0gPSBzdWJSZWY7XG4gICAgICAgIHJldHVybiBzdWJSZWY7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmUoX2V2ZW50VHlwZTogc3RyaW5nLCBfaWQ6IG51bWJlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdW19pZF07XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGlzcGF0Y2goX2V2ZW50VHlwZTogc3RyaW5nLCBfYXJnOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmKCF0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSkge1xuICAgICAgICAgICAgbGV0IHN1YlJlZjogU3Vic2NyaXB0aW9uUmVmZXJlbmNlID0gdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdW2lkXTtcbiAgICAgICAgICAgIHN1YlJlZi5jYWxsYmFjayhfYXJnKTtcbiAgICAgICAgICAgIC8vVE9ETzo6IGlmIG9uY2UgdGhlbiBkZXN0cm95XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJZEdlbmVyYXRvcigpIHtcbiAgICAgICAgbGV0IGxhc3RJZCA9IDBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXROZXh0VW5pcXVlSWQoKSB7XG4gICAgICAgICAgICBsYXN0SWQgKz0gMVxuICAgICAgICAgICAgcmV0dXJuIGxhc3RJZFxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgYnVzOkV2ZW50QnVzID0gbmV3IEV2ZW50QnVzKCk7XG5leHBvcnQgZGVmYXVsdCBidXM7IiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTkVYVDogJ3NsaWRlX25leHQnLFxuICAgIFBSRVY6ICdzbGlkZV9wcmV2JyxcbiAgICBUUklHR0VSOiAnc2xpZGVfdHJpZ2dlcicsXG4gICAgQU5JTUlOOiAnYW5pbV9pbicsXG4gICAgQU5JTU9VVDogJ2FuaW1fb3V0JyxcbiAgICBSRVNPTFZFOiAnc2xpZGVfcmVzb2x2ZScsXG4gICAgRElTU09MVkU6ICdzbGlkZV9kaXNzb2x2ZSdcbn07IiwiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgS0VZRE9XTjogJ2tleV9kb3duJyxcbiAgICBLRVlVUDogJ2tleV91cCdcbn07IiwiXG5pbXBvcnQgU2xpZGVUeXBlcyBmcm9tICdzcmMvbW9kZWxzL3NsaWRlVHlwZXMnO1xuaW1wb3J0IENvbmZpZ01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvY29uZmlnTW9kZWwnO1xuaW1wb3J0IEh1ZCBmcm9tICcuL3ZpZXdzL2h1ZC9odWQnO1xuaW1wb3J0IERlY2sgZnJvbSAnc3JjL3ZpZXdzL2RlY2svZGVjayc7XG5cbmltcG9ydCB7ZGVmYXVsdCBhcyBkZWNrTW9kZWwsIElEZWNrTW9kZWx9IGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcblxuaW1wb3J0IHtkZWZhdWx0IGFzIGJ1cywgRXZlbnRCdXN9IGZyb20gJ3NyYy9ldmVudHMvRXZlbnRCdXMnO1xuaW1wb3J0IFVzZXJFdmVudCBmcm9tICdzcmMvZXZlbnRzL1VzZXJFdmVudCc7XG5pbXBvcnQgU2xpZGVFdmVudCBmcm9tICdzcmMvZXZlbnRzL1NsaWRlRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRodWQ6IEh1ZDtcblx0ZGVjazogRGVjaztcblx0c2xpZGVzOiBJRGVja01vZGVsID0gZGVja01vZGVsO1xuXHRldmVudEJ1czogRXZlbnRCdXMgPSBidXM7XG5cdHNsaWRlVHlwZXM6IGFueSA9IFNsaWRlVHlwZXM7IFx0Ly9leHBvc2VkIGZvciBhZGRpbmcgbmV3IHR5cGVzXG5cdGV2ZW50czogb2JqZWN0ID0geyBcdFx0XHQvL2V4cG9zZWQgZXZlbnQgdHlwZXNcblx0XHRVc2VyRXZlbnQsXG5cdFx0U2xpZGVFdmVudFxuXHR9O1xuXG5cdHByaXZhdGUgX2NvbnNvbGVTdHlsZTogQXJyYXk8c3RyaW5nPiA9IFtcblx0XHQnYmFja2dyb3VuZDogIzQ0OTE4RicsXG5cdFx0J2NvbG9yOiB3aGl0ZScsXG5cdFx0J2ZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHQncGFkZGluZzogMC4yZW0nXG5cdF07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGAlYy8vJHt0aGlzLm5hbWV9IHYke3RoaXMudmVyc2lvbn1cXFxcXFxcXGA7XG5cdFx0bGV0IGNvbnNvbGVTdHlsZTogc3RyaW5nID0gdGhpcy5fY29uc29sZVN0eWxlLmpvaW4oJzsgJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSwgY29uc29sZVN0eWxlKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IGJ1cy5kaXNwYXRjaChVc2VyRXZlbnQuS0VZRE9XTiwgZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiBidXMuZGlzcGF0Y2goVXNlckV2ZW50LktFWVVQLCBlKSk7XG5cblx0fVxuXG5cdGdlbmVyYXRlKGNvbmZpZzogYW55KSB7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb25maWcpIHtcblx0XHRcdENvbmZpZ01vZGVsW2ldID0gY29uZmlnW2ldO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG5cdFx0dGhpcy5odWQgPSBuZXcgSHVkKHRoaXMuZGVjay5yb290RWxlbWVudCk7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJpbnRlcmZhY2UgSUNvbmZpZ01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgQ29uZmlnTW9kZWw6IElDb25maWdNb2RlbCA9IHtcbiAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcbiAgICBzdGVwU2VsZWN0b3I6ICcuc3RlcCcsXG4gICAgc3RlcExpc3RJdGVtczogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kZWw7IiwiaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGVja01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55LFxuICAgIHNsaWRlczogQXJyYXk8U2xpZGVCYXNpYz5cbn07XG5cbmxldCBEZWNrTW9kZWw6IElEZWNrTW9kZWwgPSB7XG4gICAgY3VycmVudFNsaWRlOiAwLFxuICAgIHNsaWRlczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlY2tNb2RlbDsiLCJcbmltcG9ydCBCYXNpY1NsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcbmltcG9ydCBTdGVwU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwJztcbmltcG9ydCBJZnJhbWVTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZSc7XG5cbmludGVyZmFjZSBJU2xpZGVUeXBlcyB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxubGV0IFNsaWRlVHlwZXM6IElTbGlkZVR5cGVzID0ge1xuICAgIGJhc2ljOiBCYXNpY1NsaWRlLFxuICAgIHN0ZXA6IFN0ZXBTbGlkZSxcbiAgICBpZnJhbWU6IElmcmFtZVNsaWRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZVR5cGVzOyIsIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEF0aGVuYUNTUyBmcm9tIFwiISFyYXctbG9hZGVyIXNyYy9hdGhlbmEuY3NzXCI7XG5cbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJy4vc2xpZGVzL3NsaWRlJztcblxuaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja3tcbiAgICByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRTdHlsZXMoKTtcblxuXHRcdHRoaXMuY3JlYXRlUm9vdCgpO1xuXHRcdHRoaXMuY3JlYXRlU2xpZGVzKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0dGhpcy5yZXNldEFsbFNsaWRlcygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG4gICAgfVxuXG5cdGdvdG9TbGlkZUJ5SW5kZXgoX246IG51bWJlcikge1xuXHRcdGxldCBzbGlkZSA9IERlY2tNb2RlbC5zbGlkZXNbX25dO1xuXHRcdGxldCBzbGlkZUlkID0gc2xpZGUuaWQ7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUlkKHNsaWRlSWQpO1xuXHR9XG5cblx0Z290b1NsaWRlQnlJZChfaWQ6IHN0cmluZykge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNsaWRlLyR7X2lkfWA7XG5cdH1cblxuXHRnZXRTbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoRGVja01vZGVsLnNsaWRlc1tpXS5pZCA9PSBfaWQpIHtcblx0XHRcdFx0cmV0dXJuIERlY2tNb2RlbC5zbGlkZXNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRsZXQgbmV4dFNsaWRlID0gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA8IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoIC0gMSA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgKyAxIDogRGVja01vZGVsLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0cHJldmlvdXMoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPiAwID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSAtIDEgOiAwO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHREZWNrTW9kZWwuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdLnRyaWdnZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBzZXRzIGN1cnJlbnQgc2xpZGVcblx0ICogQHBhcmFtIG4gbnVtYmVyIG9yIHN0cmluZyAtIGluZGV4IG9yIGlkIG9mIHNsaWRlIHRvIHNldFxuXHQgKi9cblx0cHJpdmF0ZSBzZXRTbGlkZShfbjogYW55KSB7XG5cblx0XHRpZiAoRGVja01vZGVsLnNsaWRlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYztcblx0XHRpZiAoIWlzTmFOKF9uKSkge1xuXHRcdFx0c2xpZGUgPSBEZWNrTW9kZWwuc2xpZGVzW19uXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUgPSB0aGlzLmdldFNsaWRlQnlJZChfbik7XG5cdFx0fVxuXG5cdFx0Ly9OT1RFOjogaWYgYW55IGZ1biBjYW1lcmEgd29yayBpdCB3b3VsZCBnbyBoZXJlLlxuXG5cdFx0bGV0IHByZXZTbGlkZTogU2xpZGVCYXNpYyA9IERlY2tNb2RlbC5zbGlkZXNbRGVja01vZGVsLmN1cnJlbnRTbGlkZV07XG5cdFx0aWYgKHByZXZTbGlkZS5pbikge1xuXHRcdFx0cHJldlNsaWRlLmFuaW1PdXQoKVxuXHRcdFx0XHQudGhlbigoKSA9PiBzbGlkZS5hbmltSW4oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlLmFuaW1JbigpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2xpZGVGcm9tSGFzaCgpIHtcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdGxldCBzbGlkZTpzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjc2xpZGUvJywgJycpO1xuXHRcdFx0bGV0IG46IG51bWJlciA9IHBhcnNlSW50KHNsaWRlKTtcblx0XHRcdGlmICghaXNOYU4obikpIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U2xpZGUoc2xpZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFNsaWRlKERlY2tNb2RlbC5jdXJyZW50U2xpZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUm9vdCgpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5pZCA9ICdhdGhlbmEtcm9vdCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJvb3RFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlU2xpZGVzKCkge1xuXHRcdGxldCBzbGlkZUVsczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKENvbmZpZ01vZGVsLnNsaWRlU2VsZWN0b3IpKTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2xpZGVFbHMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0bGV0IHNsaWRlRWw6IEhUTUxFbGVtZW50ID0gc2xpZGVFbHNbaV07XG5cdFx0XHRzbGlkZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2xpZGVFbCk7XG5cblx0XHRcdGxldCBTbGlkZUNsYXNzOiB0eXBlb2YgU2xpZGVCYXNpYyA9IHRoaXMuZmluZFNsaWRlVHlwZShzbGlkZUVsKTtcblx0XHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYyA9IG5ldyBTbGlkZUNsYXNzKGksIHNsaWRlRWwpO1xuXHRcdFx0c2xpZGUuc2V0UGFyZW50KHRoaXMucm9vdEVsZW1lbnQpO1xuXHRcdFx0RGVja01vZGVsLnNsaWRlcy5wdXNoKHNsaWRlKTtcblx0XHR9XG5cblx0XHRpZiAoRGVja01vZGVsLnNsaWRlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdubyBzbGlkZXMgd2l0aCBzZWxlY3RvcjogJywgQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3Rvcik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRTdHlsZXMoKSB7XG5cdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblx0XHRzdHlsZS5pbm5lckhUTUwgPSBBdGhlbmFDU1M7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuXG5cdFx0YnVzLnN1YnNjcmliZShTbGlkZUV2ZW50Lk5FWFQsICgpID0+IHRoaXMubmV4dCgpKTtcblx0XHRidXMuc3Vic2NyaWJlKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHRidXMuc3Vic2NyaWJlKFNsaWRlRXZlbnQuVFJJR0dFUiwgKCkgPT4gdGhpcy50cmlnZ2VyKCkpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZSkgPT4gdGhpcy5oYXNoQ2hhbmdlKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd24oZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVVwKGUpKTtcblx0fVxuXG5cdC8vRVZFTlQgSEFORExFUlNcblxuXHRwcml2YXRlIGhhc2hDaGFuZ2UoZTpIYXNoQ2hhbmdlRXZlbnQpIHtcblx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlEb3duKGU6S2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5ORVhUKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5QUkVWKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LlRSSUdHRVIpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGtleVVwKGU6S2V5Ym9hcmRFdmVudCkge1xuXG5cdH1cblxuXHRwcml2YXRlIGZpbmRTbGlkZVR5cGUoZWw6IEhUTUxFbGVtZW50KTogdHlwZW9mIFNsaWRlQmFzaWMge1xuXG5cdFx0Ly9jdXN0b20gc2xpZGVcblx0XHRpZiAoZWwuZGF0YXNldFsnc2xpZGVUeXBlJ10pIHtcblx0XHRcdGxldCBzbGlkZVR5cGVOYW1lOiBzdHJpbmcgPSBlbC5kYXRhc2V0WydzbGlkZVR5cGUnXTtcblx0XHRcdGlmIChTbGlkZVR5cGVzLmhhc093blByb3BlcnR5KHNsaWRlVHlwZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBTbGlkZVR5cGVzW3NsaWRlVHlwZU5hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc3RlcCByZXZlYWxcblx0XHRsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcblx0XHRpZiAoQ29uZmlnTW9kZWwuc3RlcExpc3RJdGVtcykge1xuXHRcdFx0bGV0IGxpc3RzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuXHRcdFx0c3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuXHRcdH1cblx0XHRpZiAoc3RlcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ3N0ZXAnXTtcblx0XHR9XG5cblx0XHQvL2Jhc2ljIHNsaWRlXG5cdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ2Jhc2ljJ107XG5cdH1cblx0XG5cdHByaXZhdGUgcmVzZXRBbGxTbGlkZXMoKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0RGVja01vZGVsLnNsaWRlc1tpXS5zZXRDdXJyZW50KGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIGJ1cywgRXZlbnRCdXN9IGZyb20gJ3NyYy9ldmVudHMvRXZlbnRCdXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGluOiBib29sZWFuO1xuXG4gICAgYW5pbUluOiBGdW5jdGlvbjtcbiAgICBhbmltT3V0OiBGdW5jdGlvbjtcbiAgICB0cmlnZ2VyOiBGdW5jdGlvbjtcblxuICAgIHNldFBhcmVudDogRnVuY3Rpb247XG4gICAgc2V0Q3VycmVudDogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZUJhc2ljIGltcGxlbWVudHMgSVNsaWRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBpbjogYm9vbGVhbjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gX2luZGV4O1xuICAgICAgICB0aGlzLmVsID0gX2VsO1xuICAgICAgICB0aGlzLmlkID0gX2VsLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBgc2xpZGUke19pbmRleH1gO1xuICAgICAgICB0aGlzLnVybCA9IGBzbGlkZS8ke3RoaXMuaWR9YDtcbiAgICAgICAgdGhpcy5pbiA9IGZhbHNlO1xuXG4gICAgICAgIF9lbC5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtc2xpZGUnKTtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudCh0cnVlKTtcbiAgICAgICAgYnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuQU5JTUlOKTtcbiAgICAgICAgXG4gICAgICAgIGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LlJFU09MVkUpO1xuICAgICAgICB0aGlzLmluID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgYnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuQU5JTU9VVCk7XG5cbiAgICAgICAgICAgIGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LkRJU1NPTFZFKTtcbiAgICAgICAgICAgIHRoaXMuaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgYnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuTkVYVCk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KF9wYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50KF9jdXJyZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfY3VycmVudCkge1xuICAgICAgICAgICAgRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVJZnJhbWUgZXh0ZW5kcyBTbGlkZXtcblxuICAgIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgY2xpY2tBcmVhOiBIVE1MRWxlbWVudDtcbiAgICBib3VuZEhhbmRsZXI6IGFueTtcbiAgICB0cmFuc2l0aW9uOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihfaW5kZXg6IG51bWJlciwgX2VsOiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBfZWwuZGF0YXNldC50cmFuc2l0aW9uRHVyYXRpb24gPyBwYXJzZUZsb2F0KF9lbC5kYXRhc2V0LnRyYW5zaXRpb25EdXJhdGlvbikgOiAwO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdGhpcy50cmFuc2l0aW9uICogMTAwMDtcblxuICAgICAgICB0aGlzLmlmcmFtZSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lJyk7XG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVsLmRhdGFzZXQud2lkdGgpIHsgLy8gYXV0b21hdGljYWxseSBpbnRlcmFjdGl2ZSBpZiBjdXN0b20gdy9oXG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9IHRoaXMuZWwuZGF0YXNldC53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwuZGF0YXNldC5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbC5kYXRhc2V0LmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICc5NXZ3JztcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICc5NXZoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLndpZHRoID0gJzEwMHZ3JztcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoIHx8IHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRDbGlja0FyZWEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICAgIHRoaXMuaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLmxvYWRlZCgpKTtcblxuICAgICAgICBzdXBlci5hbmltSW4oKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5lbC5kYXRhc2V0WydzcmMnXSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQXJlYSkge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmNsaWNrQXJlYSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIHJldHVybiBzdXBlci5hbmltT3V0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRDbGlja0FyZWEoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhLmNsYXNzTGlzdC5hZGQoJ2F0aGVuYS1pZnJhbWUtY2xpY2thcmVhJyk7XG4gICAgICAgIHRoaXMuY2xpY2tBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlKSlcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNsaWNrQXJlYSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkZWQoKSB7XG4gICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVfY2xpY2tBcmVhX0NMSUNLKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMuYm91bmRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMuaGFuZGxlX2VsX0NMSUNLKGUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2VsX0NMSUNLKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICB0aGlzLmlmcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSGFuZGxlcik7XG4gICAgfVxufSIsImltcG9ydCBTbGlkZSBmcm9tICcuL3NsaWRlJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVTdGVwIGV4dGVuZHMgU2xpZGV7XG4gICAgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdO1xuICAgIGN1cnJlbnRTdGVwOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoX2luZGV4OiBudW1iZXIsIF9lbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoX2luZGV4LCBfZWwpO1xuXG4gICAgICAgIGxldCBzdGVwczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcbiAgICAgICAgaWYgKENvbmZpZ01vZGVsLnN0ZXBMaXN0SXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBsaXN0czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChfZWwucXVlcnlTZWxlY3RvckFsbCgnbGknKSk7XG4gICAgICAgICAgICBzdGVwcyA9IHN0ZXBzLmNvbmNhdChsaXN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cblxuICAgIGFuaW1JbigpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwOiBIVE1MRWxlbWVudCA9IHRoaXMuc3RlcHNbaV07XG4gICAgICAgICAgICBzdGVwLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICBzdXBlci5hbmltSW4oKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcblxuaW1wb3J0IHtkZWZhdWx0IGFzIGJ1cywgRXZlbnRCdXN9IGZyb20gJ3NyYy9ldmVudHMvRXZlbnRCdXMnO1xuaW1wb3J0IFVzZXJFdmVudCBmcm9tICdzcmMvZXZlbnRzL1VzZXJFdmVudCc7XG5cbmludGVyZmFjZSBJSHVkSXRlbSB7XG4gICAgbnVtYmVyOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWR7XG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBsaXN0Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBsaXN0OiBBcnJheTxJSHVkSXRlbT4gPSBbXTtcbiAgICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAga2V5RG93bkV2ZW50OiBhbnk7XG4gICAga2V5VXBFdmVudDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZCc7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgYnVzLnN1YnNjcmliZShVc2VyRXZlbnQuS0VZRE9XTiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuY2hlY2tUb2dnbGUoZSkpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgICAgICB0aGlzLnJlc2V0TGlzdCgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlTGlzdCgpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duRXZlbnQgPSBidXMuc3Vic2NyaWJlKFVzZXJFdmVudC5LRVlET1dOLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5rZXlEb3duKGUpKTtcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50ID0gYnVzLnN1YnNjcmliZShVc2VyRXZlbnQuS0VZVVAsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmtleVVwKGUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duRXZlbnQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldExpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHNsaWRlOiBTbGlkZUJhc2ljID0gRGVja01vZGVsLnNsaWRlc1tpXTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtudW1iZXI6IGksIG5hbWU6IHNsaWRlLmlkfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcHVsYXRlTGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW5lci5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZC1saXN0JztcblxuICAgICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpICsrICl7XG4gICAgICAgICAgICBsZXQgc2xpZGU6IElIdWRJdGVtID0gdGhpcy5saXN0W2ldO1xuICAgICAgICAgICAgbGV0IGl0ZW06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICdhdGhlbmEtaHVkLWxpc3QtaXRlbSc7XG4gICAgICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGAke3NsaWRlLm51bWJlcn06ICR7c2xpZGUubmFtZX1gO1xuICAgICAgICAgICAgaXRlbS5kYXRhc2V0LmluZGV4ID0gc2xpZGUubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tUb2dnbGUoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygna2V5ZG93bi4uJywgZS5jb2RlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9