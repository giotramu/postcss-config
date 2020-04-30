import merge from 'deepmerge';

export function isBrowserslist(a: unknown): boolean {
  return Array.isArray(a) && a.length > 0;
}

export function isBoolean(a: unknown): boolean {
  return typeof a === 'boolean';
}

export function isObject(a: unknown): boolean {
  const type = typeof a;
  return type === 'function' || (type === 'object' && Boolean(a));
}

export function mergeObjects(source: object, target: object): object {
  if (!isObject(target)) {
    // eslint-disable-next-line no-console
    console.warn('[postcss-config] pass an object parameter.');
    return source;
  }

  return merge(source, target, {arrayMerge: overwriteArrays});
}

// overwrites the existing array values completely rather than concatenating them
export function overwriteArrays(_: [], source: []): [] {
  return source;
}
