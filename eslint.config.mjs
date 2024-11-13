import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for TypeScript files
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended, // Recommended JS rules from @eslint/js

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // React configuration
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },

  // Jest and Node environments for test and config files
  {
    files: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
      'jest.setup.js',
      'commitlint.config.js',
      '__mocks__/**/*.ts',
    ],
    languageOptions: {
      globals: {
        ...globals.jest, // Adds Jest globals like 'describe', 'it', 'jest'
        ...globals.node, // Adds Node.js globals like 'module'
      },
    },
    plugins: { 'testing-library': testingLibrary },
    rules: {
      ...testingLibrary.configs.react.rules,
    },
  },
];
