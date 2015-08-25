Package.describe({
  name: 'rwatts:uuid',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Easily generate a UUID on the client or server.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rwatts3/meteor-packages/tree/uuid',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/uuid.js');

  api.export('uuid', ['client','server']);
});

Package.onTest(function (api) {
  api.use(['rwatts:uuid' , 'mike:mocha-package' ]);
  api.addFiles(['tests/uuid-tests.js']);
});
