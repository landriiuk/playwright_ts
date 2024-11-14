import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^I',
        },
      ],
      'curly': ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'indent': ['error', 2],
      'no-duplicate-imports': 'error',
      'object-curly-spacing': ['error', 'always'],
      'camelcase': ['error', { properties: 'always' }],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);