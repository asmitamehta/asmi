(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["misc-contact-misc-contact-module"],{

/***/ "./src/app/misc/contact/components/contact-page/contact-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/contact-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h1 class=\"about-title\"><b>Contact Us</b></h1><br>\n      <h3>\n        Contact Number\n      </h3>\n      <p>\n        245-876-9999\n      </p>\n      <h3>\n       Address\n      </h3>\n      <p>\n        299 Doon Valley Dr, Kitchener\n      </p>\n      <p>\n        765 Fairview Rd, Kitchener\n      </p>\n      <h3>\n       Email: \n      </h3>\n      <p>\n        thesilverleaf@gmail.com\n\t\t</p>\n    </div>\n\t  <div class=\"col-6\">\n\t  <div id=\"googleMap\" style=\"width:100%;height:400px;\"></div>\n\n<script>\nfunction myMap() {\nvar mapProp= {\n  center:new google.maps.LatLng(51.508742,-0.120850),\n  zoom:5,\n};\nvar map = new google.maps.Map(document.getElementById(\"googleMap\"),mapProp);\n}\n</script>\n\n<script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap\"></script>\n\t\t  \n\t  </div>\n\t  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/misc/contact/components/contact-page/contact-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/contact-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/misc/contact/components/contact-page/contact-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/contact-page.styles.scss */ "./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss")]
        })
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/misc/contact/components/contact-page/styles/contact-page.styles.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-about-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-about-page .about-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9jb250YWN0L2NvbXBvbmVudHMvY29udGFjdC1wYWdlL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXG1pc2NcXGNvbnRhY3RcXGNvbXBvbmVudHNcXGNvbnRhY3QtcGFnZVxcc3R5bGVzXFxjb250YWN0LXBhZ2Uuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL21pc2MvY29udGFjdC9jb21wb25lbnRzL2NvbnRhY3QtcGFnZS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWM7RUFDZCxpQ0FBNkM7RUFDN0MscUJBQW9CLEVBVXJCO0VBYkQ7SUFNSSxrQkFBaUI7SUFDakIsb0JBQW1CO0lBQ25CLGVDVFc7SURVWCxrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21pc2MvY29udGFjdC9jb21wb25lbnRzL2NvbnRhY3QtcGFnZS9zdHlsZXMvY29udGFjdC1wYWdlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL19zaGFyZWQnO1xuXG5hcHAtYWJvdXQtcGFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3sgJG5hdmJhci1oZWlnaHQgfSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuXG4gIC5hYm91dC10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMWUxZTFlO1xuJGRhcmtncmV5OiAjM2YzZjNmO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM5ZTllOWU7XG4kZ3JleS0yOiAjZDdkN2Q3O1xuJGdyZXktMzogI2U1ZTVlNTtcblxuJGFxdWFtYXJpbmE6ICM1MGUzYzI7XG4kcHVycGxlOiAjOTAxM2ZlO1xuJGNoZXJyeTogI2Y4MmM1MTtcbiRyZWQ6ICNkNjE4M2E7XG4kZ29sZDogI2ZjYjMwMDtcbiRmYWNlYm9vay1ibHVlOiAjM2I1OTk4O1xuXG4vLyBTaXplc1xuJG5hdmJhci1oZWlnaHQ6ICRuYXYtbGluay1oZWlnaHQgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRwcmVsb2FkLWltYWdlLWJnOiByZ2JhKGRhcmtlbigkd2hpdGUsIDEwKSwgLjI1KTtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRzcGlubmVyLXNpemU6IDI4cHg7XG4kc3Bpbm5lci1jb2xvcjogJGdyZXk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/misc/contact/misc-contact.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/misc/contact/misc-contact.module.ts ***!
  \*****************************************************/
/*! exports provided: miscContactRoutes, MiscContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscContactRoutes", function() { return miscContactRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscContactModule", function() { return MiscContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-page/contact-page.component */ "./src/app/misc/contact/components/contact-page/contact-page.component.ts");
/* harmony import */ var _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/contact-page.resolver */ "./src/app/misc/contact/resolvers/contact-page.resolver.ts");






var miscContactRoutes = [
    {
        path: '',
        component: _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"],
        resolve: {
            data: _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__["ContactPageResolver"]
        }
    }
];
var MiscContactModule = /** @class */ (function () {
    function MiscContactModule() {
    }
    MiscContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(miscContactRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _resolvers_contact_page_resolver__WEBPACK_IMPORTED_MODULE_5__["ContactPageResolver"]
            ]
        })
    ], MiscContactModule);
    return MiscContactModule;
}());



/***/ }),

/***/ "./src/app/misc/contact/resolvers/contact-page.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/misc/contact/resolvers/contact-page.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: ContactPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageResolver", function() { return ContactPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageResolver = /** @class */ (function () {
    function ContactPageResolver() {
    }
    ContactPageResolver.prototype.resolve = function () {
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
    ContactPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContactPageResolver);
    return ContactPageResolver;
}());



/***/ })

}]);
//# sourceMappingURL=misc-contact-misc-contact-module.js.map