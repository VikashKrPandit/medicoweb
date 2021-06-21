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

import { SendEmailRoutingModule } from './send-email-routing.module';
import { SendEmailComponent } from './send-email.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [SendEmailComponent],
  imports: [
    CommonModule,
    SendEmailRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class SendEmailModule { }
