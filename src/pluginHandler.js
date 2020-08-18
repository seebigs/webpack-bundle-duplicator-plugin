const each = require('seebigs-each');

function pluginHandler(pluginName, config) {
    const duplicates = config.duplicates || {};

    return (compilation) => {
        const currentAssets = compilation.getStats().toJson().assets;
        each(currentAssets, (currentAsset) => {
            each(duplicates[currentAsset.name], (dupeAssetName) => {
                // copy the current asset and its contents over to the new name, then let webpack emit to output dir
                compilation.assets[dupeAssetName] = compilation.assets[currentAsset.name];

                // Alternatively, we could do this in hooks.afterEmit to avoid mutating the webpack compilation
                // But then we'd need to figure out how to resolve each asset's output rules
                // fs.writeFileSync(path.resolve('./output-where??', dupeAssetName), compilation.assets[currentAsset.name]._value);
            });
        });
    };
}

module.exports = pluginHandler;
