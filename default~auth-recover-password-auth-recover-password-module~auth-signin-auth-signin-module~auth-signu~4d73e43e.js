(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-recover-password-auth-recover-password-module~auth-signin-auth-signin-module~auth-signu~4d73e43e"],{

/***/ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js ***!
  \***********************************************************************/
/*! exports provided: BsModalRef, ModalBackdropOptions, ModalContainerComponent, ModalBackdropComponent, ModalOptions, ModalDirective, ModalModule, BsModalService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
    BsModalRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsModalRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ModalOptions;
}());
var /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ModalContainerComponent.propDecorators = {
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: CLASS_NAME.BACKDROP }
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return ModalBackdropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TRANSITION_DURATION = 300;
var /** @type {?} */ BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    _this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /**
     * Events tricks
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = /**
     * Events tricks
     * @return {?}
     */
    function () {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], },
    ]; };
    ModalDirective.propDecorators = {
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
        "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    // tslint:disable-next-line:no-any
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    BsModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    BsModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ bsModalRef = new BsModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = function (newClass) {
            modalContainerRef.instance.config.class = newClass;
        };
        return bsModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    BsModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.removeBackdrop = /**
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BsModalService.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._createLoaders = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.removeLoaders = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    BsModalService.prototype.copyEvent = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], },
    ]; };
    return BsModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC1yZWYuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5vcHRpb25zLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL2JzLW1vZGFsLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIGEgY29tcG9uZW50IGluc2lkZSB0aGUgbW9kYWwuIE51bGwgaWYgbW9kYWwncyBiZWVuIGNyZWF0ZWQgd2l0aCBUZW1wbGF0ZVJlZlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb250ZW50PzogYW55IHwgbnVsbDtcblxuICAvKipcbiAgICogSGlkZXMgdGhlIG1vZGFsXG4gICAqL1xuICBoaWRlOiAoKSA9PiB2b2lkID0gRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTZXRzIG5ldyBjbGFzcyB0byBtb2RhbCB3aW5kb3dcbiAgICovXG4gIHNldENsYXNzOiAobmV3Q2xhc3M6IHN0cmluZykgPT4gdm9pZCA9IEZ1bmN0aW9uO1xufVxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BPcHRpb25zIHtcbiAgYW5pbWF0ZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTW9kYWxCYWNrZHJvcE9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc05hbWUsIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LFxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogTW9kYWwgZGF0YVxuICAgKi9cbiAgaW5pdGlhbFN0YXRlPzogT2JqZWN0O1xufVxuXG5cbmV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIHNob3c6IGZhbHNlLFxuICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcbiAgY2xhc3M6ICcnLFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgaW5pdGlhbFN0YXRlOiB7fVxufTtcblxuZXhwb3J0IGNvbnN0IENMQVNTX05BTUU6IENsYXNzTmFtZSA9IHtcbiAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTjogJ21vZGFsLW9wZW4nLFxuICBGQURFOiAnZmFkZScsXG4gIElOOiAnaW4nLCAvLyBiczNcbiAgU0hPVzogJ3Nob3cnIC8vIGJzNFxufTtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SOiBTZWxlY3RvciA9IHtcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXG59O1xuXG5leHBvcnQgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTlM6IFRyYW5zaXRpb25EdXJhdGlvbnMgPSB7XG4gIE1PREFMOiAzMDAsXG4gIEJBQ0tEUk9QOiAxNTBcbn07XG5cbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlM6IERpc21pc3NSZWFzb25zID0ge1xuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgRVNDOiAnZXNjJ1xufTtcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ0xBU1NfTkFNRSxcbiAgRElTTUlTU19SRUFTT05TLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vYnMtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cIidtb2RhbC1kaWFsb2cnICsgKGNvbmZpZy5jbGFzcyA/ICcgJyArIGNvbmZpZy5jbGFzcyA6ICcnKVwiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21vZGFsJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICAnW2F0dHIuYXJpYS1tb2RhbF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnM7XG4gIGlzU2hvd24gPSBmYWxzZTtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgaXNBbmltYXRlZDogYm9vbGVhbjtcbiAgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlO1xuICBwcml2YXRlIGlzTW9kYWxIaWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbE9wdGlvbnMsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBDTEFTU19OQU1FLkZBREVcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ2Jsb2NrJ1xuICAgICk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgaXNCczMoKSA/IENMQVNTX05BTUUuSU4gOiBDTEFTU19OQU1FLlNIT1dcbiAgICAgICk7XG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgICAgaWYgKHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0U2Nyb2xsYmFyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuQkFDS1JET1ApO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgb25Fc2MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmtleWJvYXJkICYmXG4gICAgICB0aGlzLmxldmVsID09PSB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KClcbiAgICApIHtcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xuICAgICk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgZG9jdW1lbnQgJiZcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDFcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgICAgfVxuICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5oaWRlKHRoaXMubGV2ZWwpO1xuICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuTU9EQUwgOiAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDTEFTU19OQU1FIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5cbi8qKiBUaGlzIGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGFzIGJhY2tncm91bmQgbGF5b3V0IGZvciBtb2RhbHMgaWYgZW5hYmxlZCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbW9kYWwtYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogJyAnLFxuICBob3N0OiB7IGNsYXNzOiBDTEFTU19OQU1FLkJBQ0tEUk9QIH1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdldCBpc0FuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0FuaW1hdGVkO1xuICB9XG5cbiAgc2V0IGlzQW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FuaW1hdGVkID0gdmFsdWU7XG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke0NsYXNzTmFtZS5GQURFfWAsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBpc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzU2hvd24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1Nob3duID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBwcm90ZWN0ZWQgX2lzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaXNTaG93biA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBgJHtDTEFTU19OQU1FLkZBREV9YFxuICAgICAgKTtcbiAgICAgIFV0aWxzLnJlZmxvdyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgKi9cbi8vIHRvZG86IHNob3VsZCB3ZSBzdXBwb3J0IGVuZm9yY2UgZm9jdXMgaW4/XG4vLyB0b2RvOiBpbiBvcmlnaW5hbCBicyB0aGVyZSBhcmUgd2FzIGEgd2F5IHRvIHByZXZlbnQgbW9kYWwgZnJvbSBzaG93aW5nXG4vLyB0b2RvOiBvcmlnaW5hbCBtb2RhbCBoYWQgcmVzaXplIGV2ZW50c1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRvY3VtZW50LCB3aW5kb3csIGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsIERJU01JU1NfUkVBU09OUywgbW9kYWxDb25maWdEZWZhdWx0cywgTW9kYWxPcHRpb25zXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuXG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwO1xuY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcblxuLyoqIE1hcmsgYW55IGNvZGUgd2l0aCBkaXJlY3RpdmUgdG8gc2hvdyBpdCdzIGNvbnRlbnQgaW4gbW9kYWwgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tic01vZGFsXScsXG4gIGV4cG9ydEFzOiAnYnMtbW9kYWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogYWxsb3dzIHRvIHNldCBtb2RhbCBjb25maWd1cmF0aW9uIHZpYSBlbGVtZW50IHByb3BlcnR5ICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoY29uZjogTW9kYWxPcHRpb25zKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5nZXRDb25maWcoY29uZik7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGltbWVkaWF0ZWx5IHdoZW4gdGhlIGBzaG93YCBpbnN0YW5jZSBtZXRob2QgaXMgY2FsbGVkLiAqL1xuICBAT3V0cHV0KClcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbW9kYWwgaGFzIGJlZW4gbWFkZSB2aXNpYmxlIHRvIHRoZSB1c2VyXG4gICAqICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSlcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgaW1tZWRpYXRlbHkgd2hlblxuICAgKiB0aGUgaGlkZSBpbnN0YW5jZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSGlkZTogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCBiZWluZ1xuICAgKiBoaWRkZW4gZnJvbSB0aGUgdXNlciAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcblxuICAvKiogVGhpcyBmaWVsZCBjb250YWlucyBsYXN0IGRpc21pc3MgcmVhc29uLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGBiYWNrZHJvcC1jbGlja2AsIGBlc2NgIGFuZCBgbnVsbGBcbiAgICogKGlmIG1vZGFsIHdhcyBjbG9zZWQgYnkgZGlyZWN0IGNhbGwgb2YgYC5oaWRlKClgKS5cbiAgICovXG4gIGRpc21pc3NSZWFzb246IHN0cmluZztcblxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29uZmlnOiBNb2RhbE9wdGlvbnM7XG4gIHByb3RlY3RlZCBfaXNTaG93biA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIHRpbWVySGlkZU1vZGFsID0gMDtcbiAgcHJvdGVjdGVkIHRpbWVyUm1CYWNrRHJvcCA9IDA7XG5cbiAgLy8gcmVmZXJlbmNlIHRvIGJhY2tkcm9wIGNvbXBvbmVudFxuICBwcm90ZWN0ZWQgYmFja2Ryb3A6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfYmFja2Ryb3A6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcblxuICBwcml2YXRlIGlzTmVzdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAgIHRoaXMuX2JhY2tkcm9wID0gY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcbiAgICAgIF9lbGVtZW50LFxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBfcmVuZGVyZXJcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8XG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuQkFDS1JET1A7XG4gICAgdGhpcy5oaWRlKGV2ZW50KTtcbiAgfVxuXG4gIC8vIHRvZG86IGNvbnNpZGVyIHByZXZlbnRpbmcgZGVmYXVsdCBhbmQgc3RvcHBpbmcgcHJvcGFnYXRpb25cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IERJU01JU1NfUkVBU09OUy5FU0M7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHZvaWQgMDtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9jb25maWcgfHwgdGhpcy5nZXRDb25maWcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuc2hvdykge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qIFB1YmxpYyBtZXRob2RzICovXG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgbW9kYWwgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBvcGVuIG1vZGFsICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5kaXNtaXNzUmVhc29uID0gbnVsbDtcbiAgICB0aGlzLm9uU2hvdy5lbWl0KHRoaXMpO1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclJtQmFja0Ryb3ApO1xuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKTtcblxuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRS5PUEVOKSkge1xuICAgICAgICB0aGlzLmlzTmVzdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RWxlbWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBjbG9zZSBtb2RhbCAqL1xuICBoaWRlKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcblxuICAgIC8vIHRvZG86IGFkZCBhbiBvcHRpb24gdG8gcHJldmVudCBoaWRpbmdcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJIaWRlTW9kYWwpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lclJtQmFja0Ryb3ApO1xuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5JTik7XG4gICAgaWYgKCFpc0JzMygpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuU0hPVyk7XG4gICAgfVxuICAgIC8vIHRoaXMuX2FkZENsYXNzSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMudGltZXJIaWRlTW9kYWwgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5oaWRlTW9kYWwoKSxcbiAgICAgICAgVFJBTlNJVElPTl9EVVJBVElPTlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogUHJpdmF0ZSBtZXRob2RzIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnKGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogIFNob3cgZGlhbG9nXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudCgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiByZXBsYWNlIHRoaXMgd2l0aCBjb21wb25lbnQgbG9hZGVyIHVzYWdlXG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREVcbiAgICApIHtcbiAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWhpZGRlbicsXG4gICAgICAnZmFsc2UnXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1tb2RhbCcsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ2Jsb2NrJ1xuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xuICAgICAgVXRpbHMucmVmbG93KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5fYWRkQ2xhc3NJbiA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLklOKTtcbiAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcyk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQodHJhbnNpdGlvbkNvbXBsZXRlLCBUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgaGlkZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWhpZGRlbicsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2Rpc3BsYXknLFxuICAgICAgJ25vbmUnXG4gICAgKTtcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgdGhpcy5mb2N1c090aGVyTW9kYWwoKTtcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRvZG86IG9yaWdpbmFsIHNob3cgd2FzIGNhbGxpbmcgYSBjYWxsYmFjayB3aGVuIGRvbmUsIGJ1dCB3ZSBjYW4gdXNlXG4gIC8vIHByb21pc2VcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgc2hvd0JhY2tkcm9wKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLl9pc1Nob3duICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCAmJlxuICAgICAgKCF0aGlzLmJhY2tkcm9wIHx8ICF0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzU2hvd24pXG4gICAgKSB7XG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcFxuICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXG4gICAgICAgIC50bygnYm9keScpXG4gICAgICAgIC5zaG93KHtpc0FuaW1hdGVkOiB0aGlzLl9jb25maWcuYW5pbWF0ZWR9KTtcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcC5fY29tcG9uZW50UmVmO1xuXG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy50aW1lclJtQmFja0Ryb3AgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSxcbiAgICAgICAgICBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpO1xuICB9XG5cbiAgLyoqIEV2ZW50cyB0cmlja3MgKi9cblxuICAvLyBubyBuZWVkIGZvciBpdFxuICAvLyBwcm90ZWN0ZWQgc2V0RXNjYXBlRXZlbnQoKTp2b2lkIHtcbiAgLy8gICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgLy8gICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyNykge1xuICAvLyAgICAgICAgIHRoaXMuaGlkZSgpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vXG4gIC8vICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHByb3RlY3RlZCBzZXRSZXNpemVFdmVudCgpOnZvaWQge1xuICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnJywgRXZlbnQuUkVTSVpFKSk7XG4gIC8vIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gIC8vICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAvLyB9XG4gIC8vIH1cblxuICBwcm90ZWN0ZWQgZm9jdXNPdGhlck1vZGFsKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG90aGVyT3BlbmVkTW9kYWxzID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluW2JzTW9kYWxdJyk7XG4gICAgaWYgKCFvdGhlck9wZW5lZE1vZGFscy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3RoZXJPcGVuZWRNb2RhbHNbb3RoZXJPcGVuZWRNb2RhbHMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJvdGVjdGVkIHJlc2V0QWRqdXN0bWVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAncGFkZGluZ0xlZnQnLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3BhZGRpbmdSaWdodCcsXG4gICAgICAnJ1xuICAgICk7XG4gIH1cblxuICAvKiogU2Nyb2xsIGJhciB0cmlja3MgKi9cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcm90ZWN0ZWQgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nID0gcGFyc2VJbnQoXG4gICAgICB3aW5kb3dcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZXNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XG4gIH1cblxuICAvLyB0aHggZC53YWxzaFxuICBwcm90ZWN0ZWQgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBSZW5kZXJlckZhY3RvcnkyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENMQVNTX05BTUUsXG4gIG1vZGFsQ29uZmlnRGVmYXVsdHMsXG4gIE1vZGFsT3B0aW9ucyxcbiAgVFJBTlNJVElPTl9EVVJBVElPTlNcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICcuL2JzLW1vZGFsLXJlZi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxTZXJ2aWNlIHtcbiAgLy8gY29uc3RydWN0b3IgcHJvcHNcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnMgPSBtb2RhbENvbmZpZ0RlZmF1bHRzO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xuXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIGJhY2tkcm9wUmVmOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgX2JhY2tkcm9wTG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByaXZhdGUgbW9kYWxzQ291bnQgPSAwO1xuICBwcml2YXRlIGxhc3REaXNtaXNzUmVhc29uID0gJyc7XG5cbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcblxuICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MiwgcHJpdmF0ZSBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgbnVsbFxuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICAvKiogU2hvd3MgYSBtb2RhbCAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNob3coY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSwgY29uZmlnPzogTW9kYWxPcHRpb25zKTogQnNNb2RhbFJlZiB7XG4gICAgdGhpcy5tb2RhbHNDb3VudCsrO1xuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCk7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvd01vZGFsKGNvbnRlbnQpO1xuICB9XG5cbiAgaGlkZShsZXZlbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxID8gdGhpcy5tb2RhbHNDb3VudCAtIDEgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKGxldmVsKTtcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVycyhsZXZlbCk7XG4gICAgfSwgdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDApO1xuICB9XG5cbiAgX3Nob3dCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0JhY2tkcm9wRW5hYmxlZCA9XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCB8fCB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYyc7XG4gICAgY29uc3QgaXNCYWNrZHJvcEluRE9NID1cbiAgICAgICF0aGlzLmJhY2tkcm9wUmVmIHx8ICF0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd247XG5cbiAgICBpZiAodGhpcy5tb2RhbHNDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuXG4gICAgICBpZiAoaXNCYWNrZHJvcEVuYWJsZWQgJiYgaXNCYWNrZHJvcEluRE9NKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyXG4gICAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxuICAgICAgICAgIC50bygnYm9keScpXG4gICAgICAgICAgLnNob3coeyBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCB9KTtcbiAgICAgICAgdGhpcy5iYWNrZHJvcFJlZiA9IHRoaXMuX2JhY2tkcm9wTG9hZGVyLl9jb21wb25lbnRSZWY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hpZGVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQmFja2Ryb3AoKSwgZHVyYXRpb24pO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgX3Nob3dNb2RhbChjb250ZW50OiBhbnkpOiBCc01vZGFsUmVmIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1t0aGlzLmxvYWRlcnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYnNNb2RhbFJlZiA9IG5ldyBCc01vZGFsUmVmKCk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXJSZWYgPSBtb2RhbExvYWRlclxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBNb2RhbE9wdGlvbnMsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZyB9KVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBCc01vZGFsUmVmLCB1c2VWYWx1ZTogYnNNb2RhbFJlZiB9KVxuICAgICAgLmF0dGFjaChNb2RhbENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50bygnYm9keScpXG4gICAgICAuc2hvdyh7Y29udGVudCwgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQsIGluaXRpYWxTdGF0ZTogdGhpcy5jb25maWcuaW5pdGlhbFN0YXRlLCBic01vZGFsU2VydmljZTogdGhpc30pO1xuICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmxldmVsID0gdGhpcy5nZXRNb2RhbHNDb3VudCgpO1xuICAgIGJzTW9kYWxSZWYuaGlkZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICB9O1xuICAgIGJzTW9kYWxSZWYuY29udGVudCA9IG1vZGFsTG9hZGVyLmdldElubmVyQ29tcG9uZW50KCkgfHwgbnVsbDtcbiAgICBic01vZGFsUmVmLnNldENsYXNzID0gKG5ld0NsYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmNvbmZpZy5jbGFzcyA9IG5ld0NsYXNzO1xuICAgIH07XG5cbiAgICByZXR1cm4gYnNNb2RhbFJlZjtcbiAgfVxuXG4gIF9oaWRlTW9kYWwobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW2xldmVsIC0gMV07XG4gICAgaWYgKG1vZGFsTG9hZGVyKSB7XG4gICAgICBtb2RhbExvYWRlci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TW9kYWxzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbHNDb3VudDtcbiAgfVxuXG4gIHNldERpc21pc3NSZWFzb24ocmVhc29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gcmVhc29uO1xuICB9XG5cbiAgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIuaGlkZSgpO1xuICAgIHRoaXMuYmFja2Ryb3BSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqIEFGVEVSIFBSIE1FUkdFIE1PREFMLkNPTVBPTkVOVCBXSUxMIEJFIFVTSU5HIFRISVMgQ09ERSAqL1xuICAvKiogU2Nyb2xsIGJhciB0cmlja3MgKi9cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjaGVja1Njcm9sbGJhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KFxuICAgICAgd2luZG93XG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgJzAnLFxuICAgICAgMTBcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFNjcm9sbGJhcigpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XG4gIH1cblxuICAvLyB0aHggZC53YWxzaFxuICBwcml2YXRlIGdldFNjcm9sbGJhcldpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDTEFTU19OQU1FLlNDUk9MTEJBUl9NRUFTVVJFUik7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTG9hZGVycygpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+KFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBudWxsXG4gICAgKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVTaG93LCB0aGlzLm9uU2hvdyk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uU2hvd24sIHRoaXMub25TaG93bik7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlSGlkZSwgdGhpcy5vbkhpZGUpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkhpZGRlbiwgdGhpcy5vbkhpZGRlbik7XG4gICAgdGhpcy5sb2FkZXJzLnB1c2gobG9hZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTG9hZGVycyhsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZXJzLnNwbGljZShsZXZlbCAtIDEsIDEpO1xuICAgIHRoaXMubG9hZGVycy5mb3JFYWNoKFxuICAgICAgKGxvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxvYWRlci5pbnN0YW5jZS5sZXZlbCA9IGkgKyAxO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgY29weUV2ZW50KGZyb206IEV2ZW50RW1pdHRlcjxhbnk+LCB0bzogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICBmcm9tLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0by5lbWl0KHRoaXMubGFzdERpc21pc3NSZWFzb24pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2JzLW1vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNb2RhbEJhY2tkcm9wQ29tcG9uZW50LFxuICAgIE1vZGFsRGlyZWN0aXZlLFxuICAgIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtCc01vZGFsU2VydmljZSwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O29CQWFxQixRQUFROzs7O3dCQUlZLFFBQVE7OztnQkFmaEQsVUFBVTs7cUJBRlg7Ozs7Ozs7QUNBQSxJQUFBO0lBR0UsOEJBQVksT0FBNkI7dUJBRi9CLElB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

/***/ }),

