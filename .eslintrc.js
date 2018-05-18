module.exports = {
  extends: ['plugin:vue/recommended', 'jwalker'],
  rules: {
    'no-console': 0,
    // 'vue/html-self-closing': 1,
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  }
};
