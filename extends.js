'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var _helpers_1 = require('./common/_helpers');
var config_1 = require('./common/config');
var debug_1 = require('./common/debug');
var options_1 = require('./common/options');
var plugins_1 = require('./common/plugins');
function extendsConfig(plugins, options) {
  var _a = options_1.optionsParser(options),
    sourceMap = _a.sourceMap,
    browsers = _a.browsers;
  var source = config_1.getPostcssConfig({
    browsers: browsers,
    sourceMap: sourceMap
  });
  var parsedPlugins = plugins_1.pluginsParser(plugins);
  var extendedPlugins = _helpers_1.mergeObjects(source.plugins, parsedPlugins);
  var config = __assign(__assign({}, source), {plugins: extendedPlugins});
  if (options === null || options === void 0 ? void 0 : options.debug) {
    debug_1.debugConfig({
      browsers: browsers,
      sourceMap: sourceMap,
      config: config
    });
  }
  return config;
}
module.exports = extendsConfig;
