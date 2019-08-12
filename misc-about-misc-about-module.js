(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["misc-about-misc-about-module"],{

/***/ "./src/app/misc/about/components/about-page/about-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/about-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"about-title\">About Us</h1>\n      <h3>\n        What is Lorem Ipsum?\n      </h3>\n      <p>\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </p>\n      <h3>\n        Where does it come from?\n      </h3>\n      <p>\n        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n      </p>\n      <p>\n        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n      </p>\n      <h3>\n        Why do we use it?\n      </h3>\n      <p>\n        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/misc/about/components/about-page/about-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/about-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/misc/about/components/about-page/about-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/about-page.styles.scss */ "./src/app/misc/about/components/about-page/styles/about-page.styles.scss")]
        })
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/misc/about/components/about-page/styles/about-page.styles.scss":
/*!********************************************************************************!*\
  !*** ./src/app/misc/about/components/about-page/styles/about-page.styles.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-about-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-about-page .about-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9hYm91dC9jb21wb25lbnRzL2Fib3V0LXBhZ2Uvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcbWlzY1xcYWJvdXRcXGNvbXBvbmVudHNcXGFib3V0LXBhZ2VcXHN0eWxlc1xcYWJvdXQtcGFnZS5zdHlsZXMuc2NzcyIsInNyYy9hcHAvbWlzYy9hYm91dC9jb21wb25lbnRzL2Fib3V0LXBhZ2Uvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFjO0VBQ2QsaUNBQTZDO0VBQzdDLHFCQUFvQixFQVVyQjtFQWJEO0lBTUksa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixlQ1RXO0lEVVgsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQix3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9taXNjL2Fib3V0L2NvbXBvbmVudHMvYWJvdXQtcGFnZS9zdHlsZXMvYWJvdXQtcGFnZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fc2hhcmVkJztcblxuYXBwLWFib3V0LXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7ICRuYXZiYXItaGVpZ2h0IH0pO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcblxuICAuYWJvdXQtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xuICB9XG59XG4iLCIvLyBDb2xvcnNcbiRibGFjazogIzFlMWUxZTtcbiRkYXJrZ3JleTogIzNmM2YzZjtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjOWU5ZTllO1xuJGdyZXktMjogI2Q3ZDdkNztcbiRncmV5LTM6ICNlNWU1ZTU7XG5cbiRhcXVhbWFyaW5hOiAjNTBlM2MyO1xuJHB1cnBsZTogIzkwMTNmZTtcbiRjaGVycnk6ICNmODJjNTE7XG4kcmVkOiAjZDYxODNhO1xuJGdvbGQ6ICNmY2IzMDA7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcblxuLy8gU2l6ZXNcbiRuYXZiYXItaGVpZ2h0OiAkbmF2LWxpbmstaGVpZ2h0ICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDI7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kcHJlbG9hZC1pbWFnZS1iZzogcmdiYShkYXJrZW4oJHdoaXRlLCAxMCksIC4yNSk7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kc3Bpbm5lci1zaXplOiAyOHB4O1xuJHNwaW5uZXItY29sb3I6ICRncmV5O1xuIl19 */"

/***/ }),

/***/ "./src/app/misc/about/misc-about.module.ts":
/*!*************************************************!*\
  !*** ./src/app/misc/about/misc-about.module.ts ***!
  \*************************************************/
/*! exports provided: miscAboutRoutes, MiscAboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscAboutRoutes", function() { return miscAboutRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscAboutModule", function() { return MiscAboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-page/about-page.component */ "./src/app/misc/about/components/about-page/about-page.component.ts");
/* harmony import */ var _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/about-page.resolver */ "./src/app/misc/about/resolvers/about-page.resolver.ts");






var miscAboutRoutes = [
    {
        path: '',
        component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"],
        resolve: {
            data: _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__["AboutPageResolver"]
        }
    }
];
var MiscAboutModule = /** @class */ (function () {
    function MiscAboutModule() {
    }
    MiscAboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(miscAboutRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _resolvers_about_page_resolver__WEBPACK_IMPORTED_MODULE_5__["AboutPageResolver"]
            ]
        })
    ], MiscAboutModule);
    return MiscAboutModule;
}());



/***/ }),

/***/ "./src/app/misc/about/resolvers/about-page.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/misc/about/resolvers/about-page.resolver.ts ***!
  \*************************************************************/
/*! exports provided: AboutPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageResolver", function() { return AboutPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageResolver = /** @class */ (function () {
    function AboutPageResolver() {
    }
    AboutPageResolver.prototype.resolve = function () {
        return new Promise(function (resolve, reject) {
            return resolve({
                seo: {
                    title: 'About Us',
                    description: '',
                    keywords: '',
                    image_url: ''
                }
            });
        });
    };
    AboutPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AboutPageResolver);
    return AboutPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=misc-about-misc-about-module.js.map