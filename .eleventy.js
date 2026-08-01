import 'dotenv/config'

export default async function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( './src/assets/js' );
	eleventyConfig.addPassthroughCopy( { 'node_modules/litepicker/dist/litepicker.js': 'assets/js/litepicker.js' } );
	eleventyConfig.addPassthroughCopy( './src/images' );
	eleventyConfig.addPassthroughCopy( './src/site.webmanifest' );
	eleventyConfig.addPassthroughCopy( './src/favicon' );

	eleventyConfig.addGlobalData( 'layout', 'layouts/default.html' );

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addFilter( 'where', function( array, property, value ) {
		return array.filter( p => p[ property ] == value );
	} );

	eleventyConfig.setServerOptions( {
		watch: [ '_site/assets/css/**/*.css' ]
	} );
};
