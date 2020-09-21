'use strict';
var config_1 = require('./common/config');
var debug_1 = require('./common/debug');
var options_1 = require('./common/options');
function getConfig(options) {
  var _a = options_1.optionsParser(options),
    sourceMap = _a.sourceMap,
    browsers = _a.browsers;
  var config = config_1.getPostcssConfig({
    browsers: browsers,
    sourceMap: sourceMap
  });
  if (options === null || options === void 0 ? void 0 : options.debug) {
    debug_1.debugConfig({
      browsers: browsers,
      sourceMap: sourceMap,
      config: config
    });
  }
  return config;
}
module.exports = getConfig;
