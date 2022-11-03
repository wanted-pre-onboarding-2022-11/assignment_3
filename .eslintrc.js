module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  extends: ["react-app", "plugin:prettier/recommended", "eslint:recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-var": "error",
    eqeqeq: "error",
    "no-unused-vars": "warn",
  },
};
