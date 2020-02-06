export interface PcssConfigProps {
  to?: string;
  from?: string;
  map?: boolean;
  parser?: 'sugarss' | false;
  syntax?: 'postcss-scss' | false;
  stringifier?: 'midas' | false;
  plugins: {};
}

const browsers = [
  'last 2 versions',
  'not ie <= 11',
  'not op_mini all',
  'not dead',
  'not < 0.5%'
];

export function getConfig(
  overrideBrowserslist: string[] = browsers
): PcssConfigProps {
  return {
    map: false,
    syntax: 'postcss-scss',
    plugins: {
      '@csstools/postcss-sass': true,
      'postcss-custom-media': true,
      cssnano: {
        preset: [
          'advanced',
          {
            autoprefixer: {
              grid: true,
              overrideBrowserslist
            }
          }
        ]
      },
      'postcss-reporter': {
        clearReportedMessages: true
      }
    }
  };
}
