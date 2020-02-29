const axios = require( 'axios' ).default;

module.exports = async function() {
	return axios.get( 'http://api.mastersbasketballtournaments.localtest.me/v1/continents/' )
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
