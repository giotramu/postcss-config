import merge from 'deepmerge'

export const isBoolean = (arg?: unknown): arg is boolean =>
  typeof arg === 'boolean'

export const isBrowserslist = (arg?: unknown): arg is string[] => {
  if (Array.isArray(arg) && arg.length > 0) {
    return arg.filter(item => typeof item === 'string').length > 0
  }

  return false
}

export const isString = (arg?: unknown): arg is string =>
  typeof arg === 'string'

export const isNotEmptyObject = (
  arg?: unknown
): arg is Record<string, unknown> => {
  if (Object.prototype.toString.call(arg) !== '[object Object]') {
    return false
  }

  return Object.entries(arg as Record<string, unknown>).length > 0
}

export const mergeObjects = <A, B>(
  source: Partial<A>,
  target: Partial<B>
): A & B => merge(source, target, { arrayMerge: overwriteArrays })

const overwriteArrays = (_: [], source: []): [] => {
  return source
}
export const printLog = (
  content: string | { docHook: string; message: string },
  ...args: unknown[]
): void => {
  const DOC = 'https://github.com/giotramu/postcss-config'
  const TAG = '[postcss-config] '

  /* eslint-disable no-console */
  typeof content === 'string'
    ? console.log(TAG, content, ...args)
    : console.log(
        TAG,
        content.message,
        `Read the docs: ${DOC}/${content.docHook}`
      )
  /* eslint-enable no-console */
}
