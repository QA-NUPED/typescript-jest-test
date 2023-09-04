/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
      statements: 0,
    },
    './src/classes/**/*.ts': {
      statements: 100,
    },
  },
};


module.exports = config;