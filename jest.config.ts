import {Config} from '@jest/types';

const isCi = (process.env.CI ?? 'false') === 'true';

/**
 * `jest-junit` emit an .xml file containing all our test results in a well known, exportable format.
 * CI systems can display this nicely.
 */
const reporters = isCi ? ['default', 'jest-junit'] : undefined;
const coverageReporters: Config.CoverageReporters = isCi
  ? ['text', 'lcov', 'json']
  : ['text'];

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostic: true
    }
  },
  bail: true,
  roots: ['<rootDir>/src/'],
  testMatch: undefined,
  testRegex: '(\\.|/)spec\\.(js?|ts?)$',
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

export default config;
