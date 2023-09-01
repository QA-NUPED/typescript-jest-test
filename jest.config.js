module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    './src/classes/': {
      branches: 100,
      statements: 100,
    },
    './src/services/': {
      branches: 100,
      statements: 100,
    },
    './src/**/**/*.js': {
      statements: 100,
    },
  },
};