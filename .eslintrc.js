module.exports = {
  settings: {
    'import/resolver': 'webpack'
  },
  env: {
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@babel'],
  ignorePatterns: ['temp.js', 'dist/*', './node_modules'],
  rules: {
    'prettier/prettier': 'error',
    '@babel/new-cap': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    commonjs: 'true',
    amd: 'true'
  }
}
