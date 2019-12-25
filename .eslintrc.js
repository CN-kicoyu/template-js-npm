module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "rules": {
    "prettier/prettier": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
  }
}
