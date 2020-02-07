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
  roots: ['<rootDir>/test/'],
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '(\\.|/)spec\\.ts$',

  // --- generate coverage report
  collectCoverage: true,
  reporters: ['default'],
  coverageReporters: ['html', 'json'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/[\\w/]*test/_[a-zA-Z]+\\.ts',
    '<rootDir>/src/[\\w/]*/test/*',
    '<rootDir>/src/test/*'
  ]
};
