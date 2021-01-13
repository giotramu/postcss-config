"use strict";
const config_1 = require("./common/config");
const debug_1 = require("./common/debug");
const options_1 = require("./common/options");
function getConfig(options) {
    const { sourceMap, browsers } = options_1.optionsParser(options);
    const config = config_1.getPostcssConfig({ browsers, sourceMap });
    if (options === null || options === void 0 ? void 0 : options.debug) {
        debug_1.debugConfig({ browsers, sourceMap, config });
    }
    return config;
}
module.exports = getConfig;
