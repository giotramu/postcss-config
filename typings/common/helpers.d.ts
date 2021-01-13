export declare function isBoolean(a?: unknown): a is boolean;
export declare function isString(a?: unknown): a is string;
export declare function isNotEmptyObject(a?: unknown): a is {
    [key: string]: unknown;
};
export declare function printLog(a: string | {
    docHook: string;
    message: string;
}, ...args: unknown[]): void;
export declare function mergeObjects<T1, T2>(source: Partial<T1>, target: Partial<T2>): T1 & T2;
/**
 * Overwrites the existing array values completely
 * rather than concatenating them
 */
export declare function overwriteArrays(_: [], source: []): [];
