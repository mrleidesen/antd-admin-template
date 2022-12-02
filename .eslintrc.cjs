/* eslint-disable node/no-unpublished-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'import', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    semi: ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: `@/**`,
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'type'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
        allowSeparatedGroups: false,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-use-before-define': 'warn',
    'no-async-promise-executor': 'warn',
    'no-debugger': 'warn',
    'no-empty': 'warn',
    'no-process-exit': 'off',
    'no-unused-expressions': 'error',
    'no-useless-escape': 'off',
    'no-useless-catch': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'react/jsx-key': 'error',
    'spaced-comment': ['error', 'always'],
    'node/no-unsupported-features/node-builtins': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': [
      'warn',
      {
        tryExtensions: ['.ts', '.js', '.jsx', '.tsx', '.d.ts'],
      },
    ],

    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',

    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});
