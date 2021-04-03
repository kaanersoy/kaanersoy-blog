module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'max-len': ['fix', { 'code': 130 }]
  },
}
