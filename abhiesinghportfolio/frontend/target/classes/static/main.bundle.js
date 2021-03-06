webpackJsonp([1,4],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__(891),
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/about.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.welcome = "Welcome to home page";
    }
    ;
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(895),
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/home.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeComponent = (function () {
    function ResumeComponent(router) {
        this.router = router;
        this.pdfSrc = '/ShortResumeAbhie.pdf';
        this.page = 1;
    }
    ResumeComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ResumeComponent.prototype.selectTab = function (tab_id) {
        this.staticTabs.tabs[tab_id].active = true;
    };
    ResumeComponent.prototype.disableEnable = function () {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    };
    ResumeComponent.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staticTabs'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* TabsetComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* TabsetComponent */]) === 'function' && _a) || Object)
    ], ResumeComponent.prototype, "staticTabs", void 0);
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'resume',
            template: __webpack_require__(901),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ResumeComponent);
    return ResumeComponent;
    var _a, _b;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/resume.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 582;


/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(701);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/main.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.menuState = 'out';
    }
    AppComponent.prototype.toggleMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(892),
            styles: [__webpack_require__(889)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideInOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landpage_landpage_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__intro_intro_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mywork_mywork_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__education_education_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resumes_resume_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__resumes_shortresume_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resumes_detailresume_component__ = __webpack_require__(709);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__landpage_landpage_component__["a" /* LandPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mywork_mywork_component__["a" /* MyWorkComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__resumes_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__["PdfViewerComponent"],
                __WEBPACK_IMPORTED_MODULE_17__resumes_shortresume_component__["a" /* ShortResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__resumes_detailresume_component__["a" /* DetailResumeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* TabsModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/app.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumes_resume_component__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });




var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'resumes', component: __WEBPACK_IMPORTED_MODULE_3__resumes_resume_component__["a" /* ResumeComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' } // redirect to home page on load
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/app.routing.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = (function () {
    function EducationComponent() {
    }
    EducationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'education',
            template: __webpack_require__(893)
        }), 
        __metadata('design:paramtypes', [])
    ], EducationComponent);
    return EducationComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/education.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__(894),
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/footer.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'intro',
            template: __webpack_require__(896),
        }), 
        __metadata('design:paramtypes', [])
    ], IntroComponent);
    return IntroComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/intro.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandPageComponent = (function () {
    function LandPageComponent() {
    }
    LandPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'landpage',
            template: __webpack_require__(897)
        }), 
        __metadata('design:paramtypes', [])
    ], LandPageComponent);
    return LandPageComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/landpage.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(898),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/menu.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyWorkComponent = (function () {
    function MyWorkComponent() {
        this.showMore = false;
        this.buttonText = "Read More";
    }
    MyWorkComponent.prototype.toggleShowState = function () {
        if (this.showMore) {
            this.showMore = false;
            this.buttonText = "Read More";
        }
        else {
            this.showMore = true;
            this.buttonText = "Read Less";
        }
    };
    MyWorkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mywork',
            template: __webpack_require__(899),
        }), 
        __metadata('design:paramtypes', [])
    ], MyWorkComponent);
    return MyWorkComponent;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/mywork.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailResumeComponent = (function () {
    function DetailResumeComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.pdfSrc = '/DetailResumeAbhie.pdf';
        this.page = 1;
    }
    DetailResumeComponent.prototype.ngOnInit = function () {
        this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    };
    DetailResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detail-resume',
            template: __webpack_require__(900)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], DetailResumeComponent);
    return DetailResumeComponent;
    var _a;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/detailresume.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortResumeComponent = (function () {
    function ShortResumeComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.pdfSrc = '/ShortResumeAbhie.pdf';
        this.page = 1;
    }
    ShortResumeComponent.prototype.ngOnInit = function () {
        this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
    };
    ShortResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'short-resume',
            template: __webpack_require__(902)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], ShortResumeComponent);
    return ShortResumeComponent;
    var _a;
}());
;
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/shortresume.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Volumes/MHD1/2017/Projects/herokudeploy/my-portfolio/abhiesinghportfolio/frontend/src/main/frontend/src/environment.js.map

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 403,
	"./af.js": 403,
	"./ar": 409,
	"./ar-dz": 404,
	"./ar-dz.js": 404,
	"./ar-ly": 405,
	"./ar-ly.js": 405,
	"./ar-ma": 406,
	"./ar-ma.js": 406,
	"./ar-sa": 407,
	"./ar-sa.js": 407,
	"./ar-tn": 408,
	"./ar-tn.js": 408,
	"./ar.js": 409,
	"./az": 410,
	"./az.js": 410,
	"./be": 411,
	"./be.js": 411,
	"./bg": 412,
	"./bg.js": 412,
	"./bn": 413,
	"./bn.js": 413,
	"./bo": 414,
	"./bo.js": 414,
	"./br": 415,
	"./br.js": 415,
	"./bs": 416,
	"./bs.js": 416,
	"./ca": 417,
	"./ca.js": 417,
	"./cs": 418,
	"./cs.js": 418,
	"./cv": 419,
	"./cv.js": 419,
	"./cy": 420,
	"./cy.js": 420,
	"./da": 421,
	"./da.js": 421,
	"./de": 423,
	"./de-at": 422,
	"./de-at.js": 422,
	"./de.js": 423,
	"./dv": 424,
	"./dv.js": 424,
	"./el": 425,
	"./el.js": 425,
	"./en-au": 426,
	"./en-au.js": 426,
	"./en-ca": 427,
	"./en-ca.js": 427,
	"./en-gb": 428,
	"./en-gb.js": 428,
	"./en-ie": 429,
	"./en-ie.js": 429,
	"./en-nz": 430,
	"./en-nz.js": 430,
	"./eo": 431,
	"./eo.js": 431,
	"./es": 433,
	"./es-do": 432,
	"./es-do.js": 432,
	"./es.js": 433,
	"./et": 434,
	"./et.js": 434,
	"./eu": 435,
	"./eu.js": 435,
	"./fa": 436,
	"./fa.js": 436,
	"./fi": 437,
	"./fi.js": 437,
	"./fo": 438,
	"./fo.js": 438,
	"./fr": 441,
	"./fr-ca": 439,
	"./fr-ca.js": 439,
	"./fr-ch": 440,
	"./fr-ch.js": 440,
	"./fr.js": 441,
	"./fy": 442,
	"./fy.js": 442,
	"./gd": 443,
	"./gd.js": 443,
	"./gl": 444,
	"./gl.js": 444,
	"./he": 445,
	"./he.js": 445,
	"./hi": 446,
	"./hi.js": 446,
	"./hr": 447,
	"./hr.js": 447,
	"./hu": 448,
	"./hu.js": 448,
	"./hy-am": 449,
	"./hy-am.js": 449,
	"./id": 450,
	"./id.js": 450,
	"./is": 451,
	"./is.js": 451,
	"./it": 452,
	"./it.js": 452,
	"./ja": 453,
	"./ja.js": 453,
	"./jv": 454,
	"./jv.js": 454,
	"./ka": 455,
	"./ka.js": 455,
	"./kk": 456,
	"./kk.js": 456,
	"./km": 457,
	"./km.js": 457,
	"./ko": 458,
	"./ko.js": 458,
	"./ky": 459,
	"./ky.js": 459,
	"./lb": 460,
	"./lb.js": 460,
	"./lo": 461,
	"./lo.js": 461,
	"./lt": 462,
	"./lt.js": 462,
	"./lv": 463,
	"./lv.js": 463,
	"./me": 464,
	"./me.js": 464,
	"./mi": 465,
	"./mi.js": 465,
	"./mk": 466,
	"./mk.js": 466,
	"./ml": 467,
	"./ml.js": 467,
	"./mr": 468,
	"./mr.js": 468,
	"./ms": 470,
	"./ms-my": 469,
	"./ms-my.js": 469,
	"./ms.js": 470,
	"./my": 471,
	"./my.js": 471,
	"./nb": 472,
	"./nb.js": 472,
	"./ne": 473,
	"./ne.js": 473,
	"./nl": 475,
	"./nl-be": 474,
	"./nl-be.js": 474,
	"./nl.js": 475,
	"./nn": 476,
	"./nn.js": 476,
	"./pa-in": 477,
	"./pa-in.js": 477,
	"./pl": 478,
	"./pl.js": 478,
	"./pt": 480,
	"./pt-br": 479,
	"./pt-br.js": 479,
	"./pt.js": 480,
	"./ro": 481,
	"./ro.js": 481,
	"./ru": 482,
	"./ru.js": 482,
	"./se": 483,
	"./se.js": 483,
	"./si": 484,
	"./si.js": 484,
	"./sk": 485,
	"./sk.js": 485,
	"./sl": 486,
	"./sl.js": 486,
	"./sq": 487,
	"./sq.js": 487,
	"./sr": 489,
	"./sr-cyrl": 488,
	"./sr-cyrl.js": 488,
	"./sr.js": 489,
	"./ss": 490,
	"./ss.js": 490,
	"./sv": 491,
	"./sv.js": 491,
	"./sw": 492,
	"./sw.js": 492,
	"./ta": 493,
	"./ta.js": 493,
	"./te": 494,
	"./te.js": 494,
	"./tet": 495,
	"./tet.js": 495,
	"./th": 496,
	"./th.js": 496,
	"./tl-ph": 497,
	"./tl-ph.js": 497,
	"./tlh": 498,
	"./tlh.js": 498,
	"./tr": 499,
	"./tr.js": 499,
	"./tzl": 500,
	"./tzl.js": 500,
	"./tzm": 502,
	"./tzm-latn": 501,
	"./tzm-latn.js": 501,
	"./tzm.js": 502,
	"./uk": 503,
	"./uk.js": 503,
	"./uz": 504,
	"./uz.js": 504,
	"./vi": 505,
	"./vi.js": 505,
	"./x-pseudo": 506,
	"./x-pseudo.js": 506,
	"./yo": 507,
	"./yo.js": 507,
	"./zh-cn": 508,
	"./zh-cn.js": 508,
	"./zh-hk": 509,
	"./zh-hk.js": 509,
	"./zh-tw": 510,
	"./zh-tw.js": 510
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 864;


/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = ".hamburger {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 96px;\n  height: 96px;\n  font-size: 0;\n  text-indent: -9999px;\n  cursor: pointer;\n  outline: none;\n  background: none;\n  border: 0;\n}\n\n\n.hamburger span {\n  display: block;\n  position: absolute;\n  top: 44px;\n  left: 18px;\n  right: 18px;\n  height: 8px;\n  background: #1a2580;\n}\n\n.hamburger span::before,\n.hamburger span::after {\n  display: block;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: #1a2580;\n  content: \"\";\n}\n\n.hamburger span::before {\n  top: -20px;\n}\n\n.hamburger span::after {\n  bottom: -20px;\n}"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "body {\n    margin: 0;\n    font-family: 'Lato', sans-serif;\n}\n\n.overlay {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0, 0.9);\n    overflow-x: hidden;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n}\n\n.overlay-content {\n    position: relative;\n    top: 25%;\n    width: 100%;\n    text-align: center;\n    margin-top: 30px;\n}\n\n.overlay a {\n    padding: 8px;\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.overlay a:hover, .overlay a:focus {\n    color: #f1f1f1;\n}\n\n.overlay .closebtn {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div id=\"sep\">\n    <div class=\"container-fluid\">\n        <div class=\"row centered\">\n        </div>\n        <div class=\"row centered\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <h1>I live in the amazing New York City</h1>\n                <h3 class=\"mb\">Please, feel free to reach out to me for more Information</h3>\n                <button class=\"btn btn-conf btn-clear\">Request for Information</button>\n            </div>\n        </div>\n        <!--/row-->\n    </div>\n    <!--/container-->\n</div>\n<!--/.sep-->\n\n<div id=\"f\">\n    <div class=\"container\">\n        <div class=\"row centered\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <a href=\"https://twitter.com/abhie_r_singh\" target=\"_blank\"><i class=\"ion-social-twitter\"></i></a>\n                <a href=\"https://www.linkedin.com/in/abhiesingh/\" target=\"_blank\"><i class=\"ion-social-linkedin\"></i></a>\n                <a href=\"https://www.instagram.com/abhie.singh/\" target=\"_blank\"><i class=\"ion-social-instagram\"></i></a>\n                <a href=\"https://www.facebook.com/abhieRsingh\" target=\"_blank\"><i class=\"ion-social-facebook\"></i></a>\n            </div>\n            <!--/col-md-8-->\n        </div>\n    </div>\n    <!--/container-->\n</div>\n<!--/.F-->"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <app-menu [@slideInOut]=\"menuState\"></app-menu>\n  </div>\n  <!-- /#sidebar-wrapper -->\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        \n        <!-- routing here -->\n        <router-outlet></router-outlet>\n      </div>\n    </div>  \n  </div>\n</div>"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div id=\"edu\">\n    <div class=\"container\">\n        <div class=\"row centered\">\n            <h2>Education</h2>\n            <!--/col-md-8-->\n        </div>\n        <div class=\"row centered\">\n            <div class=\"col-md-12 \">\n                <p><b> Master of Science in Computer Science, &nbsp; February, 2017</b></p>\n                Maharishi University of Management, Fairfield, Iowa, USA\n                <hr>\n            </div>\n        </div>\n        <div class=\"row centered\">\n            <div class=\"col-md-12 \">\n                <p><b> B.Sc. (Information Technology), &nbsp; April, 2008</b></p>\n                University of Mumbai, Mumbai, Maharashtra, India\n                <hr>\n            </div>\n        </div>\n        <div class=\"row centered\">\n            <div class=\"col-md-12 \">\n                <p><b> Additional Professional Development</b></p>\n\n                    Sun Certified Java Programmer, SE 6<br>\n                    Oracle Certified Professional: Web Component Developer, 5.0<br>\n                    Six Sigma Green Belt Certification <br>\n                    JP Morgan Technology University Graduate<br>\n                    JP Morgan Java L1 Certified<br>\n                    Patni Java L1 Certified<br>\n                <hr>\n            </div>\n        </div>\n        <!--/row-->\n    </div>\n    <!--/.container-->\n    <!-- portfolio container -->\n    <!--/container-->\n</div>\n<!--/.G-->"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row centered\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <p>&copy; 2017, Abhimanyu Singh</p>\n        </div>\n        <!--/col-md-8-->\n    </div>\n    <!--/row-->\n</div>\n\n<!-- Bootstrap core JavaScript\n    ================================================== -->\n<!-- Placed at the end of the document so the pages load faster -->\n<script src=\"assets/js/jquery.min.js\"></script>\n<script src=\"assets/js/bootstrap.min.js\"></script>\n<script src=\"assets/js/retina-1.1.0.js\"></script>\n<script src=\"assets/js/jquery.hoverdir.js\"></script>\n<script src=\"assets/js/jquery.hoverex.min.js\"></script>\n<script src=\"assets/js/jquery.prettyPhoto.js\"></script>\n<script src=\"assets/js/jquery.isotope.min.js\"></script>\n<script src=\"assets/js/custom.js\"></script>\n\n\n<script>\n    // Portfolio\n    (function ($) {\n        \"use strict\";\n        var $container = $('.portfolio'),\n            $items = $container.find('.portfolio-item'),\n            portfolioLayout = 'fitRows';\n\n        if ($container.hasClass('portfolio-centered')) {\n            portfolioLayout = 'masonry';\n        }\n\n        $container.isotope({\n            filter: '*',\n            animationEngine: 'best-available',\n            layoutMode: portfolioLayout,\n            animationOptions: {\n                duration: 750,\n                easing: 'linear',\n                queue: false\n            },\n            masonry: {\n            }\n        }, refreshWaypoints());\n\n        function refreshWaypoints() {\n            setTimeout(function () {\n            }, 1000);\n        }\n\n        $('nav.portfolio-filter ul a').on('click', function () {\n            var selector = $(this).attr('data-filter');\n            $container.isotope({ filter: selector }, refreshWaypoints());\n            $('nav.portfolio-filter ul a').removeClass('active');\n            $(this).addClass('active');\n            return false;\n        });\n\n        function getColumnNumber() {\n            var winWidth = $(window).width(),\n                columnNumber = 1;\n\n            if (winWidth > 1200) {\n                columnNumber = 5;\n            } else if (winWidth > 950) {\n                columnNumber = 4;\n            } else if (winWidth > 600) {\n                columnNumber = 3;\n            } else if (winWidth > 400) {\n                columnNumber = 2;\n            } else if (winWidth > 250) {\n                columnNumber = 1;\n            }\n            return columnNumber;\n        }\n\n        function setColumns() {\n            var winWidth = $(window).width(),\n                columnNumber = getColumnNumber(),\n                itemWidth = Math.floor(winWidth / columnNumber);\n\n            $container.find('.portfolio-item').each(function () {\n                $(this).css({\n                    width: itemWidth + 'px'\n                });\n            });\n        }\n\n        function setPortfolio() {\n            setColumns();\n            $container.isotope('reLayout');\n        }\n\n        $container.imagesLoaded(function () {\n            setPortfolio();\n        });\n\n        $(window).on('resize', function () {\n            setPortfolio();\n        });\n\n        $(\"#sidebar-wrapper\").click(function (e) {\n            e.preventDefault();\n            $(\"#wrapper\").toggleClass(\"toggled\");\n        });\n    })(jQuery);\n\n</script>"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<landpage></landpage>\n<intro></intro>\n<mywork></mywork>\n<education></education>\n<about></about>\n<footer></footer>\n\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ptb\">\n    <div class=\"row\">\n        <h2 class=\"centered mb\">I develop beautiful websites & quality middleware<br/>that empower your Organization.</h2>\n        <div class=\"col-md-12\">\n            <p>Dynamic and well-qualified Software Developer with 8 years of experience collaborating with colleagues to design\n                highly functional applications. Excellent troubleshooting skills, improving system operation through testing\n                and analysis to identify and correct defects. Strong contributor to all phases of software development lifecycle,\n                with proven leadership skills managing teams working on complex assignments. Fluent in Scrum and Agile frameworks,\n                ensuring staff compliance with company standards, client requirements, and project specifications.\n            </p>\n        </div>\n    </div>\n    <!--/row-->\n</div>\n<!-- /.container -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n            <img src=\"assets/img/items.png\" class=\"img-responsive\" alt=\"\">\n        </div>\n    </div>\n    <!--/row-->\n</div>\n<!--/.container-->"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div id=\"h\">\n    <div class=\"logo\">\n        <h2 class=\"headerText\">Software Developer, <br> 8 Years and counting...</h2>\n        <span class=\"menuButton pull-left\" onclick=\"openNav()\">&#9776;</span>\n    </div>\n    <!--/logo-->\n    <div class=\"container centered\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <h1>Hello, my name is <b>Abhimanyu Singh</b>.<br/>I create, innovate and solve complex problems</h1>\n            </div>\n        </div>\n        <!--/row-->\n\n        <div class=\"row mt\">\n            <div class=\"col-sm-2\">\n                <i class=\"ion-coffee\"></i>\n                <h3>Java/J2EE, Certified Programmer</h3>\n            </div>\n            <!--/col-md-4-->\n            <div class=\"col-sm-2\">\n                <i class=\"ion-ios7-browsers\"></i>\n                <h3>Web Development</h3>\n            </div>\n\n            <div class=\"col-sm-2\">\n                <i class=\"ion-ios7-people\"></i>\n                <h3>Agile/SCRUM Methodologies</h3>\n            </div>\n            <!--/col-md-4-->\n            <!--/col-md-4-->\n            <!--/col-md-4-->\n            <div class=\"col-sm-2\">\n                <i class=\"ion-document-text\"></i>\n                <h3>Comp. Sci. Graduate</h3>\n            </div>\n            <div class=\"col-sm-2\">\n                <i class=\"ion-ios7-lightbulb\"></i>\n                <h3>Innovation</h3>\n            </div>\n            <!--/col-md-4-->\n\n            <div class=\"col-sm-2\">\n                <i class=\"ion-thumbsup\"></i>\n                <h3>Experienced Professional</h3>\n            </div>\n            <!--/col-md-4-->\n\n        </div>\n        <!--/row-->\n    </div>\n    <!--/container-->\n</div>\n<!--H-->"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div id=\"myNav\" class=\"overlay\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n  <div class=\"overlay-content\">\n    <a href=\"#h\">About</a>\n    <a href=\"#workExp\">Work Experience</a>\n    <a href=\"#edu\">Education</a>\n    <a href=\"/resumes\">Resume</a>\n    <a href=\"#sep\">Contact</a>\n  </div>\n</div>"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div id=\"workExp\">\n    <div class=\"container\">\n        <div class=\"row centered\">\n            <h2>Work Experience</h2>\n             <button type=\"button\" class=\"btn btn-primary pull-right showMore\" (click)=\"toggleShowState()\">{{buttonText}}</button>\n             <hr>   \n            <!--/col-md-8-->\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 \">\n                <b> JPMorgan, NY/NJ, USA &nbsp;&nbsp;&nbsp;&nbsp;November, 2015-Current</b><br>\n                <i>Application Developer: Java</i> &nbsp; Asset Management - Tech<br>\n                <hr>\n                <ul>\n                    <li>Headed web application development using Spring, Hibernate, Angular JS, Bootstrap and ExtJS as team Scrum\n                        Master. Actively participated in SCRUM meetings and collaborated with Agile Coach. Oversaw dual-site\n                        team and Agile task board using Agile GreenHopper to communicate accurate project status to senior\n                        management. Resolved issues and defects.</li>\n                    <li>Developed Proof of Concept (POC) for web application to spearhead project success during early development\n                        stages and successfully delivered project till live production state.</li>\n                    <li *ngIf=\"showMore === true\">Researched relevant technologies for project development, including improving code quality index management\n                        using SONAR tool for improving security, and Crucible for code review to minimize bugs.</li>\n                    <li *ngIf=\"showMore === true\"> Earned Peer Honor Award and completed JPMC Java L1 certification and Technology University’s Java Developer\n                        Curriculum (in house).</li>\n                    <li *ngIf=\"showMore === true\">Recognized by senior management for complying with company protocol to ensure seamless product release,\n                        as well as fostering positivity from initially reluctant team members in adhering to Agile Development.</li>\n                </ul>\n\n                <hr>\n                <u>Technologies:</u>\n                Java; HTML, JSP, ExtJS, Angular, Bootstrap, Spring; Sybase, Oracle; Eclipse IDE, Agile GreenHopper; Linux, Windows.\n            </div>\n            <div class=\"col-md-6\">\n                <b> Oracle Financial Software Systems, Mumbai, India &nbsp;&nbsp;&nbsp;&nbsp;October, 2010-September, 2011</b><br>\n                <i>Software Consultant</i><br>\n                <hr>\n                <ul>\n                    <li>Led application development and implementation by interacting with clients and business decision makers\n                        to attain accurate project requirements. Designed plans based on client needs.\n                    </li>\n                    <li>Promoted team in delivering projects on-time, as well as in understanding requirements, by creating solid\n                        functional & technical specifications.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Gained positive feedback and project development funding by creating mock ups and POC.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Designed specialized banking customer service application using Java and Oracle ADF framework.\n                    </li>\n                </ul>\n                <hr>\n\n                <u>Technologies:</u>\n                Java; Oracle ADF, JavaScript, JQuery, HTML, JSP, Servlets; Oracle; IBM Rational, Star UML, JDeveloper, PL SQL Developer;\n                Linux, Windows.\n            </div>\n            <!--/col-md-8-->\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-6 \">\n                <b> JPMorgan, Mumbai, India &nbsp;&nbsp;&nbsp;&nbsp;September, 2011-January, 2015</b><br>\n                <i>Application Developer: Java</i> &nbsp; Cards Technology<br>\n                <hr>\n                <ul>\n                    <li>Interacted with the business and clients on various forums to discuss business requirements and status\n                        of the project, discussed queries regarding the functionalities and timeline.\n                    </li>\n                    <li>Designed and developed new modules as well as enhanced existing functionalities in project using Core\n                        Java, J2EE, JMS, EJB, WebServices, Spring and Struts.\n                    </li>\n                    <li>Supported QA and UAT team for end to end functionality testing.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Involved in planning as well as supporting migration and upgrade of various software and hardware components\n                        used by applications.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Worked on production issues and supported application outages resulting in minimal impact to business.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Headed tech refresh projects, created plan for tech refresh projects, planned and managed L2 support\n                        resources rotation for project.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Conducted knowledge transfer session for new team members and created required documents to share knowledge\n                        amongst team members.\n                    </li>\n                </ul>\n                <hr>\n\n                <u>Technologies:</u>\n                Java, J2EE, Struts, Spring, Servlet, JSP, Ibatis, HTML, XML, EJB, Web Services, JSTL, CSS and JavaScript, Eclipse IDE, IBM\n                Tivoli, Wily Introscope, HP ALM, Weblogic, Unix, Cyberark EPV\n\n            </div>\n            <div class=\"col-md-6\">\n                <b> Patni Computers <i>(Capgemini)</i> , Mumbai, India                                                                  &nbsp;&nbsp;&nbsp;&nbsp;September, 2011-January, 2015</b><br>\n                <i>Associate Software Engineer for Client GE-NBCU</i><br>\n                <hr>\n                <ul>\n                    <li>Developed and enhanced web applications for GE NBCU using Java, J2EE, Struts, Hibernate, and JavaScript.\n                        Authored functional & technical specification documents. Supported new team members by hosting KT\n                        sessions.\n                    </li>\n                    <li>Forged strong client relationships and team confidence by conducting weekly status reports and review\n                        meetings.\n\n                    </li>\n                    <li *ngIf=\"showMore === true\">Developed web application and migrated project to new servers / databases with zero defects and minimal\n                        business impact by performing ongoing code reviews and test cases.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Safeguarded firm and client reputation by proactively resolving major outages.\n                    </li>\n                    <li *ngIf=\"showMore === true\">Actively contributed to ensuring quality outcomes resulting in recognition with Best Team Award.\n                    </li>\n                </ul>\n                <hr>\n                <u>Technologies:</u>\n                Java; Struts, Hibernate, JavaScript, HTML, JSP, Servlet; Oracle, MSSQL; Eclipse; Platforms: Linux, UNIX.\n            </div>\n            <!--/col-md-8-->\n        </div>\n        <!--/row-->\n    </div>\n    <!--/.container-->\n    <!-- portfolio container -->\n    <!--/container-->\n</div>\n<!--/.G-->"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div>\n  <iframe width=\"100%\" height=\"600\" [src]=\"pageurl\" type=\"application/pdf\"></iframe>\n</div>"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"goBack()\" class=\"btn btn-primary pull-right\">Back</button>\n<tabset>\n  <tab heading='Short Ressume'>\n    <short-resume></short-resume>\n  </tab>\n  <tab heading='Detailed Ressume'>\n    <detail-resume></detail-resume>\n  </tab>\n</tabset>\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div>\n  <iframe width=\"100%\" height=\"600\" [src]=\"pageurl\" type=\"application/pdf\"></iframe>\n</div>"

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(583);


/***/ })

},[933]);
//# sourceMappingURL=main.bundle.map