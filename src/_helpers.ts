import merge from 'deepmerge';

export function isBoolean(a?: unknown): a is boolean {
  return typeof a === 'boolean';
}

export function isString(a?: unknown): a is string {
  return typeof a === 'string';
}

export function isNonEmptyObject(a?: unknown): a is {[key: string]: unknown} {
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

export function mergeObjects<T1, T2>(
  source: Partial<T1>,
  target: Partial<T2>
): T1 & T2 {
  return merge(source, target, {arrayMerge: overwriteArrays});
}

/**
 * Overwrites the existing array values completely
 * rather than concatenating them
 */
export function overwriteArrays(_: [], source: []): [] {
  return source;
}
