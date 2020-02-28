// add yaml support with npm install js-yaml --save-dev
const yaml = require( 'js-yaml' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( 'assets' );
	eleventyConfig.addPassthroughCopy( 'images' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'site.webmanifest' );
	eleventyConfig.addPassthroughCopy( 'favicon' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( anything );
	} );

	eleventyConfig.addDataExtension( 'yml', contents => yaml.safeLoad( contents ) );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false,
		ghostMode: false
	} );
};
