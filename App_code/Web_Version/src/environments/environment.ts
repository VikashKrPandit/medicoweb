/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    baseURL: 'http://api.cure99.in/index.php/',
  mediaURL: 'http://api.cure99.in/uploads/',
  onesignal: {
    appId: '017de731-2275-4fe7-8ada-913e7fc46ba1',
    googleProjectNumber: '187498975818',
    restKey: 'N2IwZmM2ZWQtYTc1Yi00NzQ1LTg3YzMtZDA2MWQ4YThhODFh'
  },
  general: {
    symbol: '$',
    code: 'USD'
  },
  authToken: '123456789',
  social: {
    fb: 'https://www.facebook.com/corpmellow/',
    insta: 'https://www.instagram.com/corpmellow/?hl=en',
    twitter: 'https://twitter.com/corpmellow?lang=en',
    linkedIn: 'https://in.linkedin.com/company/corpmellow'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