/***/ "./src/app/auth/auth-shared.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-shared.module.ts ***!
  \********************************************/
/*! exports provided: AuthSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSharedModule", function() { return AuthSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _signin_components_signin_form_auth_signin_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/components/signin-form/auth-signin-form.component */ "./src/app/auth/signin/components/signin-form/auth-signin-form.component.ts");
/* harmony import */ var _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/components/signin-modal/auth-signin-modal.component */ "./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.ts");
/* harmony import */ var _signup_components_signup_form_auth_signup_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/components/signup-form/auth-signup-form.component */ "./src/app/auth/signup/components/signup-form/auth-signup-form.component.ts");
/* harmony import */ var _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/components/signup-modal/auth-signup-modal.component */ "./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.ts");
/* harmony import */ var _recover_password_components_recover_password_form_auth_recover_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recover-password/components/recover-password-form/auth-recover-password-form.component */ "./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.ts");








var AuthSharedModule = /** @class */ (function () {
    function AuthSharedModule() {
    }
    AuthSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // Signin stuff
                _signin_components_signin_form_auth_signin_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninFormComponent"],
                _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninModalComponent"],
                // Signup stuff
                _signup_components_signup_form_auth_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["AuthSignupFormComponent"],
                _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignupModalComponent"],
                // Recover password stuff
                _recover_password_components_recover_password_form_auth_recover_password_form_component__WEBPACK_IMPORTED_MODULE_7__["AuthRecoverPasswordFormComponent"]
            ],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            entryComponents: [
                _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninModalComponent"],
                _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignupModalComponent"]
            ],
            exports: [
                // Signin stuff
                _signin_components_signin_form_auth_signin_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninFormComponent"],
                _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninModalComponent"],
                // Signup stuff
                _signup_components_signup_form_auth_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["AuthSignupFormComponent"],
                _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignupModalComponent"],
                // Recover password stuff
                _recover_password_components_recover_password_form_auth_recover_password_form_component__WEBPACK_IMPORTED_MODULE_7__["AuthRecoverPasswordFormComponent"]
            ]
        })
    ], AuthSharedModule);
    return AuthSharedModule;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: AuthSigninFormComponent, AuthSigninModalComponent, AuthSignupFormComponent, AuthSignupModalComponent, AuthRecoverPasswordFormComponent, AuthSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_components_signin_form_auth_signin_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/components/signin-form/auth-signin-form.component */ "./src/app/auth/signin/components/signin-form/auth-signin-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSigninFormComponent", function() { return _signin_components_signin_form_auth_signin_form_component__WEBPACK_IMPORTED_MODULE_0__["AuthSigninFormComponent"]; });

