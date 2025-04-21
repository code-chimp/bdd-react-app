export default {
  requireModule: ['ts-node/register'],
  require: ['tests/cucumber.conf.ts', 'tests/assurance/step-definitions/**/*.ts'],
  format: ['@cucumber/pretty-formatter'],
  paths: ['tests/assurance/features/**/*.feature'],
};
