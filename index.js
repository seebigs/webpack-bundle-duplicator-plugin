const pluginHandler = require('./src/pluginHandler.js');

const pluginName = 'WebpackBundleDuplicatorPlugin';

const defaultConfig = {
    duplicates: {},
};

function WebpackBundleDuplicatorPlugin(userConfig) {
    const config = {
        ...defaultConfig,
        ...userConfig,
    };

    return {
        apply: (compiler) => {
            compiler.hooks.emit.tap(pluginName, pluginHandler(pluginName, config));
        },
    };
}

module.exports = WebpackBundleDuplicatorPlugin;
