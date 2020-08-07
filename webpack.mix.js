// Laravel Mix
const mix = require('laravel-mix')

// Define paths
const paths = {
  scss: {
    source: './web/resources/styles/main.scss',
    dest: './css/'
  },
  js: {
    source: './web/resources/js/main.js',
    dest: './js/'
  }
}

mix.setPublicPath('./web/includes/_assets/')

/**
 * If you want to create an import alias then you can do so by configuring
 * webpack like the example shown below.
 * This would let you import like import '@modules/module-name'
 *
 * Uncomment the example below and re-configure
 */

// mix.webpackConfig({
//   resolve: {
//     alias: {
//       '@utilities': path.resolve(__dirname, 'resources/js/utilities'),
//       '@modules': path.resolve(__dirname, 'resources/js/modules')
//     }
//   }
// })

// Compile the scss code
mix.sass(paths.scss.source, paths.scss.dest).js(paths.js.source, paths.js.dest)

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify('./dist/assets/css/main.css').minify('./dist/assets/js/main.js')
}
