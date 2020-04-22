const OFF = 0, WARN = 1, ERROR = 2

const REACT_RULES = {
  // React in general
  // https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules
  'react/boolean-prop-naming': OFF,
  'react/button-has-type': OFF,
  'react/default-props-match-prop-types': OFF,
  'react/destructuring-assignment': OFF,
  'react/display-name': OFF,
  'react/forbid-component-props': OFF,
  'react/forbid-dom-props': OFF,
  'react/forbid-elements': OFF,
  'react/forbid-prop-types': OFF,
  'react/forbid-foreign-prop-types': OFF,
  'react/no-access-state-in-setstate': OFF,
  'react/no-array-index-key': OFF,
  'react/no-children-prop': OFF,
  'react/no-danger': OFF,
  'react/no-danger-with-children': OFF,
  'react/no-did-mount-set-state': OFF,
  'react/no-did-update-set-state': OFF,
  'react/no-direct-mutation-state': OFF,
  'react/no-find-dom-node': OFF,
  'react/no-is-mounted': OFF,
  'react/no-multi-comp': OFF,
  'react/no-redundant-should-component-update': OFF,
  'react/no-render-return-value': OFF,
  'react/no-set-state': OFF,
  'react/no-string-refs': OFF,
  'react/no-this-in-sfc': OFF,
  'react/no-unescaped-entities': OFF,
  'react/no-unsafe': OFF,
  'react/no-unused-state': OFF,
  'react/no-will-update-set-state': OFF,
  'react/prefer-es6-class': OFF,
  'react/prefer-read-only-props': OFF,
  'react/prefer-stateless-function': OFF,
  'react/require-default-props': OFF,
  'react/require-optimization': OFF,
  'react/require-render-return': OFF,
  'react/sort-comp': OFF,
  'react/state-in-constructor': OFF,
  'react/static-property-placement': OFF,
  
  'react/no-unused-prop-types': WARN,
  'react/no-deprecated': WARN,
  'react/no-typos': WARN,
  'react/react-in-jsx-scope': WARN,
  'react/self-closing-comp': WARN,
  'react/sort-prop-types': WARN,

  'react/no-unknown-property': ERROR,
  'react/prop-types': ERROR,
  'react/style-prop-object': ERROR,
  'react/void-dom-elements-no-children': ERROR,
  
  // JSX related
  // https://www.npmjs.com/package/eslint-plugin-react#jsx-specific-rules
  'react/jsx-child-element-spacing': OFF,
  'react/jsx-curly-newline': OFF,
  'react/jsx-first-prop-new-line': OFF,
  'react/jsx-filename-extension': OFF,
  'react/jsx-no-literals': OFF,
  'react/jsx-max-depth': OFF,
  'react/jsx-max-props-per-line': OFF,
  'react/jsx-one-expression-per-line': OFF,
  'react/jsx-space-before-closing': OFF,
  'react/jsx-handler-names': OFF,
  'react/jsx-no-comment-textnodes': OFF,
  'react/jsx-no-bind': OFF,
  'react/jsx-no-undef': OFF,
  'react/jsx-pascal-case': OFF,
  'react/jsx-props-no-spreading': OFF,
  'react/jsx-sort-default-props': OFF,
  'react/jsx-curly-brace-presence': OFF,
  
  'react/jsx-boolean-value': WARN,
  'react/jsx-closing-bracket-location': [WARN, 'after-props'],
  'react/jsx-closing-tag-location': WARN,
  'react/jsx-curly-spacing': [WARN, { when: 'never' }],
  'react/jsx-equals-spacing': [WARN, 'never'],
  'react/jsx-fragments': [WARN, 'syntax'],
  'react/jsx-indent': [WARN, 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': [WARN, 2],
  'react/jsx-key': WARN,
  'react/jsx-uses-vars': WARN,
  
  'react/jsx-props-no-multi-spaces': WARN,
  'react/jsx-sort-props': [
    WARN, 
    {
      callbacksLast: true,
      reservedFirst: true,
      noSortAlphabetically: true
    }
  ],
  'react/jsx-tag-spacing': [
    WARN, 
    { 
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }
  ],
  'react/jsx-wrap-multilines': [
    WARN, 
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line'
    }
  ],

  'react/jsx-no-duplicate-props': ERROR,
  'react/jsx-no-target-blank': [ERROR, { 'enforceDynamicLinks': 'always' }],
  'react/jsx-uses-react': ERROR,
}

const REACT_HOOKS_RULES = {
  //https://www.npmjs.com/package/eslint-plugin-react-hooks#valid-and-invalid-examples
  'react-hooks/exhaustive-deps': OFF,

  'react-hooks/rules-of-hooks': ERROR
}

const JSX_A11Y_RULES = {
  // https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules
  'jsx-a11y/anchor-is-valid': OFF,
  'jsx-a11y/click-events-have-key-events': OFF,
  'jsx-a11y/html-has-lang': OFF,
  'jsx-a11y/interactive-supports-focus': OFF,
  'jsx-a11y/label-has-associated-control': OFF,
  'jsx-a11y/media-has-caption': OFF,
  'jsx-a11y/mouse-events-have-key-events': OFF,
  'jsx-a11y/no-autofocus': OFF,
  'jsx-a11y/no-interactive-element-to-noninteractive-role': OFF,
  'jsx-a11y/no-noninteractive-element-interactions': OFF,
  'jsx-a11y/no-noninteractive-element-to-interactive-role': OFF,
  'jsx-a11y/no-noninteractive-tabindex': OFF,
  'jsx-a11y/no-onchange': OFF,
  'jsx-a11y/no-static-element-interactions': OFF,
  'jsx-a11y/tabindex-no-positive': OFF,

  'jsx-a11y/accessible-emoji': ERROR,
  'jsx-a11y/alt-text': ERROR,
  'jsx-a11y/anchor-has-content': ERROR,
  'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
  'jsx-a11y/aria-props': ERROR,
  'jsx-a11y/aria-proptypes': ERROR,
  'jsx-a11y/aria-role': ERROR,
  'jsx-a11y/aria-unsupported-elements': ERROR,
  'jsx-a11y/heading-has-content': ERROR,
  'jsx-a11y/iframe-has-title': ERROR,
  'jsx-a11y/img-redundant-alt': ERROR,
  'jsx-a11y/no-access-key': ERROR,
  'jsx-a11y/no-distracting-elements': ERROR,
  'jsx-a11y/no-redundant-roles': ERROR,
  'jsx-a11y/role-has-required-aria-props': ERROR,
  'jsx-a11y/role-supports-aria-props': ERROR,
  'jsx-a11y/scope': ERROR,
}

const TYPESCRIPT_OVERRIDE = {
  files: ['*.ts', '*.tsx'],
  rules: {
    'react/default-props-match-prop-types': OFF,
    'react/forbid-prop-types': OFF,
    'react/forbid-foreign-prop-types': OFF,
    'react/no-unused-prop-types': OFF,
    'react/sort-prop-types': OFF,
    'react/prop-types': OFF,
  }
}
module.exports = {
  
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  
  rules: {
    ...REACT_RULES,
    ...REACT_HOOKS_RULES,
    ...JSX_A11Y_RULES
  },

  overrides: [
    TYPESCRIPT_OVERRIDE
  ],
  
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
