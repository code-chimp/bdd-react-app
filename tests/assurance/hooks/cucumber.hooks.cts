/// <reference path="./global.d.ts" />
import {
  After,
  AfterAll,
  AfterStep,
  Before,
  BeforeAll,
  BeforeStep,
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
    headless: false, // for dev or demo mode - turn off for CI
    slowMo: 1500, // for dev or demo mode - remove for CI
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
      path: `./reports/screenshots/${pickle.name.replace(/ /g, '_')}_error.png`,
      type: 'png',
    });

    await this.attach(img, 'image/png');
  }

  await global.page.close();
  await global.context.close();
});

/**
 * Hook that runs before each step.
 */
BeforeStep(async function ({ pickle }) {
  const img = await global.page.screenshot({
    path: `./reports/screenshots/${pickle.name.replace(/ /g, '_')}_before.png`,
    type: 'png',
  });

  await this.attach(img, 'image/png');
});

/**
 * Hook that runs after each step.
 */
AfterStep(async function ({ pickle }) {
  const img = await global.page.screenshot({
    path: `./reports/screenshots/${pickle.name.replace(/ /g, '_')}_after.png`,
    type: 'png',
  });

  await this.attach(img, 'image/png');
});
