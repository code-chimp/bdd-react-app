import report from 'multiple-cucumber-html-reporter';

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/bdd-report-multiple',
  reportName: 'BDD Automation Test Report',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chromium',
      version: '117',
    },
    device: 'hephaestus',
    platform: {
      name: 'ubuntu',
      version: '24.04',
    },
  },
  customData: {
    title: 'Test info',
    data: [
      { label: 'Project', value: 'bdd-react-app' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Sprint 2512' },
    ],
  },
});
