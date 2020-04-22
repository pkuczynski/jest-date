const OFF = 0,
      WARN = 1,
      ERROR = 2

const ESLINT_RULES = {
  // Possible errors
  // https://eslint.org/docs/rules/#possible-errors
  'for-direction': OFF,
  'getter-return': OFF,
  'no-await-in-loop': OFF,
  'no-console': OFF,
  'no-empty': OFF,
  'no-extra-semi': OFF,
  'no-import-assign': OFF,
  'require-atomic-updates': OFF,

  'no-async-promise-executor': ERROR,
  'no-compare-neg-zero': ERROR,
  'no-cond-assign': ERROR,
  'no-constant-condition': [ERROR, { 'checkLoops': false }],
  'no-control-regex': ERROR,
  'no-debugger': ERROR,
  'no-dupe-args': ERROR,
  'no-dupe-keys': ERROR,
  'no-duplicate-case': ERROR,
  'no-empty-character-class': ERROR,
  'no-ex-assign': ERROR,
  'no-extra-boolean-cast': ERROR,
  'no-extra-parens': [ERROR, 'functions'],
  'no-func-assign': ERROR,
  'no-inner-declarations': [ERROR, 'functions'],
  'no-invalid-regexp': ERROR,
  'no-irregular-whitespace': ERROR,
  'no-misleading-character-class': ERROR,
  'no-prototype-builtins': ERROR,
  'no-obj-calls': ERROR,
  'no-regex-spaces': ERROR,
  'no-sparse-arrays': ERROR,
  'no-template-curly-in-string': ERROR,
  'no-unexpected-multiline': ERROR,
  'no-unreachable': ERROR,
  'no-unsafe-finally': ERROR,
  'no-unsafe-negation': ERROR,
  'use-isnan': ERROR,
  'valid-typeof': [ERROR, { 'requireStringLiterals': true }],

  // Best practices
  // https://eslint.org/docs/rules/#best-practices
  'array-callback-return': OFF,
  'block-scoped-var': OFF,
  'class-methods-use-this': OFF,
  'complexity': OFF,
  'consistent-return': OFF,
  'default-case': OFF,
  'default-param-last': OFF,
  'guard-for-in': OFF,
  'max-classes-per-file': OFF,
  'no-alert': OFF,
  'no-div-regex': OFF,
  'no-else-return': OFF,
  'no-empty-function': OFF,
  'no-eq-null': OFF,
  'no-extra-label': OFF,
  'no-implicit-coercion': OFF,
  'no-implicit-globals': OFF,
  'no-invalid-this': OFF,
  'no-loop-func': OFF,
  'no-magic-numbers': OFF,
  'no-param-reassign': OFF,
  'no-restricted-properties': OFF,
  'no-script-url': OFF,
  'no-unused-labels': OFF,
  'no-useless-concat': OFF,
  'no-warning-comments': OFF,
  'prefer-named-capture-group': OFF,
  'prefer-regex-literals': OFF,
  'radix': OFF,
  'require-await': OFF,
  'require-unicode-regexp': OFF,
  'vars-on-top': OFF,

  'accessor-pairs': ERROR,
  'curly': [ERROR, 'multi-line'],
  'dot-location': [ERROR, 'property'],
  'dot-notation': [ERROR, { 'allowKeywords': true }],
  'eqeqeq': [ERROR, 'always', { 'null': 'ignore' }],
  'no-caller': ERROR,
  'no-case-declarations': ERROR,
  'no-empty-pattern': ERROR,
  'no-eval': ERROR,
  'no-extend-native': ERROR,
  'no-extra-bind': ERROR,
  'no-fallthrough': ERROR,
  'no-floating-decimal': ERROR,
  'no-global-assign': ERROR,
  'no-implied-eval': ERROR,
  'no-iterator': ERROR,
  'no-labels': [ERROR, { 'allowLoop': false, 'allowSwitch': false }],
  'no-lone-blocks': ERROR,
  'no-multi-spaces': ERROR,
  'no-multi-str': ERROR,
  'no-new': ERROR,
  'no-new-func': ERROR,
  'no-new-wrappers': ERROR,
  'no-octal': ERROR,
  'no-octal-escape': ERROR,
  'no-proto': ERROR,
  'no-redeclare': [ERROR, { 'builtinGlobals': false }],
  'no-return-assign': [ERROR, 'except-parens'],
  'no-return-await': ERROR,
  'no-self-assign': [ERROR, { 'props': true }],
  'no-self-compare': ERROR,
  'no-sequences': ERROR,
  'no-throw-literal': ERROR,
  'no-unmodified-loop-condition': ERROR,
  'no-unused-expressions': [ERROR, { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }],
  'no-useless-call': ERROR,
  'no-useless-escape': ERROR,
  'no-useless-return': ERROR,
  'no-void': ERROR,
  'no-with': ERROR,
  'prefer-promise-reject-errors': ERROR,
  'wrap-iife': [ERROR, 'any', { 'functionPrototypeMethods': true }],
  'yoda': [ERROR, 'never'],

  // Strict
  // https://eslint.org/docs/rules/#strict-mode
  'strict': OFF,

  // Variables
  // https://eslint.org/docs/rules/#variables
  'init-declarations': OFF,
  'no-label-var': OFF,
  'no-restricted-globals': OFF,
  'no-shadow': OFF,
  'no-undefined': OFF,

  'no-shadow-restricted-names': ERROR,
  'no-undef': ERROR,
  'no-undef-init': ERROR,
  'no-unused-vars': ERROR,
  'no-use-before-define': [ERROR, { 'functions': false, 'classes': false, 'variables': false }],

  // Node.js & CommonJS
  // https://eslint.org/docs/rules/#nodejs-and-commonjs
  'callback-return': OFF,
  'global-require': OFF,
  'no-buffer-constructor': OFF,
  'no-mixed-requires': OFF,
  'no-process-env': OFF,
  'no-process-exit': OFF,
  'no-restricted-modules': OFF,
  'no-sync': OFF,

  'handle-callback-err': [ERROR, '^(err|error)$' ],
  'no-new-require': ERROR,
  'no-path-concat': ERROR,

  // Stylistic issues
  // https://eslint.org/docs/rules/#stylistic-issues
  'array-bracket-newline': OFF,
  'array-element-newline': OFF,
  'camelcase': OFF,
  'capitalized-comments': OFF,
  'consistent-this': OFF,
  'func-name-matching': OFF,
  'func-names': OFF,
  'func-style': OFF,
  'function-call-argument-newline': OFF,
  'function-paren-newline': OFF,
  'id-blacklist': OFF,
  'id-length': OFF,
  'id-match': OFF,
  'implicit-arrow-linebreak': ERROR,
  'line-comment-position': OFF,
  'linebreak-style': OFF,
  'lines-around-comment': OFF,
  'max-depth': OFF,
  'max-lines': OFF,
  'max-lines-per-function': OFF,
  'max-nested-callbacks': OFF,
  'max-params': OFF,
  'max-statements': OFF,
  'max-statements-per-line': OFF,
  'multiline-comment-style': OFF,
  'newline-per-chained-call': OFF,
  'no-bitwise': OFF,
  'no-continue': OFF,
  'no-inline-comments': OFF,
  'no-lonely-if': OFF,
  'no-multi-assign': OFF,
  'no-negated-condition': OFF,
  'no-plusplus': OFF,
  'no-restricted-syntax': OFF,
  'no-ternary': OFF,
  'no-underscore-dangle': OFF,
  'nonblock-statement-body-position': OFF,
  'one-var-declaration-per-line': OFF,
  'operator-assignment': OFF,
  'padding-line-between-statements': OFF,
  'prefer-object-spread': OFF,
  'semi-style': OFF,
  'sort-keys': OFF,
  'sort-vars': OFF,
  'switch-colon-spacing': OFF,
  'wrap-regex': OFF,

  'array-bracket-spacing': [ERROR, 'never'],
  'block-spacing': [ERROR, 'always'],
  'brace-style': [ERROR, '1tbs', { 'allowSingleLine': true }],
  'comma-dangle': [ERROR, {
    'arrays': 'never',
    'objects': 'never',
    'imports': 'never',
    'exports': 'never',
    'functions': 'never'
  }],
  'comma-spacing': [ERROR, { 'before': false, 'after': true }],
  'comma-style': [ERROR, 'last'],
  'computed-property-spacing': [ERROR, 'never'],
  'eol-last': ERROR,
  'func-call-spacing': [ERROR, 'never'],
  'indent': [ERROR, 2, {
    'SwitchCase': 1,
    'VariableDeclarator': 1,
    'outerIIFEBody': 1,
    'MemberExpression': 1,
    'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
    'FunctionExpression': { 'parameters': 1, 'body': 1 },
    'CallExpression': { 'arguments': 1 },
    'ArrayExpression': 1,
    'ObjectExpression': 1,
    'ImportDeclaration': 1,
    'flatTernaryExpressions': false,
    'ignoreComments': false,
    'ignoredNodes': ['TemplateLiteral > *']
  }],
  'jsx-quotes': [ERROR, 'prefer-single'],
  'key-spacing': [ERROR, { 'beforeColon': false, 'afterColon': true }],
  'keyword-spacing': [ERROR, { 'before': true, 'after': true }],
  'lines-between-class-members': [ERROR, 'always', { 'exceptAfterSingleLine': true }],
  'max-len': [ERROR, { 'code': 100 }],
  'multiline-ternary': [ERROR, 'always-multiline'],
  'new-cap': [ERROR, { 'newIsCap': true, 'capIsNew': false, 'properties': true }],
  'new-parens': ERROR,
  'no-array-constructor': ERROR,
  'no-mixed-operators': [ERROR, {
    'groups': [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof']
    ],
    'allowSamePrecedence': true
  }],
  'no-mixed-spaces-and-tabs': ERROR,
  'no-multiple-empty-lines': [ERROR, { 'max': 1, 'maxEOF': 0 }],
  'no-nested-ternary': ERROR,
  'no-new-object': ERROR,
  'no-tabs': ERROR,
  'no-trailing-spaces': ERROR,
  'no-unneeded-ternary': [ERROR, { 'defaultAssignment': false }],
  'no-whitespace-before-property': ERROR,
  'object-curly-newline': [ERROR, { 'multiline': true, 'consistent': true }],
  'object-curly-spacing': [ERROR, 'always'],
  'object-property-newline': [ERROR, { 'allowMultiplePropertiesPerLine': true }],
  'one-var': [ERROR, { 'initialized': 'never' }],
  'operator-linebreak': [ERROR, 'before'],
  'padded-blocks': [ERROR, { 'blocks': 'never', 'switches': 'never', 'classes': 'never' }],
  'quote-props': [ERROR, 'as-needed'],
  'quotes': [ERROR, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
  'semi': [ERROR, 'never'],
  'semi-spacing': [ERROR, { 'before': false, 'after': true }],
  'space-before-blocks': [ERROR, 'always'],
  'space-before-function-paren': [ERROR, 'always'],
  'space-in-parens': [ERROR, 'never'],
  'space-infix-ops': ERROR,
  'space-unary-ops': [ERROR, { 'words': true, 'nonwords': false }],
  'spaced-comment': [ERROR, 'always', {
    'line': { 'markers': ['*package', '!', '/', ',', '='] },
    'block': { 'balanced': true, 'markers': ['*package', '!', ',', ':', '::', 'flow-include'], 'exceptions': ['*'] }
  }],
  'template-tag-spacing': [ERROR, 'never'],
  'unicode-bom': [ERROR, 'never'],

  // ECMAScript 6
  // https://eslint.org/docs/rules/#ecmascript-6
  'arrow-parens': OFF,
  'no-confusing-arrow': OFF,
  'no-duplicate-imports': OFF,
  'no-restricted-imports': OFF,
  'no-var': OFF,
  'object-shorthand': OFF,
  'prefer-arrow-callback': OFF,
  'prefer-destructuring': OFF,
  'prefer-numeric-literals': OFF,
  'prefer-rest-params': OFF,
  'prefer-spread': OFF,
  'prefer-template': OFF,
  'require-yield': OFF,
  'sort-imports': OFF,

  'arrow-body-style': [ERROR, 'as-needed'],
  'arrow-spacing': [ERROR, { 'before': true, 'after': true }],
  'constructor-super': ERROR,
  'generator-star-spacing': [ERROR, { 'before': true, 'after': true }],
  'no-class-assign': ERROR,
  'no-const-assign': ERROR,
  'no-dupe-class-members': ERROR,
  'no-new-symbol': ERROR,
  'no-this-before-super': ERROR,
  'no-useless-computed-key': ERROR,
  'no-useless-constructor': ERROR,
  'no-useless-rename': ERROR,
  'prefer-const': [ERROR, {'destructuring': 'all'}],
  'rest-spread-spacing': [ERROR, 'never'],
  'symbol-description': ERROR,
  'template-curly-spacing': [ERROR, 'never'],
  'yield-star-spacing': [ERROR, 'both']
}

const TYPESCRIPT_ESLINT_RULES = {
  // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#supported-rules
  '@typescript-eslint/array-type': OFF,
  '@typescript-eslint/await-thenable': OFF,
  '@typescript-eslint/brace-style': OFF,
  '@typescript-eslint/camelcase': OFF,
  '@typescript-eslint/explicit-function-return-type': OFF,
  '@typescript-eslint/explicit-member-accessibility': OFF,
  '@typescript-eslint/func-call-spacing': OFF,
  '@typescript-eslint/generic-type-naming': OFF,
  '@typescript-eslint/member-naming': OFF,
  '@typescript-eslint/member-ordering': OFF,
  '@typescript-eslint/no-extra-parens': OFF,
  '@typescript-eslint/no-extraneous-class': OFF,
  '@typescript-eslint/no-floating-promises': OFF,
  '@typescript-eslint/no-for-in-array': OFF,
  '@typescript-eslint/no-magic-numbers': OFF,
  '@typescript-eslint/no-misused-promises': OFF,
  '@typescript-eslint/no-parameter-properties': OFF,
  '@typescript-eslint/no-require-imports': OFF,
  '@typescript-eslint/no-type-alias': OFF,
  '@typescript-eslint/no-unnecessary-condition': OFF,
  '@typescript-eslint/no-unnecessary-qualifier': OFF,
  '@typescript-eslint/no-unnecessary-type-arguments': OFF,
  '@typescript-eslint/no-unnecessary-type-assertion': OFF,
  '@typescript-eslint/no-useless-constructor': OFF,
  '@typescript-eslint/prefer-for-of': OFF,
  '@typescript-eslint/prefer-function-type': OFF,
  '@typescript-eslint/prefer-includes': OFF,
  '@typescript-eslint/prefer-readonly': OFF,
  '@typescript-eslint/prefer-regexp-exec': OFF,
  '@typescript-eslint/prefer-string-starts-ends-with': OFF,
  '@typescript-eslint/promise-function-async': OFF,
  '@typescript-eslint/quotes': OFF,
  '@typescript-eslint/require-array-sort-compare': OFF,
  '@typescript-eslint/require-await': OFF,
  '@typescript-eslint/restrict-plus-operands': OFF,
  '@typescript-eslint/semi': OFF,
  '@typescript-eslint/strict-boolean-expressions': OFF,
  '@typescript-eslint/typedef': OFF,
  '@typescript-eslint/unbound-method': OFF,
  '@typescript-eslint/unified-signatures': OFF,

  '@typescript-eslint/no-explicit-any': WARN,

  '@typescript-eslint/adjacent-overload-signatures': ERROR,
  '@typescript-eslint/ban-ts-ignore': ERROR,
  '@typescript-eslint/ban-types': ERROR,
  '@typescript-eslint/class-name-casing': ERROR,
  '@typescript-eslint/indent': [ERROR, 2],
  '@typescript-eslint/interface-name-prefix': ERROR,
  '@typescript-eslint/member-delimiter-style': [ERROR, { 'multiline': { 'delimiter': 'none'} }],
  '@typescript-eslint/no-array-constructor': ERROR,
  '@typescript-eslint/no-empty-function': ERROR,
  '@typescript-eslint/no-empty-interface': ERROR,
  '@typescript-eslint/no-inferrable-types': ERROR,
  '@typescript-eslint/no-misused-new': ERROR,
  '@typescript-eslint/no-namespace': ERROR,
  '@typescript-eslint/no-non-null-assertion': ERROR,
  '@typescript-eslint/no-this-alias': ERROR,
  '@typescript-eslint/no-unused-vars': ERROR,
  '@typescript-eslint/no-use-before-define': ERROR,
  '@typescript-eslint/no-var-requires': ERROR,
  '@typescript-eslint/prefer-namespace-keyword': ERROR,
  '@typescript-eslint/triple-slash-reference': ERROR,
  '@typescript-eslint/type-annotation-spacing': ERROR
}

const IMPORT_RULES = {
  // Static analysis
  // https://www.npmjs.com/package/eslint-plugin-import#static-analysis
  'import/no-unresolved': OFF,
  'import/named': OFF,
  'import/default': OFF,
  'import/namespace': OFF,
  'import/no-restricted-paths': OFF,
  'import/no-dynamic-require': OFF,
  'import/no-internal-modules': OFF,
  'import/no-self-import': OFF,
  'import/no-cycle': OFF,
  'import/no-useless-path-segments': OFF,
  'import/no-relative-parent-imports': OFF,
  'import/no-unused-modules': OFF,

  'import/no-absolute-path': [ERROR, { 'esmodule': true, 'commonjs': true, 'amd': false }],
  'import/no-webpack-loader-syntax': ERROR,

  // Helpful warnings
  // https://www.npmjs.com/package/eslint-plugin-import#helpful-warnings
  'import/no-named-as-default': OFF,
  'import/no-named-as-default-member': OFF,
  'import/no-deprecated': OFF,
  'import/no-extraneous-dependencies': OFF,
  'import/no-mutable-exports': OFF,
  'import/no-unused-modules': OFF,

  'import/export': ERROR,

  // Module systems
  // https://www.npmjs.com/package/eslint-plugin-import#module-systems
  'import/unambiguous': OFF,
  'import/no-commonjs': OFF,
  'import/no-amd': OFF,
  'import/no-nodejs-modules': OFF,

  // Style guide
  // https://www.npmjs.com/package/eslint-plugin-import#style-guide
  'import/exports-last': OFF,
  'import/no-namespace': OFF,
  'import/extensions': OFF,
  'import/newline-after-import': OFF,
  'import/prefer-default-export': OFF,
  'import/max-dependencies': OFF,
  'import/no-unassigned-import': OFF,
  'import/no-default-export': OFF,
  'import/no-named-export': OFF,
  'import/no-anonymous-default-export': OFF,
  'import/group-exports': OFF,
  'import/dynamic-import-chunkname': OFF,

  'import/first': ERROR,
  'import/no-duplicates': ERROR,
  'import/no-named-default': ERROR,
  'import/order': [
    ERROR,
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }
  ]
}


