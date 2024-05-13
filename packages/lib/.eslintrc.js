/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-redeclare": "off",
  }
};
