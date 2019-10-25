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
/* harmony default export */ __webpack_exports__["default"] = ("#athena-root{\n\tposition: relative;\n}\n\n.athena-slide{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n}\n\n.athena-slide.current{\n\topacity: 1;\n}");

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
/* harmony import */ var _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!src/athena.css */ "./node_modules/raw-loader/dist/cjs.js!./src/athena.css");
// @ts-ignore

var Athena = /** @class */ (function () {
    function Athena() {
        this.name = "Athena";
        this.version = 0.1;
        this.slides = [];
        this.currentSlide = 0;
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
        this.addStyles();
        this.createRoot();
        this.createSlides(selector);
        this.registerEvents();
        this.getSlideFromHash();
    };
    //TODO:: abstract set slide by number id vs setslide by string id
    Athena.prototype.gotoSlide = function (n) {
        /*
        let currentSlides = document.querySelectorAll('.current');
        for (let i:number = 0; i < currentSlides.length; i++) {
            currentSlides[i].classList.remove('current');
        }
        */
        window.location.hash = "slide/" + n;
        /*
        this.slides[n].classList.add('current');
        this.currentSlide = n;
        */
    };
    Athena.prototype.setSlide = function (n) {
        var currentSlides = document.querySelectorAll('.current');
        for (var i = 0; i < currentSlides.length; i++) {
            currentSlides[i].classList.remove('current');
        }
        this.slides[n].classList.add('current');
        this.currentSlide = n;
    };
    Athena.prototype.getSlideFromHash = function () {
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
    Athena.prototype.createRoot = function () {
        this.rootElement = document.createElement('div');
        this.rootElement.id = 'athena-root';
        document.body.appendChild(this.rootElement);
    };
    Athena.prototype.createSlides = function (selector) {
        var slides = document.querySelectorAll(selector);
        for (var i = 0; i < slides.length; i++) {
            var slide = slides[i];
            slide.parentNode.removeChild(slide);
            slide.classList.add('athena-slide');
            this.rootElement.appendChild(slide);
            this.slides.push(slide);
        }
    };
    Athena.prototype.addStyles = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = _raw_loader_src_athena_css__WEBPACK_IMPORTED_MODULE_0__["default"];
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    Athena.prototype.registerEvents = function () {
        var _this = this;
        window.addEventListener('hashchange', function (e) { return _this.hashChange(e); });
        window.addEventListener('keydown', function (e) { return _this.keyDown(e); });
        window.addEventListener('keyup', function (e) { return _this.keyUp(e); });
    };
    //event handlers
    Athena.prototype.hashChange = function (e) {
        var hash = window.location.hash;
        console.log(hash);
        this.getSlideFromHash();
    };
    Athena.prototype.keyDown = function (e) {
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
    Athena.prototype.keyUp = function (e) {
    };
    return Athena;
}());

if (!window.Athena) {
    window.Athena = new Athena();
}
else {
    console.warn('Athena already defined');
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0aGVuYS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSw2RUFBYyx1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxlQUFlLEdBQUcsMEJBQTBCLGVBQWUsR0FBRyxDOzs7Ozs7Ozs7Ozs7QUNDckw7QUFBQTtBQUFBO0FBQUEsYUFBYTtBQUN1QztBQUVwRDtJQWNDO1FBYkEsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixZQUFPLEdBQVcsR0FBRyxDQUFDO1FBRXRCLFdBQU0sR0FBbUIsRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLGtCQUFhLEdBQWtCO1lBQ3RDLHFCQUFxQjtZ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QixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLHdCQUFPLEdBQWYsVUFBZ0IsQ0FBZTtRQUU5QixJQUFJLFNBQWlCLENBQUM7UUFFdEIsUUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ2QsS0FBSyxZQUFZO2dCQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3hHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFCLE1BQU07WUFDUCxLQUFLLFdBQVc7Z0JBQ2YsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1NBQ1A7SUFDRixDQUFDO0lBRU8sc0JBQUssR0FBYixVQUFjLENBQWU7SUFFN0IsQ0FBQztJQUNGLGFBQUM7QUFBRCxDQUFDOztBQVNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ25CLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztDQUM3QjtLQUFNO0lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0NBQ3ZDIiwiZmlsZSI6ImF0aGVuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIjYXRoZW5hLXJvb3R7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRle1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYXRoZW5hLXNsaWRlLmN1cnJlbnR7XFxuXFx0b3BhY2l0eTogMTtcXG59XCIiLCJcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBBdGhlbmFDU1MgZnJvbSBcIiEhcmF3LWxvYWRlciFzcmMvYXRoZW5hLmNzc1wiO1xuXG5leHBvcnQgY2xhc3MgQXRoZW5hIHtcblx0bmFtZTogc3RyaW5nID0gXCJBdGhlbmFcIjtcblx0dmVyc2lvbjogbnVtYmVyID0gMC4xO1xuXHRyb290RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHNsaWRlczogQXJyYXk8RWxlbWVudD4gPSBbXTtcblx0Y3VycmVudFNsaWRlOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgX2NvbnNvbGVTdHlsZTogQXJyYXk8c3RyaW5nPiA9IFtcblx0XHQnYmFja2dyb3VuZDogIzQ0OTE4RicsXG5cdFx0J2NvbG9yOiB3aGl0ZScsXG5cdFx0J2ZvbnQtd2VpZ2h0OiBib2xkJyxcblx0XHQncGFkZGluZzogMC4yZW0nXG5cdF07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGAlYy8vJHt0aGlzLm5hbWV9IHYke3RoaXMudmVyc2lvbn1cXFxcXFxcXGA7XG5cdFx0bGV0IGNvbnNvbGVTdHlsZTogc3RyaW5nID0gdGhpcy5fY29uc29sZVN0eWxlLmpvaW4oJzsgJyk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSwgY29uc29sZVN0eWxlKTtcblx0fVxuXG5cdGdlbmVyYXRlKHNlbGVjdG9yOiBzdHJpbmcgPSAnLmF0aGVuYS1zbGlkZScpIHtcblx0XHR0aGlzLmFkZFN0eWxlcygpO1xuXG5cdFx0dGhpcy5jcmVhdGVSb290KCk7XG5cdFx0dGhpcy5jcmVhdGVTbGlkZXMoc2VsZWN0b3IpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50cygpO1xuXG5cdFx0dGhpcy5nZXRTbGlkZUZyb21IYXNoKCk7XG5cdH1cblxuXHQvL1RPRE86OiBhYnN0cmFjdCBzZXQgc2xpZGUgYnkgbnVtYmVyIGlkIHZzIHNldHNsaWRlIGJ5IHN0cmluZyBpZFxuXHRnb3RvU2xpZGUobjogbnVtYmVyKSB7XG5cdFx0Lypcblx0XHRsZXQgY3VycmVudFNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW50Jyk7XG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY3VycmVudFNsaWRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y3VycmVudFNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0fVxuXHRcdCovXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBgc2xpZGUvJHtufWA7XG5cdFx0Lypcblx0XHR0aGlzLnNsaWRlc1tuXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdFx0dGhpcy5jdXJyZW50U2xpZGUgPSBuO1xuXHRcdCovXG5cdH1cblxuXHRwcml2YXRlIHNldFNsaWRlKG46IG51bWJlcikge1xuXHRcdGxldCBjdXJyZW50U2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbnQnKTtcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBjdXJyZW50U2xpZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjdXJyZW50U2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHR9XG5cdFx0dGhpcy5zbGlkZXNbbl0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXHRcdHRoaXMuY3VycmVudFNsaWRlID0gbjtcblx0fVxuXG5cdHByaXZhdGUgZ2V0U2xpZGVGcm9tSGFzaCgpIHtcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdGxldCBzbGlkZTpzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjc2xpZGUvJywgJycpO1xuXHRcdFx0bGV0IG46IG51bWJlciA9IHBhcnNlSW50KHNsaWRlKTtcblx0XHRcdGlmICghaXNOYU4obikpIHtcblx0XHRcdFx0dGhpcy5zZXRTbGlkZShuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vVE9ETzo6IHNldCBzbGlkZSBieSBzdHJpbmdJZFxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFNsaWRlKHRoaXMuY3VycmVudFNsaWRlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVJvb3QoKSB7XG5cdFx0dGhpcy5yb290RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMucm9vdEVsZW1lbnQuaWQgPSAnYXRoZW5hLXJvb3QnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yb290RWxlbWVudCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVNsaWRlcyhzZWxlY3Rvcjogc3RyaW5nKSB7XG5cdFx0bGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBzbGlkZSA9IHNsaWRlc1tpXTtcblxuXHRcdFx0c2xpZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzbGlkZSk7XG5cdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKCdhdGhlbmEtc2xpZGUnKTtcblx0XHRcdHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuXG5cdFx0XHR0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZFN0eWxlcygpIHtcblx0XHRsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXHRcdHN0eWxlLmlubmVySFRNTCA9IEF0aGVuYUNTUztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fVxuXG5cdHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZSkgPT4gdGhpcy5oYXNoQ2hhbmdlKGUpKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd24oZSkpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLmtleVVwKGUpKTtcblx0fVxuXG5cdC8vZXZlbnQgaGFuZGxlcnNcblx0cHJpdmF0ZSBoYXNoQ2hhbmdlKGU6SGFzaENoYW5nZUV2ZW50KSB7XG5cdFx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRjb25zb2xlLmxvZyhoYXNoKTtcblx0XHR0aGlzLmdldFNsaWRlRnJvbUhhc2goKTtcblx0fVxuXG5cdHByaXZhdGUga2V5RG93bihlOktleWJvYXJkRXZlbnQpIHtcblxuXHRcdGxldCBuZXh0U2xpZGU6IG51bWJlcjtcblxuXHRcdHN3aXRjaChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRuZXh0U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSA8IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEgPyB0aGlzLmN1cnJlbnRTbGlkZSArIDEgOiB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdFx0XHR0aGlzLmdvdG9TbGlkZShuZXh0U2xpZGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdG5leHRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlID4gMCA/IHRoaXMuY3VycmVudFNsaWRlIC0gMSA6IDA7XG5cdFx0XHRcdHRoaXMuZ290b1NsaWRlKG5leHRTbGlkZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUga2V5VXAoZTpLZXlib2FyZEV2ZW50KSB7XG5cblx0fVxufVxuXG4vKiBBZGQgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgKi9cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgQXRoZW5hOiBhbnk7XG4gIH1cbn1cblxuaWYgKCF3aW5kb3cuQXRoZW5hKSB7XG5cdHdpbmRvdy5BdGhlbmEgPSBuZXcgQXRoZW5hKCk7XG59IGVsc2Uge1xuXHRjb25zb2xlLndhcm4oJ0F0aGVuYSBhbHJlYWR5IGRlZmluZWQnKTtcbn0gXG4iXSwic291cmNlUm9vdCI6IiJ9