/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-animation',
  templateUrl: './modal-animation.component.html',
  styleUrls: ['./modal-animation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalAnimationComponent implements OnInit {

  @Input() modalClass: string;
  @Input() contentClass: string;
  @Input() modalID: string;
  @Input() backDrop: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  close(event) {
    document.querySelector("#" + event).classList.remove('md-show');
  }

}