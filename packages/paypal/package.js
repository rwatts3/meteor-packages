Package.describe({
    name: 'rwatts:paypal',
    version: '0.0.1',
    summary: 'Easily send and process shopping carts using Paypal.',
    git: '',
    documentation: 'README.md'

});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use([
        'ecmascript',
        'underscore',
        'session',
        'nicolaslopezj:reactive-templates@1.2.0',
        'nicolaslopezj:options@1.0.1'
    ]);
    api.use([
        'templating',
        'meteor-base'
    ], 'client');
    
    api.imply([
        'nicolaslopezj:options@1.0.1',
        'nicolaslopezj:reactive-templates@1.2.0'
    ]);
    
    api.addFiles([
      'src/paypal.html'
    ], 'client');
    
    api.addFiles([
        'src/paypal.js'
    ]);
    
    api.export('PayPal');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use(['rwatts:paypal','mike:mocha-package']);
    api.addFiles('tests/paypal-tests.js');
});
