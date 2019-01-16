module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
  },
  plugins: [
    'html'
  ],
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": ['error', 2],
    "vue/html-indent": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-self-closing": 0,
    "no-tabs": 0
  }
}
