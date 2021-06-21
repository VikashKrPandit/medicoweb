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

import { HomeProductsRoutingModule } from './home-products-routing.module';
import { HomeProductsComponent } from './home-products.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [HomeProductsComponent],
  imports: [
    CommonModule,
    HomeProductsRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgxSkeletonLoaderModule,
    Ng5SliderModule
  ]
})
export class HomeProductsModule { }
