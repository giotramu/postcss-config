import {isObject, isString, printLog} from './_helpers';
import {Plugin, Plugins} from './_types';

export function pluginsParser(plugins: Plugins): object {
  if (Array.isArray(plugins) && plugins.length > 0) {
    return plugins.reduce((result, item) => checkPlugin(result, item), {});
  }

  printLog({
    docHook: '#extend-the-config',
    message: 'Pass an array of PostCSS plugins.'
  });

  return {};
}

function checkPlugin(o: {[key: string]: unknown}, item: Plugin): object {
  if (isString(item)) {
    o[item] = true;
  }

  if (Array.isArray(item) && item.length >= 2) {
    const [identifier, settings] = item;

    if (isString(identifier) && !isSettings(settings)) {
      o[identifier] = true;
    }

    if (isString(identifier) && isSettings(settings)) {
      o[identifier] = settings;
    }
  }

  return o;
}

function isSettings(a: unknown): boolean {
  return typeof a === 'boolean' || isObject(a);
}
