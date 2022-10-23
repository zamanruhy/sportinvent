const useRem = false

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url')({ url: 'rebase' }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    useRem
      ? require('postcss-pxtorem')({
          propList: ['*'],
          selectorBlackList: [/^html$/]
        })
      : require('postcss-rem-to-pixel')({ propList: ['*'] }),
    require('autoprefixer')
  ]
}
