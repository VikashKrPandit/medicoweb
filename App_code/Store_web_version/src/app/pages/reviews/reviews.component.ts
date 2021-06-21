/*
 Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  constructor(
    public api: ApisService,
    public util: UtilService
  ) {
    this.getReviews();
  }

  ngOnInit(): void {
  }
  getReviews() {
    const param = {
      id: localStorage.getItem('uid'),
      where: 'sid = ' + localStorage.getItem('uid')
    };
    this.api.post('rating/getFromIDs', param).then((data: any) => {
      console.log(data);
      if (data && data.status === 200) {
        this.reviews = data.data;
      }
    }, error => {
      console.log(error);
    });
  }

  getDate(date) {
    return moment(date).format('lll');
  }

}
