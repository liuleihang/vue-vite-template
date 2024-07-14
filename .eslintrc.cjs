/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // vue 规则
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 告诉 ESLint 关闭与 Prettier 格式化规则冲突的任何规则，需写在最后，会覆盖前面的配置
    'plugin:prettier/recommended'
  ],
  // 添加 vue文件解析器  解析template文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 告诉 ESLint 关闭与 Prettier 格式化规则冲突的任何规则，需写在最后，会覆盖前面的配置
    'plugin:prettier/recommended'
  ],
  rules: {
    // 强制数组元素间出现换行
    'array-element-newline': 0,
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 忽略第一个属性换行
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'ignore'
      }
    ],
    // 忽略组件命名为多词限制
    'vue/multi-word-component-names': 'off',
    // 忽略未使用变量
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off'
  }
};
