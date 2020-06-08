const isCi = (process.env.CI || 'false') === 'true';
const reporters = isCi ? ['default'] : undefined;
const coverageReporters = isCi ? ['text', 'lcov', 'json'] : ['text'];

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostic: true,
      babelConfig: true
    }
  },
  bail: true,
  roots: ['<rootDir>/src/'],
  testMatch: undefined,
  testRegex: '(\\.|/)spec\\.(js?|ts?)$',

  // --- Generate coverage report
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
