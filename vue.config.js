module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/space-tourism-live/' : '/',


  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "src/assets/styles/_variables.scss";
            @import "src/assets/styles/_mixins.scss";
            @import "src/assets/styles/_animations.scss";
            @import "src/assets/styles/_backgrounds.scss";
          `
      }
    }
  }
}
