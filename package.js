Package.describe({
  name: '37d:meteor-jquery-payment',
  version: '3.0.0',
  summary: 'Meteor package wrapper for jquery-payment',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com:37d/meteor-jquery-payment.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.addFiles('lib/jquery.payment.min.js', 'client');
});
