Package.describe({
    name: 'rwatts:meteordump',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'Dumps variables and objects to the browser in a visual table.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rwatts3/meteor-packages',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use([
        'templating',
        'underscore',
        'ui',
        'blaze',
        'jquery',
    ], 'client');

    api.addFiles([
        'lib/nodedump-client-min.js',
        'lib/meteordump.js'
    ], 'client');
    api.export('meteordump', 'client');
});

Package.onTest(function (api) {
    api.use(['rwatts:meteordump' , 'mike:mocha-package' ]);
    api.addFiles(['tests/meteordump-tests.js']);
});