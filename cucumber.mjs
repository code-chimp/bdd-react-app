export default {
  requireModule: ['ts-node/register'],
  require: ['tests/cucumber.conf.cts', 'tests/assurance/step-definitions/**/*.cts'],
  format: ['@cucumber/pretty-formatter'],
  paths: ['tests/assurance/features/**/*.feature'],
};
