const isCi = (process.env.CI || 'false') === 'true';
const reporters = isCi ? ['default', 'jest-junit'] : undefined;
const coverageReporters = isCi ? ['text', 'lcov', 'json'] : ['text'];

module.exports = {
  preset: 'ts-jest',
  globals: {
    // --- ts-jest config
    'ts-jest': {
      diagnostic: true,
      babelConfig: true
    }
  },

  // --- standard config
  bail: true,
  roots: ['<rootDir>/src/'],
  testMatch: undefined,
  testRegex: '(\\.|/)spec\\.(js?|ts?)$',

  // --- generate coverage report
  collectCoverage: true,
  reporters,
  coverageReporters,
  coveragePathIgnorePatterns: [
    '<rootDir>/[\\w/]*test/_[a-zA-Z]+\\.ts',
    '<rootDir>/src/testing/*',
    '<rootDir>/src/[\\w/]*/testing/*',
    '<rootDir>/node_modules/'
  ]
};
