const EleventyFetch = require( '@11ty/eleventy-fetch' );

module.exports = async function () {
	let url = 'http://cms.mastersbasketballtournaments.localhost/api/seasons';

	return EleventyFetch( url, {
		duration: '1d'
		,type: 'json'
	} );
};



/*
const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	apiVersion: '2021-03-25',
	useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "tournament" && endDate > now() ] | order( startDate ) { "season": startDate }'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				return { season: record.season.slice( 0, 4 ) };
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
*/
