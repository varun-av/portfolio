function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "profile";
        this.state = "invisible";
        this.bgState1 = "bottom";
        this.bgState2 = "bottom";
        this.bgState3 = "bottom";
        this.logo = ["assets/images/angular.png", "assets/images/react.png", "assets/images/d3.png", "assets/images/hype.png", "assets/images/inkscape.png"];
        this.index = 0;
        this.image = "";
        this.times = 10;
        this.counter = 0;
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEnvelope"];
        this.faSkype = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkype"];
        this.faLinkedIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faExternalLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"];
      }

      _createClass(AppComponent, [{
        key: "onDone",
        value: function onDone() {
          if (this.counter < this.times) {
            this.bgState1 = this.bgState1 === "top" ? "bottom" : "top";
            this.bgState2 = this.bgState2 === "top" ? "bottom" : "top";
            this.bgState3 = this.bgState3 === "top" ? "bottom" : "top";
            this.counter++;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            if (_this.state == "invisible") {
              if (_this.index < _this.logo.length) {
                _this.image = _this.logo[_this.index];
                _this.index += 1;
                _this.state = "visible";
              } else {
                _this.image = _this.logo[0];
                _this.index = 1;
                _this.state = "visible";
              }
            } else {
              _this.state = "invisible";
            }
          }, 1000);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 79,
      vars: 8,
      consts: [["src", "favicon.ico", 2, "position", "absolute", "z-index", "2", "padding", "20px", "filter", "drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4))"], [1, "landing-container", 2, "background-color", "#4400aa"], [1, "divide", "center"], [1, "two-third"], ["src", "assets/images/we.png", 1, "landing-image"], [1, "one-third", "padding-40"], [1, "main-text1", "padding-20", 2, "font-size", "50px"], [1, "main-text2", "padding-20", 2, "font-size", "40px"], [1, "main-text3", 2, "font-size", "20px"], [1, "center", "padding-40", 2, "font-family", "sans-serif", "font-size", "40px"], [2, "border-radius", "30px", "padding", "20px"], [1, "main-container"], [1, "one-third", "center"], [1, "center", "column"], [1, "padding-20"], ["href", "https://varun-av.github.io/graphbuild/", "target", "_blank"], [3, "icon"], [1, "two-third", "center", 2, "filter", "drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4))"], ["id", "grapher", "src", "assets/images/grapher.png", "width", "100%", 2, "transition", "-webkit-transform 0.5s", "margin", "10px", "border-bottom", "5px solid #ececec", "border-radius", "5px"], ["src", "assets/images/coup.png", "width", "100%", 2, "margin", "10px", "border-radius", "5px"], ["href", "https://boardgamegeek.com/boardgame/131357/coup", "target", "_blank"], ["href", "https://varun-av.github.io/coupbuild/", "target", "_blank"], [1, "half", "center"], [1, "center", "column", "padding-20"], [1, "center", "column", "padding-20", 2, "margin-top", "50px"], ["width", "70", 2, "filter", "drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4))", 3, "src"], [1, "half", "center", "padding-50"], ["src", "assets/gif/profile.gif", 1, "profile-gif", "padding-20"], [1, "footer-container", "center", "padding-40", 2, "background-color", "#4400aa", "color", "white"], ["href", "mailto: varun.zark@yahoo.com", "target", "_blank"], ["size", "2x", 3, "icon"], ["href", "skype:live:.cid.62f5af99a7f8d6b7?userinfo", "target", "_blank"], ["href", "https://www.linkedin.com/in/avvarun", "target", "_blank"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hi! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I'm Varun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " a Web Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Grapher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Grapher provides online graphing tools for datasets. Currently handles three modes: line, scatter and area. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Start graphing!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Coup game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Coup is a real-time online multiplayer card based game. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About Coup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "What I can do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Design what you want. Develop what you need. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Developing interactive websites and making them awesome with animations since 2016. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " I'm based in Bengaluru, India. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " I like to keep it simple. My goals are to focus on content and conveying the message that you want to send. I create websites to run across devices using the latest technologies available. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "fa-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "fa-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "fa-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\xA0\xA0\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faExternalLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faExternalLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faExternalLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@animate", ctx.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSkype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedIn);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
      styles: [".landing-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 100px;\n}\n\n.main-text1[_ngcontent-%COMP%], .main-text2[_ngcontent-%COMP%], .main-text3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  height: 600px;\n  margin: 50px;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 10px;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  color: white;\n}\n\n.bg-cyan[_ngcontent-%COMP%] {\n  background-color: lightcyan;\n  color: black;\n}\n\n.circle1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 150px;\n  top: 150px;\n  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n}\n\n.circle2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 200px;\n  top: 100px;\n  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n}\n\n.circle3[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 600px;\n  top: 120px;\n  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n}\n\n.brand-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 900px;\n  top: 300px;\n  font-size: 75px;\n  text-align: center;\n  font-family: sans-serif;\n  -webkit-filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));\n}\n\n.divide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.column[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-direction: column;\n}\n\n.padding-20[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.padding-40[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.half[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media only screen and (max-width: 600px) {\n  .landing-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .padding-20[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .two-third[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .one-third[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n\n  .main-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .footer-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .half[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n\n  .profile-gif[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .landing-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .two-third[_ngcontent-%COMP%] {\n    width: 66.6666%;\n  }\n\n  .one-third[_ngcontent-%COMP%] {\n    width: 33.3333%;\n  }\n\n  .profile-gif[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n\n  .landing-image[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .landing-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .two-third[_ngcontent-%COMP%] {\n    width: 66.6666%;\n  }\n\n  .one-third[_ngcontent-%COMP%] {\n    width: 33.3333%;\n  }\n\n  .profile-gif[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n\n  .landing-image[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n\n  .landing-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .two-third[_ngcontent-%COMP%] {\n    width: 66.6666%;\n  }\n\n  .one-third[_ngcontent-%COMP%] {\n    width: 33.3333%;\n  }\n\n  .profile-gif[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n\n  .landing-image[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n\n  .landing-container[_ngcontent-%COMP%] {\n    height: 90%;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .two-third[_ngcontent-%COMP%] {\n    width: 66.6666%;\n  }\n\n  .one-third[_ngcontent-%COMP%] {\n    width: 33.3333%;\n  }\n\n  .profile-gif[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n\n  .landing-image[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXJ1bmF2L3dlYi9hbmd1bGFyL2FsaWFzL2FsaWFzL2hvbWUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ1FKOztBRE5BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDVUo7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDV0o7O0FEVEE7RUFDSSxXQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7QUNjSjs7QURaQTtFQUNJLGFBQUE7QUNlSjs7QURiQTtFQUNJLFVBQUE7QUNnQko7O0FEZEE7RUFDSTtJQUNJLFdBQUE7RUNpQk47O0VEaEJFO0lBQ0ksVUFBQTtFQ21CTjs7RURsQkU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFQ3FCTjs7RURwQkU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFQ3VCTjs7RUR0QkU7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQ3lCTjs7RUR4QkU7SUFDSSxZQUFBO0VDMkJOOztFRDFCRTtJQUNJLFlBQUE7RUM2Qk47O0VENUJFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7RUMrQk47O0VEOUJFO0lBQ0ksV0FBQTtFQ2lDTjs7RURoQ0U7SUFDSSxZQUFBO0VDbUNOO0FBQ0Y7O0FEbENBO0VBQ0k7SUFDSSxlQUFBO0VDb0NOOztFRG5DRTtJQUNJLGVBQUE7RUNzQ047O0VEckNFO0lBQ0ksWUFBQTtFQ3dDTjs7RUR2Q0U7SUFDSSxZQUFBO0VDMENOOztFRHpDRTtJQUNJLFlBQUE7RUM0Q047QUFDRjs7QUQzQ0E7RUFDSTtJQUNJLGVBQUE7RUM2Q047O0VENUNFO0lBQ0ksZUFBQTtFQytDTjs7RUQ5Q0U7SUFDSSxZQUFBO0VDaUROOztFRGhERTtJQUNJLFlBQUE7RUNtRE47O0VEbERFO0lBQ0ksWUFBQTtFQ3FETjtBQUNGOztBRHBEQTtFQUNJO0lBQ0ksZUFBQTtFQ3NETjs7RURyREU7SUFDSSxlQUFBO0VDd0ROOztFRHZERTtJQUNJLFlBQUE7RUMwRE47O0VEekRFO0lBQ0ksWUFBQTtFQzRETjs7RUQzREU7SUFDSSxXQUFBO0VDOEROO0FBQ0Y7O0FEN0RBO0VBQ0k7SUFDSSxlQUFBO0VDK0ROOztFRDlERTtJQUNJLGVBQUE7RUNpRU47O0VEaEVFO0lBQ0ksWUFBQTtFQ21FTjs7RURsRUU7SUFDSSxZQUFBO0VDcUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1jb250YWluZXJcbiAgICBoZWlnaHQ6IDEwMHZoXG4gICAgcGFkZGluZzogMTAwcHhcblxuLm1haW4tdGV4dDEsIC5tYWluLXRleHQyLCAubWFpbi10ZXh0M1xuICAgIGNvbG9yOiB3aGl0ZVxuXG4ubWFpbi1jb250YWluZXJcbiAgICBoZWlnaHQ6IDYwMHB4XG4gICAgbWFyZ2luOiA1MHB4XG5cbi5mb290ZXItY29udGFpbmVyXG4gICAgaGVpZ2h0OiAxMDBweFxuICAgIG1hcmdpbjogMTBweFxuXG4uY2VudGVyXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4uYmctZ3JleVxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleVxuICAgIGNvbG9yOiB3aGl0ZVxuXG4uYmctY3lhblxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhblxuICAgIGNvbG9yOiBibGFja1xuXG4uY2lyY2xlMVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDE1MHB4XG4gICAgdG9wOiAxNTBweFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpKVxuXG4uY2lyY2xlMlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDIwMHB4XG4gICAgdG9wOiAxMDBweFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpKVxuXG4uY2lyY2xlM1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDYwMHB4XG4gICAgdG9wOiAxMjBweFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpKVxuXG4uYnJhbmQtY29udGVudFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGxlZnQ6IDkwMHB4XG4gICAgdG9wOiAzMDBweFxuICAgIGZvbnQtc2l6ZTogNzVweFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCkpXG5cbi5kaXZpZGVcbiAgICB3aWR0aDogMTAwJVxuXG4uY29sdW1uXG4gICAgd2lkdGg6IDEwMCVcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG5cbi5wYWRkaW5nLTIwXG4gICAgcGFkZGluZzogMjBweFxuXG4ucGFkZGluZy00MFxuICAgIHBhZGRpbmc6IDQwcHhcblxuLmhhbGZcbiAgICB3aWR0aDogNTAlXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXG4gICAgLmxhbmRpbmctaW1hZ2VcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAucGFkZGluZy0yMFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgLnR3by10aGlyZFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIC5vbmUtdGhpcmRcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAuY2VudGVyXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgLm1haW4tY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgIC5mb290ZXItY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogYXV0b1xuICAgIC5oYWxmXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgLnByb2ZpbGUtZ2lmXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgLmxhbmRpbmctY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogYXV0b1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxuICAgIC50d28tdGhpcmRcbiAgICAgICAgd2lkdGg6IDY2LjY2NjYlXG4gICAgLm9uZS10aGlyZFxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcbiAgICAucHJvZmlsZS1naWZcbiAgICAgICAgd2lkdGg6IDMyMHB4XG4gICAgLmxhbmRpbmctaW1hZ2VcbiAgICAgICAgd2lkdGg6IDMwMHB4XG4gICAgLmxhbmRpbmctY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogYXV0b1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxuICAgIC50d28tdGhpcmRcbiAgICAgICAgd2lkdGg6IDY2LjY2NjYlXG4gICAgLm9uZS10aGlyZFxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcbiAgICAucHJvZmlsZS1naWZcbiAgICAgICAgd2lkdGg6IDMyMHB4XG4gICAgLmxhbmRpbmctaW1hZ2VcbiAgICAgICAgd2lkdGg6IDQwMHB4XG4gICAgLmxhbmRpbmctY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogYXV0b1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KVxuICAgIC50d28tdGhpcmRcbiAgICAgICAgd2lkdGg6IDY2LjY2NjYlXG4gICAgLm9uZS10aGlyZFxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcbiAgICAucHJvZmlsZS1naWZcbiAgICAgICAgd2lkdGg6IDMyMHB4XG4gICAgLmxhbmRpbmctaW1hZ2VcbiAgICAgICAgd2lkdGg6IDUwMHB4XG4gICAgLmxhbmRpbmctY29udGFpbmVyXG4gICAgICAgIGhlaWdodDogOTAlXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxuICAgIC50d28tdGhpcmRcbiAgICAgICAgd2lkdGg6IDY2LjY2NjYlXG4gICAgLm9uZS10aGlyZFxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcbiAgICAucHJvZmlsZS1naWZcbiAgICAgICAgd2lkdGg6IDMyMHB4XG4gICAgLmxhbmRpbmctaW1hZ2VcbiAgICAgICAgd2lkdGg6IDYwMHB4XG4iLCIubGFuZGluZy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxMDBweDtcbn1cblxuLm1haW4tdGV4dDEsIC5tYWluLXRleHQyLCAubWFpbi10ZXh0MyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1jeWFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jaXJjbGUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNTBweDtcbiAgdG9wOiAxNTBweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuXG4uY2lyY2xlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbn1cblxuLmNpcmNsZTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwMHB4O1xuICB0b3A6IDEyMHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG59XG5cbi5icmFuZC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5MDBweDtcbiAgdG9wOiAzMDBweDtcbiAgZm9udC1zaXplOiA3NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG59XG5cbi5kaXZpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGFkZGluZy0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wYWRkaW5nLTQwIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmhhbGYge1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5sYW5kaW5nLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnR3by10aGlyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAub25lLXRoaXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jZW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhhbGYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnByb2ZpbGUtZ2lmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sYW5kaW5nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC50d28tdGhpcmQge1xuICAgIHdpZHRoOiA2Ni42NjY2JTtcbiAgfVxuXG4gIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuXG4gIC5wcm9maWxlLWdpZiB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgLmxhbmRpbmctaW1hZ2Uge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5sYW5kaW5nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50d28tdGhpcmQge1xuICAgIHdpZHRoOiA2Ni42NjY2JTtcbiAgfVxuXG4gIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuXG4gIC5wcm9maWxlLWdpZiB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgLmxhbmRpbmctaW1hZ2Uge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxuXG4gIC5sYW5kaW5nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50d28tdGhpcmQge1xuICAgIHdpZHRoOiA2Ni42NjY2JTtcbiAgfVxuXG4gIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuXG4gIC5wcm9maWxlLWdpZiB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgLmxhbmRpbmctaW1hZ2Uge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5sYW5kaW5nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC50d28tdGhpcmQge1xuICAgIHdpZHRoOiA2Ni42NjY2JTtcbiAgfVxuXG4gIC5vbmUtdGhpcmQge1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuXG4gIC5wcm9maWxlLWdpZiB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG5cbiAgLmxhbmRpbmctaW1hZ2Uge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("animate", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("invisible => visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: "scale(0.3)",
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "scale(1.1)",
          offset: 0.3
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "scale(0.9)",
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: "scale(1.1)",
          offset: 1
        })])), {
          params: {
            timing: "1s",
            delay: ""
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("visible => invisible", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "scale(0.9)",
          offset: 0.2
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "scale(1.1)",
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "scale(1.1)",
          offset: 0.55
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: "scale(0.3)",
          offset: 1
        })]))], {
          params: {
            timing: "1s",
            delay: ""
          }
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("float", [// state('top', style({transform: 'translateY(0)'})),
        // state('bottom', style({transform: 'translateY(20px)'})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void=>top", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(0)",
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(10px)",
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(20px)",
          offset: 1
        })])), {
          params: {
            timing: "",
            delay: ""
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("top=>bottom", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(0)",
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(10px)",
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(20px)",
          offset: 1
        })])), {
          params: {
            timing: "",
            delay: ""
          }
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("bottom=>top", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([// style({ transform: "translateY(0)", offset: 0 }),
        // style({ transform: "translateY(10px)", offset: 0.25 }),
        // style({ transform: "translateY(20px)", offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(20px)",
          offset: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(10px)",
          offset: 0.5
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: "translateY(0)",
          offset: 1
        })])), {
          params: {
            timing: "",
            delay: ""
          }
        })])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.sass"],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("animate", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("invisible => visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: "scale(0.3)",
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "scale(1.1)",
            offset: 0.3
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "scale(0.9)",
            offset: 0.5
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: "scale(1.1)",
            offset: 1
          })])), {
            params: {
              timing: "1s",
              delay: ""
            }
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("visible => invisible", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "scale(0.9)",
            offset: 0.2
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "scale(1.1)",
            offset: 0.5
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "scale(1.1)",
            offset: 0.55
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: "scale(0.3)",
            offset: 1
          })]))], {
            params: {
              timing: "1s",
              delay: ""
            }
          })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("float", [// state('top', style({transform: 'translateY(0)'})),
          // state('bottom', style({transform: 'translateY(20px)'})),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void=>top", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(0)",
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(10px)",
            offset: 0.5
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(20px)",
            offset: 1
          })])), {
            params: {
              timing: "",
              delay: ""
            }
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("top=>bottom", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(0)",
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(10px)",
            offset: 0.5
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(20px)",
            offset: 1
          })])), {
            params: {
              timing: "",
              delay: ""
            }
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("bottom=>top", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([// style({ transform: "translateY(0)", offset: 0 }),
          // style({ transform: "translateY(10px)", offset: 0.25 }),
          // style({ transform: "translateY(20px)", offset: 0.5 }),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(20px)",
            offset: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(10px)",
            offset: 0.5
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: "translateY(0)",
            offset: 1
          })])), {
            params: {
              timing: "",
              delay: ""
            }
          })])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], material],
          exports: [material]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/varunav/web/angular/alias/alias/home/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map