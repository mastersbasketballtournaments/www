const moment = require( 'moment' );

const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "tournament" && endDate > now() ] | order( startDate ) { ... }'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				let startDate = moment( record.startDate );
				let endDate = moment( record.endDate );

				let competitions = record.competition.map( competition => {
					return { gender: competition._ref.slice( 0, 1 ), ageOver: competition._ref.slice( 1, 3 ) };
				} );

				return {
					year: startDate.format( 'YYYY' )
					,slug: 'record.slug'
					,website: record.website
					,name: record.name
					,emailAddress: record.emailAddress
					,contact: record.contact
					,dateStart: startDate.format( 'DD-MMM-YYYY' )
					,dateEnd: endDate.format( 'DD-MMM-YYYY' )
					,twitter: record.twitter
					,facebook: record.facebook
					,instagram: record.instagram
					,location: record.location
					,country: record.country
					,continent: record.continent.name
					,competitions: competitions
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
