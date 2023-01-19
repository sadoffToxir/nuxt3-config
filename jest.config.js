/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest',
    '.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue3-jest'
  },
  transformIgnorePatterns: [
    "node_modules"
  ],
  testEnvironment: 'jsdom'
}