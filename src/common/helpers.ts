export function isBoolean(a?: unknown): a is boolean {
  return typeof a === 'boolean';
}

export function isString(a?: unknown): a is string {
  return typeof a === 'string';
}

export function isNotEmptyObject(a?: unknown): a is {[key: string]: unknown} {
  if (Object.prototype.toString.call(a) !== '[object Object]') {
    return false;
  }

  return Object.entries(a as {[key: string]: unknown}).length > 0;
}

export function printLog(
  a: string | {docHook: string; message: string},
  ...args: unknown[]
): void {
  const doc = 'https://github.com/giotramu/postcss-config';
  const prefix = '[postcss-config] ';

  /* eslint-disable no-console */
  return typeof a === 'string'
    ? console.log(prefix, a, ...args)
    : console.log(prefix, a.message, `Read the docs: ${doc}/${a.docHook}`);
  /* eslint-enable no-console */
}
