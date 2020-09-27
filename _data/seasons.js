const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
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
