const jestCommon = require('./jest-common')

module.exports = {
  ...jestCommon,
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  snapshotSerializers: ['@emotion/jest/serializer']
}
