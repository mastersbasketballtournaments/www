require( 'dotenv' ).config();

const EleventyFetch = require( '@11ty/eleventy-fetch' );

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://cms.mastersbasketballtournaments.localhost/api/tournaments/';
	break;

	default:
		url = 'https://cms.mastersbasketballtournaments.com/api/tournaments/';
}

module.exports = async function () {
	return EleventyFetch( url, {
		duration: '0d'
		,type: 'json'
		,fetchOptions: {
			headers: {
				'Authorization': process.env.API_TOKEN
			}
		}
	} );
};
