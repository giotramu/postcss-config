export function isBoolean(arg?: unknown): arg is boolean {
  return typeof arg === 'boolean'
}

export function isString(arg?: unknown): arg is string {
  return typeof arg === 'string'
}

export function isNotEmptyObject(
  arg?: unknown
): arg is Record<string, unknown> {
  if (Object.prototype.toString.call(arg) !== '[object Object]') {
    return false
  }

  return Object.entries(arg as Record<string, unknown>).length > 0
}

export function printLog(
  content: string | { docHook: string; message: string },
  ...args: unknown[]
): void {
  const doc = 'https://github.com/giotramu/postcss-config'

  const prefix = '[postcss-config] '

  /* eslint-disable no-console */
  return typeof content === 'string'
    ? console.log(prefix, content, ...args)
    : console.log(
        prefix,
        content.message,
        `Read the docs: ${doc}/${content.docHook}`
      )
  /* eslint-enable no-console */
}
