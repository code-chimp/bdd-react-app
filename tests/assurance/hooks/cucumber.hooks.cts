/// <reference path="./global.d.ts" />
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from '@cucumber/cucumber';
import { chromium } from 'playwright';

/**
 * Sets the default timeout for Cucumber steps to 60 seconds.
 */
setDefaultTimeout(60000);

/**
 * Hook that runs once before all tests.
 * Launches a Chromium browser instance and assigns it to the global `browser` variable.
 */
BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
});

/**
 * Hook that runs once after all tests.
 * Closes the global Chromium browser instance.
 */
AfterAll(async function () {
  await global.browser.close();
});

/**
 * Hook that runs before each test.
 * Creates a new browser context and page, and assigns them to the global `context` and `page` variables.
 */
Before(async function () {
  global.context = await global.browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  global.page = await global.context.newPage();
});

/**
 * Hook that runs after each test.
 * Closes the current page and browser context.
 */
After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    const img = await global.page.screenshot({
      path: `./reports/screenshots/${pickle.name}.png`,
      type: 'png',
    });

    await this.attach(img, 'image/png');
  }

  await global.page.close();
  await global.context.close();
});
