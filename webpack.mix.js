const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const PurgecssPlugin = require("purgecss-webpack-plugin");

class TailwindExtractor {
  	static extract(content) {
    	return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  	}
}

mix
	.copy('src/index.html', 'dist/')
	.js('src/js/app.js', 'dist/js/')
	.sass('src/scss/app.scss', 'dist/css/')
  	.options({
    	processCssUrls: false,
    	postCss: [ tailwindcss('./tailwind.config.js') ],
  	})
	.browserSync({
		proxy: undefined,
		server: 'dist',
		files: [
			'dist/**/*'
		]
	});

if (mix.inProduction()) {
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