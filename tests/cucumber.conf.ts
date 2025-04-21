/// <reference path="./global.d.ts" />
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(60000);

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
});

AfterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
  await global.context.close();
});
