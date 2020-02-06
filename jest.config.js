const isCi = (process.env.CI || 'false') === 'true';
const reporters = isCi ? ['default'] : undefined;
const coverageReporters = isCi ? ['text', 'cobertura', 'html'] : ['text'];

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
  verbose: true,
  bail: true,
  collectCoverage: true, // generate coverage report
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/[\\w/]*test/_[a-zA-Z]+\\.ts',
    '<rootDir>/src/[\\w/]*/test/*',
    '<rootDir>/src/test/*'
  ],
  coverageReporters,
  reporters,
  roots: ['<rootDir>/test/'],
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '(\\.|/)spec\\.ts$'
};
