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

import { FlutterwavecallbackRoutingModule } from './flutterwavecallback-routing.module';
import { FlutterwavecallbackComponent } from './flutterwavecallback.component';


@NgModule({
  declarations: [FlutterwavecallbackComponent],
  imports: [
    CommonModule,
    FlutterwavecallbackRoutingModule
  ]
})
export class FlutterwavecallbackModule { }
