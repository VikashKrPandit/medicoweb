/*
 Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL:  'http://api.cure99.in/index.php/',
  mediaURL: 'http://api.cure99.in/uploads/',
  onesignal: {
    appId: '017de731-2275-4fe7-8ada-913e7fc46ba1',
    googleProjectNumber: '187498975818',
    restKey: 'N2IwZmM2ZWQtYTc1Yi00NzQ1LTg3YzMtZDA2MWQ4YThhODFh'
  },
  general: {
    symbol: '₹',
    code: 'INR'
  },
  authToken: '123456789',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
