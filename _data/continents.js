const axios = require( 'axios' ).default;

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		api = 'http://api.mastersbasketballtournaments.localtest.me/v1/';
	break;

	default:
		api = 'https://api.mastersbasketballtournaments.com/v1/';
}

module.exports = async function() {
	return axios.get( api + 'continents/' )
		.then( function( response ) {
			// handle success

			return response.data;
		} )
		.catch( function( error ) {
			// handle error

			console.log( error );

			return error;
		// } )
		// .then( function() {
			// always executed
			// return continents;
		} );
};
