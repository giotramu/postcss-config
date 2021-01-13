"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginsParser = void 0;
const helpers_1 = require("./helpers");
function pluginsParser(plugins) {
    if (Array.isArray(plugins) && plugins.length > 0) {
        return plugins.reduce((result, item) => checkPlugin(result, item), {});
    }
    helpers_1.printLog({
        docHook: '#extend-the-config',
        message: 'Pass an array of PostCSS plugins.'
    });
    return {};
}
exports.pluginsParser = pluginsParser;
function checkPlugin(o, item) {
    if (helpers_1.isString(item)) {
        o[item] = true;
    }
    if (Array.isArray(item) && item.length >= 2) {
        const [identifier, settings] = item;
        if (helpers_1.isString(identifier) && !hasSettings(settings)) {
            o[identifier] = true;
        }
        if (helpers_1.isString(identifier) && hasSettings(settings)) {
            o[identifier] = settings;
        }
    }
    return o;
}
function hasSettings(a) {
    return typeof a === 'boolean' || helpers_1.isNotEmptyObject(a);
}
