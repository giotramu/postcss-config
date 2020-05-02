import merge from 'deepmerge';

export function isBrowserslist(arg?: unknown): arg is string[] {
  return Array.isArray(arg) && arg.length > 0;
}

export function isBoolean(arg?: unknown): arg is boolean {
  return typeof arg === 'boolean';
}

export function isObject(arg?: unknown): arg is object {
  const type = typeof arg;
  return type === 'function' || (type === 'object' && Boolean(arg));
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
