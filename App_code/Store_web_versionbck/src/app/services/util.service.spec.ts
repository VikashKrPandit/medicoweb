/*
 Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});
