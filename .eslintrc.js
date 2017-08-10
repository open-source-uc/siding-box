module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "prettier",
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "trailingComma": "es5",
      "printWidth": 120,
    }],
  },
};
