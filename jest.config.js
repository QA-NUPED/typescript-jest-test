/** @type {import('jest').Config} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
    './src/classes/': {
      branches: 100,
      statements: -1,
    },
    './src/services/': {
      branches: 100,
      statements: -1,
    },
  },
};

module.exports = config;