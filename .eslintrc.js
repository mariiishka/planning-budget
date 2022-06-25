module.exports = {
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier', 'import'],
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': ['error', {
      props: false
    }],
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
      trailingComma: 'all'
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
  }
};