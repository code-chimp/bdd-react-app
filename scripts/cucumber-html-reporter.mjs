import reporter from 'cucumber-html-reporter';

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/bdd-report.json',
  output: 'reports/bdd-report-deluxe.html',
  brandTitle: 'Acceptance Tests',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome',
    Platform: 'Windows',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
});
