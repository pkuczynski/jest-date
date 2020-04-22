const OFF = 0,
      WARN = 1,
      ERROR = 2

const JEST_RULES = {
  // https://www.npmjs.com/package/eslint-plugin-jest#rules
  'jest/expect-expect': OFF,
  'jest/lowercase-name': OFF,
  'jest/no-commented-out-tests': OFF,
  'jest/no-duplicate-hooks': OFF,
  'jest/no-empty-title': OFF,
  'jest/no-expect-resolves': OFF,
  'jest/no-export': OFF,
  'jest/no-hooks': OFF,
  'jest/no-identical-title': OFF,
  'jest/no-if': OFF,
  'jest/no-jest-import': OFF,
  'jest/no-large-snapshots': OFF,
  'jest/no-mocks-import': OFF,
  'jest/no-standalone-expect': OFF,
  'jest/no-test-callback': OFF,
  'jest/no-test-prefixes': OFF,
  'jest/no-truthy-falsy': OFF,
  'jest/no-try-expect': OFF,
  'jest/prefer-called-with': OFF,
  'jest/prefer-expect-assertions': OFF,
  'jest/prefer-inline-snapshots': OFF,
  'jest/prefer-spy-on': OFF,
  'jest/prefer-strict-equal': OFF,
  'jest/prefer-todo': OFF,
  'jest/require-top-level-describe': OFF,
  'jest/require-tothrow-message': OFF,

  'jest/no-alias-methods': WARN,
  'jest/no-disabled-tests': WARN,

  'jest/consistent-test-it': [ERROR, { 'fn': 'it', 'withinDescribe': 'it' }],
  'jest/no-focused-tests': ERROR,
  'jest/no-jasmine-globals': ERROR,
  'jest/no-test-return-statement': ERROR,
  'jest/prefer-to-be-null': ERROR,
  'jest/prefer-to-be-undefined': ERROR,
  'jest/prefer-to-contain': ERROR,
  'jest/prefer-to-have-length': ERROR,
  'jest/valid-describe': ERROR,
  'jest/valid-expect': ERROR,
  'jest/valid-expect-in-promise': OFF,
}

const JEST_FORMATTING_RULES = {
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting#rule-documentation
  'jest-formatting/padding-around-after-all-blocks': ERROR,
  'jest-formatting/padding-around-after-each-blocks': ERROR,
  'jest-formatting/padding-around-before-all-blocks': ERROR,
  'jest-formatting/padding-around-before-each-blocks': ERROR,
  'jest-formatting/padding-around-expect-groups': ERROR,
  'jest-formatting/padding-around-describe-blocks': ERROR,
  'jest-formatting/padding-around-test-blocks': ERROR
}

module.exports = {
  env: {
    'jest/globals': true
  },

  plugins: [
    'jest',
    'jest-formatting'
  ],

  rules: {
    ...JEST_RULES,
    ...JEST_FORMATTING_RULES
  },

  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
