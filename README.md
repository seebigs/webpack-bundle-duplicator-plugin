# webpack-bundle-duplicator-plugin

Don't re-generate the same bundle content multiple times- make copies of your output bundles and specify different names. Save huge amounts of build time when generating multiple copies of the same entry files.

## Install
```
$ npm install webpack-bundle-duplicator-plugin --save-dev
```

## Add Plugin to Webpack
webpack.config.js
```js
const WebpackBundleDuplicatorPlugin = require('webpack-bundle-duplicator-plugin');

module.exports = {
    entry: {
        'js/main.js': 'src/entries/main.js',
    },
    plugins: [
        new WebpackBundleDuplicatorPlugin({
            duplicates: {
                'js/main.js': [
                    'js/dupe1.js',
                    'js/dupe2.js',
                ],
            },
        }),
    ],
};

// Outputs 3 files (all with same contents)
// ./dist/js/main.js
// ./dist/js/dupe1.js
// ./dist/js/dupe2.js
```
