"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reporter = exports.cssnano = exports.autoprefixer = exports.inlinesvg = exports.postsass = void 0;
function postsass() {
    /**
     * Dart Sass options:
     * https://github.com/sass/dart-sass/blob/master/README.md#javascript-api
     */
    return {
        outputStyle: 'expanded'
    };
}
exports.postsass = postsass;
function inlinesvg() {
    return {
        xmlns: false
    };
}
exports.inlinesvg = inlinesvg;
function autoprefixer(browsers) {
    return {
        grid: 'no-autoplace',
        overrideBrowserslist: browsers
    };
}
exports.autoprefixer = autoprefixer;
function cssnano() {
    return {
        preset: [
            'default',
            {
                discardComments: { removeAll: true },
                svgo: {
                    /**
                     * SVGO plugins:
                     * https://github.com/svg/svgo/tree/master/plugins
                     */
                    plugins: [
                        { removeDimensions: true },
                        { removeScriptElement: true },
                        { sortAttrs: true }
                    ]
                }
            }
        ]
    };
}
exports.cssnano = cssnano;
function reporter() {
    return {
        clearReportedMessages: true,
        positionless: 'last'
    };
}
exports.reporter = reporter;
