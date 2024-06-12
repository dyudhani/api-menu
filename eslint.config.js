const prettier = require("eslint-config-prettier");

module.exports = [
  prettier,
  {
    languageOptions: {
      ecmaVersion: 8,
      sourceType: "module",
    },
    ignores: ["package-lock.json"],
    settings: {
      "html/html-extensions": [".html", ".htm"],
    },
    rules: {
      indent: ["warn", 2],
      semi: ["warn", "always"],
      quotes: ["warn", "double"],
    },
  },
];
