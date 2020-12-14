const jestCommon = require('./test/jest-common')

module.exports = {
  ...jestCommon,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 80,
      statements: -10
    }
  },
  projects: ['./test/jest.lint.js', './test/jest.client.js']
}
