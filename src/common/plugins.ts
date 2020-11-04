import {isNotEmptyObject, isString, printLog} from './helpers';
import {Plugin, Plugins} from './types';

export function pluginsParser(plugins: Plugins): {} {
  if (Array.isArray(plugins) && plugins.length > 0) {
    return plugins.reduce((result, item) => checkPlugin(result, item), {});
  }

  printLog({
    docHook: '#extend-the-config',
    message: 'Pass an array of PostCSS plugins.'
  });

  return {};
}

function checkPlugin(o: {[key: string]: unknown}, item: Plugin): {} {
  if (isString(item)) {
    o[item] = true;
  }

  if (Array.isArray(item) && item.length >= 2) {
    const [identifier, settings] = item;

    if (isString(identifier) && !hasSettings(settings)) {
      o[identifier] = true;
    }

    if (isString(identifier) && hasSettings(settings)) {
      o[identifier] = settings;
    }
  }

  return o;
}

function hasSettings(a: unknown): boolean {
  return typeof a === 'boolean' || isNotEmptyObject(a);
}
