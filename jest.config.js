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
  coveragePathIgnorePatterns: [
    '<rootDir>/src/[\\w/]*test/_[a-zA-Z]+\\.ts',
    '<rootDir>/src/testing/*',
    '<rootDir>/src/[\\w/]*/testing/*',
    '<rootDir>/node_modules/'
  ],
  coverageReporters,
  reporters,
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '(\\.|/)spec\\.ts$'
};
