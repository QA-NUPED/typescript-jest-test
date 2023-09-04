/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 85,
    },
    
    './src/classes/': {
      branches: 98,
      statements: 40,
    },
  },
};


module.exports = config;