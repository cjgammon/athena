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
        if (prevSlide.isCurrent()) {
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
        this.bus = src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"]; //make accessible on slide for extensibility
        _el.classList.add('athena-slide');
    }
    animIn() {
        this.setCurrent(true);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMIN);
        src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].RESOLVE);
    }
    animOut() {
        return new Promise((resolve, reject) => {
            this.setCurrent(false);
            src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].ANIMOUT);
            src_events_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(src_events_SlideEvent__WEBPACK_IMPORTED_MODULE_0__["default"].DISSOLVE);
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
    isCurrent() {
        return src_models_deckModel__WEBPACK_IMPORTED_MODULE_1__["default"].currentSlide == this.index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9FdmVudEJ1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL1NsaWRlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Vc2VyRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvY29uZmlnTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9kZWNrTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zbGlkZVR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL2RlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9odWQvaHVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFRO2dCQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU8sT0FBTyxDQUFDLENBQWdCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sS0FBSyxDQUFDLENBQWdCO0lBRTlCLENBQUM7Q0FDSiIsImZpbGUiOiJhdGhlbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiI2F0aGVuYS1yb290e1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmF0aGVuYS1zbGlkZXtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmF0aGVuYS1zbGlkZS5jdXJyZW50e1xcblxcdG9wYWNpdHk6IDE7XFxuXFx0cG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5hdGhlbmEtaWZyYW1lLWNsaWNrYXJlYXtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYXRoZW5hLWlmcmFtZS1jbGlja2FyZWEuZm9jdXN7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0Y3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uYXRoZW5hLWlmcmFtZS5mb2N1c3tcXG5cXHRvdXRsaW5lOiAxMDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XFxufVxcblxcbi5hdGhlbmEtaHVke1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcdHotaW5kZXg6IDEwMDtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXRoZW5hLWh1ZC52aXNpYmxle1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiIsIlxuaW50ZXJmYWNlIElFdmVudHtcbiAgICBbaWQ6IHN0cmluZ106IFN1YnNjcmlwdGlvblJlZmVyZW5jZVxufVxuXG5pbnRlcmZhY2UgSUV2ZW50VHlwZUxpc3R7XG4gICAgW2V2ZW50VHlwZTogc3RyaW5nXTogSUV2ZW50XG59XG5cbmNsYXNzIFN1YnNjcmlwdGlvblJlZmVyZW5jZSB7XG4gICAgYnVzOiBFdmVudEJ1cztcbiAgICBldmVudFR5cGU6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKF9idXM6IEV2ZW50QnVzLCBfZXZlbnRUeXBlOiBzdHJpbmcsIF9pZDogbnVtYmVyLCBfY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuYnVzID0gX2J1cztcbiAgICAgICAgdGhpcy5ldmVudFR5cGUgPSBfZXZlbnRUeXBlO1xuICAgICAgICB0aGlzLmlkID0gX2lkO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gX2NhbGxiYWNrO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5idXMuc3Vic2NyaXB0aW9uc1t0aGlzLmV2ZW50VHlwZV1bdGhpcy5pZF07XG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMuYnVzLnN1YnNjcmlwdGlvbnNbdGhpcy5ldmVudFR5cGVdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJ1cy5zdWJzY3JpcHRpb25zW3RoaXMuZXZlbnRUeXBlXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50QnVze1xuICAgIFxuICAgIHN1YnNjcmlwdGlvbnM6IElFdmVudFR5cGVMaXN0ID0ge307XG4gICAgZ2V0TmV4dFVuaXF1ZUlkOiBGdW5jdGlvbiA9IHRoaXMuZ2V0SWRHZW5lcmF0b3IoKTtcblxuICAgIHN1YnNjcmliZShfZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHRoaXMuZ2V0TmV4dFVuaXF1ZUlkKCk7IC8vdW5pcXVlIGlkLlxuXG4gICAgICAgIGlmKCF0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV0pe1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdID0geyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN1YlJlZiA9IG5ldyBTdWJzY3JpcHRpb25SZWZlcmVuY2UodGhpcywgX2V2ZW50VHlwZSwgaWQsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdW2lkXSA9IHN1YlJlZjtcbiAgICAgICAgcmV0dXJuIHN1YlJlZjtcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZShfZXZlbnRUeXBlOiBzdHJpbmcsIF9pZDogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1bX2lkXTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkaXNwYXRjaChfZXZlbnRUeXBlOiBzdHJpbmcsIF9hcmc6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYoIXRoaXMuc3Vic2NyaXB0aW9uc1tfZXZlbnRUeXBlXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5zdWJzY3JpcHRpb25zW19ldmVudFR5cGVdKSB7XG4gICAgICAgICAgICBsZXQgc3ViUmVmOiBTdWJzY3JpcHRpb25SZWZlcmVuY2UgPSB0aGlzLnN1YnNjcmlwdGlvbnNbX2V2ZW50VHlwZV1baWRdO1xuICAgICAgICAgICAgc3ViUmVmLmNhbGxiYWNrKF9hcmcpO1xuICAgICAgICAgICAgLy9UT0RPOjogaWYgb25jZSB0aGVuIGRlc3Ryb3lcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldElkR2VuZXJhdG9yKCkge1xuICAgICAgICBsZXQgbGFzdElkID0gMFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldE5leHRVbmlxdWVJZCgpIHtcbiAgICAgICAgICAgIGxhc3RJZCArPSAxXG4gICAgICAgICAgICByZXR1cm4gbGFzdElkXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBidXM6RXZlbnRCdXMgPSBuZXcgRXZlbnRCdXMoKTtcbmV4cG9ydCBkZWZhdWx0IGJ1czsiLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBORVhUOiAnc2xpZGVfbmV4dCcsXG4gICAgUFJFVjogJ3NsaWRlX3ByZXYnLFxuICAgIFRSSUdHRVI6ICdzbGlkZV90cmlnZ2VyJyxcbiAgICBBTklNSU46ICdhbmltX2luJyxcbiAgICBBTklNT1VUOiAnYW5pbV9vdXQnLFxuICAgIFJFU09MVkU6ICdzbGlkZV9yZXNvbHZlJyxcbiAgICBESVNTT0xWRTogJ3NsaWRlX2Rpc3NvbHZlJ1xufTsiLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBLRVlET1dOOiAna2V5X2Rvd24nLFxuICAgIEtFWVVQOiAna2V5X3VwJ1xufTsiLCJcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5pbXBvcnQgSHVkIGZyb20gJy4vdmlld3MvaHVkL2h1ZCc7XG5pbXBvcnQgRGVjayBmcm9tICdzcmMvdmlld3MvZGVjay9kZWNrJztcblxuaW1wb3J0IHtkZWZhdWx0IGFzIGRlY2tNb2RlbCwgSURlY2tNb2RlbH0gZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuXG5pbXBvcnQge2RlZmF1bHQgYXMgYnVzLCBFdmVudEJ1c30gZnJvbSAnc3JjL2V2ZW50cy9FdmVudEJ1cyc7XG5pbXBvcnQgVXNlckV2ZW50IGZyb20gJ3NyYy9ldmVudHMvVXNlckV2ZW50JztcbmltcG9ydCBTbGlkZUV2ZW50IGZyb20gJ3NyYy9ldmVudHMvU2xpZGVFdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBBdGhlbmEge1xuXHRuYW1lOiBzdHJpbmcgPSBcIkF0aGVuYVwiO1xuXHR2ZXJzaW9uOiBudW1iZXIgPSAwLjE7XG5cdGh1ZDogSHVkO1xuXHRkZWNrOiBEZWNrO1xuXHRzbGlkZXM6IElEZWNrTW9kZWwgPSBkZWNrTW9kZWw7XG5cdGV2ZW50QnVzOiBFdmVudEJ1cyA9IGJ1cztcblx0c2xpZGVUeXBlczogYW55ID0gU2xpZGVUeXBlczsgXHQvL2V4cG9zZWQgZm9yIGFkZGluZyBuZXcgdHlwZXNcblx0ZXZlbnRzOiBvYmplY3QgPSB7IFx0XHRcdC8vZXhwb3NlZCBldmVudCB0eXBlc1xuXHRcdFVzZXJFdmVudCxcblx0XHRTbGlkZUV2ZW50XG5cdH07XG5cblx0cHJpdmF0ZSBfY29uc29sZVN0eWxlOiBBcnJheTxzdHJpbmc+ID0gW1xuXHRcdCdiYWNrZ3JvdW5kOiAjNDQ5MThGJyxcblx0XHQnY29sb3I6IHdoaXRlJyxcblx0XHQnZm9udC13ZWlnaHQ6IGJvbGQnLFxuXHRcdCdwYWRkaW5nOiAwLjJlbSdcblx0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gYCVjLy8ke3RoaXMubmFtZX0gdiR7dGhpcy52ZXJzaW9ufVxcXFxcXFxcYDtcblx0XHRsZXQgY29uc29sZVN0eWxlOiBzdHJpbmcgPSB0aGlzLl9jb25zb2xlU3R5bGUuam9pbignOyAnKTtcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlLCBjb25zb2xlU3R5bGUpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gYnVzLmRpc3BhdGNoKFVzZXJFdmVudC5LRVlET1dOLCBlKSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IGJ1cy5kaXNwYXRjaChVc2VyRXZlbnQuS0VZVVAsIGUpKTtcblx0fVxuXG5cdGdlbmVyYXRlKGNvbmZpZzogYW55KSB7XG5cdFx0Zm9yIChsZXQgaSBpbiBjb25maWcpIHtcblx0XHRcdENvbmZpZ01vZGVsW2ldID0gY29uZmlnW2ldO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG5cdFx0dGhpcy5odWQgPSBuZXcgSHVkKHRoaXMuZGVjay5yb290RWxlbWVudCk7XG5cdH1cblxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iLCJpbnRlcmZhY2UgSUNvbmZpZ01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55XG59O1xuXG5sZXQgQ29uZmlnTW9kZWw6IElDb25maWdNb2RlbCA9IHtcbiAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcbiAgICBzdGVwU2VsZWN0b3I6ICcuc3RlcCcsXG4gICAgc3RlcExpc3RJdGVtczogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnTW9kZWw7IiwiaW1wb3J0IFNsaWRlQmFzaWMgZnJvbSAnc3JjL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGVja01vZGVsIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55LFxuICAgIHNsaWRlczogQXJyYXk8U2xpZGVCYXNpYz5cbn07XG5cbmxldCBEZWNrTW9kZWw6IElEZWNrTW9kZWwgPSB7XG4gICAgY3VycmVudFNsaWRlOiAwLFxuICAgIHNsaWRlczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlY2tNb2RlbDsiLCJcbmltcG9ydCBCYXNpY1NsaWRlIGZyb20gJy4uL3ZpZXdzL2RlY2svc2xpZGVzL3NsaWRlJztcbmltcG9ydCBTdGVwU2xpZGUgZnJvbSAnLi4vdmlld3MvZGVjay9zbGlkZXMvc2xpZGVTdGVwJztcbmltcG9ydCBJZnJhbWVTbGlkZSBmcm9tICcuLi92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZUlmcmFtZSc7XG5cbmludGVyZmFjZSBJU2xpZGVUeXBlcyB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueVxufTtcblxubGV0IFNsaWRlVHlwZXM6IElTbGlkZVR5cGVzID0ge1xuICAgIGJhc2ljOiBCYXNpY1NsaWRlLFxuICAgIHN0ZXA6IFN0ZXBTbGlkZSxcbiAgICBpZnJhbWU6IElmcmFtZVNsaWRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZVR5cGVzOyIsIlxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEF0aGVuYUNTUyBmcm9tIFwiISFyYXctbG9hZGVyIXNyYy9hdGhlbmEuY3NzXCI7XG5cbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJy4vc2xpZGVzL3NsaWRlJztcblxuaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBTbGlkZVR5cGVzIGZyb20gJ3NyYy9tb2RlbHMvc2xpZGVUeXBlcyc7XG5pbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCBDb25maWdNb2RlbCBmcm9tICdzcmMvbW9kZWxzL2NvbmZpZ01vZGVsJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja3tcbiAgICByb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRTdHlsZXMoKTtcblxuXHRcdHRoaXMuY3JlYXRlUm9vdCgpO1xuXHRcdHRoaXMuY3JlYXRlU2xpZGVzKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0dGhpcy5yZXNldEFsbFNsaWRlcygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG4gICAgfVxuXG5cdGdvdG9TbGlkZUJ5SW5kZXgoX246IG51bWJlcikge1xuXHRcdGxldCBzbGlkZSA9IERlY2tNb2RlbC5zbGlkZXNbX25dO1xuXHRcdGxldCBzbGlkZUlkID0gc2xpZGUuaWQ7XG5cdFx0dGhpcy5nb3RvU2xpZGVCeUlkKHNsaWRlSWQpO1xuXHR9XG5cblx0Z290b1NsaWRlQnlJZChfaWQ6IHN0cmluZykge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYHNsaWRlLyR7X2lkfWA7XG5cdH1cblxuXHRnZXRTbGlkZUJ5SWQoX2lkOiBzdHJpbmcpIHtcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoRGVja01vZGVsLnNsaWRlc1tpXS5pZCA9PSBfaWQpIHtcblx0XHRcdFx0cmV0dXJuIERlY2tNb2RlbC5zbGlkZXNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRsZXQgbmV4dFNsaWRlID0gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA8IERlY2tNb2RlbC5zbGlkZXMubGVuZ3RoIC0gMSA/IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgKyAxIDogRGVja01vZGVsLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0cHJldmlvdXMoKSB7XG5cdFx0bGV0IG5leHRTbGlkZSA9IERlY2tNb2RlbC5jdXJyZW50U2xpZGUgPiAwID8gRGVja01vZGVsLmN1cnJlbnRTbGlkZSAtIDEgOiAwO1xuXHRcdHRoaXMuZ290b1NsaWRlQnlJbmRleChuZXh0U2xpZGUpO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHREZWNrTW9kZWwuc2xpZGVzW0RlY2tNb2RlbC5jdXJyZW50U2xpZGVdLnRyaWdnZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBzZXRzIGN1cnJlbnQgc2xpZGVcblx0ICogQHBhcmFtIG4gbnVtYmVyIG9yIHN0cmluZyAtIGluZGV4IG9yIGlkIG9mIHNsaWRlIHRvIHNldFxuXHQgKi9cblx0cHJpdmF0ZSBzZXRTbGlkZShfbjogYW55KSB7XG5cblx0XHRpZiAoRGVja01vZGVsLnNsaWRlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYztcblx0XHRpZiAoIWlzTmFOKF9uKSkge1xuXHRcdFx0c2xpZGUgPSBEZWNrTW9kZWwuc2xpZGVzW19uXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2xpZGUgPSB0aGlzLmdldFNsaWRlQnlJZChfbik7XG5cdFx0fVxuXG5cdFx0Ly9OT1RFOjogaWYgYW55IGZ1biBjYW1lcmEgd29yayBpdCB3b3VsZCBnbyBoZXJlLlxuXG5cdFx0bGV0IHByZXZTbGlkZTogU2xpZGVCYXNpYyA9IERlY2tNb2RlbC5zbGlkZXNbRGVja01vZGVsLmN1cnJlbnRTbGlkZV07XG5cdFx0aWYgKHByZXZTbGlkZS5pc0N1cnJlbnQoKSkge1xuXHRcdFx0cHJldlNsaWRlLmFuaW1PdXQoKVxuXHRcdFx0XHQudGhlbigoKSA9PiBzbGlkZS5hbmltSW4oKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsaWRlLmFuaW1JbigpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2xpZGVGcm9tSGFzaCgpIHtcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdGxldCBzbGlkZTpzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjc2xpZGUvJywgJycpO1xuXHRcdFx0bGV0IG46IG51bWJlciA9IHBhcnNlSW50KHNsaWRlKTtcblx0XHRcdGlmICghaXNOYU4obikpIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U2xpZGUoc2xpZGUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFNsaWRlKERlY2tNb2RlbC5jdXJyZW50U2xpZGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUm9vdCgpIHtcblx0XHR0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5yb290RWxlbWVudC5pZCA9ICdhdGhlbmEtcm9vdCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJvb3RFbGVtZW50KTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlU2xpZGVzKCkge1xuXHRcdGxldCBzbGlkZUVsczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKENvbmZpZ01vZGVsLnNsaWRlU2VsZWN0b3IpKTtcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2xpZGVFbHMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0bGV0IHNsaWRlRWw6IEhUTUxFbGVtZW50ID0gc2xpZGVFbHNbaV07XG5cdFx0XHRzbGlkZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2xpZGVFbCk7XG5cblx0XHRcdGxldCBTbGlkZUNsYXNzOiB0eXBlb2YgU2xpZGVCYXNpYyA9IHRoaXMuZmluZFNsaWRlVHlwZShzbGlkZUVsKTtcblx0XHRcdGxldCBzbGlkZTogU2xpZGVCYXNpYyA9IG5ldyBTbGlkZUNsYXNzKGksIHNsaWRlRWwpO1xuXHRcdFx0c2xpZGUuc2V0UGFyZW50KHRoaXMucm9vdEVsZW1lbnQpO1xuXHRcdFx0RGVja01vZGVsLnNsaWRlcy5wdXNoKHNsaWRlKTtcblx0XHR9XG5cblx0XHRpZiAoRGVja01vZGVsLnNsaWRlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdubyBzbGlkZXMgd2l0aCBzZWxlY3RvcjogJywgQ29uZmlnTW9kZWwuc2xpZGVTZWxlY3Rvcik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRTdHlsZXMoKSB7XG5cdFx0bGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblx0XHRzdHlsZS5pbm5lckhUTUwgPSBBdGhlbmFDU1M7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xuXG5cdFx0YnVzLnN1YnNjcmliZShTbGlkZUV2ZW50Lk5FWFQsICgpID0+IHRoaXMubmV4dCgpKTtcblx0XHRidXMuc3Vic2NyaWJlKFNsaWRlRXZlbnQuUFJFViwgKCkgPT4gdGhpcy5wcmV2aW91cygpKTtcblx0XHRidXMuc3Vic2NyaWJlKFNsaWRlRXZlbnQuVFJJR0dFUiwgKCkgPT4gdGhpcy50cmlnZ2VyKCkpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZSkgPT4gdGhpcy5oYXNoQ2hhbmdlKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd24oZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVVwKGUpKTtcblx0fVxuXG5cdC8vRVZFTlQgSEFORExFUlNcblxuXHRwcml2YXRlIGhhc2hDaGFuZ2UoZTpIYXNoQ2hhbmdlRXZlbnQpIHtcblx0XHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdHRoaXMuZ2V0U2xpZGVGcm9tSGFzaCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlEb3duKGU6S2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5ORVhUKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5QUkVWKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LlRSSUdHRVIpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGtleVVwKGU6S2V5Ym9hcmRFdmVudCkge1xuXG5cdH1cblxuXHRwcml2YXRlIGZpbmRTbGlkZVR5cGUoZWw6IEhUTUxFbGVtZW50KTogdHlwZW9mIFNsaWRlQmFzaWMge1xuXG5cdFx0Ly9jdXN0b20gc2xpZGVcblx0XHRpZiAoZWwuZGF0YXNldFsnc2xpZGVUeXBlJ10pIHtcblx0XHRcdGxldCBzbGlkZVR5cGVOYW1lOiBzdHJpbmcgPSBlbC5kYXRhc2V0WydzbGlkZVR5cGUnXTtcblx0XHRcdGlmIChTbGlkZVR5cGVzLmhhc093blByb3BlcnR5KHNsaWRlVHlwZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBTbGlkZVR5cGVzW3NsaWRlVHlwZU5hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc3RlcCByZXZlYWxcblx0XHRsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbChDb25maWdNb2RlbC5zdGVwU2VsZWN0b3IpKTtcblx0XHRpZiAoQ29uZmlnTW9kZWwuc3RlcExpc3RJdGVtcykge1xuXHRcdFx0bGV0IGxpc3RzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXS5zbGljZS5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuXHRcdFx0c3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuXHRcdH1cblx0XHRpZiAoc3RlcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ3N0ZXAnXTtcblx0XHR9XG5cblx0XHQvL2Jhc2ljIHNsaWRlXG5cdFx0cmV0dXJuIFNsaWRlVHlwZXNbJ2Jhc2ljJ107XG5cdH1cblx0XG5cdHByaXZhdGUgcmVzZXRBbGxTbGlkZXMoKSB7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgRGVja01vZGVsLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0RGVja01vZGVsLnNsaWRlc1tpXS5zZXRDdXJyZW50KGZhbHNlKTtcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IFNsaWRlRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9TbGlkZUV2ZW50JztcbmltcG9ydCBEZWNrTW9kZWwgZnJvbSAnc3JjL21vZGVscy9kZWNrTW9kZWwnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIGJ1cywgRXZlbnRCdXN9IGZyb20gJ3NyYy9ldmVudHMvRXZlbnRCdXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIHVybDogc3RyaW5nO1xuXG4gICAgYW5pbUluOiBGdW5jdGlvbjtcbiAgICBhbmltT3V0OiBGdW5jdGlvbjtcbiAgICB0cmlnZ2VyOiBGdW5jdGlvbjtcblxuICAgIHNldFBhcmVudDogRnVuY3Rpb247XG4gICAgc2V0Q3VycmVudDogRnVuY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZUJhc2ljIGltcGxlbWVudHMgSVNsaWRle1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbDogSFRNTEVsZW1lbnQ7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBidXM6IEV2ZW50QnVzO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBfaW5kZXg7XG4gICAgICAgIHRoaXMuZWwgPSBfZWw7XG4gICAgICAgIHRoaXMuaWQgPSBfZWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzbGlkZSR7X2luZGV4fWA7XG4gICAgICAgIHRoaXMudXJsID0gYHNsaWRlLyR7dGhpcy5pZH1gO1xuICAgICAgICB0aGlzLmJ1cyA9IGJ1czsgLy9tYWtlIGFjY2Vzc2libGUgb24gc2xpZGUgZm9yIGV4dGVuc2liaWxpdHlcblxuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLXNsaWRlJyk7XG4gICAgfVxuXG4gICAgYW5pbUluKCkge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnQodHJ1ZSk7XG4gICAgICAgIGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LkFOSU1JTik7XG4gICAgICAgIFxuICAgICAgICBidXMuZGlzcGF0Y2goU2xpZGVFdmVudC5SRVNPTFZFKTtcbiAgICB9XG5cbiAgICBhbmltT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgYnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuQU5JTU9VVCk7XG5cbiAgICAgICAgICAgIGJ1cy5kaXNwYXRjaChTbGlkZUV2ZW50LkRJU1NPTFZFKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcbiAgICAgICAgYnVzLmRpc3BhdGNoKFNsaWRlRXZlbnQuTkVYVCk7XG4gICAgfVxuXG4gICAgc2V0UGFyZW50KF9wYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gX3BhcmVudDtcbiAgICAgICAgX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50KF9jdXJyZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChfY3VycmVudCkge1xuICAgICAgICAgICAgRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDdXJyZW50KCkge1xuICAgICAgICByZXR1cm4gRGVja01vZGVsLmN1cnJlbnRTbGlkZSA9PSB0aGlzLmluZGV4O1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlSWZyYW1lIGV4dGVuZHMgU2xpZGV7XG5cbiAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIGNsaWNrQXJlYTogSFRNTEVsZW1lbnQ7XG4gICAgYm91bmRIYW5kbGVyOiBhbnk7XG4gICAgdHJhbnNpdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoX2luZGV4OiBudW1iZXIsIF9lbDogSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBzdXBlcihfaW5kZXgsIF9lbCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gX2VsLmRhdGFzZXQudHJhbnNpdGlvbkR1cmF0aW9uID8gcGFyc2VGbG9hdChfZWwuZGF0YXNldC50cmFuc2l0aW9uRHVyYXRpb24pIDogMDtcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGxldCBkZWxheSA9IHRoaXMudHJhbnNpdGlvbiAqIDEwMDA7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgICBpZiAoIXRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXRoZW5hLWlmcmFtZScpO1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbC5kYXRhc2V0LndpZHRoKSB7IC8vIGF1dG9tYXRpY2FsbHkgaW50ZXJhY3RpdmUgaWYgY3VzdG9tIHcvaFxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSB0aGlzLmVsLmRhdGFzZXQud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLmRhdGFzZXQuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWwuZGF0YXNldC5pbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUud2lkdGggPSAnOTV2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnOTV2aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDB2dyc7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZWwuZGF0YXNldC53aWR0aCB8fCB0aGlzLmVsLmRhdGFzZXQuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2tBcmVhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgICB0aGlzLmlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5sb2FkZWQoKSk7XG5cbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuZWwuZGF0YXNldFsnc3JjJ10pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgYW5pbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy5jbGlja0FyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICByZXR1cm4gc3VwZXIuYW5pbU91dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2xpY2tBcmVhKCkge1xuICAgICAgICB0aGlzLmNsaWNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtaWZyYW1lLWNsaWNrYXJlYScpO1xuICAgICAgICB0aGlzLmNsaWNrQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZV9jbGlja0FyZWFfQ0xJQ0soZSkpXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jbGlja0FyZWEpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZGVkKCkge1xuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlX2NsaWNrQXJlYV9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuZm9jdXMoKTtcblxuICAgICAgICB0aGlzLmJvdW5kSGFuZGxlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLmhhbmRsZV9lbF9DTElDSyhlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZV9lbF9DTElDSyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5jbGlja0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEhhbmRsZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQgQ29uZmlnTW9kZWwgZnJvbSAnc3JjL21vZGVscy9jb25maWdNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU3RlcCBleHRlbmRzIFNsaWRle1xuICAgIHN0ZXBzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTtcbiAgICBjdXJyZW50U3RlcDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKF9pbmRleDogbnVtYmVyLCBfZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKF9pbmRleCwgX2VsKTtcblxuICAgICAgICBsZXQgc3RlcHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29uZmlnTW9kZWwuc3RlcFNlbGVjdG9yKSk7XG4gICAgICAgIGlmIChDb25maWdNb2RlbC5zdGVwTGlzdEl0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgbGlzdHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdLnNsaWNlLmNhbGwoX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykpO1xuICAgICAgICAgICAgc3RlcHMgPSBzdGVwcy5jb25jYXQobGlzdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG5cbiAgICBhbmltSW4oKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RlcDogSFRNTEVsZW1lbnQgPSB0aGlzLnN0ZXBzW2ldO1xuICAgICAgICAgICAgc3RlcC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgc3VwZXIuYW5pbUluKCk7XG4gICAgfVxuXG4gICAgdHJpZ2dlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRGVja01vZGVsIGZyb20gJ3NyYy9tb2RlbHMvZGVja01vZGVsJztcbmltcG9ydCBTbGlkZUJhc2ljIGZyb20gJ3NyYy92aWV3cy9kZWNrL3NsaWRlcy9zbGlkZSc7XG5cbmltcG9ydCB7ZGVmYXVsdCBhcyBidXMsIEV2ZW50QnVzfSBmcm9tICdzcmMvZXZlbnRzL0V2ZW50QnVzJztcbmltcG9ydCBVc2VyRXZlbnQgZnJvbSAnc3JjL2V2ZW50cy9Vc2VyRXZlbnQnO1xuXG5pbnRlcmZhY2UgSUh1ZEl0ZW0ge1xuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVke1xuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgbGlzdENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgbGlzdDogQXJyYXk8SUh1ZEl0ZW0+ID0gW107XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGtleURvd25FdmVudDogYW55O1xuICAgIGtleVVwRXZlbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ2F0aGVuYS1odWQnO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIGJ1cy5zdWJzY3JpYmUoVXNlckV2ZW50LktFWURPV04sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLmNoZWNrVG9nZ2xlKGUpKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXNldExpc3QoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUxpc3QoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50ID0gYnVzLnN1YnNjcmliZShVc2VyRXZlbnQuS0VZRE9XTiwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMua2V5RG93bihlKSk7XG4gICAgICAgIHRoaXMua2V5VXBFdmVudCA9IGJ1cy5zdWJzY3JpYmUoVXNlckV2ZW50LktFWVVQLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5rZXlVcChlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudHMoKSB7XG4gICAgICAgIHRoaXMua2V5RG93bkV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMua2V5VXBFdmVudC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEZWNrTW9kZWwuc2xpZGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBzbGlkZTogU2xpZGVCYXNpYyA9IERlY2tNb2RlbC5zbGlkZXNbaV07XG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7bnVtYmVyOiBpLCBuYW1lOiBzbGlkZS5pZH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXIuY2xhc3NOYW1lID0gJ2F0aGVuYS1odWQtbGlzdCc7XG5cbiAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSArKyApe1xuICAgICAgICAgICAgbGV0IHNsaWRlOiBJSHVkSXRlbSA9IHRoaXMubGlzdFtpXTtcbiAgICAgICAgICAgIGxldCBpdGVtOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnYXRoZW5hLWh1ZC1saXN0LWl0ZW0nO1xuICAgICAgICAgICAgaXRlbS5pbm5lclRleHQgPSBgJHtzbGlkZS5udW1iZXJ9OiAke3NsaWRlLm5hbWV9YDtcbiAgICAgICAgICAgIGl0ZW0uZGF0YXNldC5pbmRleCA9IHNsaWRlLm51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVG9nZ2xlKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBrZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2tleWRvd24uLicsIGUuY29kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBrZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==