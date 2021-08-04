/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopDetailRoutingModule } from './shop-detail-routing.module';
import { ShopDetailComponent } from './shop-detail.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [ShopDetailComponent],
  imports: [
    CommonModule,
    ShopDetailRoutingModule,
    IvyCarouselModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class ShopDetailModule { }
