(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\"> {{util.getString('EDIT')}} </ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\"> {{util.getString('DELETE')}} </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n   Authors : initappz (Rahul Jograna)\r\n  Website : https://initappz.com/\r\n  App Name : ionic 5 groceryee app\r\n  Created : 10-Sep-2020\r\n  This App Template Source code is licensed as per the\r\n  terms found in the Website https://initappz.com/license\r\n  Copyright and Good Faith Purchasers © 2020-present initappz.\r\n -->\r\n<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title *ngIf=\"from ==='cart'\"> {{util.getString('Delivery Address')}} </ion-title>\r\n    <ion-title *ngIf=\"from ==='account'\"> {{util.getString('Manage Address')}} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"group\">\r\n    <div class=\"mainContent\">\r\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\r\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n        {{util.getString('Add Address')}}\r\n      </ion-button>\r\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\r\n        [style.backgroundImage]=\"'url(assets/imgs/nothing.png)'\">\r\n      </div>\r\n      <div *ngFor=\"let item of dummy\">\r\n        <ion-list lines=\"none\">\r\n          <ion-item>\r\n            <ion-thumbnail slot=\"start\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n              <h3>\r\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n              </h3>\r\n              <p>\r\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n              </p>\r\n              <p>\r\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n      <ion-list *ngIf=\"from ==='cart'\">\r\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\r\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\r\n            <ion-label class=\"title\">{{item.title}} <br>\r\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span></ion-label>\r\n            <!-- <ion-label class=\"name\"></ion-label> -->\r\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n      <div *ngIf=\"from ==='account'\">\r\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\r\n          <ion-label class=\"title\">{{item.title}}</ion-label>\r\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\r\n          </ion-label>\r\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\r\n          </ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n   \r\n\r\n\r\n\r\n\r\n  <div class=\"main_content_div\">\r\n    <div class=\"main_div\">\r\n      <div class=\"info_div\">\r\n        <div class=\"user_img\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+pscimage+'),url(assets/imgs/user.png)'}\"\r\n          (click)=\"uploadPriscription()\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdml4Y3lwYW5kaXQvRG93bmxvYWRzL21lZGljb2ZpbmFsL0FwcF9jb2RlL1VzZXJfYXBwL3NyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qLyIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovIl19 */");

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let PopoverComponent = class PopoverComponent {
    constructor(popoverController, util) {
        this.popoverController = popoverController;
        this.util = util;
    }
    ngOnInit() { }
    select(type) {
        this.popoverController.dismiss(type);
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/popover/popover.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], PopoverComponent);



/***/ }),

