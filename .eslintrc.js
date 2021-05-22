module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'object-shorthand': [2, 'always', { ignoreConstructors: true }],

    // 'vue/no-lone-template': [
    //   'error',
    //   {
    //     ignoreAccessible: true,
    //   },
    // ],
  },
}
