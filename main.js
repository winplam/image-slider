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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ImageSlider.js":
/*!****************************!*\
  !*** ./src/ImageSlider.js ***!
  \****************************/
/*! exports provided: ImageSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageSlider\", function() { return ImageSlider; });\nconst ImageSlider = (images, captions) => {\n  /* Generate all the HTML for the sliders */\n  const slideHTML = () => {\n    let slides = []\n    const parentDiv = document.getElementById('slideshow-container')\n\n    const generateSlide = (image, caption, index, total) => {\n      let frag = document.createRange().createContextualFragment(`    \n    <div class=\"slide fade\">\n        <div class=\"pagination\">${index} / ${total}</div>\n        <img src=\"img/${image}\">\n        <div class=\"caption\">${caption}</div>\n    </div>\n`)\n      return frag\n    }\n\n    images.forEach((image, index) => {\n      slides.push(\n        generateSlide(image, captions[index], index + 1, images.length))\n    })\n    slides.forEach(slide => {parentDiv.appendChild(slide)})\n\n    const dotsContainer = document.getElementById('dots-container')\n    for (let i = 0; i < slides.length; i += 1) {\n      const dot = document.createElement('span')\n      dot.className = 'dots'\n      dotsContainer.appendChild(dot)\n    }\n    return slides.length\n  }\n  const numSlides = slideHTML()\n\n  /* Add event listeners to change slides and display active image */\n  const slideControl = () => {\n    let slideIndex = 1\n    document.getElementById('prev')\n      .addEventListener('click', () => {rotateSlide(slideIndex -= 1)})\n    document.getElementById('next')\n      .addEventListener('click', () => {rotateSlide(slideIndex += 1)})\n    const dots = document.querySelectorAll('.dots')\n    dots.forEach((dot, index) => dot.addEventListener('click', () => {\n      console.log('slideIndex: ' + slideIndex + ' index: ' + index)\n      rotateSlide(slideIndex = index + 1)\n    }))\n\n    const rotateSlide = (index) => {\n      console.log('slideNumber passed ' + index)\n      const slides = document.querySelectorAll('.slide')\n      let dots = document.querySelectorAll('.dots')\n      if (index > slides.length) {slideIndex = 1}\n      if (index < 1) {slideIndex = slides.length}\n      slides.forEach(slide => {slide.style.display = 'none'})\n      dots.forEach(dot => {dot.classList.remove('active')})\n      slides[slideIndex - 1].style.display = 'block'\n      dots[slideIndex - 1].classList.add('active')\n    }\n    rotateSlide()\n\n    const showSlide = (slideNumber) => {\n      rotateSlide(slideIndex = slideNumber)\n    }\n    return { showSlide }\n  }\n  slideControl()\n\n  /* Auto rotate slides every few seconds */\n  const autoAdvance = (iterations, seconds) => {\n    let slideCounter = 2\n    const timer = () => {\n      slideControl().showSlide(slideCounter % numSlides)\n      if (slideCounter === iterations) clearInterval(slideInterval)\n      slideCounter += 1\n    }\n    const slideInterval = setInterval(timer, seconds * 1000) // 1000ms = 1 second\n  }\n  autoAdvance(numSlides + 1, 2)\n}\n\n\n\n//# sourceURL=webpack:///./src/ImageSlider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageSlider */ \"./src/ImageSlider.js\");\n\n\nconst images = ['picture1.jpeg', 'picture2.jpeg', 'picture3.jpeg', 'picture4.jpeg', 'picture5.jpeg']\nconst captions = ['Caption One', 'Caption Two', 'Caption Three', 'Caption Four', 'Caption Five']\n\nObject(_ImageSlider__WEBPACK_IMPORTED_MODULE_0__[\"ImageSlider\"])(images, captions)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });