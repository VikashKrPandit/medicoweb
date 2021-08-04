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

import { DriverStatsRoutingModule } from './driver-stats-routing.module';
import { DriverStatsComponent } from './driver-stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [DriverStatsComponent],
  imports: [
    CommonModule,
    DriverStatsRoutingModule,
    SharedModule,
    NgxPrintModule,
  ]
})
export class DriverStatsModule { }
