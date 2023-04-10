import { isNotEmptyObject, isString, printLog } from './helpers'
import type { Plugin, Plugins } from './types'

export function pluginsParser(plugins: Plugins): Record<string, unknown> {
  if (Array.isArray(plugins) && plugins.length > 0) {
    return plugins.reduce((result, item) => checkPlugin(result, item), {})
  }

  printLog({
    docHook: '#extend-the-config',
    message: 'Pass an array of PostCSS plugins.'
  })

  return {}
}

function checkPlugin(obj: Record<string, unknown>, item: Plugin): {} {
  if (isString(item)) {
    obj[item] = true
  }

  if (Array.isArray(item) && item.length >= 2) {
    const [identifier, settings] = item

    if (isString(identifier) && !hasSettings(settings)) {
      obj[identifier] = true
    }

    if (isString(identifier) && hasSettings(settings)) {
      obj[identifier] = settings
    }
  }

  return obj
}

function hasSettings(arg: unknown): boolean {
  return typeof arg === 'boolean' || isNotEmptyObject(arg)
}
