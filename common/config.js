"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostcssConfig = void 0;
const settings = __importStar(require("./settings"));
function getPostcssConfig({ browsers, sourceMap }) {
    return {
        map: sourceMap,
        // syntax: 'postcss-scss', // --- FIXME: Uncomment after this PR was closed: https://github.com/jonathantneal/postcss-sass/issues/24
        plugins: {
            // --- The plugins execution order is top-down
            // '@csstools/postcss-sass': settings.postsass(), // --- FIXME: Uncomment after this PR was closed: https://github.com/jonathantneal/postcss-sass/issues/24
            // 'postcss-selector-not': true, // --- FIXME: Uncomment after this PR was closed: https://github.com/postcss/postcss-selector-not/pull/16
            'postcss-custom-media': true,
            'postcss-inline-svg': settings.inlinesvg(),
            autoprefixer: settings.autoprefixer(browsers),
            // cssnano: settings.cssnano(), // --- FIXME: Uncomment after the cssnano package was bumped
            'postcss-reporter': settings.reporter()
        }
    };
}
exports.getPostcssConfig = getPostcssConfig;
