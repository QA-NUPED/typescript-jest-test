/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
      statements: 85,
    },
    './src/classes/': {
      statements: 84,
    },
    './src/classes/**/*.ts': {
      statements: 100,
    },
    './src/services/**/*.ts': {
      statements: 100,
    },
  },
};


module.exports = config;