const mix = require('laravel-mix');

mix.setPublicPath('public')
    .js('resources/js/app.js', 'public/js')
    .stylus('resources/stylus/app.styl', 'public/css')
    .options({
        processCssUrls: false,
    })
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })
    .override((webpackConfig) => {
        webpackConfig.plugins = webpackConfig.plugins.filter(
            (plugin) => plugin.constructor.name !== 'WebpackBar'
        );
    });
