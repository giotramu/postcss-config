"use strict";
const config_1 = require("./common/config");
const debug_1 = require("./common/debug");
const helpers_1 = require("./common/helpers");
const options_1 = require("./common/options");
const plugins_1 = require("./common/plugins");
function extendsConfig(plugins, options) {
    const { sourceMap, browsers } = options_1.optionsParser(options);
    const source = config_1.getPostcssConfig({ browsers, sourceMap });
    const parsedPlugins = plugins_1.pluginsParser(plugins);
    const extendedPlugins = helpers_1.mergeObjects(source.plugins, parsedPlugins);
    const config = Object.assign(Object.assign({}, source), { plugins: extendedPlugins });
    if (options === null || options === void 0 ? void 0 : options.debug) {
        debug_1.debugConfig({ browsers, sourceMap, config });
    }
    return config;
}
module.exports = extendsConfig;
