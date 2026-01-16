// @ts-check
const stylistic = require('@stylistic/eslint-plugin')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
// @ts-ignore
const parserTs = require('@typescript-eslint/parser')

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
const srcRules = {
  plugins: {
    'style': stylistic,
    'ts': typescriptPlugin,
  },
  languageOptions: {
    parser: parserTs,
    parserOptions: {
      project: ['./tsconfig.json'],
    },
  },
  files: [
    '**/*.ts',
  ],
  ignores: [
    '**/*.spec.ts',
    '**/fixtures/**/*.ts',
    '**/dist/**',
    '**/*.d.ts',
  ],
  rules: {
    'curly': 'error',
    'eqeqeq': 'error',
    'function-paren-newline': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'space-infix-ops': 'error',
    'ts/await-thenable': 'error',
    'ts/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
      },
    ],
    'ts/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'ts/consistent-type-definitions': [
      'error',
      'type',
    ],
    'ts/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
      },
      {
        selector: 'import',
        format: [
          'camelCase',
          'PascalCase',
        ],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'method',
        format: [
          'camelCase',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'ts/no-inferrable-types': 'error',
    'ts/no-unnecessary-condition': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unnecessary-type-constraint': 'error',
    'ts/return-await': 'error',
    'style/brace-style': 'error',
    'style/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'style/array-bracket-newline': 'error',
    'style/array-element-newline': [
      'error',
      {
        ArrayExpression: 'always',
        ArrayPattern: 'never',
      },
    ],
    'style/arrow-parens': 'error',
    'style/eol-last': [
      'error',
      'always',
    ],
    'style/indent': [
      'error',
      2,
    ],
    'style/key-spacing': 'error',
    'style/linebreak-style': [
      'error',
      'unix',
    ],
    'style/multiline-ternary': 'error',
    'style/no-multi-spaces': 'error',
    'style/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'style/no-trailing-spaces': 'error',
    'style/object-curly-spacing': [
      'error',
      'always',
    ],
    'style/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1,
        },
        ExportDeclaration: 'always',
        ImportDeclaration: {
          multiline: true,
        },
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'style/object-property-newline': 'error',
    'style/quotes': [
      'error',
      'single',
      { avoidEscape: true, },
    ],
    'style/semi': [
      'error',
      'never',
    ],
  },
}

const testRules = {
  plugins: {
    'style': stylistic,
  },
  languageOptions: {
    parser: parserTs,
  },
  files: [
    '**/*.spec.ts',
    '**/fixtures/**/*.ts',
  ],
  rules: {
    'curly': 'error',
    'eqeqeq': 'error',
    'function-paren-newline': 'error',
    'max-statements-per-line': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'style/brace-style': 'error',
    'style/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'style/array-bracket-newline': 'error',
    'style/array-element-newline': [
      'error',
      {
        ArrayExpression: 'always',
        ArrayPattern: 'never',
      },
    ],
    'style/arrow-parens': 'error',
    'style/eol-last': [
      'error',
      'always',
    ],
    'style/indent': [
      'error',
      2,
    ],
    'style/key-spacing': 'error',
    'style/linebreak-style': [
      'error',
      'unix',
    ],
    'style/multiline-ternary': 'error',
    'style/no-multi-spaces': 'error',
    'style/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'style/no-trailing-spaces': 'error',
    'style/object-curly-spacing': [
      'error',
      'always',
    ],
    'style/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
        },
        ExportDeclaration: 'always',
        ImportDeclaration: {
          multiline: true,
        },
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'style/object-property-newline': 'error',
    'style/quotes': [
      'error',
      'single',
    ],
    'style/semi': [
      'error',
      'never',
    ],
    'style/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
  },
}

module.exports = {
  srcRules,
  testRules,
}