/***/ "./src/app/pages/address/address-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/pages/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let AddressPageModule = class AddressPageModule {
};
AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/pages/address/address.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-label {\n  display: block;\n}\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n.group .mainContent {\n  padding: 5px 10px;\n}\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n.group .mainContent .list .name {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 20%;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  height: 45px;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy92aXhjeXBhbmRpdC9Eb3dubG9hZHMvbWVkaWNvZmluYWwvQXBwX2NvZGUvVXNlcl9hcHAvc3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksY0FBQTtBREVKO0FDQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBREdKO0FDRkk7RUFDSSxpQkFBQTtBRElSO0FDSFE7RUFDSSxpQkFBQTtBREtaO0FDSFE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FES1o7QUNIUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBREdaO0FDRlk7RUFDSSxhQUFBO0FESWhCO0FDRlk7RUFDSSxjQUFBO0FESWhCO0FDRlk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QURJaEI7QUNGWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QURJaEI7QUNGWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURJaEI7QUNDQTtFQUNJLGFBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7QURDUjtBQ0NJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEQ1I7QUNDSTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRENSO0FDQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QURDWjtBQ0NRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FEQ1o7QUNDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRENaO0FDQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEQ2hCO0FDQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBRENoQjtBQ0lJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREZSO0FDSUk7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FERlI7QUNHUTtFQUNJLFdBQUE7QUREWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLnNhdmVkVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLm5vRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC5zY3JvbGwtaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLm5hbWUge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLm1vcmVJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDFweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmltYWdlX2RpdiB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaWNuIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg5OTJBQTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNDU0RDYyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24gLmxvZ291dF9pY29uIHtcbiAgd2lkdGg6IDEycHg7XG59IiwiLypcclxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXHJcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xyXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXHJcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXHJcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxyXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcclxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXHJcbiovXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZ3JvdXAge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAubWFpbkNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgLnNhdmVkVGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubm9EYXRhe1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zY3JvbGwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1vcmVJY29ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tYWluX2NvbnRlbnRfZGl2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLm1haW5fZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvLyBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLnVzZXJfaW1ne1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5uYW1le1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpOyAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgLmltYWdlX2RpdntcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljbntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50X2RpdntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0RDYyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG5fZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xyXG4gICAgICAgIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XHJcbiAgICAgICAgLmxvZ291dF9pY29ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/address/address.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/address/address.page.ts ***!
  \***********************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/









let AddressPage = class AddressPage {
    constructor(navCtrl, api, util, router, route, popoverController, actionSheetController, camera, cart, platform) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.route = route;
        this.popoverController = popoverController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.cart = cart;
        this.platform = platform;
        this.myaddress = [];
        this.dummy = Array(10);
        this.cover = '';
        this.pscimage = '';
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.from) {
                this.from = data.from;
            }
        });
        this.getAddress();
        this.util.subscribeNewAddress().subscribe((data) => {
            console.log('subscribe master address');
            this.getAddress();
        });
        this.pscimage = '';
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    getAddress() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.myaddress = [];
        this.dummy = Array(10);
        this.api.post_private('address/getByUid', param).subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data.length) {
                this.myaddress = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ionViewWillEnter() {
        // this.getAddress();
    }
    addNew() {
        this.router.navigate(['add-address']);
    }
    selectAddress() {
        if (this.from === 'cart') {
            const selecte = this.myaddress.filter(x => x.id === this.selectedAddress);
            const item = selecte[0];
            console.log('item', item);
            this.cart.deliveryAddress = item;
            this.cart.calcuate();
            this.router.navigate(['/tabs/cart/payment']);
        }
    }
    openMenu(item, events) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                event: events,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data) {
                    if (data.data === 'edit') {
                        const navData = {
                            queryParams: {
                                from: 'edit',
                                data: JSON.stringify(item)
                            }
                        };
                        this.router.navigate(['add-address'], navData);
                    }
                    else if (data.data === 'delete') {
                        console.log(item);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: 'Are you sure?',
                            text: 'to delete this address',
                            icon: 'question',
                            confirmButtonText: 'Yes',
                            backdrop: false,
                            background: 'white',
                            showCancelButton: true,
                            showConfirmButton: true,
                            cancelButtonText: 'cancel'
                        }).then(data => {
                            console.log(data);
                            if (data && data.value) {
                                this.util.show();
                                const param = {
                                    id: item.id
                                };
                                this.api.post_private('address/deleteList', param).subscribe(info => {
                                    console.log(info);
                                    this.util.hide();
                                    this.getAddress();
                                }, error => {
                                    console.log(error);
                                    this.util.hide();
                                    this.util.errorToast(this.util.getString('Something went wrong'));
                                });
                            }
                        });
                    }
                }
            });
            yield popover.present();
        });
    }
    upload(type) {
        try {
            const options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            if (this.platform.is('cordova')) {
                this.camera.getPicture(options).then((url) => {
                    console.log('url-========>', url);
                    this.util.show('uploading');
                    const alpha = {
                        img: url,
                        type: 'jpg'
                    };
                    console.log('parma==>', alpha);
                    this.api.nativePost('users/upload_file', alpha).then((data) => {
                        this.util.hide();
                        console.log('data======', JSON.parse(data.data));
                        const info = JSON.parse(data.data);
                        // this.cover = info.data;
                        this.pscimage = info.data;
                        console.log('cover image================>', this.pscimage);
                        // const param = {
                        //   cover: this.cover,
                        //   id: localStorage.getItem('uid')
                        // };
                        // this.util.show(this.util.getString('updating...'));
                        // this.api.post('users/edit_profile', param).subscribe((update: any) => {
                        //   this.util.hide();
                        //   console.log(update);
                        // }, error => {
                        //   this.util.hide();
                        //   console.log(error);
                        //   this.util.errorToast(this.util.getString('Something went wrong'));
                        // });
                    }, error => {
                        console.log(error);
                        this.util.hide();
                        this.util.errorToast(this.util.getString('Something went wrong'));
                    }).catch(error => {
                        console.log(error);
                        this.util.hide();
                        this.util.errorToast(this.util.getString('Something went wrong'));
                    });
                });
            }
        }
        catch (error) {
            console.log('error', error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        }
    }
    uploadPriscription() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.getString('Choose from'),
                buttons: [{
                        text: this.util.getString('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('camera clicked');
                            this.upload('camera');
                        }
                    }, {
                        text: this.util.getString('Gallery'),
                        icon: 'images',
                        handler: () => {
                            console.log('gallery clicked');
                            this.upload('gallery');
                        }
                    }, {
                        text: this.util.getString('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
AddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.page.scss */ "./src/app/pages/address/address.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=address-address-module-es2015.js.map