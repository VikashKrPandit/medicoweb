/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { UtilService } from './../../services/util.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  model;
  constructor(private route: Router, public util: UtilService) { }

  ngOnInit(): void {
  }

  goToOrder() {
    this.route.navigate(['/order']);
  }

}
