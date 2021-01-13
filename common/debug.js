"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugConfig = void 0;
const helpers_1 = require("./helpers");
function debugConfig({ browsers, sourceMap, config }) {
    helpers_1.printLog('CSS Source-Map: ', sourceMap);
    helpers_1.printLog('Supported Browsers: ', browsers.join(', '));
    helpers_1.printLog('Generated PostCSS Config: ', JSON.stringify(config));
}
exports.debugConfig = debugConfig;
