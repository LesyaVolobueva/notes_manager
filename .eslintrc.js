module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:unicorn/recommended",
    "eslint-config-airbnb",
  ],
  "plugins": [
    "eslint-plugin-react",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-import",
    "eslint-plugin-unicorn",
    "eslint-plugin-react-hooks",
  ],
  "env": {
    "es6": true,
    "browser": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
      },
    },
  },
  "rules": {
    "operator-linebreak": ["error", "after"],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    "no-debugger": "warn",
    "no-else-return": "off",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "off",
    "no-negated-condition": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true,
    }],
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreRegExpLiterals": true,
    }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "semi": "error",
    "eol-last": ["error", "always"],
    "quotes": ["error", "single"],
    "quote-props": ["error", "consistent-as-needed"],
    "require-atomic-updates": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", { "consistent": true }],
    "padding-line-between-statements": ["error",
      { "blankLine": "always", prev: "*", next: "return" },
      { "blankLine": "always", prev: ["const", "let", "var"], next: "*" },
      { "blankLine": "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-bracket-newline": ["error", "consistent"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],

    "react/jsx-indent": ["error", 2],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line"
    }],
    "react/jsx-closing-bracket-location": ["error", {
      selfClosing: "after-props",
      nonEmpty: "after-props"
    }],
    "react/display-name": "off",
    "react/no-danger": "off",
    "react/require-default-props": ["error", { "forbidDefaultForRequired": true }],
    "react/no-did-mount-set-state": "off",
    "react/no-did-update-set-state": "off",
    "react/no-unused-prop-types": "error",
    "react/no-string-refs": "error",
    "react/no-children-prop": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-multi-comp": "error",
    "react/destructuring-assignment": "off",
    "react/button-has-type": "error",
    "react/sort-prop-types": "off",
    "react/sort-comp": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "react/jsx-fragments": ["error", "element"],
    "react/state-in-constructor": ["error", "never"],
    "react/jsx-props-no-spreading": "off",

    "import/first": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-cycle": "error",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.js"] }],
    "import/no-useless-path-segments": "error",
    "import/order": ["error", {
      "groups": [
        ["builtin", "external"],
        ["internal"],
        ["parent", "sibling", "index"],
      ],
      "newlines-between": "always",
    }],
    "import/prefer-default-export": "off",

    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": ["error", { "components": [] }],
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": ["error", { "case": "kebabCase" }],
  },
};