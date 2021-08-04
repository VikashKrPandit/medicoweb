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

import { ManageCityRoutingModule } from './manage-city-routing.module';
import { ManageCityComponent } from './manage-city.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [ManageCityComponent],
  imports: [
    CommonModule,
    ManageCityRoutingModule,
    SharedModule,
    GooglePlaceModule,
  ]
})
export class ManageCityModule { }