/* harmony import */ var _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/components/signin-modal/auth-signin-modal.component */ "./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModalComponent", function() { return _signin_components_signin_modal_auth_signin_modal_component__WEBPACK_IMPORTED_MODULE_1__["AuthSigninModalComponent"]; });

/* harmony import */ var _signup_components_signup_form_auth_signup_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/components/signup-form/auth-signup-form.component */ "./src/app/auth/signup/components/signup-form/auth-signup-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSignupFormComponent", function() { return _signup_components_signup_form_auth_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["AuthSignupFormComponent"]; });

/* harmony import */ var _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/components/signup-modal/auth-signup-modal.component */ "./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModalComponent", function() { return _signup_components_signup_modal_auth_signup_modal_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupModalComponent"]; });

/* harmony import */ var _recover_password_components_recover_password_form_auth_recover_password_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recover-password/components/recover-password-form/auth-recover-password-form.component */ "./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthRecoverPasswordFormComponent", function() { return _recover_password_components_recover_password_form_auth_recover_password_form_component__WEBPACK_IMPORTED_MODULE_4__["AuthRecoverPasswordFormComponent"]; });

/* harmony import */ var _auth_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-shared.module */ "./src/app/auth/auth-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthSharedModule", function() { return _auth_shared_module__WEBPACK_IMPORTED_MODULE_5__["AuthSharedModule"]; });









/***/ }),

