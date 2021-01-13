"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsParser = void 0;
const browsers_1 = require("./browsers");
const helpers_1 = require("./helpers");
function optionsParser(options) {
    const browsers = browsers_1.supportedBrowsers;
    let sourceMap = false;
    if (typeof options === 'undefined') {
        return { browsers, sourceMap };
    }
    if (options.sourceMap === 'external') {
        sourceMap = { inline: false };
    }
    return {
        browsers: isBrowserslist(options.browsers) ? options.browsers : browsers,
        sourceMap: helpers_1.isBoolean(options.sourceMap) ? options.sourceMap : sourceMap
    };
}
exports.optionsParser = optionsParser;
function isBrowserslist(a) {
    if (Array.isArray(a) && a.length > 0) {
        return a.filter(item => typeof item === 'string').length > 0;
    }
    return false;
}
