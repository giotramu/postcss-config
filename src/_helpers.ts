import merge from 'deepmerge';

export function isBoolean(a?: unknown): a is boolean {
  return typeof a === 'boolean';
}

export function isString(a?: unknown): a is string {
  return typeof a === 'string';
}

export function isObject(a?: unknown): a is object {
  const type = typeof a;
  return type === 'function' || (type === 'object' && Boolean(a));
}

export function printLog(
  a: {docHook: string; message: string} | string,
  ...args: unknown[]
): void {
  const doc = 'https://github.com/giotramu/postcss-config';
  const prefix = '[postcss-config] ';

  /* eslint-disable no-console */
  return isObject(a)
    ? console.log(prefix, a.message, `Read the docs: ${doc}/${a.docHook}`)
    : console.log(prefix, a, ...args);
  /* eslint-enable no-console */
}

export function mergeObjects<T1, T2>(
  source: Partial<T1>,
  target: Partial<T2>
): T1 & T2 {
  return merge(source, target, {arrayMerge: overwriteArrays});
}

// Overwrites the existing array values completely rather than concatenating them
export function overwriteArrays(_: [], source: []): [] {
  return source;
}
