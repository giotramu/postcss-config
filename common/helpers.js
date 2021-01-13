"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.overwriteArrays = exports.mergeObjects = exports.printLog = exports.isNotEmptyObject = exports.isString = exports.isBoolean = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
function isBoolean(a) {
    return typeof a === 'boolean';
}
exports.isBoolean = isBoolean;
function isString(a) {
    return typeof a === 'string';
}
exports.isString = isString;
function isNotEmptyObject(a) {
    if (Object.prototype.toString.call(a) !== '[object Object]') {
        return false;
    }
    return Object.entries(a).length > 0;
}
exports.isNotEmptyObject = isNotEmptyObject;
function printLog(a, ...args) {
    const doc = 'https://github.com/giotramu/postcss-config';
    const prefix = '[postcss-config] ';
    /* eslint-disable no-console */
    return typeof a === 'string'
        ? console.log(prefix, a, ...args)
        : console.log(prefix, a.message, `Read the docs: ${doc}/${a.docHook}`);
    /* eslint-enable no-console */
}
exports.printLog = printLog;
function mergeObjects(source, target) {
    return deepmerge_1.default(source, target, { arrayMerge: overwriteArrays });
}
exports.mergeObjects = mergeObjects;
/**
 * Overwrites the existing array values completely
 * rather than concatenating them
 */
function overwriteArrays(_, source) {
    return source;
}
exports.overwriteArrays = overwriteArrays;
