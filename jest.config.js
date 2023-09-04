/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      functions: 73,
      lines: 85,
      statements: 0,
    },
    
    './src/classes/**/*.ts': {
      statements: 100,
    },
  },
};


module.exports = config;