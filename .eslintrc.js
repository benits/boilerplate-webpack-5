const configRecommended = require('eslint-plugin-jest').configs.recommended

module.exports = {
  settings: {
    'import/resolver': 'webpack',
    'import/modules': 'webpack',
    'import/extensions': ['.js', '.jsx']
  },
  env: {
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/react',
    'prettier',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@babel'],
  ignorePatterns: ['dist/*', 'node_modules/*', 'config/*'],
  rules: {
    '@babel/new-cap': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-unresolved': [0, { caseSensitive: false }],
    'react/jsx-props-no-spreading': [0, {}],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-closing-bracket-location': [0]
  },
  overrides: [
    {
      files: ['**/*.(spec|test).js?(x)'],
      env: { jest: true },
      plugins: ['jest'],
      ...configRecommended
    }
  ]
}
