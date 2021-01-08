(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dhruvpatel/Desktop/shopify/shopify-frontend/movie-awards/src/main.ts */"zUnb");


/***/ }),

/***/ "2IJj":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SideBarComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nomination list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " please nominate some movies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " form the left hand side ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3._drop(item_r2.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r2.Title, "(", item_r2.Year, ") ");
} }
class SideBarComponent {
    constructor() {
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listItems = [];
    }
    _drop(imdbID) {
        for (let i in this.listItems) {
            if (this.listItems[i].imdbID == imdbID) {
                this.listItems.splice(parseInt(i, 10), 1);
                break;
            }
        }
        this.drop.emit(imdbID);
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.query != undefined) {
            this.listItems.push(this.query.movie);
        }
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], inputs: { query: "query" }, outputs: { drop: "drop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 2, consts: [[1, "super"], [1, "front"], ["id", "info_side_bar"], ["id", "selection_empty", 4, "ngIf"], [1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "backdrop"], ["id", "selection_empty"], [1, "item"], [1, "des_field_comp"], [1, "item_image"], [1, "center", 3, "src"], [1, "add_button"], [3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nominated Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideBarComponent_p_4_Template, 6, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideBarComponent_div_6_Template, 9, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".backdrop[_ngcontent-%COMP%]{\n    background-color: #FFF8D5;\n    width: 25vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    right: 0px;\n    filter: blur(30px);\n    z-index: 150;\n}\n\n.container[_ngcontent-%COMP%]{\n    padding: 2vw;\n    display: grid;\n    grid-template-columns: 20vw;\n    grid-template-rows: repeat(5,10vh);\n    gap: 2vw;\n}\n\n#info_side_bar[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    font-family: lato;\n    font-size: 3vw;\n    font-weight: 200;\n}\n\n#selection_empty[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    font-family: lato;\n    font-size: 1.6vw;\n    font-style: normal;\n    font-weight: 100;\n    padding:2vw ;\n}\n\n.front[_ngcontent-%COMP%]{\n    z-index: 200;\n    width: 25vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    right: 0px;\n}\n\n.item[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px rgba(33,33,33,.1);\n    border-radius: 5px;\n    background-color: white;\n}\n\n.center[_ngcontent-%COMP%] {\n    height: 5vh;\n    padding-top: 1vh;\n    padding-bottom: 1vh;\n    padding-left: 1vw;\n    padding-right: 1vw;\n}\n\n.des_field_comp[_ngcontent-%COMP%]{\n    display: flex;\n}\n\n\n\n.add_button[_ngcontent-%COMP%]{\n    float: right;\n    padding-left:2vw ;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin-bottom: 1vw;\n    margin-right: 1vh;\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-weight: 200;\n    font-style: italic;\n    font-size: 1vw;\n    height: 3vh;\n    padding: 1vh 1vw 1vh 1vw;\n    color: black;\n    transition: 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: rgb(255, 255, 255);\n    background-color:rgb(218, 32, 32);\n    box-shadow: 0 0 11px rgb(255, 0, 0);\n}\n\nbutton[_ngcontent-%COMP%]:active{\n    color: rgb(0, 0, 0);\n    background-color:  rgb(255, 255, 255);\n    box-shadow: 0 0 11px rgb(155, 155, 155);\n}\n\n\n\nh3[_ngcontent-%COMP%]{\n    overflow-y: auto;\n    max-height: 7vh;\n    font-style: normal;\n    font-family: lato;\n    font-weight: 100;\n    font-size: 1.5vw;\n\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    padding-bottom: 0px;\n    padding-top: 0px;\n\n    word-wrap: break-word;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;               \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUlBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyx1Q0FBdUM7QUFDM0M7O0FBQ0E7Ozs7Q0FJQzs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVLGdCQUFnQixrQ0FBa0M7RUFDOUQiLCJmaWxlIjoic2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEQ1O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMHB4O1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICB6LWluZGV4OiAxNTA7XG59XG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMnZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsMTB2aCk7XG4gICAgZ2FwOiAydnc7XG59XG4jaW5mb19zaWRlX2JhcntcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbiNzZWxlY3Rpb25fZW1wdHl7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtc2l6ZTogMS42dnc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgcGFkZGluZzoydncgO1xufVxuLmZyb250e1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLml0ZW17XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDMzLDMzLDMzLC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuXG4uY2VudGVyIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XG4gICAgcGFkZGluZy1yaWdodDogMXZ3O1xufVxuXG4uZGVzX2ZpZWxkX2NvbXB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLypcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmJ1dHRvbiBiYXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbi5hZGRfYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6MnZ3IDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbi1ib3R0b206IDF2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvcmRlcjowcHg7XG4gICAgZm9udC1mYW1pbHk6IGxhdG87XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgcGFkZGluZzogMXZoIDF2dyAxdmggMXZ3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDMyLCAzMik7XG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiKDI1NSwgMCwgMCk7XG59XG5cbmJ1dHRvbjphY3RpdmV7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYigxNTUsIDE1NSwgMTU1KTtcbn1cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuaDN7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA3dmg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjV2dztcblxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDsgICAgICAgICAgICAgICAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return []; }, { query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AIiG":
/*!******************************************************!*\
  !*** ./src/app/movie-cards/movie-cards.component.ts ***!
  \******************************************************/
/*! exports provided: MovieCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardsComponent", function() { return MovieCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/freeapi.service */ "EZxN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MovieCardsComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nominate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieCardsComponent_div_3_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Movie Nominated");
} }
function MovieCardsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardsComponent_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5._addToList(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieCardsComponent_div_3_div_9_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovieCardsComponent_div_3_ng_template_10_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardsComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showDetails(item_r1.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.Title, "(", item_r1.Year, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.isAdded(item_r1.imdbID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAdded(item_r1.imdbID))("ngIfElse", _r3);
} }
class MovieCardsComponent {
    constructor(_freeapiservice) {
        this._freeapiservice = _freeapiservice;
        this.addToList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showDetailDes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flag = true;
    }
    _addToList(_item) {
        this.addToList.emit(_item);
    }
    showDetails(id) {
        this.showDetailDes.emit(id);
    }
    ngOnChanges(changes) {
        // changes.prop contains the old and the new value...
        if (this.query != undefined)
            if (this.query.length != 0)
                this.refreshData(this.query);
    }
    isAdded(id) {
        if (this.buttonArr != undefined)
            if (this.buttonArr.indexOf(id) == -1) {
                return false;
            }
        return true;
    }
    ngOnInit() {
        if (this.query == undefined)
            this.query = "blade";
        this.refreshData(this.query);
    }
    refreshData(input) {
        this.description = "Searching for \"" + input + "\" ";
        this._freeapiservice.getMoviesByName(input)
            .subscribe((data) => {
            this.listItems = data.Search;
            this.description = "Showing " + this.listItems.length + " result(s) for \"" + input + "\" ";
            for (let i in this.listItems) {
                if (this.listItems[i].Poster == "N/A") {
                    this.listItems[i].Poster = "https://www.altavod.com/assets/images/poster-placeholder.png";
                }
            }
        });
    }
}
MovieCardsComponent.ɵfac = function MovieCardsComponent_Factory(t) { return new (t || MovieCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"])); };
MovieCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCardsComponent, selectors: [["app-movie-cards"]], inputs: { query: "query", buttonArr: "buttonArr" }, outputs: { addToList: "addToList", showDetailDes: "showDetailDes" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["id", "description"], [1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "des_field_comp"], [1, "item_image"], [1, "center", 3, "src"], [1, "button_bar"], [1, "add_button"], [1, "add_to_cart", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "Details", 3, "click"]], template: function MovieCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovieCardsComponent_div_3_Template, 14, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%]{\n    padding: 50px;\n    display: grid;\n    grid-template-columns: 18vw 18vw 18vw;\n    grid-template-rows: auto;\n    gap: 4vw;\n}\n\n\n.item[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px rgba(33,33,33,.2);\n    transition: box-shadow .3s;\n    border-radius: 5px;\n}\n.item[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 11px rgba(33,33,33,.2);\n}\n.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    grid-row: 2/3;\n    font-style: 'Lato';\n    font-weight: 400; \n    font-size: 1.6vw;\n    padding: 1vw;\n    word-wrap: break-word;\n}\n.center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-height: 50vh;\n  }\n.des_field_comp[_ngcontent-%COMP%]{\n   display: grid;\n   grid-template-rows: 3fr 0.5fr 0.5fr;\n}\n.item_image[_ngcontent-%COMP%]{\n    padding: 1vw;\n    grid-row: 1/2;\n}\n\n.button_bar[_ngcontent-%COMP%]{\n    padding: 1vw;\n}\n.add_button[_ngcontent-%COMP%]{\n    float: right;\n}\n.Details[_ngcontent-%COMP%]{\n    float: left;\n}\n.Details[_ngcontent-%COMP%]:hover:enabled{\n    color: rgb(255, 255, 255);\n    background-color:blue;\n    box-shadow: 0 0 11px rgb(105, 105, 255);\n}\nbutton[_ngcontent-%COMP%]{\n    margin-bottom: 1vw;\n    margin-right: 1vh;\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-weight: 300;\n    font-style: italic;\n    font-size: 1vw;\n    height: 50px;\n    padding: 10px 5px 10px;\n    color: black;\n    transition: 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover:enabled{\n    color: rgb(255, 255, 255);\n    background-color:goldenrod;\n    box-shadow: 0 0 11px goldenrod;\n}\nbutton[_ngcontent-%COMP%]:active:enabled{\n    color: white;\n    background-color:  green;\n    box-shadow: 0 0 11px greenyellow;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n    background: rgb(0, 202, 0);\n    box-shadow: 0 0 15px greenyellow;\n    color: white;\n}\n\n#description[_ngcontent-%COMP%]{\n    margin-left:2vw;\n    font-family: lato;\n    font-weight: 200;\n    font-size: 5vh;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7O0NBSUM7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixRQUFRO0FBQ1o7QUFFQTs7OztDQUlDO0FBR0Q7Ozs7Q0FJQztBQUNEO0lBQ0kscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHNDQUFzQztBQUMxQztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFFRjtHQUNHLGFBQWE7R0FDYixtQ0FBbUM7QUFDdEM7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7Ozs7Q0FJQztBQUNEO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBQ0E7Ozs7Q0FJQztBQUVEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJtb3ZpZS1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc3R5bGluZyB0aGUgbWFpbiB2aWV3IFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTh2dyAxOHZ3IDE4dnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdhcDogNHZ3O1xufVxuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuXG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc3R5bGluZyB0aGUgY2FyZHMgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLml0ZW17XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpO1xufVxuXG4uaXRlbSBoM3tcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGZvbnQtc3R5bGU6ICdMYXRvJztcbiAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICBmb250LXNpemU6IDEuNnZ3O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICB9XG5cbi5kZXNfZmllbGRfY29tcHtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAwLjVmcjtcbn1cblxuLml0ZW1faW1hZ2V7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIGdyaWQtcm93OiAxLzI7XG59XG4vKlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYnV0dG9uIGJhclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5idXR0b25fYmFye1xuICAgIHBhZGRpbmc6IDF2dztcbn1cbi5hZGRfYnV0dG9ue1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLkRldGFpbHN7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5EZXRhaWxzOmhvdmVyOmVuYWJsZWR7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggcmdiKDEwNSwgMTA1LCAyNTUpO1xufVxuXG5idXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm9yZGVyOjBweDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuYnV0dG9uOmhvdmVyOmVuYWJsZWR7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdvbGRlbnJvZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCBnb2xkZW5yb2Q7XG59XG5cbmJ1dHRvbjphY3RpdmU6ZW5hYmxlZHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGdyZWVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IGdyZWVueWVsbG93O1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMDIsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IGdyZWVueWVsbG93O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4jZGVzY3JpcHRpb257XG4gICAgbWFyZ2luLWxlZnQ6MnZ3O1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiA1dmg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-cards',
                templateUrl: './movie-cards.component.html',
                styleUrls: ['./movie-cards.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }]; }, { addToList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showDetailDes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "EZxN":
/*!********************************************!*\
  !*** ./src/app/service/freeapi.service.ts ***!
  \********************************************/
/*! exports provided: freeapiservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeapiservice", function() { return freeapiservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class freeapiservice {
    //now we will inject the httpt client using thr constuctor
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.apiKey = "be13071f";
        this.url = `https://www.omdbapi.com/?type=movie&apikey=${this.apiKey}&`; //DRY principle
    }
    ;
    getMoviesByName(name) {
        return this.httpclient.get(this.url + "s=" + name);
    }
    getMovieDetail(imdbID) {
        return this.httpclient.get(this.url + "i=" + imdbID);
    }
}
freeapiservice.ɵfac = function freeapiservice_Factory(t) { return new (t || freeapiservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
freeapiservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: freeapiservice, factory: freeapiservice.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](freeapiservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "J8IZ":
/*!**********************************!*\
  !*** ./src/app/classes/items.ts ***!
  \**********************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
class items {
}


/***/ }),

