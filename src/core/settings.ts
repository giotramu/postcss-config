import type {BrowsersOption, PluginOptions} from './types';

export function inlinesvg(): PluginOptions {
  return {
    xmlns: false
  };
}

export function autoprefixer(browsers: BrowsersOption): PluginOptions {
  return {
    grid: 'no-autoplace',
    overrideBrowserslist: browsers
  };
}

export function cssnano(): PluginOptions {
  return {
    preset: [
      'default',
      {
        discardComments: {removeAll: true},
        'postcss-svgo': {
          /**
           * SVGO plugins:
           * https://github.com/svg/svgo/tree/master/plugins
           */
          plugins: [
            {removeDimensions: true},
            {removeScriptElement: true},
            {sortAttrs: true}
          ]
        }
      }
    ]
  };
}

export function reporter(): PluginOptions {
  return {
    clearReportedMessages: true,
    positionless: 'last'
  };
}
