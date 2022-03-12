require( 'dotenv' ).config();

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( './src/assets' );
	eleventyConfig.addPassthroughCopy( './src/images' );
	eleventyConfig.addPassthroughCopy( './src/fonts' );
	eleventyConfig.addPassthroughCopy( './src/site.webmanifest' );
	eleventyConfig.addPassthroughCopy( './src/favicon' );

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addFilter( 'where', function( array, property, value ) {
		return array.filter( p => p[ property ] == value );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
