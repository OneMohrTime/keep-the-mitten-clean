let mix = require('laravel-mix');

require('laravel-mix-imagemin');

let PATHS = {
    node: './node_modules',
    src: './wp-content/themes/ktmc2024/src',
    dist: './wp-content/themes/ktmc2024/assets',
    proxy: 'https://keepthemittenclean.ddev.site'
};

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.jsx'],
        // fallback: {
        //     fs: false,
        //     net: false,
        //     tls: false,
        //     'child_process': false,
        //     "path": require.resolve("path-browserify"),
        //     "crypto": require.resolve("crypto-browserify"),
        //     "stream": require.resolve("stream-browserify"),
        //     "vm": require.resolve("vm-browserify"),
        //     "zlib": require.resolve("browserify-zlib"),
        //     "http": require.resolve("stream-http"),
        //     "https": require.resolve("https-browserify"),
        //     "querystring": require.resolve("querystring-es3"),
        //     "timers": require.resolve("timers-browserify"),
        //     "os": require.resolve("os-browserify/browser"),
        //     "constants": require.resolve("constants-browserify")
        // },
        // fallback: {
        //     path: require.resolve('path-browserify'),
        //     crypto: require.resolve('crypto-browserify'),
        //     stream: require.resolve('stream-browserify'),
        //     zlib: require.resolve('browserify-zlib'),
        //     buffer: require.resolve('buffer'),
        //     assert: require.resolve('assert/'),
        //     os: require.resolve('os-browserify/browser'),
        //     "vm": require.resolve("vm-browserify"),
        //     dgram: false,
        //     dns: false,
        // },
    },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
    .sourceMaps(false, 'source-map')
    // .imagemin(
    //     'images/**.*',
    //     {
    //         context: 'src',
    //     },
    //     {
    //         optipng: {
    //             optimizationLevel: 5
    //         },
    //         jpegtran: null,
    //         plugins: [
    //             require('imagemin-mozjpeg')({
    //                 quality: 100,
    //                 progressive: true,
    //             }),
    //         ],
    //     }
    // )
    // .copyDirectory(`${PATHS.node}/@fortawesome/fontawesome-free/webfonts`, `${PATHS.dist}/fonts`)
    .copyDirectory(`${PATHS.src}/images`, `${PATHS.dist}/img`)
    // .copy(`${PATHS.src}/fonts/*`, `${PATHS.dist}/fonts`)
    // .copy(`${PATHS.node}/swiper/dist/js/swiper.js`, `${PATHS.dist}/js`)
    // .js(`${PATHS.src}/scripts/app.js`, `${PATHS.dist}/js/`)
    // .js(`${PATHS.src}/scripts/a11y.js`, `${PATHS.dist}/js/`)
    .sass(`${PATHS.src}/styles/app.scss`, 'css')
    .options({
        processCssUrls: false
    })
    .setPublicPath(`${PATHS.dist}`);

// mix.browserSync({
//     proxy: `${PATHS.proxy}`,
//     port: 3000,
//     injectChanges: true,
//     open: false,
//     files: [`${PATHS.dist}/*.*`],
//     logLevel: "debug"
// });
