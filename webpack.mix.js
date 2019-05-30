// webpack configuration file
const mix = require('laravel-mix'); // importing laravel mix - a wrapper around webpack
const tailwindcss = require('tailwindcss'); // importing tailwindcss - a utility first css framework
const PurgecssPlugin = require("purgecss-webpack-plugin"); // importing purgcss - used to clean unused css classes

// a class to define the selectors of clsses
class TailwindExtractor {
  	static extract(content) {
    	return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  	}
}

mix.config.publicPath = 'dist';

mix
	.copy('src/index.html', 'dist/') // copying the index.html file
	.copy('src/files/', 'dist/files/') // copying downloadable files
	.js('src/js/app.js', 'dist/js/') // compiling the javascript file
	.sass('src/scss/app.scss', 'dist/css/') // compiling the sass file into css file
  	.options({
    	postCss: [ tailwindcss('./tailwind.config.js') ]
  	}) // configuring tailwindcss
	.browserSync({
		proxy: undefined,
		server: 'dist',
		files: [
			'dist/**/*'
		]
	}); // enabling browserSync for development

if (mix.inProduction()) { // activating purge css if in production mode
 	mix.webpackConfig({
    	plugins: [
      		new PurgecssPlugin({
        		paths: [ './src/index.html' ],
        		extractors: [
	          		{
	            		extractor: TailwindExtractor,
	            		extensions: ["html"]
	          		}
        		]
      		})
    	]
  	});
}