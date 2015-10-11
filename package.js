Package.describe({
    name: 'universe:i18n',
    version: '1.1.6',
    summary: 'React i18n (also es6 modules), Both YAML & JSON translation files supported. recognizes 353 locales',
    git: 'https://github.com/vazco/meteor-universe-i18n'
});

Package.registerBuildPlugin({
    name: 'UniverseI18n',
    use: ['ecmascript@0.1.5', 'caching-compiler@1.0.0'],
    sources: ['builder.js'],
    npmDependencies: {
        'strip-json-comments': '1.0.4',
        'yamljs': '0.2.3'
    }
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    api.use([
        'ecmascript',
        'universe:utilities@2.0.5',
        'isobuild:compiler-plugin@1.0.0'
    ]);

    api.use('universe:modules@0.5.0', {weak:true});

    api.addFiles([
        'lib/locales.js',
        'lib/i18n.js'
    ]);

    api.export('_i18n');
});


