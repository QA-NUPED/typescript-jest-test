/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 85,
    },
    
    './src/classes/': {
      lines: 20,
    },
  },
};


module.exports = config;