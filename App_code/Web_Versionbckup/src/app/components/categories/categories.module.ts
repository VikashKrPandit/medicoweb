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

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OwlModule } from 'ngx-owl-carousel';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    NgxSkeletonLoaderModule,
    OwlModule,
    Ng5SliderModule
  ]
})
export class CategoriesModule { }
