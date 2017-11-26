const path = require('path');

module.exports = {
  "root": true,
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "node": true
  },
  "extends": 'airbnb-base',
  // required to lint *.vue files
  "plugins": [
    "html",
    "import",
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.join(__dirname, "webpack.config.js"),
      }
    }
  },
  // add your custom rules here
  "rules": {
    "no-shadow": [2, {"allow": ["state"]}],
    "no-param-reassign": "off",
    // "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "function-paren-newline": [2, "never"],
    "eqeqeq": "off",
    // "import/extensions": [2, { "js": "always" }],
  },
  "globals": {
    "NODE_ENV": true,
    "NET_DELAY": true,
  }
};
