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
    'import/no-unresolved': [0, { caseSensitive: false }]
  }
}
