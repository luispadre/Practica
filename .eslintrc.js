module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    semi: 1,
    quotes: [2, 'single'],
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    quotes: 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'import/order': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-first-props-new-line': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': 1,
    'import/extensions': 0,
    'import/order': 1,
    'react/prefer-stateless-function': 0,
    'import/newline-after-import': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'react/jsx-uses-vars': 2,
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
