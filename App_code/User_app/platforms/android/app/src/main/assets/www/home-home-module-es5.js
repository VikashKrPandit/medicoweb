function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers ?? 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\" (click)=\"changeCity()\" class=\"ion-text-left\">\n      <div class=\"ion-activatable\" *ngIf=\"util && util.city && util.city.name\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        {{ util.city.name }}\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"flx\">\n    <ion-searchbar [placeholder]=\"util.getString('Search  products')\" [(ngModel)]=\"terms\" inputmode=\"text\" type=\"search\"\n      (keyup.enter)=\"search(q.value)\" (ionChange)=\"onSearchChange($event)\" #q [debounce]=\"250\" mode=\"ios\"\n      showCancelButton=\"never\">\n    </ion-searchbar>\n    <ion-button (click)=\"search(terms)\" expand=\"block\" fill=\"clear\" size=\"small\">\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-button>\n\n  </div>\n  <div class=\"searchList\" *ngIf=\"products?.length\">\n    <ion-item *ngFor=\"let item of products\" (click)=\"goToSingleProduct(item)\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-icon name=\"arrow-redo-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"haveStores === true\">\n\n    <div class=\"cateLbl\">\n      <ion-label class=\"all\"> {{util.getString('All Categories')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"goToCatrgory()\">{{util.getString('View All')}}<ion-icon\n          name=\"chevron-forward-outline\" color=\"primary\">\n        </ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"sliders\">\n      <div class=\"categoryIcon\" *ngFor=\"let item of allcates\" (click)=\"subCate(item)\">\n        <div class=\"imgs\">\n          <img [src]=\"api.mediaURL + item.cover\" class=\"icon\">\n        </div>\n        <ion-label class=\"name\">{{ (item.name.length>10)? (item.name | slice:0:10)+'..':(item.name) }}</ion-label>\n      </div>\n\n      <div *ngFor=\"let item of dummyCates\" style=\"margin: 0px 10px;\">\n        <ion-skeleton-text animated style=\"width: 35px;height: 35px;border-radius: 50%;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%;height:10px;\"></ion-skeleton-text>\n      </div>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-label class=\"all\"> {{util.getString('Exclusive Offers')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"allOffers()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- Top Banners -->\n    <div class=\"slider_div\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of dummyBanners\">\n          <!-- <div class=\"card\"> -->\n          <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          <!-- </div> -->\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of banners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyTopProducts?.length && topProducts?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Picked')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topicked()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- NEW -->\n    <div class=\"listView\">\n      <ion-slides [options]=\"slideTops\">\n        <ion-slide *ngFor=\"let item of dummyTopProducts\">\n          <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of topProducts;let i = index;\">\n          <div class=\"box\">\n            <div class=\"image_div\" (click)=\"goToSingleProduct(item)\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n              <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n              <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n              </div>\n              <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n              <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n            </div>\n            <div class=\"details\">\n              <ion-label class=\"pro_name\" (click)=\"goToSingleProduct(item)\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}</ion-label>\n              <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span> {{\n                    item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                    item.variations[0].items[item.variant].title ?\n                    item.variations[0].items[item.variant].title : ''}} </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].price ?\n                       item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount ?\n                      item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].price ?\n                       item.variations[0].items[item.variant].price : 0}}\n                      </span>\n\n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount ?\n                      item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div>\n              <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n                <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n                <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n              </ion-label>\n              <div *ngIf=\"item.size ==='0'\">\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"goToSingleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n                </ion-label>\n              </div>\n              <div class=\"small_flex\">\n                <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.in_stoke === '1'\">\n                  <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                    {{util.getString('Add')}}\n                    <ion-ripple-effect></ion-ripple-effect>\n                  </div>\n                </div>\n                <div *ngIf=\"item.in_stoke !== '1'\" style=\"height:30px\"></div>\n                <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(item.id)\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                  <ion-label>{{getQuanity(item.id)}}</ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- NEW -->\n\n    <!-- Start Top Store -->\n    <div class=\"cateLbl\" *ngIf=\"haveStores && stores?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Stores')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topStores()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"topProducts\" *ngIf=\"haveStores && stores?.length\">\n      <ion-slides [options]=\"slideOpts\">\n\n        <ion-slide *ngFor=\"let item of stores;let i = index;\">\n          <div class=\"content_div\">\n            <div class=\"card_div\">\n              <div class=\"image_div\" (click)=\"openStore(item)\"\n                [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n                <img src=\"assets/imgs/open.png\" class=\"isOpen\" alt=\"Veg\" *ngIf=\"item.isOpen && item.isClosed ==='1'\">\n                <img src=\"assets/imgs/close.png\" class=\"isOpen\" alt=\"Non Veg\"\n                  *ngIf=\"!item.isOpen || item.isClosed === '0'\">\n              </div>\n              <div class=\"desc_div\" (click)=\"openStore(item)\">\n                <ion-label class=\"pro_name\">\n                  {{ (item.name.length>12)? (item.name | slice:0:12)+'..':(item.name) }}</ion-label>\n                <!-- <ion-label class=\"pro_detail\">\n                  {{ (item.address.length>20)? (item.address | slice:0:20)+'..':(item.address) }}\n                </ion-label> -->\n                <ion-label class=\"price_lbl\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label>\n\n                <div class=\"small_flex\">\n                  <div class=\"btnBtm\">\n                    <div class=\"ion-activatable ripple-parent\">\n                      {{util.getString('View')}}\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- End Top Store -->\n\n    <!-- Between Banner -->\n    <div class=\"slider_div\" *ngIf=\"!betweenDummy?.length && betweenBanners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of betweenDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of betweenBanners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- Bottom Banner -->\n    <div class=\"slider_div\" *ngIf=\"!bottomDummy?.length && bottomBanners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of bottomDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of bottomBanners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div *ngFor=\"let item of dummyCates\" class=\"catess\">\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\">\n          <div class=\"bg_img\">\n            <ion-skeleton-text animated style=\"width: 100%;height:80px;\"></ion-skeleton-text>\n          </div>\n          <p class=\"subCateName\">\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngFor=\"let item of categories\" class=\"catess\">\n      <p class=\"cateName\">{{item.name}}</p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let sub of item.subCates\" class=\"bgColor\" (click)=\"goToProductList(sub)\">\n          <div class=\"bg_img\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+sub.cover+'),url(assets/bg.png)'}\">\n          </div>\n          <p class=\"subCateName\"> {{sub.name}} </p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"haveStores === false\" class=\"nothing\">\n    <img src=\"assets/imgs/nothing.png\" alt=\"\" srcset=\"\" class=\"imgs\">\n    <p class=\"ion-text-center bolder\"> {{util.getString('No Stores Found Near You!')}} </p>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    */


    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers ?? 2020-present initappz.\n*/\nion-title {\n  text-align: left !important;\n}\n.searchbar {\n  padding: 0px 10px;\n}\n.flx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 70px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .cateLbl {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .cateLbl .all {\n  font-weight: bold;\n  font-family: muli-bold;\n}\n.main_content_div .cateLbl .view {\n  font-family: muli-bold;\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .cateLbl .view ion-icon {\n  font-size: 16px;\n}\n.main_content_div .sliders {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  padding: 16px 0px;\n}\n.main_content_div .sliders .categoryIcon {\n  padding: 0px 5px;\n  text-align: center;\n}\n.main_content_div .sliders .categoryIcon .imgs {\n  border-radius: 50%;\n  padding: 5px;\n  line-height: 60px;\n  height: 60px;\n  width: 60px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.main_content_div .sliders .categoryIcon .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n}\n.main_content_div .sliders .categoryIcon .name {\n  font-size: 10px;\n  font-weight: bold;\n  color: gray;\n  margin: 10px 0px;\n}\n.main_content_div .slider_div {\n  margin-top: 15px;\n}\n.main_content_div .slider_div .card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .slider_div .card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .slider_div .card .back_image .overlay_div {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70%;\n  right: 0;\n  padding: 10px;\n}\n.main_content_div .slider_div .card .back_image .overlay_div ion-label {\n  color: white;\n  text-align: right;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n  width: 100%;\n}\n.main_content_div .content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n  margin-right: 10px;\n}\n.main_content_div .content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.main_content_div .content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.main_content_div .content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #421b9e;\n  border-radius: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .listView {\n  margin: 10px 0px;\n}\n.main_content_div .listView .box {\n  border: 1px solid lightgray;\n  width: 100%;\n}\n.main_content_div .listView .box .image_div {\n  height: 80px;\n  width: 95%;\n  min-width: 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 5px;\n}\n.main_content_div .listView .box .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .listView .box .image_div .percent {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background: #f27474;\n  left: 5px;\n  top: 2px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .listView .box .image_div .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.main_content_div .listView .box .image_div .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .listView .box .details {\n  padding: 5px 10px;\n  text-align: left;\n}\n.main_content_div .listView .box .details .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .listView .box .details .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .listView .box .details .pro_name {\n  font-size: 12px;\n  color: gray;\n}\n.main_content_div .listView .box .details .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .listView .box .details .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .small_flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 15px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #421b9e;\n  border-radius: 5px;\n}\n.main_content_div .listView .box .details .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .listView .box .details .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .listView .box .details .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .catess .cateName {\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  background: #d0e3e3;\n  padding: 5px;\n  margin: 0px;\n  margin-top: 10px;\n}\n.main_content_div .catess .bgColor {\n  background: ivory;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .catess .bgColor .bg_img {\n  height: 80px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  position: relative;\n}\n.main_content_div .catess .bgColor .subCateName {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n}\n.nothing {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.nothing .imgs {\n  height: 100px;\n  width: 100px;\n}\n.nothing .bolder {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9Vc2Vycy92aXhjeXBhbmRpdC9Eb3dubG9hZHMvbWVkaWNvZmluYWwvQXBwX2NvZGUvVXNlcl9hcHAvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0csMkJBQUE7QURFSDtBQ0FBO0VBQ0ksaUJBQUE7QURHSjtBQ0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRElKO0FDREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FESUo7QUNGSTtFQUNJLGNBQUE7QURJUjtBQ0RJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QURHUjtBQ0RRO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBREdaO0FDRFE7RUFDSSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBREdaO0FDRFk7RUFDRSxlQUFBO0FER2Q7QUNFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURBUjtBQ0VRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBREFaO0FDRVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBREFoQjtBQ0VZO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBRERoQjtBQ0lZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FERmhCO0FDT0k7RUFDSSxnQkFBQTtBRExSO0FDT1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRExaO0FDT1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNB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b250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmZseCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZUxibCAuYWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZUxibCAudmlldyB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlTGJsIC52aWV3IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIC5jYXRlZ29yeUljb24ge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5pbWdzIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIC5jYXRlZ29yeUljb24gLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIC5jYXRlZ29yeUljb24gLm5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2UgLm92ZXJsYXlfZGl2IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA3MCU7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2UgLm92ZXJsYXlfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9mZmVyX3RhZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZfbGJsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6IDRweDtcbiAgbGVmdDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAuaXNPcGVuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnZhcmlhbnQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19kZXRhaWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNDIxYjllO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1pbi13aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiAubm90SW5TdG9rZSB7XG4gIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiAubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCAuc2VsZWN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSAuc2VsZWN0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJvX25hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuc21hbGxfZmxleCAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuc21hbGxfZmxleCAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzQyMWI5ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLmFic19hZGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmNhdGVOYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZDBlM2UzO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVzcyAuYmdDb2xvciB7XG4gIGJhY2tncm91bmQ6IGl2b3J5O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmJnQ29sb3IgLmJnX2ltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZXNzIC5iZ0NvbG9yIC5zdWJDYXRlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGhpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4ubm90aGluZyAuaW1ncyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5ub3RoaW5nIC5ib2xkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXRpdGxlIHtcbiAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi5zZWFyY2hiYXJ7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uZmx4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNhdGVMYmx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgLmFsbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnZpZXd7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIC5zbGlkZXJzeyAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG5cbiAgICAgICAgLmNhdGVnb3J5SWNvbntcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5pbWdze1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbntcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgICAgIC5jYXJke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAub3ZlcmxheV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgLm9mZmVyX3RhZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vZmZfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIC5raW5ke1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pc09wZW57XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC52YXJpYW50e1xuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb19uYW1le1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByb19kZXRhaWx7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2ZsZXh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgLmJ0bkJ0bXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDIxYjllO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubGlzdFZpZXd7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIC5ib3h7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ub3RJblN0b2tle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbHN7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9fbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW1zS2luZHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWxse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRpY291bnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgLnNtYWxsX2ZsZXh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAuYnRuQnRte1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MjFiOWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXRlc3N7XG4gICAgICAgIC5jYXRlTmFtZXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2QwZTNlMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYmdDb2xvcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGl2b3J5O1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAuYmdfaW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3ViQ2F0ZU5hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbi5ub3RoaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIC5pbWdze1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5ib2xkZXJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    */


    var HomePage = /*#__PURE__*/function () {
      function HomePage(util, router, api, cart, chMod, iab, alertCtrl) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.util = util;
        this.router = router;
        this.api = api;
        this.cart = cart;
        this.chMod = chMod;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.slideOpts = {
          slidesPerView: 1.3
        };
        this.slideTops = {
          slidesPerView: 2,
          spaceBetween: 5,
          slideShadows: true
        };
        this.categories = [];
        this.dummyCates = [];
        this.dummyBanners = [];
        this.banners = [];
        this.bottomDummy = [];
        this.bottomBanners = [];
        this.betweenDummy = [];
        this.betweenBanners = [];
        this.dummyTopProducts = [];
        this.topProducts = [];
        this.products = [];
        this.dummyProducts = [];
        this.dummyStores = [];
        this.stores = [];
        this.allcates = [];
        this.dummyCates = Array(5);
        this.dummyBanners = Array(5);
        this.bottomDummy = Array(5);
        this.betweenDummy = Array(5);
        this.dummyTopProducts = Array(5); // this.dummyProducts = Array(5);

        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];

        if (!this.util.appClosed) {
          this.getInit();
          var pop = localStorage.getItem('pop');

          if (pop && pop != null && pop !== 'null') {
            console.log('alredy poped');
          } else {
            console.log('open pop');
            this.getPopup();
          }
        }

        this.util.subscribeCity().subscribe(function (data) {
          _this.dummyCates = Array(5);
          _this.dummyBanners = Array(5);
          _this.bottomDummy = Array(5);
          _this.betweenDummy = Array(5);
          _this.dummyTopProducts = Array(5);
          _this.allcates = [];
          _this.categories = [];
          _this.banners = [];
          _this.bottomBanners = [];
          _this.betweenBanners = [];
          _this.topProducts = [];
          _this.products = [];

          if (!_this.util.appClosed) {
            _this.getInit();
          }
        });
      }

      _createClass(HomePage, [{
        key: "getPopup",
        value: function getPopup() {
          var _this2 = this;

          this.api.get('popup').subscribe(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var info, alertCtrl;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('popup message', data);

                      if (!(data && data.status === 200)) {
                        _context.next = 9;
                        break;
                      }

                      info = data.data[0];

                      if (!(info && info.shown === '1')) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 6;
                      return this.alertCtrl.create({
                        header: this.util.getString('Message'),
                        message: info.message,
                        mode: 'ios',
                        buttons: [this.util.getString('Cancle'), this.util.getString('Ok')]
                      });

                    case 6:
                      alertCtrl = _context.sent;
                      localStorage.setItem('pop', 'true');
                      alertCtrl.present();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getInit",
        value: function getInit() {
          var _this3 = this;

          this.getCity();
          this.dummyCates = Array(5);
          this.dummyBanners = Array(5);
          this.bottomDummy = Array(5);
          this.betweenDummy = Array(5);
          this.dummyTopProducts = Array(5); // this.dummyProducts = Array(5);

          this.categories = [];
          this.banners = [];
          this.bottomBanners = [];
          this.betweenBanners = [];
          this.topProducts = [];
          this.products = [];
          var param = {
            id: localStorage.getItem('city')
          };
          this.api.post('stores/getByCity', param).subscribe(function (stores) {
            console.log('stores by city', stores);
            _this3.stores = [];

            if (stores && stores.status === 200 && stores.data && stores.data.length) {
              console.log('city found');
              _this3.stores = stores.data;

              _this3.stores.forEach(function (element) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.isOpen(element.open_time, element.close_time);

                        case 2:
                          element['isOpen'] = _context2.sent;

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });

              _this3.util.active_store = _toConsumableArray(new Set(_this3.stores.map(function (item) {
                return item.uid;
              })));
              console.log('store====>>>', _this3.stores);
              _this3.haveStores = true;

              _this3.getCategorys();

              _this3.getBanners();

              _this3.topProducts = [];
              _this3.dummyTopProducts = Array(5);

              _this3.api.post('products/getTopRated', param).subscribe(function (data) {
                console.log('top products', data);
                _this3.dummyTopProducts = [];

                if (data && data.status === 200 && data.data && data.data.length) {
                  data.data.forEach(function (element) {
                    if (element.variations && element.size === '1' && element.variations !== '') {
                      if (function (x) {
                        try {
                          JSON.parse(x);
                          return true;
                        } catch (e) {
                          return false;
                        }
                      }(element.variations)) {
                        element.variations = JSON.parse(element.variations);
                        element['variant'] = 0;
                      } else {
                        element.variations = [];
                        element['variant'] = 1;
                      }
                    } else {
                      element.variations = [];
                      element['variant'] = 1;
                    }

                    if (_this3.cart.itemId.includes(element.id)) {
                      var index = _this3.cart.cart.filter(function (x) {
                        return x.id === element.id;
                      });

                      element['quantiy'] = index[0].quantiy;
                    } else {
                      element['quantiy'] = 0;
                    }

                    if (_this3.util.active_store.includes(element.store_id)) {
                      _this3.topProducts.push(element);
                    }
                  });
                }
              }, function (error) {
                console.log(error);
                _this3.dummyTopProducts = [];
              });

              _this3.api.post('products/getHome', param).subscribe(function (data) {
                console.log('home products', data);
                _this3.dummyTopProducts = [];

                if (data && data.status === 200 && data.data && data.data.length) {
                  data.data.forEach(function (element) {
                    if (element.variations && element.size === '1' && element.variations !== '') {
                      if (function (x) {
                        try {
                          JSON.parse(x);
                          return true;
                        } catch (e) {
                          return false;
                        }
                      }(element.variations)) {
                        element.variations = JSON.parse(element.variations);
                        element['variant'] = 0;
                      } else {
                        element.variations = [];
                        element['variant'] = 1;
                      }
                    } else {
                      element.variations = [];
                      element['variant'] = 1;
                    }

                    if (_this3.cart.itemId.includes(element.id)) {
                      var index = _this3.cart.cart.filter(function (x) {
                        return x.id === element.id;
                      });

                      element['quantiy'] = index[0].quantiy;
                    } else {
                      element['quantiy'] = 0;
                    }

                    if (_this3.util.active_store.includes(element.store_id)) {
                      _this3.topProducts.push(element);
                    }
                  });
                }
              }, function (error) {
                _this3.dummyTopProducts = [];
                console.log(error);
              });
            } else {
              _this3.haveStores = false;
              _this3.stores = [];
              console.log('no city found');
              _this3.dummyCates = [];
              _this3.dummyBanners = [];
              _this3.bottomDummy = [];
              _this3.betweenDummy = [];
              _this3.dummyTopProducts = [];
              _this3.dummyProducts = [];
              _this3.categories = [];
              _this3.banners = [];
              _this3.bottomBanners = [];
              _this3.betweenBanners = [];
              _this3.topProducts = [];
              _this3.products = [];

              _this3.chMod.detectChanges();
            }
          }, function (error) {
            console.log('error in get store by city', error);
            _this3.stores = [];
            _this3.haveStores = false;
            _this3.dummyCates = [];
            _this3.dummyBanners = [];
            _this3.bottomDummy = [];
            _this3.betweenDummy = [];
            _this3.dummyTopProducts = [];
            _this3.dummyProducts = [];
            _this3.categories = [];
            _this3.banners = [];
            _this3.bottomBanners = [];
            _this3.betweenBanners = [];
            _this3.topProducts = [];
            _this3.products = [];

            _this3.util.errorToast(_this3.util.getString('Something went wrong'));

            _this3.chMod.detectChanges();
          });
        }
      }, {
        key: "isOpen",
        value: function isOpen(start, end) {
          var format = 'H:mm:ss';
          var ctime = moment__WEBPACK_IMPORTED_MODULE_6__().format('HH:mm:ss');
          var time = moment__WEBPACK_IMPORTED_MODULE_6__(ctime, format);
          var beforeTime = moment__WEBPACK_IMPORTED_MODULE_6__(start, format);
          var afterTime = moment__WEBPACK_IMPORTED_MODULE_6__(end, format);

          if (time.isBetween(beforeTime, afterTime)) {
            return true;
          }

          return false;
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          // const date = moment().format('DD-MM-YYYY');
          // return moment(date + ' ' + time).format('hh:mm a');
          return moment__WEBPACK_IMPORTED_MODULE_6__(time, ['h:mm A']).format('hh:mm A');
        }
      }, {
        key: "addToCart",
        value: function addToCart(item, index) {
          console.log(item);
          this.topProducts[index].quantiy = 1;
          this.cart.addItem(item);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBanners",
        value: function getBanners() {
          var _this4 = this;

          this.dummyBanners = Array(5);
          this.api.get('banners').subscribe(function (data) {
            console.log(data);
            _this4.dummyBanners = [];
            _this4.betweenDummy = [];
            _this4.bottomDummy = [];
            _this4.bottomBanners = [];
            _this4.betweenBanners = [];
            _this4.banners = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              data.data.forEach(function (element) {
                if (element && element.status === '1') {
                  if (element.position === '0') {
                    _this4.banners.push(element);
                  } else if (element.position === '1') {
                    _this4.bottomBanners.push(element);
                  } else {
                    _this4.betweenBanners.push(element);
                  }
                }
              });
              console.log('top', _this4.banners);
              console.log('bottom', _this4.bottomBanners);
              console.log('between', _this4.betweenBanners);
            }
          }, function (error) {
            console.log(error);
            _this4.dummyBanners = [];
          });
        }
      }, {
        key: "getQuanity",
        value: function getQuanity(id) {
          var data = this.cart.cart.filter(function (x) {
            return x.id === id;
          });
          return data[0].quantiy;
        }
      }, {
        key: "getCategorys",
        value: function getCategorys() {
          var _this5 = this;

          this.dummyCates = Array(10);
          this.api.get('categories').subscribe(function (datas) {
            _this5.dummyCates = [];
            var cates = [];

            if (datas && datas.data && datas.data.length) {
              datas.data.forEach(function (element) {
                if (element.status === '1') {
                  var info = {
                    id: element.id,
                    name: element.name,
                    cover: element.cover,
                    subCates: []
                  };
                  var cats = {
                    id: element.id,
                    name: element.name,
                    cover: element.cover
                  };

                  _this5.allcates.push(cats);

                  cates.push(info);
                }
              });
            }

            _this5.api.get('subcate').subscribe(function (subCates) {
              console.log('sub cates', subCates);

              if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
                cates.forEach(function (element, i) {
                  subCates.data.forEach(function (sub) {
                    if (sub.status === '1' && element.id === sub.cate_id) {
                      // this.categories[i].subCates.push(sub);
                      cates[i].subCates.push(sub);
                    }
                  });
                }); // console.log('=>>', this.categories);

                _this5.categories = cates;
              }
            }, function (error) {
              console.log(error);

              _this5.util.errorToast(_this5.util.getString('Something went wrong'));
            });
          }, function (error) {
            console.log(error);

            _this5.util.errorToast(_this5.util.getString('Something went wrong'));

            _this5.dummyCates = [];
          });
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "add",
        value: function add(product, index) {
          console.log(product);
          this.topProducts[index].quantiy = this.getQuanity(product.id);

          if (this.topProducts[index].quantiy > 0) {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy + 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
          }
        }
      }, {
        key: "remove",
        value: function remove(product, index) {
          console.log(product, index);
          this.topProducts[index].quantiy = this.getQuanity(product.id);

          if (this.topProducts[index].quantiy === 1) {
            this.topProducts[index].quantiy = 0;
            this.cart.removeItem(product.id);
          } else {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy - 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
          }
        }
      }, {
        key: "goToSingleProduct",
        value: function goToSingleProduct(item) {
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['tabs/home/product'], param);
        }
      }, {
        key: "goToCatrgory",
        value: function goToCatrgory() {
          this.router.navigate(['/tabs/categories']);
        }
      }, {
        key: "subCate",
        value: function subCate(item) {
          var param = {
            queryParams: {
              id: item.id,
              name: item.name
            }
          };
          this.router.navigate(['tabs/home/sub-category'], param);
        }
      }, {
        key: "changeCity",
        value: function changeCity() {
          this.router.navigate(['cities']);
        }
      }, {
        key: "openLink",
        value: function openLink(item) {
          console.log(item);

          if (item.type === '0') {
            // Category
            console.log('open category');
            var name = this.categories.filter(function (x) {
              return x.id === item.link;
            });
            var cateName = '';

            if (name && name.length) {
              cateName = name[0].name;
            }

            var param = {
              queryParams: {
                id: item.link,
                name: cateName
              }
            };
            this.router.navigate(['tabs/home/sub-category'], param);
          } else if (item.type === '1') {
            // product
            console.log('open product');
            var _param = {
              queryParams: {
                id: item.link
              }
            };
            this.router.navigate(['tabs/home/product'], _param);
          } else {
            // link
            console.log('open link');
            this.iab.create(item.link, '_blank');
          }
        }
      }, {
        key: "goToProductList",
        value: function goToProductList(val) {
          var navData = {
            queryParams: {
              id: val.id,
              name: val.name,
              from: 'home'
            }
          };
          this.router.navigate(['/tabs/home/products'], navData);
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          if (event.detail.value) {} else {
            this.products = [];
          }
        }
      }, {
        key: "getCity",
        value: function getCity() {
          var _this6 = this;

          var city = localStorage.getItem('city');
          console.log('selected city===>>', city);

          if (city && city !== null && city !== 'null') {
            var param = {
              id: city
            };
            this.api.post('cities/getById', param).subscribe(function (data) {
              console.log('selected city', data);

              if (data && data.status === 200 && data.data && data.data.length) {
                var selectedCity = data.data.filter(function (x) {
                  return x.status === '1';
                });
                console.log('selected city=======================', selectedCity);

                if (selectedCity && selectedCity.length) {
                  _this6.util.city = selectedCity[0];

                  _this6.chMod.detectChanges();
                } else {
                  localStorage.removeItem('city');
                }
              } else {
                localStorage.removeItem('city');
              }
            }, function (error) {
              console.log(error);
              localStorage.removeItem('city');
            });
          }
        }
      }, {
        key: "openStore",
        value: function openStore(item) {
          console.log('open store', item);
          var param = {
            queryParams: {
              id: item.uid,
              name: item.name
            }
          };
          this.router.navigate(['tabs/home/store'], param);
        }
      }, {
        key: "topicked",
        value: function topicked() {
          this.router.navigate(['/tabs/home/top-picked']);
        }
      }, {
        key: "topStores",
        value: function topStores() {
          this.router.navigate(['top-stores']);
        }
      }, {
        key: "allOffers",
        value: function allOffers() {
          this.router.navigate(['all-offers']);
        }
      }, {
        key: "search",
        value: function search(event) {
          var _this7 = this;

          console.log(event);

          if (event && event !== '') {
            var param = {
              id: localStorage.getItem('city'),
              search: event
            };
            this.util.show();
            this.api.post('products/getSearchItems', param).subscribe(function (data) {
              console.log('search data==>', data);

              _this7.util.hide();

              if (data && data.status === 200 && data.data) {
                _this7.products = data.data;
              }
            }, function (error) {
              console.log('error in searhc filess--->>', error);

              _this7.util.hide();

              _this7.util.errorToast(_this7.util.getString('Something went wrong'));
            });
          }
        }
      }, {
        key: "variant",
        value: function variant(item, indeX) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this8 = this;

            var allData, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(item);
                    allData = [];
                    console.log(item && item.variations !== '');
                    console.log(item && item.variations !== '' && item.variations.length > 0);
                    console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);

                    if (!(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0)) {
                      _context3.next = 16;
                      break;
                    }

                    console.log('->', item.variations[0].items);
                    item.variations[0].items.forEach(function (element, index) {
                      console.log('OK');
                      var title = '';

                      if (_this8.util.cside === 'left') {
                        var price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;
                        title = element.title + ' - ' + _this8.util.currecny + ' ' + price;
                      } else {
                        var _price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;

                        title = element.title + ' - ' + _price + ' ' + _this8.util.currecny;
                      }

                      var data = {
                        name: element.title,
                        type: 'radio',
                        label: title,
                        value: index,
                        checked: item.variant === index
                      };
                      allData.push(data);
                    });
                    console.log('All Data', allData);
                    _context3.next = 11;
                    return this.alertCtrl.create({
                      header: item.name,
                      inputs: allData,
                      buttons: [{
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.util.getString('Ok'),
                        handler: function handler(data) {
                          console.log('Confirm Ok', data);
                          console.log('before', _this8.topProducts[indeX].variant);
                          _this8.topProducts[indeX].variant = data;
                          console.log('after', _this8.topProducts[indeX].variant);
                        }
                      }]
                    });

                  case 11:
                    alert = _context3.sent;
                    _context3.next = 14;
                    return alert.present();

                  case 14:
                    _context3.next = 17;
                    break;

                  case 16:
                    console.log('none');

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map