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

import { SubCategoryRoutingModule } from './sub-category-routing.module';
import { SubCategoryComponent } from './sub-category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    SharedModule
  ]
})
export class SubCategoryModule { }
