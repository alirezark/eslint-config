"use strict";

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint/eslint-plugin", "jsdoc", "prettier", "react-hooks", "lodash"],
  extends: ["plugin:react-hooks/recommended", "plugin:prettier/recommended", "plugin:react/recommended"],
  rules: {
    curly: "error",
    "dot-notation": "off",
    "eol-last": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "guard-for-in": "off",
    "jsdoc/check-alignment": "error",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": ["error", { allow: ["error", "log", "warn", "info"] }],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-restricted-imports": ["error", "moment"],
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "prettier/prettier": "error",
    radix: "error",
    "sort-keys": "off",
    "spaced-comment": ["off", "always"],
    "use-isnan": "error",
    "no-duplicate-imports": 'error',
    "lodash/import-scope": [2, "member"],
    "quotes": [2, "single"],
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    // disabled temporarily
    "@typescript-eslint/ban-types": 0,
    // disabled temporarily
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-use-before-define": 1,
    // disabled temporarily
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0
    // re-enable up for discussion
  },
};
