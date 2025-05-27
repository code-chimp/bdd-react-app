/* eslint-disable no-var */
declare global {
  var browser: import('playwright').Browser;
  var context: import('playwright').BrowserContext;
  var page: import('playwright').Page;
}

export {};