/***/ "NH0R":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 4, vars: 0, consts: [["id", "banner"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 5 nominations have been made");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " please drop a movie to add more\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#banner[_ngcontent-%COMP%]{\n    background-color: rgb(1, 184, 1);\n    color: white;\n    padding: 2vh;\n    word-wrap: break-word;\n\n    position: fixed;\n    bottom: 10px;\n    left:10px;\n\n    font-family: lato;\n    font-weight: 600;\n    font-size: 1.3vw;\n\n    z-index: 2000;\n\n    box-shadow: 0 0 11px greenyellow;\n\n    border-radius: 5px;\n\n    transition: all 0.2;\n}\n\n#banner[_ngcontent-%COMP%]:hover{\n    box-shadow: 0 0 20px greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCOztJQUVyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFNBQVM7O0lBRVQsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLGFBQWE7O0lBRWIsZ0NBQWdDOztJQUVoQyxrQkFBa0I7O0lBRWxCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYW5uZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDE4NCwgMSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJ2aDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6MTBweDtcblxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjN2dztcblxuICAgIHotaW5kZXg6IDIwMDA7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCBncmVlbnllbGxvdztcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI7XG59XG5cbiNiYW5uZXI6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggZ3JlZW55ZWxsb3c7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-cards/movie-cards.component */ "AIiG");
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-view/detail-view.component */ "yWVg");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");









function AppComponent_app_detail_view_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-detail-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goBack", function AppComponent_app_detail_view_0_Template_app_detail_view_goBack_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idString", ctx_r0.movieObjConduit);
} }
function AppComponent_app_banner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
} }
class AppComponent {
    constructor() {
        this.title = 'movie-awards';
        // this way in the future it is much easier to add or remove new componenets
        this.disableButtonsArray = []; // the implement the disabled buttons feature
        // if the imdbID in int he array the button will be disabled
        this.banner = false;
        // banner to alert useres arter they have selected 5 movies
        this.detailView = false;
    }
    // conduit to move imdb id form movei cards to deatils component
    updateView(input) {
        this.changeViewConduit = input;
    }
    // go back to main view form details
    goBack(event) {
        this.detailView = false;
    }
    // go to detials
    showDetails(id) {
        this.movieObjConduit = id;
        this.detailView = true;
    }
    // append the side bar with selected movies
    addToSideBar(_item) {
        if (this.disableButtonsArray.length == 5) {
            this.banner = true;
            setTimeout(() => {
                this.banner = false;
            }, 3000);
        }
        else {
            this.disableButtonsArray.push(_item.imdbID);
            if (this.disableButtonsArray.length == 5) {
                this.banner = true;
                setTimeout(() => {
                    this.banner = false;
                }, 3000);
            }
            this.changeChoiceConduit = { "movie": _item, "timestamp": Date.now() };
        }
    }
    // remove movie form side bar
    dropFromSideBar(id) {
        for (let i in this.disableButtonsArray) {
            if (this.disableButtonsArray[i] == id) {
                this.disableButtonsArray.splice(parseInt(i, 10), 1);
                break;
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 5, consts: [["id", "details", 3, "idString", "goBack", 4, "ngIf"], ["id", "fixed_elements"], [3, "updateView"], [3, "query", "drop"], [3, "buttonArr", "query", "showDetailDes", "addToList"], [4, "ngIf"], ["id", "details", 3, "idString", "goBack"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_detail_view_0_Template, 1, 1, "app-detail-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateView", function AppComponent_Template_app_search_updateView_3_listener($event) { return ctx.updateView($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-side-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function AppComponent_Template_app_side_bar_drop_4_listener($event) { return ctx.dropFromSideBar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-movie-cards", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showDetailDes", function AppComponent_Template_app_movie_cards_showDetailDes_5_listener($event) { return ctx.showDetails($event); })("addToList", function AppComponent_Template_app_movie_cards_addToList_5_listener($event) { return ctx.addToSideBar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_banner_6_Template, 1, 0, "app-banner", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detailView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("query", ctx.changeChoiceConduit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonArr", ctx.disableButtonsArray)("query", ctx.changeViewConduit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.banner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_5__["MovieCardsComponent"], _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_6__["DetailViewComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"]], styles: ["#fixed_elements[_ngcontent-%COMP%]{\n    background-color: white;\n    border-bottom: 1px solid rgb(214, 214, 214);\n    position: sticky;\n    top: 0px;\n    padding-bottom: 1vh;\n    width:70vw;\n    z-index: 100;\n}\n\n#details[_ngcontent-%COMP%]{\n    z-index: 2000;\n    position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpeGVkX2VsZW1lbnRze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xuICAgIHdpZHRoOjcwdnc7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4jZGV0YWlsc3tcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _classes_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/items */ "J8IZ");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/freeapi.service */ "EZxN");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-cards/movie-cards.component */ "AIiG");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo/logo.component */ "ySb0");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail-view/detail-view.component */ "yWVg");
// angular modules==========================================




//==========================================================
//services==================================================


//==========================================================
//components================================================








//==========================================================
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _service_freeapi_service__WEBPACK_IMPORTED_MODULE_5__["freeapiservice"],
        _classes_items__WEBPACK_IMPORTED_MODULE_4__["items"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_7__["MovieCardsComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _logo_logo_component__WEBPACK_IMPORTED_MODULE_9__["LogoComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
        _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_12__["DetailViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _movie_cards_movie_cards_component__WEBPACK_IMPORTED_MODULE_7__["MovieCardsComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_9__["LogoComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_10__["SideBarComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
                    _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_12__["DetailViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [
                    _service_freeapi_service__WEBPACK_IMPORTED_MODULE_5__["freeapiservice"],
                    _classes_items__WEBPACK_IMPORTED_MODULE_4__["items"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SearchComponent {
    constructor() {
        this.updateView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = '';
        this.name = '';
    }
    ngOnInit() {
    }
    onKey(event) {
        this.values = '';
        this.values = event.target.value;
        if (event.keyCode === 13) { // submit request on pressing the enter key
            this.callApi(this.values);
        }
    }
    callApi(input) {
        if (input.length == 0) {
            this.name = "";
        }
        else {
            this.name = " Loading results for " + input;
            this.updateView.emit(input);
        }
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { updateView: "updateView" }, decls: 3, vars: 0, consts: [[1, "search-container"], ["type", "text", "placeholder", "search movie by title...", 3, "keydown"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SearchComponent_Template_input_keydown_2_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["input[_ngcontent-%COMP%]{\n    font-family: lato;\n    font-weight: 200;\n    font-size: 3vh;\n    font-style: italic;\n    color: rgb(75, 74, 74);\n    background-color: rgb(223, 223, 223);\n    border: none;\n    height: 4vh;\n    width: 60vw;\n    border-radius: 7px;\n    padding: 1vw;\n}\nbody[_ngcontent-%COMP%]{\n    margin: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiByZ2IoNzUsIDc0LCA3NCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICB3aWR0aDogNjB2dztcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZzogMXZ3O1xufVxuYm9keXtcbiAgICBtYXJnaW46IDJ2dztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return []; }, { updateView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ySb0":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 1, vars: 0, consts: [["id", "logo", "src", "../../assets/logo.svg"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\n\n#logo[_ngcontent-%COMP%]{\n    max-height: 7.8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrSUFBK0k7O0FBRS9JO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4jbG9nb3tcbiAgICBtYXgtaGVpZ2h0OiA3Ljh2aDtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yWVg":
/*!******************************************************!*\
  !*** ./src/app/detail-view/detail-view.component.ts ***!
  \******************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/freeapi.service */ "EZxN");




class DetailViewComponent {
    constructor(_freeapiservice) {
        this._freeapiservice = _freeapiservice;
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "";
        this.image = "";
        this.plot = "";
        this.actors = "";
        this.language = "";
    }
    _goBack() {
        this.goBack.emit("true");
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // changes.prop contains the old and the new value...
        this.fetchDetails(this.idString);
    }
    fetchDetails(id) {
        this._freeapiservice.getMovieDetail(id)
            .subscribe((data) => {
            this._movieObj = data;
            console.log(this._movieObj.Title);
            if (this._movieObj.Poster == "N/A") {
                this.image = "https://www.flicks.co.nz/img/placeholders/poster-placeholder.jpg";
            }
            else {
                this.image = this._movieObj.Poster;
            }
            this.plot = this._movieObj.Plot;
            this.actors = this._movieObj.Actors;
            this.language = this._movieObj.Language;
        });
    }
}
DetailViewComponent.ɵfac = function DetailViewComponent_Factory(t) { return new (t || DetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"])); };
DetailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailViewComponent, selectors: [["app-detail-view"]], inputs: { idString: "idString" }, outputs: { goBack: "goBack" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 6, consts: [["id", "container"], ["id", "heading"], ["id", "movie_image", 3, "src"], ["id", "text_container"], ["id", "plot"], ["id", "actors"], ["id", "lang"], ["id", "back", 3, "click"], ["id", "backdrop_image", 3, "src"]], template: function DetailViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailViewComponent_Template_button_click_17_listener() { return ctx._goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.plot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["#container[_ngcontent-%COMP%]{\n    padding:1vw;\n    display: grid;\n    grid-template-rows: (8,1fr);\n    grid-template-columns: (8,1fr);\n}\n\n#backdrop_image[_ngcontent-%COMP%]{\n    position: absolute;\n    z-index: -1;\n    top:0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    filter: blur(50px);\n    -webkit-filter: blur(50px);\n}\n\n@-moz-document url-prefix() {\n    #text_container{\n        background-color: rgba(0, 0, 0, 0.301);\n        padding: 5vh;\n        grid-row: 2/-1;\n        grid-column: 5/7;\n        border-radius: 12px;\n        color:white;\n        font-family: lato;\n    }\n  }\n\n#text_container[_ngcontent-%COMP%]{\n    padding: 5vh;\n    grid-row: 2/-1;\n    grid-column: 5/7;\n    backdrop-filter: brightness(60%);\n    -webkit-backdrop-filter: brightness(60%);\n    border-radius: 12px;\n    color:white;\n    font-family: lato;\n}\n\n#movie_image[_ngcontent-%COMP%]{\n    grid-column: 2/4;\n    grid-row: 3/-1;\n    padding:2vw;\n\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 3vw;\n    font-weight: 200;\n}\n\np[_ngcontent-%COMP%]{\n    font-size: 2vw;\n    font-weight: 400;\n}\n\n#back[_ngcontent-%COMP%]{\n    position: fixed;\n    bottom: 6vh;\n    left:2vw;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin-bottom: 1vw;\n    margin-right: 1vh;\n    white-space: normal;\n    border:0px;\n    font-family: lato;\n    font-weight: 300;\n    font-style: italic;\n    font-size: 2vw;\n    height: 50px;\n    color: black;\n    transition: 0.3s;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: rgb(255, 255, 255);\n    background-color:red;\n    box-shadow: 0 0 11px rgb(255, 48, 48);\n}\n\nbutton[_ngcontent-%COMP%]:active{\n    color: white;\n    background-color:  green;\n    box-shadow: 0 0 11px greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLEtBQUs7SUFDTCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEMsWUFBWTtRQUNaLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7RUFDRjs7QUFFRjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoiZGV0YWlsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XG4gICAgcGFkZGluZzoxdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICg4LDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAoOCwxZnIpO1xufVxuXG4jYmFja2Ryb3BfaW1hZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmlsdGVyOiBibHVyKDUwcHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDUwcHgpO1xufVxuXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICN0ZXh0X2NvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwMSk7XG4gICAgICAgIHBhZGRpbmc6IDV2aDtcbiAgICAgICAgZ3JpZC1yb3c6IDIvLTE7XG4gICAgICAgIGdyaWQtY29sdW1uOiA1Lzc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogbGF0bztcbiAgICB9XG4gIH1cblxuI3RleHRfY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDV2aDtcbiAgICBncmlkLXJvdzogMi8tMTtcbiAgICBncmlkLWNvbHVtbjogNS83O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogbGF0bztcbn1cblxuI21vdmllX2ltYWdle1xuICAgIGdyaWQtY29sdW1uOiAyLzQ7XG4gICAgZ3JpZC1yb3c6IDMvLTE7XG4gICAgcGFkZGluZzoydnc7XG5cbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxucHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5cbiNiYWNre1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDZ2aDtcbiAgICBsZWZ0OjJ2dztcbn1cblxuXG5idXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xuICAgIG1hcmdpbi1yaWdodDogMXZoO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm9yZGVyOjBweDtcbiAgICBmb250LWZhbWlseTogbGF0bztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYigyNTUsIDQ4LCA0OCk7XG59XG5cbmJ1dHRvbjphY3RpdmV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICBncmVlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCBncmVlbnllbGxvdztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-view',
                templateUrl: './detail-view.component.html',
                styleUrls: ['./detail-view.component.css']
            }]
    }], function () { return [{ type: _service_freeapi_service__WEBPACK_IMPORTED_MODULE_1__["freeapiservice"] }]; }, { idString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], goBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map