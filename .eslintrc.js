module.exports = {
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
  },
  "env": {
    "node": true,
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "prettier",
  ],
  "plugins": [
    "prettier",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "trailingComma": "es5",
    }],
  },
};