/***/ "./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"recoverPasswordForm\" (ngSubmit)=\"onSubmit()\" class=\"auth-form\">\n  <div class=\"form-group\">\n    <label [attr.for]=\"'email'\" class=\"auth-form-label\">EMAIL</label>\n    <input type=\"email\" class=\"form-control auth-form-input\" formControlName=\"email\" [id]=\"'email'\" placeholder=\"johndoe@gmail.com\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-block auth-form-submit-btn\" [disabled]=\"!recoverPasswordForm.valid\">RECOVER PASSWORD</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AuthRecoverPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRecoverPasswordFormComponent", function() { return AuthRecoverPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthRecoverPasswordFormComponent = /** @class */ (function () {
    function AuthRecoverPasswordFormComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.recoverPasswordForm = formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    AuthRecoverPasswordFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Recovering password ...');
        this.success.emit(true);
        this.recoverPasswordForm.reset();
        if (this.redirectUrl) {
            setTimeout(function () {
                return _this.router.navigate([_this.redirectUrl]);
            }, 1000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuthRecoverPasswordFormComponent.prototype, "redirectUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthRecoverPasswordFormComponent.prototype, "success", void 0);
    AuthRecoverPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-recover-password-form',
            template: __webpack_require__(/*! ./auth-recover-password-form.component.html */ "./src/app/auth/recover-password/components/recover-password-form/auth-recover-password-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-recover-password-form.styles.scss */ "./src/app/auth/recover-password/components/recover-password-form/styles/auth-recover-password-form.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthRecoverPasswordFormComponent);
    return AuthRecoverPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/recover-password/components/recover-password-form/styles/auth-recover-password-form.styles.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/auth/recover-password/components/recover-password-form/styles/auth-recover-password-form.styles.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-form .auth-form-label {\n  color: #9e9e9e;\n  font-size: 0.8rem;\n  font-weight: 500; }\n\n.auth-form .auth-form-input {\n  color: #1e1e1e;\n  border-color: #9e9e9e;\n  border-width: 2px;\n  border-radius: 4px; }\n\n.auth-form .auth-form-input::-webkit-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:focus {\n    color: #3f3f3f;\n    box-shadow: none; }\n\n.auth-form .auth-form-input:focus::-webkit-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus:-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-checkbox {\n  margin-bottom: 0.5rem; }\n\n.auth-form .auth-form-checkbox .auth-form-label {\n    line-height: 1.5rem; }\n\n.auth-form .auth-form-link {\n  color: #9013fe;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  transition: color .5s; }\n\n.auth-form .auth-form-link:hover:not([disabled]), .auth-form .auth-form-link:active:not([disabled]), .auth-form .auth-form-link.active:not([disabled]), .auth-form .auth-form-link:focus:not([disabled]), .auth-form .auth-form-link.focus:not([disabled]) {\n    color: #7601dd; }\n\n.auth-form .auth-form-link[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\n.auth-form .terms-link {\n  margin-left: 0.2rem;\n  font-size: inherit; }\n\n.auth-form .auth-form-submit-btn {\n  background-color: #FFFFFF;\n  color: #1e1e1e;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #1e1e1e;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  height: 4rem; }\n\n.auth-form .auth-form-submit-btn:hover:not([disabled]) {\n    background-color: rgba(30, 30, 30, 0.7);\n    border-color: rgba(30, 30, 30, 0.7);\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn:active:not([disabled]), .auth-form .auth-form-submit-btn.active:not([disabled]), .auth-form .auth-form-submit-btn:focus:not([disabled]), .auth-form .auth-form-submit-btn.focus:not([disabled]) {\n    background-color: #1e1e1e;\n    border-color: #1e1e1e;\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\napp-auth-recover-password-form {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWNvdmVyLXBhc3N3b3JkL2NvbXBvbmVudHMvcmVjb3Zlci1wYXNzd29yZC1mb3JtL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcY29tbW9uXFxhdXRoXFxhdXRoLWZvcm1zLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9hdXRoL3JlY292ZXItcGFzc3dvcmQvY29tcG9uZW50cy9yZWNvdmVyLXBhc3N3b3JkLWZvcm0vc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVjb3Zlci1wYXNzd29yZC9jb21wb25lbnRzL3JlY292ZXItcGFzc3dvcmQtZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWNvdmVyLXBhc3N3b3JkL2NvbXBvbmVudHMvcmVjb3Zlci1wYXNzd29yZC1mb3JtL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXGF1dGhcXHJlY292ZXItcGFzc3dvcmRcXGNvbXBvbmVudHNcXHJlY292ZXItcGFzc3dvcmQtZm9ybVxcc3R5bGVzXFxhdXRoLXJlY292ZXItcGFzc3dvcmQtZm9ybS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGVDQVU7RURDVixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQ2pCOztBQUxIO0VBUUksZUNUVztFRFVYLHNCQ1BVO0VEUVYsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQWdCbkI7O0FBM0JIO0lBY00sZUNaUTtJRGFSLGFBQVk7SUFDWixpQkFBZ0IsRUFDakI7O0FBakJMO0lBY00sZUNaUTtJRGFSLGFBQVk7SUFDWixpQkFBZ0IsRUFDakI7O0FBakJMO0lBY00sZUNaUTtJRGFSLGFBQVk7SUFDWixpQkFBZ0IsRUFDakI7O0FBakJMO0lBY00sZUNaUTtJRGFSLGFBQVk7SUFDWixpQkFBZ0IsRUFDakI7O0FBakJMO0lBb0JNLGVDcEJZO0lEcUJaLGlCQUFnQixFQUtqQjs7QUExQkw7TUF3QlEsYUFBWSxFQUNiOztBQXpCUDtNQXdCUSxhQUFZLEVBQ2I7O0FBekJQO01Bd0JRLGFBQVksRUFDYjs7QUF6QlA7TUF3QlEsYUFBWSxFQUNiOztBQXpCUDtFQThCSSxzQkFBcUIsRUFLdEI7O0FBbkNIO0lBaUNNLG9CQUFtQixFQUNwQjs7QUFsQ0w7RUVERSxlRFFjO0VDUGQsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsdUJBQXNCO0VBQ3RCLHNCQUFxQixFRm9DcEI7O0FBdkNIO0lFV00sZUFic0QsRUFjdkQ7O0FGWkw7SUVnQkksb0JBQW1CO0lBQ25CLFlBQVcsRUFDWjs7QUZsQkg7RUEwQ0ksb0JBQW1CO0VBQ25CLG1CQUFrQixFQUNuQjs7QUE1Q0g7RUVzQkUsMEJEckJhO0VDc0JiLGVEeEJhO0VDeUJiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsc0JEM0JhO0VDNEJiLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsd0JBQXVCO0VBQ3ZCLDhEQUE2RDtFRmdCM0QsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBbkRIO0lFb0NNLHdDRHJDUztJQ3NDVCxvQ0R0Q1M7SUN1Q1QsZURyQ1M7SUNzQ1Qsc0JBQXFCLEVBQ3RCOztBRnhDTDtJRWdETSwwQkRqRFM7SUNrRFQsc0JEbERTO0lDbURULGVEakRTO0lDa0RULHNCQUFxQixFQUN0Qjs7QUZwREw7SUV3REksb0JBQW1CO0lBQ25CLFlBQVcsRUFDWjs7QUMxREg7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlY292ZXItcGFzc3dvcmQvY29tcG9uZW50cy9yZWNvdmVyLXBhc3N3b3JkLWZvcm0vc3R5bGVzL2F1dGgtcmVjb3Zlci1wYXNzd29yZC1mb3JtLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vX3NoYXJlZCc7XG5cbi5hdXRoLWZvcm0ge1xuICAuYXV0aC1mb3JtLWxhYmVsIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5hdXRoLWZvcm0taW5wdXQge1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JleTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJGdyZXk7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRkYXJrZ3JleTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfS8vIC5hdXRoLWZvcm0taW5wdXRcblxuICAuYXV0aC1mb3JtLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAuYXV0aC1mb3JtLWxhYmVsIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuICB9XG5cbiAgLmF1dGgtZm9ybS1saW5rIHtcbiAgICBAaW5jbHVkZSBsaW5rLWJ1dHRvbigkcHVycGxlKTtcbiAgfVxuXG4gIC50ZXJtcy1saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxuXG4gIC5hdXRoLWZvcm0tc3VibWl0LWJ0biB7XG4gICAgQGluY2x1ZGUgb3V0bGluZS1idXR0b24oJGJsYWNrLCAkd2hpdGUsICRibGFjayk7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMxZTFlMWU7XG4kZGFya2dyZXk6ICMzZjNmM2Y7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzllOWU5ZTtcbiRncmV5LTI6ICNkN2Q3ZDc7XG4kZ3JleS0zOiAjZTVlNWU1O1xuXG4kYXF1YW1hcmluYTogIzUwZTNjMjtcbiRwdXJwbGU6ICM5MDEzZmU7XG4kY2hlcnJ5OiAjZjgyYzUxO1xuJHJlZDogI2Q2MTgzYTtcbiRnb2xkOiAjZmNiMzAwO1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG5cbi8vIFNpemVzXG4kbmF2YmFyLWhlaWdodDogJG5hdi1saW5rLWhlaWdodCArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHByZWxvYWQtaW1hZ2UtYmc6IHJnYmEoZGFya2VuKCR3aGl0ZSwgMTApLCAuMjUpO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHNwaW5uZXItc2l6ZTogMjhweDtcbiRzcGlubmVyLWNvbG9yOiAkZ3JleTtcbiIsIkBtaXhpbiBsaW5rLWJ1dHRvbigkY29sb3IsICRob3Zlci1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC41cztcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIG91dGxpbmUtYnV0dG9uKCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIsICRob3Zlci1jb2xvcjogJGJhY2tncm91bmQsICRob3Zlci1iYWNrZ3JvdW5kOiAkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNXMsIGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkaG92ZXItYmFja2dyb3VuZCwgLjcpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRib3JkZXIsIC43KTtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuQG1peGluIGZpbGwtYnV0dG9uKCRjb2xvciwgJGJhY2tncm91bmQsICRob3Zlci1jb2xvcjogJGNvbG9yLCAkaG92ZXItYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSkpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24vYXV0aC9hdXRoLWZvcm1zLnN0eWxlcyc7XG5cbmFwcC1hdXRoLXJlY292ZXItcGFzc3dvcmQtZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signin/components/signin-form/auth-signin-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-form/auth-signin-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\" class=\"auth-form\">\n  <div class=\"form-group\">\n    <label [attr.for]=\"'email'\" class=\"auth-form-label\">EMAIL</label>\n    <input type=\"email\" class=\"form-control auth-form-input\" formControlName=\"email\" [id]=\"'email'\" placeholder=\"johndoe@gmail.com\">\n  </div>\n  <div class=\"form-group\">\n    <label [attr.for]=\"'password'\" class=\"auth-form-label\">PASSWORD</label>\n    <input type=\"password\" class=\"form-control auth-form-input\" formControlName=\"password\" [id]=\"'password'\" placeholder=\"&#10033; &#10033; &#10033; &#10033; &#10033;\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-block auth-form-submit-btn\" [disabled]=\"!signinForm.valid\">LOG IN</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/signin/components/signin-form/auth-signin-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-form/auth-signin-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthSigninFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninFormComponent", function() { return AuthSigninFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/auth/services/auth.service.ts");





var AuthSigninFormComponent = /** @class */ (function () {
    function AuthSigninFormComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signinForm = formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    AuthSigninFormComponent.prototype.onSubmit = function () {
        this.doSignin(this.signinForm.value.email, this.signinForm.value.password, true);
    };
    AuthSigninFormComponent.prototype.doSignin = function (email, password, rememberMe) {
        var _this = this;
        this.authService.signin(email, password, rememberMe)
            .subscribe(function (res) {
            _this.success.emit(true);
            _this.signinForm.reset();
            if (_this.redirectUrl) {
                setTimeout(function () {
                    return _this.router.navigate([_this.redirectUrl]);
                }, 500);
            }
        }, function (err) {
            _this.success.emit(false);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuthSigninFormComponent.prototype, "redirectUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthSigninFormComponent.prototype, "success", void 0);
    AuthSigninFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signin-form',
            template: __webpack_require__(/*! ./auth-signin-form.component.html */ "./src/app/auth/signin/components/signin-form/auth-signin-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-signin-form.styles.scss */ "./src/app/auth/signin/components/signin-form/styles/auth-signin-form.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthSigninFormComponent);
    return AuthSigninFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/components/signin-form/styles/auth-signin-form.styles.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-form/styles/auth-signin-form.styles.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-form .auth-form-label {\n  color: #9e9e9e;\n  font-size: 0.8rem;\n  font-weight: 500; }\n\n.auth-form .auth-form-input {\n  color: #1e1e1e;\n  border-color: #9e9e9e;\n  border-width: 2px;\n  border-radius: 4px; }\n\n.auth-form .auth-form-input::-webkit-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:focus {\n    color: #3f3f3f;\n    box-shadow: none; }\n\n.auth-form .auth-form-input:focus::-webkit-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus:-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-checkbox {\n  margin-bottom: 0.5rem; }\n\n.auth-form .auth-form-checkbox .auth-form-label {\n    line-height: 1.5rem; }\n\n.auth-form .auth-form-link {\n  color: #9013fe;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  transition: color .5s; }\n\n.auth-form .auth-form-link:hover:not([disabled]), .auth-form .auth-form-link:active:not([disabled]), .auth-form .auth-form-link.active:not([disabled]), .auth-form .auth-form-link:focus:not([disabled]), .auth-form .auth-form-link.focus:not([disabled]) {\n    color: #7601dd; }\n\n.auth-form .auth-form-link[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\n.auth-form .terms-link {\n  margin-left: 0.2rem;\n  font-size: inherit; }\n\n.auth-form .auth-form-submit-btn {\n  background-color: #FFFFFF;\n  color: #1e1e1e;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #1e1e1e;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  height: 4rem; }\n\n.auth-form .auth-form-submit-btn:hover:not([disabled]) {\n    background-color: rgba(30, 30, 30, 0.7);\n    border-color: rgba(30, 30, 30, 0.7);\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn:active:not([disabled]), .auth-form .auth-form-submit-btn.active:not([disabled]), .auth-form .auth-form-submit-btn:focus:not([disabled]), .auth-form .auth-form-submit-btn.focus:not([disabled]) {\n    background-color: #1e1e1e;\n    border-color: #1e1e1e;\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\napp-auth-signin-form {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXGNvbW1vblxcYXV0aFxcYXV0aC1mb3Jtcy5zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxhdXRoXFxzaWduaW5cXGNvbXBvbmVudHNcXHNpZ25pbi1mb3JtXFxzdHlsZXNcXGF1dGgtc2lnbmluLWZvcm0uc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxlQ0FVO0VEQ1Ysa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFMSDtFQVFJLGVDVFc7RURVWCxzQkNQVTtFRFFWLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFnQm5COztBQTNCSDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQW9CTSxlQ3BCWTtJRHFCWixpQkFBZ0IsRUFLakI7O0FBMUJMO01Bd0JRLGFBQVksRUFDYjs7QUF6QlA7TUF3QlEsYUFBWSxFQUNiOztBQXpCUDtNQXdCUSxhQUFZLEVBQ2I7O0FBekJQO01Bd0JRLGFBQVksRUFDYjs7QUF6QlA7RUE4Qkksc0JBQXFCLEVBS3RCOztBQW5DSDtJQWlDTSxvQkFBbUIsRUFDcEI7O0FBbENMO0VFREUsZURRYztFQ1BkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixzQkFBcUIsRUZvQ3BCOztBQXZDSDtJRVdNLGVBYnNELEVBY3ZEOztBRlpMO0lFZ0JJLG9CQUFtQjtJQUNuQixZQUFXLEVBQ1o7O0FGbEJIO0VBMENJLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDbkI7O0FBNUNIO0VFc0JFLDBCRHJCYTtFQ3NCYixlRHhCYTtFQ3lCYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLHNCRDNCYTtFQzRCYixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2Qiw4REFBNkQ7RUZnQjNELGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQW5ESDtJRW9DTSx3Q0RyQ1M7SUNzQ1Qsb0NEdENTO0lDdUNULGVEckNTO0lDc0NULHNCQUFxQixFQUN0Qjs7QUZ4Q0w7SUVnRE0sMEJEakRTO0lDa0RULHNCRGxEUztJQ21EVCxlRGpEUztJQ2tEVCxzQkFBcUIsRUFDdEI7O0FGcERMO0lFd0RJLG9CQUFtQjtJQUNuQixZQUFXLEVBQ1o7O0FDMURIO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tZm9ybS9zdHlsZXMvYXV0aC1zaWduaW4tZm9ybS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL19zaGFyZWQnO1xuXG4uYXV0aC1mb3JtIHtcbiAgLmF1dGgtZm9ybS1sYWJlbCB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYXV0aC1mb3JtLWlucHV0IHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH0vLyAuYXV0aC1mb3JtLWlucHV0XG5cbiAgLmF1dGgtZm9ybS1jaGVja2JveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgLmF1dGgtZm9ybS1sYWJlbCB7XG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5hdXRoLWZvcm0tbGluayB7XG4gICAgQGluY2x1ZGUgbGluay1idXR0b24oJHB1cnBsZSk7XG4gIH1cblxuICAudGVybXMtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cblxuICAuYXV0aC1mb3JtLXN1Ym1pdC1idG4ge1xuICAgIEBpbmNsdWRlIG91dGxpbmUtYnV0dG9uKCRibGFjaywgJHdoaXRlLCAkYmxhY2spO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMWUxZTFlO1xuJGRhcmtncmV5OiAjM2YzZjNmO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM5ZTllOWU7XG4kZ3JleS0yOiAjZDdkN2Q3O1xuJGdyZXktMzogI2U1ZTVlNTtcblxuJGFxdWFtYXJpbmE6ICM1MGUzYzI7XG4kcHVycGxlOiAjOTAxM2ZlO1xuJGNoZXJyeTogI2Y4MmM1MTtcbiRyZWQ6ICNkNjE4M2E7XG4kZ29sZDogI2ZjYjMwMDtcbiRmYWNlYm9vay1ibHVlOiAjM2I1OTk4O1xuXG4vLyBTaXplc1xuJG5hdmJhci1oZWlnaHQ6ICRuYXYtbGluay1oZWlnaHQgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRwcmVsb2FkLWltYWdlLWJnOiByZ2JhKGRhcmtlbigkd2hpdGUsIDEwKSwgLjI1KTtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRzcGlubmVyLXNpemU6IDI4cHg7XG4kc3Bpbm5lci1jb2xvcjogJGdyZXk7XG4iLCJAbWl4aW4gbGluay1idXR0b24oJGNvbG9yLCAkaG92ZXItY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBvdXRsaW5lLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkaG92ZXItY29sb3I6ICRiYWNrZ3JvdW5kLCAkaG92ZXItYmFja2dyb3VuZDogJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkYm9yZGVyLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBmaWxsLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkaG92ZXItY29sb3I6ICRjb2xvciwgJGhvdmVyLWJhY2tncm91bmQ6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uL2F1dGgvYXV0aC1mb3Jtcy5zdHlsZXMnO1xuXG5hcHAtYXV0aC1zaWduaW4tZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-modal\">\n  <div class=\"auth-form-wrapper\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title auth-title\">Welcome back!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <app-auth-signin-form (success)=\"signinSuccess($event)\"></app-auth-signin-form>\n      <div class=\"auth-alt-options\">\n        <a class=\"btn btn-link secondary-call-to-action-btn\" (click)=\"handleSignupIntention()\">\n          Don't have an Account yet?\n        </a>\n      </div>\n      <div class=\"auth-form-divider\">\n        <span class=\"divider-text\">OR</span>\n      </div>\n      <button class=\"btn btn-block social-alternative-btn\" (click)=\"handleSocialSigninIntention()\">\n        SIGN IN WITH FACEBOOK\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: AuthSigninModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninModalComponent", function() { return AuthSigninModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var AuthSigninModalComponent = /** @class */ (function () {
    function AuthSigninModalComponent(modalRef) {
        this.modalRef = modalRef;
    }
    AuthSigninModalComponent.prototype.handleSignupIntention = function () {
        console.log('Default behavior - AuthSigninModalComponent - handleSignupIntention()');
    };
    AuthSigninModalComponent.prototype.handleSocialSigninIntention = function () {
        console.log('Default behavior - AuthSigninModalComponent - handleSocialSigninIntention()');
    };
    AuthSigninModalComponent.prototype.signinSuccess = function (success) {
        if (success) {
            this.modalRef.hide();
        }
    };
    AuthSigninModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signin-modal',
            template: __webpack_require__(/*! ./auth-signin-modal.component.html */ "./src/app/auth/signin/components/signin-modal/auth-signin-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-signin-modal.styles.scss */ "./src/app/auth/signin/components/signin-modal/styles/auth-signin-modal.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], AuthSigninModalComponent);
    return AuthSigninModalComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/components/signin-modal/styles/auth-signin-modal.styles.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/auth/signin/components/signin-modal/styles/auth-signin-modal.styles.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-page {\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/imgs/home/cta-bg.png\"); }\n  @media (min-width: 1200px) {\n    .auth-page {\n      background-position: left 58.33vw top 0px; } }\n  @media (min-width: 992px) and (max-width: 1199.98px) {\n    .auth-page {\n      background-position: left 66.66vw top 0px; } }\n  @media (max-width: 991.98px) {\n    .auth-page {\n      background: none; } }\n  .auth-modal .auth-form-wrapper .auth-title {\n  padding: 0;\n  margin: 0;\n  font-size: 1.4rem; }\n  .auth-modal .modal-header {\n  align-items: center; }\n  .auth-modal .modal-header .close {\n    font-size: 1.8rem; }\n  .auth-form-wrapper .auth-title {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n  color: #1e1e1e;\n  font-size: 1.8rem;\n  font-weight: 900;\n  letter-spacing: 0.25rem; }\n  .auth-form-wrapper .auth-alt-options {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n    color: #9013fe;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    transition: color .5s; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:hover:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:focus:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.focus:not([disabled]) {\n      color: #7601dd; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn[disabled] {\n      cursor: not-allowed;\n      opacity: .5; }\n  @media (max-width: 575.98px) {\n    .auth-form-wrapper .auth-alt-options {\n      flex-wrap: wrap; }\n      .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n        width: 100%;\n        margin-bottom: 1rem; } }\n  .auth-form-wrapper .auth-form-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n  .auth-form-wrapper .auth-form-divider::before, .auth-form-wrapper .auth-form-divider::after {\n    content: '';\n    background: #9e9e9e;\n    height: 2px;\n    flex: 1 1 auto; }\n  .auth-form-wrapper .auth-form-divider .divider-text {\n    color: #1e1e1e;\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0.2rem;\n    margin: 0px;\n    padding: 0px 1rem; }\n  .auth-form-wrapper .social-alternative-btn {\n  background-color: #3b5998;\n  color: #FFFFFF;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #3b5998;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  height: 4rem; }\n  .auth-form-wrapper .social-alternative-btn:hover:not([disabled]) {\n    background-color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(59, 89, 152, 0.7);\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn:active:not([disabled]), .auth-form-wrapper .social-alternative-btn.active:not([disabled]), .auth-form-wrapper .social-alternative-btn:focus:not([disabled]), .auth-form-wrapper .social-alternative-btn.focus:not([disabled]) {\n    background-color: #FFFFFF;\n    border-color: #3b5998;\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n  app-auth-signin-modal {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tbW9kYWwvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxjb21tb25cXGF1dGhcXGF1dGgtcGFnZXMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbmluL2NvbXBvbmVudHMvc2lnbmluLW1vZGFsL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbmluL2NvbXBvbmVudHMvc2lnbmluLW1vZGFsL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ25pbi9jb21wb25lbnRzL3NpZ25pbi1tb2RhbC9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tbW9kYWwvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcYXV0aFxcc2lnbmluXFxjb21wb25lbnRzXFxzaWduaW4tbW9kYWxcXHN0eWxlc1xcYXV0aC1zaWduaW4tbW9kYWwuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQ0FBNkM7RUFDN0MscUJBQW9CO0VBRXBCLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsc0RBQXFELEVBZXREO0VDcUNHO0lEMURKO01BVUksMENBQXlDLEVBVzVDLEVBQUE7RUN1Rkc7SUQ1R0o7TUFlSSwwQ0FBeUMsRUFNNUMsRUFBQTtFQ2tERztJRHZFSjtNQW1CSSxpQkFBZ0IsRUFFbkIsRUFBQTtFQUVEO0VBR00sV0FBVTtFQUNWLFVBQVM7RUFDVCxrQkFBaUIsRUFDbEI7RUFOTDtFQVVJLG9CQUFtQixFQUtwQjtFQWZIO0lBYU0sa0JBQWlCLEVBQ2xCO0VBSUw7RUFFSSxrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGVFOUNXO0VGK0NYLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQ3hCO0VBUkg7RUFXSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLDRCQUEyQixFQWM1QjtFQTNCSDtJRzFDRSxlRFFjO0lDUGQsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLHNCQUFxQixFSHVEbEI7RUFqQkw7TUc5Qk0sZUFic0QsRUFjdkQ7RUg2Qkw7TUd6Qkksb0JBQW1CO01BQ25CLFlBQVcsRUFDWjtFRnFEQztJRDlCSjtNQW9CTSxnQkFBZSxFQU9sQjtNQTNCSDtRQXVCUSxZQUFXO1FBQ1gsb0JBQW1CLEVBQ3BCLEVBQUE7RUF6QlA7RUE4QkksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQW1CcEI7RUFyREg7SUF1Q00sWUFBVztJQUNYLG9CRS9FUTtJRmdGUixZQUFXO0lBQ1gsZUFBYyxFQUNmO0VBM0NMO0lBOENNLGVFeEZTO0lGeUZULGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxrQkFBaUIsRUFDbEI7RUFwREw7RUduQkUsMEJEWHFCO0VDWXJCLGVEdEJhO0VDdUJiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsc0JEZnFCO0VDZ0JyQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2Qiw4REFBNkQ7RUhrRTNELGFBQVksRUFDYjtFQTFESDtJR0xNLDJDRG5DUztJQ29DVCxxQ0QxQmlCO0lDMkJqQixlRDNCaUI7SUM0QmpCLHNCQUFxQixFQUN0QjtFSENMO0lHT00sMEJEL0NTO0lDZ0RULHNCRHRDaUI7SUN1Q2pCLGVEdkNpQjtJQ3dDakIsc0JBQXFCLEVBQ3RCO0VIWEw7SUdlSSxvQkFBbUI7SUFDbkIsWUFBVyxFQUNaO0VDMURIO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduaW4vY29tcG9uZW50cy9zaWduaW4tbW9kYWwvc3R5bGVzL2F1dGgtc2lnbmluLW1vZGFsLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vX3NoYXJlZCc7XG5cbi5hdXRoLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3sgJG5hdmJhci1oZWlnaHQgfSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICAvLyBIYWxmIHNjcmVlbiBiYWNrZ3JvdW5kIGltYWdlXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2hvbWUvY3RhLWJnLnBuZycpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtb25seSh4bCkge1xuICAgIC8vIGNvbC14bC02ID0+IGxlZnQgNTB2dyAoKyBjb2wtMSB0byBnaXZlIHNvbWUgYmxhbmsgc3BhY2UpID0+ICg3KjEwMCkvMTIgPSA1OC4zM3Z3XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA1OC4zM3Z3IHRvcCAwcHg7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcbiAgICAvLyBjb2wtbGctNyA9PiBsZWZ0IDU4LjMzdncgKCsgY29sLTEgdG8gZ2l2ZSBzb21lIGJsYW5rIHNwYWNlKSA9PiAoOCoxMDApLzEyID0gNjYuNjZ2d1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgNjYuNjZ2dyB0b3AgMHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufS8vIC5hdXRoLXBhZ2VcblxuLmF1dGgtbW9kYWwge1xuICAuYXV0aC1mb3JtLXdyYXBwZXIge1xuICAgIC5hdXRoLXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cbiAgfVxufS8vIC5hdXRoLW1vZGFsXG5cbi5hdXRoLWZvcm0td3JhcHBlciB7XG4gIC5hdXRoLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWFsdC1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAuc2Vjb25kYXJ5LWNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gICAgICBAaW5jbHVkZSBsaW5rLWJ1dHRvbigkcHVycGxlKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgLnNlY29uZGFyeS1jYWxsLXRvLWFjdGlvbi1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXV0aC1mb3JtLWRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAvLyBMaW5lIGRlY29yYXRpb25cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmRpdmlkZXItdGV4dCB7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbC1hbHRlcm5hdGl2ZS1idG4ge1xuICAgIEBpbmNsdWRlIG91dGxpbmUtYnV0dG9uKCR3aGl0ZSwgJGZhY2Vib29rLWJsdWUsICRmYWNlYm9vay1ibHVlKTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbn0vLyAuYXV0aC1mb3JtLXdyYXBwZXJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDJweCwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2xvcnNcbiRibGFjazogIzFlMWUxZTtcbiRkYXJrZ3JleTogIzNmM2YzZjtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjOWU5ZTllO1xuJGdyZXktMjogI2Q3ZDdkNztcbiRncmV5LTM6ICNlNWU1ZTU7XG5cbiRhcXVhbWFyaW5hOiAjNTBlM2MyO1xuJHB1cnBsZTogIzkwMTNmZTtcbiRjaGVycnk6ICNmODJjNTE7XG4kcmVkOiAjZDYxODNhO1xuJGdvbGQ6ICNmY2IzMDA7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcblxuLy8gU2l6ZXNcbiRuYXZiYXItaGVpZ2h0OiAkbmF2LWxpbmstaGVpZ2h0ICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDI7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kcHJlbG9hZC1pbWFnZS1iZzogcmdiYShkYXJrZW4oJHdoaXRlLCAxMCksIC4yNSk7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kc3Bpbm5lci1zaXplOiAyOHB4O1xuJHNwaW5uZXItY29sb3I6ICRncmV5O1xuIiwiQG1peGluIGxpbmstYnV0dG9uKCRjb2xvciwgJGhvdmVyLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gb3V0bGluZS1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlciwgJGhvdmVyLWNvbG9yOiAkYmFja2dyb3VuZCwgJGhvdmVyLWJhY2tncm91bmQ6ICRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoJGJvcmRlciwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gZmlsbC1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGhvdmVyLWNvbG9yOiAkY29sb3IsICRob3Zlci1iYWNrZ3JvdW5kOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkaG92ZXItYmFja2dyb3VuZCwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi9hdXRoL2F1dGgtcGFnZXMuc3R5bGVzJztcblxuYXBwLWF1dGgtc2lnbmluLW1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/signup/components/signup-form/auth-signup-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-form/auth-signup-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" class=\"auth-form\">\n  <div class=\"form-group\">\n    <label [attr.for]=\"'name'\" class=\"auth-form-label\">NAME</label>\n    <input type=\"text\" class=\"form-control auth-form-input\" formControlName=\"name\" [id]=\"'name'\" placeholder=\"Josh Bates\">\n  </div>\n  <div class=\"form-group\">\n    <label [attr.for]=\"'email'\" class=\"auth-form-label\">EMAIL</label>\n    <input type=\"email\" class=\"form-control auth-form-input\" formControlName=\"email\" [id]=\"'email'\" placeholder=\"johndoe@gmail.com\">\n  </div>\n  <div class=\"form-group\">\n    <label [attr.for]=\"'password'\" class=\"auth-form-label\">PASSWORD</label>\n    <input type=\"password\" class=\"form-control auth-form-input\" formControlName=\"password\" [id]=\"'password'\" placeholder=\"&#10033; &#10033; &#10033; &#10033; &#10033;\">\n  </div>\n  <div class=\"custom-control custom-checkbox auth-form-checkbox\">\n    <input type=\"checkbox\" formControlName=\"newsletter\" class=\"custom-control-input\" [id]=\"'newsletter'\">\n    <label class=\"custom-control-label auth-form-label\" [attr.for]=\"'newsletter'\">I want to receive news about this awesome template!</label>\n  </div>\n  <div class=\"custom-control custom-checkbox auth-form-checkbox\">\n    <input type=\"checkbox\" formControlName=\"terms\" class=\"custom-control-input\" [id]=\"'terms'\">\n    <label class=\"custom-control-label auth-form-label\" [attr.for]=\"'terms'\">\n      I agree to the\n      <a class=\"auth-form-link terms-link\" target=\"_blank\" [routerLink]=\"['/terms']\">\n        Terms & Conditions\n      </a>\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-block auth-form-submit-btn\" [disabled]=\"!signupForm.valid\">CREATE ACCOUNT</button>\n</form>\n"

/***/ }),

/***/ "./src/app/auth/signup/components/signup-form/auth-signup-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-form/auth-signup-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthSignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupFormComponent", function() { return AuthSignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/auth/services/auth.service.ts");





var AuthSignupFormComponent = /** @class */ (function () {
    function AuthSignupFormComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signupForm = formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            newsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'))
        });
    }
    AuthSignupFormComponent.prototype.onSubmit = function () {
        this.doSignup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.newsletter);
    };
    AuthSignupFormComponent.prototype.doSignup = function (name, email, password, newsletter) {
        var _this = this;
        this.authService.signup(name, email, password, newsletter)
            .subscribe(function (res) {
            _this.success.emit(true);
            _this.signupForm.reset();
            if (_this.redirectUrl) {
                setTimeout(function () {
                    return _this.router.navigate([_this.redirectUrl]);
                }, 500);
            }
        }, function (err) {
            console.log('There was an ERROR while creating the account');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuthSignupFormComponent.prototype, "redirectUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthSignupFormComponent.prototype, "success", void 0);
    AuthSignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signup-form',
            template: __webpack_require__(/*! ./auth-signup-form.component.html */ "./src/app/auth/signup/components/signup-form/auth-signup-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-signup-form.styles.scss */ "./src/app/auth/signup/components/signup-form/styles/auth-signup-form.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthSignupFormComponent);
    return AuthSignupFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/components/signup-form/styles/auth-signup-form.styles.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-form/styles/auth-signup-form.styles.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-form .auth-form-label {\n  color: #9e9e9e;\n  font-size: 0.8rem;\n  font-weight: 500; }\n\n.auth-form .auth-form-input {\n  color: #1e1e1e;\n  border-color: #9e9e9e;\n  border-width: 2px;\n  border-radius: 4px; }\n\n.auth-form .auth-form-input::-webkit-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::-ms-input-placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input::placeholder {\n    color: #9e9e9e;\n    opacity: 0.8;\n    font-weight: 500; }\n\n.auth-form .auth-form-input:focus {\n    color: #3f3f3f;\n    box-shadow: none; }\n\n.auth-form .auth-form-input:focus::-webkit-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus:-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::-ms-input-placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-input:focus::placeholder {\n      opacity: 0.6; }\n\n.auth-form .auth-form-checkbox {\n  margin-bottom: 0.5rem; }\n\n.auth-form .auth-form-checkbox .auth-form-label {\n    line-height: 1.5rem; }\n\n.auth-form .auth-form-link {\n  color: #9013fe;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  transition: color .5s; }\n\n.auth-form .auth-form-link:hover:not([disabled]), .auth-form .auth-form-link:active:not([disabled]), .auth-form .auth-form-link.active:not([disabled]), .auth-form .auth-form-link:focus:not([disabled]), .auth-form .auth-form-link.focus:not([disabled]) {\n    color: #7601dd; }\n\n.auth-form .auth-form-link[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\n.auth-form .terms-link {\n  margin-left: 0.2rem;\n  font-size: inherit; }\n\n.auth-form .auth-form-submit-btn {\n  background-color: #FFFFFF;\n  color: #1e1e1e;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #1e1e1e;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  height: 4rem; }\n\n.auth-form .auth-form-submit-btn:hover:not([disabled]) {\n    background-color: rgba(30, 30, 30, 0.7);\n    border-color: rgba(30, 30, 30, 0.7);\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn:active:not([disabled]), .auth-form .auth-form-submit-btn.active:not([disabled]), .auth-form .auth-form-submit-btn:focus:not([disabled]), .auth-form .auth-form-submit-btn.focus:not([disabled]) {\n    background-color: #1e1e1e;\n    border-color: #1e1e1e;\n    color: #FFFFFF;\n    text-decoration: none; }\n\n.auth-form .auth-form-submit-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n\napp-auth-signup-form {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXGNvbW1vblxcYXV0aFxcYXV0aC1mb3Jtcy5zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxhdXRoXFxzaWdudXBcXGNvbXBvbmVudHNcXHNpZ251cC1mb3JtXFxzdHlsZXNcXGF1dGgtc2lnbnVwLWZvcm0uc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxlQ0FVO0VEQ1Ysa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFMSDtFQVFJLGVDVFc7RURVWCxzQkNQVTtFRFFWLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFnQm5COztBQTNCSDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQWNNLGVDWlE7SURhUixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCOztBQWpCTDtJQW9CTSxlQ3BCWTtJRHFCWixpQkFBZ0IsRUFLakI7O0FBMUJMO01Bd0JRLGFBQVksRUFDYjs7QUF6QlA7TUF3QlEsYUFBWSxFQUNiOztBQXpCUDtNQXdCUSxhQUFZLEVBQ2I7O0FBekJQO01Bd0JRLGFBQVksRUFDYjs7QUF6QlA7RUE4Qkksc0JBQXFCLEVBS3RCOztBQW5DSDtJQWlDTSxvQkFBbUIsRUFDcEI7O0FBbENMO0VFREUsZURRYztFQ1BkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixzQkFBcUIsRUZvQ3BCOztBQXZDSDtJRVdNLGVBYnNELEVBY3ZEOztBRlpMO0lFZ0JJLG9CQUFtQjtJQUNuQixZQUFXLEVBQ1o7O0FGbEJIO0VBMENJLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDbkI7O0FBNUNIO0VFc0JFLDBCRHJCYTtFQ3NCYixlRHhCYTtFQ3lCYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLHNCRDNCYTtFQzRCYixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2Qiw4REFBNkQ7RUZnQjNELGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQW5ESDtJRW9DTSx3Q0RyQ1M7SUNzQ1Qsb0NEdENTO0lDdUNULGVEckNTO0lDc0NULHNCQUFxQixFQUN0Qjs7QUZ4Q0w7SUVnRE0sMEJEakRTO0lDa0RULHNCRGxEUztJQ21EVCxlRGpEUztJQ2tEVCxzQkFBcUIsRUFDdEI7O0FGcERMO0lFd0RJLG9CQUFtQjtJQUNuQixZQUFXLEVBQ1o7O0FDMURIO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zdHlsZXMvYXV0aC1zaWdudXAtZm9ybS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL19zaGFyZWQnO1xuXG4uYXV0aC1mb3JtIHtcbiAgLmF1dGgtZm9ybS1sYWJlbCB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYXV0aC1mb3JtLWlucHV0IHtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkZGFya2dyZXk7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH0vLyAuYXV0aC1mb3JtLWlucHV0XG5cbiAgLmF1dGgtZm9ybS1jaGVja2JveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgLmF1dGgtZm9ybS1sYWJlbCB7XG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5hdXRoLWZvcm0tbGluayB7XG4gICAgQGluY2x1ZGUgbGluay1idXR0b24oJHB1cnBsZSk7XG4gIH1cblxuICAudGVybXMtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cblxuICAuYXV0aC1mb3JtLXN1Ym1pdC1idG4ge1xuICAgIEBpbmNsdWRlIG91dGxpbmUtYnV0dG9uKCRibGFjaywgJHdoaXRlLCAkYmxhY2spO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbn1cbiIsIi8vIENvbG9yc1xuJGJsYWNrOiAjMWUxZTFlO1xuJGRhcmtncmV5OiAjM2YzZjNmO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGdyZXk6ICM5ZTllOWU7XG4kZ3JleS0yOiAjZDdkN2Q3O1xuJGdyZXktMzogI2U1ZTVlNTtcblxuJGFxdWFtYXJpbmE6ICM1MGUzYzI7XG4kcHVycGxlOiAjOTAxM2ZlO1xuJGNoZXJyeTogI2Y4MmM1MTtcbiRyZWQ6ICNkNjE4M2E7XG4kZ29sZDogI2ZjYjMwMDtcbiRmYWNlYm9vay1ibHVlOiAjM2I1OTk4O1xuXG4vLyBTaXplc1xuJG5hdmJhci1oZWlnaHQ6ICRuYXYtbGluay1oZWlnaHQgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRwcmVsb2FkLWltYWdlLWJnOiByZ2JhKGRhcmtlbigkd2hpdGUsIDEwKSwgLjI1KTtcblxuLy8gUHJlbG9hZCBJbWFnZSAvIEJhY2tncm91bmQgSW1hZ2VcbiRzcGlubmVyLXNpemU6IDI4cHg7XG4kc3Bpbm5lci1jb2xvcjogJGdyZXk7XG4iLCJAbWl4aW4gbGluay1idXR0b24oJGNvbG9yLCAkaG92ZXItY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBvdXRsaW5lLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkaG92ZXItY29sb3I6ICRiYWNrZ3JvdW5kLCAkaG92ZXItYmFja2dyb3VuZDogJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkYm9yZGVyLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBmaWxsLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkaG92ZXItY29sb3I6ICRjb2xvciwgJGhvdmVyLWJhY2tncm91bmQ6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvY29tbW9uL2F1dGgvYXV0aC1mb3Jtcy5zdHlsZXMnO1xuXG5hcHAtYXV0aC1zaWdudXAtZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-modal\">\n  <div class=\"auth-form-wrapper\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title auth-title\">Create a new Account</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <app-auth-signup-form (success)=\"signupSuccess($event)\"></app-auth-signup-form>\n      <div class=\"auth-alt-options\">\n        <a class=\"btn btn-link secondary-call-to-action-btn\" (click)=\"handleSigninIntention()\">\n          Already have an account?\n        </a>\n      </div>\n      <div class=\"auth-form-divider\">\n        <span class=\"divider-text\">OR</span>\n      </div>\n      <button class=\"btn btn-block social-alternative-btn\" (click)=\"handleSocialSignupIntention()\">\n        SIGN UP WITH FACEBOOK\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: AuthSignupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModalComponent", function() { return AuthSignupModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var AuthSignupModalComponent = /** @class */ (function () {
    function AuthSignupModalComponent(modalRef) {
        this.modalRef = modalRef;
    }
    AuthSignupModalComponent.prototype.handleSigninIntention = function () {
        console.log('Default behavior - AuthSignupModalComponent - handleSigninIntention()');
    };
    AuthSignupModalComponent.prototype.handleSocialSignupIntention = function () {
        console.log('Default behavior - AuthSignupModalComponent - handleSocialSignupIntention()');
    };
    AuthSignupModalComponent.prototype.signupSuccess = function (success) {
        if (success) {
            this.modalRef.hide();
        }
    };
    AuthSignupModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-signup-modal',
            template: __webpack_require__(/*! ./auth-signup-modal.component.html */ "./src/app/auth/signup/components/signup-modal/auth-signup-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/auth-signup-modal.styles.scss */ "./src/app/auth/signup/components/signup-modal/styles/auth-signup-modal.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], AuthSignupModalComponent);
    return AuthSignupModalComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/components/signup-modal/styles/auth-signup-modal.styles.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/auth/signup/components/signup-modal/styles/auth-signup-modal.styles.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-page {\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/imgs/home/cta-bg.png\"); }\n  @media (min-width: 1200px) {\n    .auth-page {\n      background-position: left 58.33vw top 0px; } }\n  @media (min-width: 992px) and (max-width: 1199.98px) {\n    .auth-page {\n      background-position: left 66.66vw top 0px; } }\n  @media (max-width: 991.98px) {\n    .auth-page {\n      background: none; } }\n  .auth-modal .auth-form-wrapper .auth-title {\n  padding: 0;\n  margin: 0;\n  font-size: 1.4rem; }\n  .auth-modal .modal-header {\n  align-items: center; }\n  .auth-modal .modal-header .close {\n    font-size: 1.8rem; }\n  .auth-form-wrapper .auth-title {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n  color: #1e1e1e;\n  font-size: 1.8rem;\n  font-weight: 900;\n  letter-spacing: 0.25rem; }\n  .auth-form-wrapper .auth-alt-options {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n    color: #9013fe;\n    font-size: 1rem;\n    font-weight: 500;\n    letter-spacing: 0.1rem;\n    transition: color .5s; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:hover:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.active:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn:focus:not([disabled]), .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn.focus:not([disabled]) {\n      color: #7601dd; }\n  .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn[disabled] {\n      cursor: not-allowed;\n      opacity: .5; }\n  @media (max-width: 575.98px) {\n    .auth-form-wrapper .auth-alt-options {\n      flex-wrap: wrap; }\n      .auth-form-wrapper .auth-alt-options .secondary-call-to-action-btn {\n        width: 100%;\n        margin-bottom: 1rem; } }\n  .auth-form-wrapper .auth-form-divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n  .auth-form-wrapper .auth-form-divider::before, .auth-form-wrapper .auth-form-divider::after {\n    content: '';\n    background: #9e9e9e;\n    height: 2px;\n    flex: 1 1 auto; }\n  .auth-form-wrapper .auth-form-divider .divider-text {\n    color: #1e1e1e;\n    font-size: 1.2rem;\n    font-weight: 500;\n    letter-spacing: 0.2rem;\n    margin: 0px;\n    padding: 0px 1rem; }\n  .auth-form-wrapper .social-alternative-btn {\n  background-color: #3b5998;\n  color: #FFFFFF;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #3b5998;\n  border-radius: 0px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.12rem;\n  transition: border-color .5s, color .5s, background-color .5s;\n  height: 4rem; }\n  .auth-form-wrapper .social-alternative-btn:hover:not([disabled]) {\n    background-color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(59, 89, 152, 0.7);\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn:active:not([disabled]), .auth-form-wrapper .social-alternative-btn.active:not([disabled]), .auth-form-wrapper .social-alternative-btn:focus:not([disabled]), .auth-form-wrapper .social-alternative-btn.focus:not([disabled]) {\n    background-color: #FFFFFF;\n    border-color: #3b5998;\n    color: #3b5998;\n    text-decoration: none; }\n  .auth-form-wrapper .social-alternative-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .5; }\n  app-auth-signup-modal {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtbW9kYWwvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxjb21tb25cXGF1dGhcXGF1dGgtcGFnZXMuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwLW1vZGFsL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwLW1vZGFsL3N0eWxlcy9DOlxcVXNlcnNcXGFzbWl0XFxPbmVEcml2ZVxcRGVza3RvcFxcYW5ndWxhci1zaXRlLXRlbXBsYXRlXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGUtMS4xLjAvc3JjXFxhcHBcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hdXRoL3NpZ251cC9jb21wb25lbnRzL3NpZ251cC1tb2RhbC9zdHlsZXMvQzpcXFVzZXJzXFxhc21pdFxcT25lRHJpdmVcXERlc2t0b3BcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZVxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtbW9kYWwvc3R5bGVzL0M6XFxVc2Vyc1xcYXNtaXRcXE9uZURyaXZlXFxEZXNrdG9wXFxhbmd1bGFyLXNpdGUtdGVtcGxhdGVcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcYXV0aFxcc2lnbnVwXFxjb21wb25lbnRzXFxzaWdudXAtbW9kYWxcXHN0eWxlc1xcYXV0aC1zaWdudXAtbW9kYWwuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQ0FBNkM7RUFDN0MscUJBQW9CO0VBRXBCLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsc0RBQXFELEVBZXREO0VDcUNHO0lEMURKO01BVUksMENBQXlDLEVBVzVDLEVBQUE7RUN1Rkc7SUQ1R0o7TUFlSSwwQ0FBeUMsRUFNNUMsRUFBQTtFQ2tERztJRHZFSjtNQW1CSSxpQkFBZ0IsRUFFbkIsRUFBQTtFQUVEO0VBR00sV0FBVTtFQUNWLFVBQVM7RUFDVCxrQkFBaUIsRUFDbEI7RUFOTDtFQVVJLG9CQUFtQixFQUtwQjtFQWZIO0lBYU0sa0JBQWlCLEVBQ2xCO0VBSUw7RUFFSSxrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGVFOUNXO0VGK0NYLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQ3hCO0VBUkg7RUFXSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLDRCQUEyQixFQWM1QjtFQTNCSDtJRzFDRSxlRFFjO0lDUGQsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLHNCQUFxQixFSHVEbEI7RUFqQkw7TUc5Qk0sZUFic0QsRUFjdkQ7RUg2Qkw7TUd6Qkksb0JBQW1CO01BQ25CLFlBQVcsRUFDWjtFRnFEQztJRDlCSjtNQW9CTSxnQkFBZSxFQU9sQjtNQTNCSDtRQXVCUSxZQUFXO1FBQ1gsb0JBQW1CLEVBQ3BCLEVBQUE7RUF6QlA7RUE4QkksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQW1CcEI7RUFyREg7SUF1Q00sWUFBVztJQUNYLG9CRS9FUTtJRmdGUixZQUFXO0lBQ1gsZUFBYyxFQUNmO0VBM0NMO0lBOENNLGVFeEZTO0lGeUZULGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxrQkFBaUIsRUFDbEI7RUFwREw7RUduQkUsMEJEWHFCO0VDWXJCLGVEdEJhO0VDdUJiLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIsc0JEZnFCO0VDZ0JyQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2Qiw4REFBNkQ7RUhrRTNELGFBQVksRUFDYjtFQTFESDtJR0xNLDJDRG5DUztJQ29DVCxxQ0QxQmlCO0lDMkJqQixlRDNCaUI7SUM0QmpCLHNCQUFxQixFQUN0QjtFSENMO0lHT00sMEJEL0NTO0lDZ0RULHNCRHRDaUI7SUN1Q2pCLGVEdkNpQjtJQ3dDakIsc0JBQXFCLEVBQ3RCO0VIWEw7SUdlSSxvQkFBbUI7SUFDbkIsWUFBVyxFQUNaO0VDMURIO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvY29tcG9uZW50cy9zaWdudXAtbW9kYWwvc3R5bGVzL2F1dGgtc2lnbnVwLW1vZGFsLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vX3NoYXJlZCc7XG5cbi5hdXRoLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3sgJG5hdmJhci1oZWlnaHQgfSk7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICAvLyBIYWxmIHNjcmVlbiBiYWNrZ3JvdW5kIGltYWdlXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWdzL2hvbWUvY3RhLWJnLnBuZycpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtb25seSh4bCkge1xuICAgIC8vIGNvbC14bC02ID0+IGxlZnQgNTB2dyAoKyBjb2wtMSB0byBnaXZlIHNvbWUgYmxhbmsgc3BhY2UpID0+ICg3KjEwMCkvMTIgPSA1OC4zM3Z3XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA1OC4zM3Z3IHRvcCAwcHg7XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcbiAgICAvLyBjb2wtbGctNyA9PiBsZWZ0IDU4LjMzdncgKCsgY29sLTEgdG8gZ2l2ZSBzb21lIGJsYW5rIHNwYWNlKSA9PiAoOCoxMDApLzEyID0gNjYuNjZ2d1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgNjYuNjZ2dyB0b3AgMHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufS8vIC5hdXRoLXBhZ2VcblxuLmF1dGgtbW9kYWwge1xuICAuYXV0aC1mb3JtLXdyYXBwZXIge1xuICAgIC5hdXRoLXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cbiAgfVxufS8vIC5hdXRoLW1vZGFsXG5cbi5hdXRoLWZvcm0td3JhcHBlciB7XG4gIC5hdXRoLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbiAgfVxuXG4gIC5hdXRoLWFsdC1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAuc2Vjb25kYXJ5LWNhbGwtdG8tYWN0aW9uLWJ0biB7XG4gICAgICBAaW5jbHVkZSBsaW5rLWJ1dHRvbigkcHVycGxlKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgLnNlY29uZGFyeS1jYWxsLXRvLWFjdGlvbi1idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXV0aC1mb3JtLWRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgICAvLyBMaW5lIGRlY29yYXRpb25cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgLmRpdmlkZXItdGV4dCB7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbC1hbHRlcm5hdGl2ZS1idG4ge1xuICAgIEBpbmNsdWRlIG91dGxpbmUtYnV0dG9uKCR3aGl0ZSwgJGZhY2Vib29rLWJsdWUsICRmYWNlYm9vay1ibHVlKTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbn0vLyAuYXV0aC1mb3JtLXdyYXBwZXJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDJweCwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2xvcnNcbiRibGFjazogIzFlMWUxZTtcbiRkYXJrZ3JleTogIzNmM2YzZjtcbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmV5OiAjOWU5ZTllO1xuJGdyZXktMjogI2Q3ZDdkNztcbiRncmV5LTM6ICNlNWU1ZTU7XG5cbiRhcXVhbWFyaW5hOiAjNTBlM2MyO1xuJHB1cnBsZTogIzkwMTNmZTtcbiRjaGVycnk6ICNmODJjNTE7XG4kcmVkOiAjZDYxODNhO1xuJGdvbGQ6ICNmY2IzMDA7XG4kZmFjZWJvb2stYmx1ZTogIzNiNTk5ODtcblxuLy8gU2l6ZXNcbiRuYXZiYXItaGVpZ2h0OiAkbmF2LWxpbmstaGVpZ2h0ICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDI7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kcHJlbG9hZC1pbWFnZS1iZzogcmdiYShkYXJrZW4oJHdoaXRlLCAxMCksIC4yNSk7XG5cbi8vIFByZWxvYWQgSW1hZ2UgLyBCYWNrZ3JvdW5kIEltYWdlXG4kc3Bpbm5lci1zaXplOiAyOHB4O1xuJHNwaW5uZXItY29sb3I6ICRncmV5O1xuIiwiQG1peGluIGxpbmstYnV0dG9uKCRjb2xvciwgJGhvdmVyLWNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xuXG4gICY6aG92ZXIsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gb3V0bGluZS1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlciwgJGhvdmVyLWNvbG9yOiAkYmFja2dyb3VuZCwgJGhvdmVyLWJhY2tncm91bmQ6ICRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC41cywgY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoJGJvcmRlciwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuXG5AbWl4aW4gZmlsbC1idXR0b24oJGNvbG9yLCAkYmFja2dyb3VuZCwgJGhvdmVyLWNvbG9yOiAkY29sb3IsICRob3Zlci1iYWNrZ3JvdW5kOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC41cywgYmFja2dyb3VuZC1jb2xvciAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkaG92ZXItYmFja2dyb3VuZCwgLjcpO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iYWNrZ3JvdW5kO1xuICAgICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi9hdXRoL2F1dGgtcGFnZXMuc3R5bGVzJztcblxuYXBwLWF1dGgtc2lnbnVwLW1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=default~auth-recover-password-auth-recover-password-module~auth-signin-auth-signin-module~auth-signu~4d73e43e.js.map