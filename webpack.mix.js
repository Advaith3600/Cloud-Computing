const mix = require('laravel-mix');

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
	.copy('src/index.html', 'dist/')
	.js('src/js/app.js', 'dist/js/')
	.sass('src/scss/app.scss', 'dist/css/')
	.browserSync({
		proxy: undefined,
		server: 'dist',
		files: [
			'dist/**/*'
		]
	});