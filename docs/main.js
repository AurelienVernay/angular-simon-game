(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"mat-app-background main-content full-width\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"space-between center\"\n>\n    <app-header></app-header>\n    <app-simon fxFill></app-simon>\n    <app-footer class=\"full-width\"></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXHByb2plY3RzXFxhbmd1bGFyLXNpbW9uLWdhbWUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-simon-game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _simon_simon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./simon/simon.component */ "./src/app/simon/simon.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _simon_simon_component__WEBPACK_IMPORTED_MODULE_7__["SimonComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer text-muted\">\n    <p>\n        Cette application a été réalisée avec le framework\n        <a href=\"https://angular.io\">Angular</a>, ainsi que la bibliotèque de\n        programmation réactive\n        <a href=\"https://github.com/ReactiveX/rxjs\" target=\"_blank\">Rxjs</a> et\n        les bibliothèques UI\n        <a href=\"https://material.angular.io\">Angular Material</a>\n        et\n        <a href=\"https://github.com/angular/flex-layout\">Angular Flex Layout</a\n        >.\n    </p>\n    <p>\n        <img src=\"./assets/logo-mini.svg\" height=\"32\" />\n        2019 - Fait par Aurélien VERNAY (visitez mon\n        <a href=\"https://aurelienvernay.github.io\">site web</a> pour en savoir\n        plus)\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 1rem 0;\n  background-color: #f5f5f5;\n  width: 100%; }\n\n.footer p {\n  margin-bottom: 0; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2M6XFxwcm9qZWN0c1xcYW5ndWxhci1zaW1vbi1nYW1lL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvb3RlciBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n    class=\"ribbon\"\n    target=\"_blank\"\n    href=\"https://github.com/aurelienvernay/angular-simon-game\"\n    ><img\n        width=\"149\"\n        height=\"149\"\n        src=\"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149\"\n        class=\"attachment-full size-full\"\n        alt=\"Fork me on GitHub\"\n        data-recalc-dims=\"1\"\n/></a>\n<a href=\"https://aurelienvernay.github.io\">\n    <img\n        src=\"./assets/logo.svg\"\n        [ngStyle.lt-md]=\"{ width: '300px' }\"\n        [ngStyle.gt-md]=\"{ width: '480px' }\"\n    />\n</a>\n\n<h1>Angular Simon Game</h1>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ribbon {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2M6XFxwcm9qZWN0c1xcYW5ndWxhci1zaW1vbi1nYW1lL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmliYm9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/simon/simon.component.html":
/*!********************************************!*\
  !*** ./src/app/simon/simon.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Instructions</h2>\n<p>\n    Appuyez sur <em>Start</em> pour commencer la partie. Observez la séquence de\n    couleurs programmée par Simon, et ne vous trompez pas !\n</p>\n<p>\n    Utilisez le bouton Reset pour recommencer la partie à 0. Attention : cela\n    effacera votre record !\n</p>\n<div id=\"simon-wrapper\">\n    <div id=\"frame\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"2em\">\n        <div\n            id=\"upper\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center stretch\"\n            fxLayoutGap=\"2em\"\n        >\n            <div\n                #green\n                id=\"green\"\n                [ngClass.lt-md]=\"['mobile']\"\n                (click)=\"clickGreen()\"\n            ></div>\n            <div\n                #red\n                id=\"red\"\n                [ngClass.lt-md]=\"['mobile']\"\n                (click)=\"clickRed()\"\n            ></div>\n        </div>\n        <div\n            id=\"lower\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center stretch\"\n            fxLayoutGap=\"2em\"\n        >\n            <div\n                #yellow\n                id=\"yellow\"\n                [ngClass.lt-md]=\"['mobile']\"\n                (click)=\"clickYellow()\"\n            ></div>\n            <div\n                #blue\n                id=\"blue\"\n                [ngClass.lt-md]=\"['mobile']\"\n                (click)=\"clickBlue()\"\n            ></div>\n        </div>\n    </div>\n    <div\n        id=\"center\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center center\"\n        fxLayoutGap=\"5px\"\n        class.lt-md=\"mobile\"\n    >\n        <div\n            class=\"label\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"space-between center\"\n            fxLayoutGap=\"5px\"\n        >\n            <span>Round :</span>\n            <div class=\"digital-counter\">{{ round }}</div>\n        </div>\n        <div\n            class=\"label\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"space-between center\"\n            fxLayoutGap=\"5px\"\n        >\n            <span>Best :</span>\n            <div class=\"digital-counter\">{{ best }}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1em\">\n            <button class=\"button\" (click)=\"resetGame()\">Reset</button>\n            <button class=\"button\" (click)=\"startGame()\" [disabled]=\"playing\">\n                Start\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/simon/simon.component.scss":
/*!********************************************!*\
  !*** ./src/app/simon/simon.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#simon-wrapper {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 2em; }\n\n#frame {\n  position: relative;\n  border-radius: 100%;\n  display: inline-flex !important;\n  padding: 2em;\n  box-shadow: 14px 17px 21px -5px rgba(0, 0, 0, 0.53);\n  background: #4c4c4c;\n  background: radial-gradient(ellipse at center, #4c4c4c 0%, #2c2c2c 44%, #111111 64%, #1c1c1c 91%, #131313 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 ); }\n\n#center {\n  display: inline-block;\n  border-radius: 100%;\n  position: absolute;\n  top: 25%;\n  bottom: 25%;\n  left: 25%;\n  right: 25%; }\n\n#center {\n  background: #595959;\n  background: radial-gradient(ellipse at center, #595959 0%, #141414 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#595959', endColorstr='#141414', GradientType=1 ); }\n\n#upper,\n#lower {\n  display: inline-block; }\n\n#blue,\n#green,\n#yellow,\n#red {\n  transition: background-color 0.1s ease-in-out;\n  min-width: 10em;\n  min-height: 10em;\n  cursor: pointer; }\n\n#blue.mobile,\n#green.mobile,\n#yellow.mobile,\n#red.mobile {\n  min-width: 7em;\n  min-height: 7em; }\n\n#green {\n  background-color: green;\n  border-radius: 100% 0 0 0; }\n\n#green.blinking {\n  background-color: #80ff80; }\n\n#red {\n  background-color: red;\n  border-radius: 0 100% 0 0; }\n\n#red.blinking {\n  background-color: #ff9999; }\n\n#yellow {\n  background-color: yellow;\n  border-radius: 0 0 0 100%; }\n\n#yellow.blinking {\n  background-color: #ffff80; }\n\n#blue {\n  background-color: blue;\n  border-radius: 0 0 100% 0; }\n\n#blue.blinking {\n  background-color: #8080ff; }\n\n.label {\n  width: 96px; }\n\n.label span {\n  color: white;\n  font-family: fantasy;\n  font-size: larger; }\n\n.digital-counter {\n  display: inline-block;\n  padding: 0.1em 0.2em;\n  background-color: #4d0000;\n  border: 1px solid black;\n  color: red;\n  font-size: xx-large;\n  font-family: digitalCounter, 'Courier New', Courier, monospace; }\n\n.button {\n  background-color: #808080;\n  border: none;\n  color: white;\n  font-family: fantasy;\n  font-size: larger; }\n\n.button:disabled {\n  cursor: not-allowed;\n  color: darkgrey; }\n\n.mobile {\n  font-size: large !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltb24vYzpcXHByb2plY3RzXFxhbmd1bGFyLXNpbW9uLWdhbWUvc3JjXFxhcHBcXHNpbW9uXFxzaW1vbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUdaLG1EQUFtRDtFQUNuRCxtQkFBK0I7RUFpRC9CLCtHQU9DO0VBQ0Qsb0hBQW9ILEVBQUE7O0FBSXhIO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUVuQixrQkFBa0I7RUFDbEIsUUFOZ0I7RUFPaEIsV0FQZ0I7RUFRaEIsU0FSZ0I7RUFTaEIsVUFUZ0IsRUFBQTs7QUFZcEI7RUFDSSxtQkFBK0I7RUFrQy9CLHdFQUlDO0VBQ0Qsb0hBQW9ILEVBQUE7O0FBR3hIOztFQUVJLHFCQUFxQixFQUFBOztBQUl6Qjs7OztFQUlJLDZDQUE2QztFQUM3QyxlQU5NO0VBT04sZ0JBUE07RUFRTixlQUFlLEVBQUE7O0FBR25COzs7O0VBSUksY0FMUztFQU1ULGVBTlMsRUFBQTs7QUFTYjtFQUNJLHVCQUF1QjtFQUN2Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0JBQXdCO0VBQ3hCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDhEQUE4RCxFQUFBOztBQUdsRTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2ltb24vc2ltb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2ltb24td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbiNmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTRweCAxN3B4IDIxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxNHB4IDE3cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgICBib3gtc2hhZG93OiAxNHB4IDE3cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCA3NiwgNzYsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgY2VudGVyLFxyXG4gICAgICAgIGVsbGlwc2UgY292ZXIsXHJcbiAgICAgICAgcmdiYSg3NiwgNzYsIDc2LCAxKSAwJSxcclxuICAgICAgICByZ2JhKDQ0LCA0NCwgNDQsIDEpIDQ0JSxcclxuICAgICAgICByZ2JhKDE3LCAxNywgMTcsIDEpIDY0JSxcclxuICAgICAgICByZ2JhKDI4LCAyOCwgMjgsIDEpIDkxJSxcclxuICAgICAgICByZ2JhKDE5LCAxOSwgMTksIDEpIDEwMCVcclxuICAgICk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgIHJhZGlhbCxcclxuICAgICAgICBjZW50ZXIgY2VudGVyLFxyXG4gICAgICAgIDBweCxcclxuICAgICAgICBjZW50ZXIgY2VudGVyLFxyXG4gICAgICAgIDEwMCUsXHJcbiAgICAgICAgY29sb3Itc3RvcCgwJSwgcmdiYSg3NiwgNzYsIDc2LCAxKSksXHJcbiAgICAgICAgY29sb3Itc3RvcCg0NCUsIHJnYmEoNDQsIDQ0LCA0NCwgMSkpLFxyXG4gICAgICAgIGNvbG9yLXN0b3AoNjQlLCByZ2JhKDE3LCAxNywgMTcsIDEpKSxcclxuICAgICAgICBjb2xvci1zdG9wKDkxJSwgcmdiYSgyOCwgMjgsIDI4LCAxKSksXHJcbiAgICAgICAgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE5LCAxOSwgMTksIDEpKVxyXG4gICAgKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGNlbnRlcixcclxuICAgICAgICBlbGxpcHNlIGNvdmVyLFxyXG4gICAgICAgIHJnYmEoNzYsIDc2LCA3NiwgMSkgMCUsXHJcbiAgICAgICAgcmdiYSg0NCwgNDQsIDQ0LCAxKSA0NCUsXHJcbiAgICAgICAgcmdiYSgxNywgMTcsIDE3LCAxKSA2NCUsXHJcbiAgICAgICAgcmdiYSgyOCwgMjgsIDI4LCAxKSA5MSUsXHJcbiAgICAgICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXHJcbiAgICApO1xyXG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGNlbnRlcixcclxuICAgICAgICBlbGxpcHNlIGNvdmVyLFxyXG4gICAgICAgIHJnYmEoNzYsIDc2LCA3NiwgMSkgMCUsXHJcbiAgICAgICAgcmdiYSg0NCwgNDQsIDQ0LCAxKSA0NCUsXHJcbiAgICAgICAgcmdiYSgxNywgMTcsIDE3LCAxKSA2NCUsXHJcbiAgICAgICAgcmdiYSgyOCwgMjgsIDI4LCAxKSA5MSUsXHJcbiAgICAgICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXHJcbiAgICApO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBjZW50ZXIsXHJcbiAgICAgICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICAgICByZ2JhKDc2LCA3NiwgNzYsIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoNDQsIDQ0LCA0NCwgMSkgNDQlLFxyXG4gICAgICAgIHJnYmEoMTcsIDE3LCAxNywgMSkgNjQlLFxyXG4gICAgICAgIHJnYmEoMjgsIDI4LCAyOCwgMSkgOTElLFxyXG4gICAgICAgIHJnYmEoMTksIDE5LCAxOSwgMSkgMTAwJVxyXG4gICAgKTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBlbGxpcHNlIGF0IGNlbnRlcixcclxuICAgICAgICByZ2JhKDc2LCA3NiwgNzYsIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoNDQsIDQ0LCA0NCwgMSkgNDQlLFxyXG4gICAgICAgIHJnYmEoMTcsIDE3LCAxNywgMSkgNjQlLFxyXG4gICAgICAgIHJnYmEoMjgsIDI4LCAyOCwgMSkgOTElLFxyXG4gICAgICAgIHJnYmEoMTksIDE5LCAxOSwgMSkgMTAwJVxyXG4gICAgKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNGM0YzRjJywgZW5kQ29sb3JzdHI9JyMxMzEzMTMnLCBHcmFkaWVudFR5cGU9MSApO1xyXG59XHJcblxyXG4kY2VudGVyLXNwYWNpbmc6IDI1JTtcclxuI2NlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogJGNlbnRlci1zcGFjaW5nO1xyXG4gICAgYm90dG9tOiAkY2VudGVyLXNwYWNpbmc7XHJcbiAgICBsZWZ0OiAkY2VudGVyLXNwYWNpbmc7XHJcbiAgICByaWdodDogJGNlbnRlci1zcGFjaW5nO1xyXG59XHJcblxyXG4jY2VudGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODksIDg5LCA4OSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBjZW50ZXIsXHJcbiAgICAgICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICAgICByZ2JhKDg5LCA4OSwgODksIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoMjAsIDIwLCAyMCwgMSkgMTAwJVxyXG4gICAgKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICAgICAgcmFkaWFsLFxyXG4gICAgICAgIGNlbnRlciBjZW50ZXIsXHJcbiAgICAgICAgMHB4LFxyXG4gICAgICAgIGNlbnRlciBjZW50ZXIsXHJcbiAgICAgICAgMTAwJSxcclxuICAgICAgICBjb2xvci1zdG9wKDAlLCByZ2JhKDg5LCA4OSwgODksIDEpKSxcclxuICAgICAgICBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjAsIDIwLCAyMCwgMSkpXHJcbiAgICApO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgY2VudGVyLFxyXG4gICAgICAgIGVsbGlwc2UgY292ZXIsXHJcbiAgICAgICAgcmdiYSg4OSwgODksIDg5LCAxKSAwJSxcclxuICAgICAgICByZ2JhKDIwLCAyMCwgMjAsIDEpIDEwMCVcclxuICAgICk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgY2VudGVyLFxyXG4gICAgICAgIGVsbGlwc2UgY292ZXIsXHJcbiAgICAgICAgcmdiYSg4OSwgODksIDg5LCAxKSAwJSxcclxuICAgICAgICByZ2JhKDIwLCAyMCwgMjAsIDEpIDEwMCVcclxuICAgICk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGNlbnRlcixcclxuICAgICAgICBlbGxpcHNlIGNvdmVyLFxyXG4gICAgICAgIHJnYmEoODksIDg5LCA4OSwgMSkgMCUsXHJcbiAgICAgICAgcmdiYSgyMCwgMjAsIDIwLCAxKSAxMDAlXHJcbiAgICApO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGVsbGlwc2UgYXQgY2VudGVyLFxyXG4gICAgICAgIHJnYmEoODksIDg5LCA4OSwgMSkgMCUsXHJcbiAgICAgICAgcmdiYSgyMCwgMjAsIDIwLCAxKSAxMDAlXHJcbiAgICApO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1OTU5NTknLCBlbmRDb2xvcnN0cj0nIzE0MTQxNCcsIEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuXHJcbiN1cHBlcixcclxuI2xvd2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuJGRpbTogMTBlbTtcclxuI2JsdWUsXHJcbiNncmVlbixcclxuI3llbGxvdyxcclxuI3JlZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBtaW4td2lkdGg6ICRkaW07XHJcbiAgICBtaW4taGVpZ2h0OiAkZGltO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiRtaW4tZGltOiA3ZW07XHJcbiNibHVlLm1vYmlsZSxcclxuI2dyZWVuLm1vYmlsZSxcclxuI3llbGxvdy5tb2JpbGUsXHJcbiNyZWQubW9iaWxlIHtcclxuICAgIG1pbi13aWR0aDogJG1pbi1kaW07XHJcbiAgICBtaW4taGVpZ2h0OiAkbWluLWRpbTtcclxufVxyXG5cclxuI2dyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcclxufVxyXG5cclxuI2dyZWVuLmJsaW5raW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MGZmODA7XHJcbn1cclxuXHJcbiNyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMDAlIDAgMDtcclxufVxyXG4jcmVkLmJsaW5raW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk5OTk7XHJcbn1cclxuXHJcbiN5ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTAwJTtcclxufVxyXG4jeWVsbG93LmJsaW5raW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmODA7XHJcbn1cclxuXHJcbiNibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTAwJSAwO1xyXG59XHJcblxyXG4jYmx1ZS5ibGlua2luZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MGZmO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgICB3aWR0aDogOTZweDtcclxufVxyXG4ubGFiZWwgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcbi5kaWdpdGFsLWNvdW50ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBkaWdpdGFsQ291bnRlciwgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbn1cclxuXHJcbi5tb2JpbGUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/simon/simon.component.ts":
/*!******************************************!*\
  !*** ./src/app/simon/simon.component.ts ***!
  \******************************************/
/*! exports provided: SimonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimonComponent", function() { return SimonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SimonComponent = /** @class */ (function () {
    function SimonComponent() {
        this._blinkGreen = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._blinkRed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._blinkYellow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._blinkBlue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._endPlay = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._nextRound = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._sequence = [];
        this._playSequence = [];
        this.playing = false;
        this.round = 0;
        this.best = 0;
    }
    Object.defineProperty(SimonComponent.prototype, "sequence", {
        get: function () {
            return this._sequence;
        },
        set: function (array) {
            var _this = this;
            this._sequence = array;
            if (this.sequence.length) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (index) { return console.log('index : ', index); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(this.sequence.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (index) {
                    return console.log('this.sequence[index] : ', _this.sequence[index]);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (index) { return _this.sequence[index]; }))
                    .subscribe(function (color) {
                    switch (color) {
                        case 'green':
                            _this._blinkGreen.next(true);
                            break;
                        case 'red':
                            _this._blinkRed.next(true);
                            break;
                        case 'yellow':
                            _this._blinkYellow.next(true);
                            break;
                        case 'blue':
                            _this._blinkBlue.next(true);
                            break;
                    }
                }, function () { }, function () {
                    console.log('complete');
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimonComponent.prototype, "playSequence", {
        get: function () {
            return this._playSequence;
        },
        set: function (array) {
            var _this = this;
            this._playSequence = array;
            if (this.playing && array.length) {
                console.log('sequence played', this.playSequence);
                var goodSoFar = this._playSequence.every(function (playedColor, i) { return _this.sequence[i] === playedColor; });
                if (!goodSoFar) {
                    console.error('failed !');
                    //handle error
                    this.resetGame();
                }
                else {
                    if (this.playSequence.length === this.sequence.length) {
                        this._nextRound.next(this.round + 1);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SimonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._howl = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
            src: ['./assets/simon-sound.mp3'],
            sprite: {
                green: [0, 295],
                red: [296, 297],
                yellow: [595, 271],
                blue: [866, 321],
            },
            onend: function () { return _this._endPlay.next(); },
            onload: function () {
                _this._blinkGreen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(500)).subscribe(function () {
                    _this.blinkingColor = 'green';
                    _this._howl.play(_this.blinkingColor);
                    _this.toggleBlinking(_this.green);
                });
                _this._blinkRed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(500)).subscribe(function () {
                    _this.blinkingColor = 'red';
                    _this._howl.play(_this.blinkingColor);
                    _this.toggleBlinking(_this.red);
                });
                _this._blinkYellow.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(500)).subscribe(function () {
                    _this.blinkingColor = 'yellow';
                    _this._howl.play(_this.blinkingColor);
                    _this.toggleBlinking(_this.yellow);
                });
                _this._blinkBlue.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["throttleTime"])(500)).subscribe(function () {
                    _this.blinkingColor = 'blue';
                    _this._howl.play(_this.blinkingColor);
                    _this.toggleBlinking(_this.blue);
                });
                _this._endPlay.subscribe(function () {
                    switch (_this.blinkingColor) {
                        case 'green':
                            _this.toggleBlinking(_this.green);
                            break;
                        case 'red':
                            _this.toggleBlinking(_this.red);
                            break;
                        case 'blue':
                            _this.toggleBlinking(_this.blue);
                            break;
                        case 'yellow':
                            _this.toggleBlinking(_this.yellow);
                            break;
                    }
                    _this.blinkingColor = null;
                });
            },
            onloaderror: function (error) { return console.error(error); },
        });
    };
    SimonComponent.prototype.clickGreen = function () {
        this._blinkGreen.next(true);
        this.playSequence = this.playSequence.concat(['green']);
    };
    SimonComponent.prototype.clickRed = function () {
        this._blinkRed.next(true);
        this.playSequence = this.playSequence.concat(['red']);
    };
    SimonComponent.prototype.clickYellow = function () {
        this._blinkYellow.next(true);
        this.playSequence = this.playSequence.concat(['yellow']);
    };
    SimonComponent.prototype.clickBlue = function () {
        this._blinkBlue.next(true);
        this.playSequence = this.playSequence.concat(['blue']);
    };
    SimonComponent.prototype.toggleBlinking = function (htmlElement) {
        htmlElement.nativeElement.classList.toggle('blinking');
    };
    SimonComponent.prototype.startGame = function () {
        var _this = this;
        this._nextRound = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._nextRound.subscribe(function (level) {
            _this.playSequence = [];
            _this.round = level;
            _this.computeSequence();
        });
        this.playing = true;
        this._nextRound.next(1);
    };
    SimonComponent.prototype.resetGame = function () {
        this.playing = false;
        this._nextRound.unsubscribe();
        this.sequence = [];
        this.best = 0;
        this.playSequence = [];
        if (this.best < this.round) {
            this.best = this.round;
        }
        this.round = 0;
    };
    SimonComponent.prototype.computeSequence = function () {
        var newColor;
        switch (Math.floor(Math.random() * Math.floor(4))) {
            case 0:
                newColor = 'green';
                break;
            case 1:
                newColor = 'red';
                break;
            case 2:
                newColor = 'yellow';
                break;
            case 3:
                newColor = 'blue';
                break;
        }
        console.log('newColor :', newColor);
        this.sequence = this._sequence.concat([newColor]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('green'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SimonComponent.prototype, "green", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('red'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SimonComponent.prototype, "red", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('yellow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SimonComponent.prototype, "yellow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('blue'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SimonComponent.prototype, "blue", void 0);
    SimonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simon',
            template: __webpack_require__(/*! ./simon.component.html */ "./src/app/simon/simon.component.html"),
            styles: [__webpack_require__(/*! ./simon.component.scss */ "./src/app/simon/simon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimonComponent);
    return SimonComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\angular-simon-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map