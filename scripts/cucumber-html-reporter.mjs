import reporter from 'cucumber-html-reporter';

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  brandTitle: 'Acceptance Tests',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome',
    Platform: 'Windows',
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
});
