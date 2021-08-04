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

import { ManageOffersRoutingModule } from './manage-offers-routing.module';
import { ManageOffersComponent } from './manage-offers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManageOffersComponent],
  imports: [
    CommonModule,
    ManageOffersRoutingModule,
    SharedModule
  ]
})
export class ManageOffersModule { }
