// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json')
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } }
    ]
  }
}
