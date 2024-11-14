import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  includeIgnoreFile(gitignorePath),
  eslintConfigPrettier,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^I',
        },
      ],
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      indent: ['error', 2],
      'no-duplicate-imports': 'error',
      'object-curly-spacing': ['error', 'always'],
      camelcase: ['error', { properties: 'always' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);
