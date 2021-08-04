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

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule
  ]
})
export class SettingsModule { }
