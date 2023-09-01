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
  },
};


module.exports = config;