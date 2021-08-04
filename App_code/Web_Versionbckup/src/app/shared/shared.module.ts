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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, WavesModule, CardsModule, IconsModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CardsModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
  ]
})
export class SharedModule { }
