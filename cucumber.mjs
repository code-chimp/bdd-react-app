/**
 * @file cucumber.mjs
 * @description
 * Cucumber.js configuration for the project.
 *
 * - Specifies feature file and step definition locations.
 * - Configures output formats for test reports.
 * - Enables TypeScript support for step definitions.
 * - Sets snippet interface to async/await.
 */

export default {
  // Array of glob patterns specifying where to find feature files
  paths: ['tests/assurance/features/**/*.feature'],

  // Array of files or glob patterns for step definitions and support
  require: [
    'tests/assurance/features/support/hooks.cts',
    'tests/assurance/step-definitions/**/*.cts',
  ],

  formatOptions: {
    // Use async/await syntax in generated step definition snippets
    snippetInterface: 'async-await',
  },

  // Array of formatters for test run reports (pretty, HTML, JSON, JUnit)
  format: [
    'progress-bar', // simple progress bar
    // '@cucumber/pretty-formatter', // or use this for a more detailed output
    'html:reports/bdd-report-basic.html',
    'json:reports/bdd-report.json',
    'junit:reports/bdd-report.xml',
  ],

  // Run tests in parallel
  parallel: 2,

  // Modules to require before running step definitions (enables TypeScript)
  requireModule: ['ts-node/register'],
};
