/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    /// Less Secure but faster
    const uid = localStorage.getItem('uid');
    console.log('uid', localStorage.getItem('uid'));
    if (uid && uid != null && uid !== 'null') {
      return true;
    }
    this.router.navigate(['/loginUser']);
  }
}
