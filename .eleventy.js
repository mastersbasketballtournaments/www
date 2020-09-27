require( 'dotenv' ).config();

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'images' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'site.webmanifest' );
	eleventyConfig.addPassthroughCopy( 'favicon' );

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