const TYPESCRIPT_OVERRIDE = {
  files: ['*.ts', '*.tsx'],
  rules: {
    //Checked by Typescript - ts(2378)
    'getter-return': OFF,
    // Checked by Typescript - ts(2300)
    'no-dupe-args': OFF,
    // Checked by Typescript - ts(1117)
    'no-dupe-keys': OFF,
    // Checked by Typescript - ts(7027)
    'no-unreachable': OFF,
    // Checked by Typescript - ts(2367)
    'valid-typeof': OFF,
    // Checked by Typescript - ts(2588)
    'no-const-assign': OFF,
    // Checked by Typescript - ts(2588)
    'no-new-symbol': OFF,
    // Checked by Typescript - ts(2376)
    'no-this-before-super': OFF,
    // This is checked by Typescript using the option `strictNullChecks`.
    'no-undef': OFF,
    // This is already checked by Typescript.
    'no-dupe-class-members': OFF,
    // This is already checked by Typescript.
    'no-redeclare': OFF,

    // overrides for eslint rules
    'indent': OFF,
    'no-array-constructor': OFF,
    'no-empty-function': OFF,
    'no-unused-vars': OFF,
    'no-use-before-define': OFF,

    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR
  }
}

module.exports = {
  env: {
    es6: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    ...ESLINT_RULES,
    ...TYPESCRIPT_ESLINT_RULES,
    ...IMPORT_RULES
  },

  plugins: [
    '@typescript-eslint',
    'import'
  ],

  overrides: [
    TYPESCRIPT_OVERRIDE
  ]
}
