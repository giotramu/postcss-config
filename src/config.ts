export interface PcssConfigProps {
  to?: string;
  from?: string;
  map?: boolean;
  parser?: 'sugarss' | false;
  syntax?: 'postcss-scss' | false;
  stringifier?: 'midas' | false;
  plugins: {};
}

const supportedBrowsers = [
  'last 2 versions',
  'not ie <= 11',
  'not op_mini all',
  'not dead',
  'not < 0.5%'
];

export function getConfig(
  browsers: string[] = supportedBrowsers
): PcssConfigProps {
  return {
    map: false,
    syntax: 'postcss-scss',
    plugins: {
      '@csstools/postcss-sass': true,
      'postcss-custom-media': true,
      cssnano: {
        preset: ['advanced', getCssnanoConfig(browsers)]
      },
      'postcss-reporter': {
        clearReportedMessages: true
      }
    }
  };
}

function getCssnanoConfig(overrideBrowserslist: string[]): {} {
  return {
    autoprefixer: {
      grid: true,
      overrideBrowserslist
    },
    discardComments: {
      removeAll: true
    },
    /**
     * Disable some dangerous optimizations
     * to reduce the risk of breakage across projects.
     * 1. https://cssnano.co/optimisations/discardunused
     * 2. https://cssnano.co/optimisations/mergeidents
     * 3. https://cssnano.co/optimisations/minifyselectors
     * 4. https://cssnano.co/optimisations/reduceidents
     * 5. https://cssnano.co/optimisations/zindex
     */
    discardUnused: false /* 1 */,
    mergeIdents: false /* 2 */,
    minifySelectors: false /* 3 */,
    reduceIdents: false /* 4 */,
    zindex: false /* 5 */
  };
}
