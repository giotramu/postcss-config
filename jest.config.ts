import type {Config} from 'jest';

const isCi = (process.env.CI ?? 'false') === 'true';

const reporters = isCi ? ['default', 'jest-junit'] : undefined;

const coverageReporters: Config['coverageReporters'] = isCi
  ? ['text', 'lcov', 'json']
  : ['text'];

const config: Config = {
  preset: 'ts-jest',
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/[\\w/]*test/_[a-zA-Z]+\\.ts',
    '<rootDir>/node_modules/'
  ],
  reporters,
  roots: ['<rootDir>/src/']
};

export default config;
