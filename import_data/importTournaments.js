var fetch = require( 'node-fetch' );

const API_URL = 'https://api.mastersbasketballtournaments.com/v1/tournaments'

fetch( API_URL )
	.then( response => response.json() )
	.then( tournaments => tournaments.map( transformTournament ) )
	.then( tournaments => {
		projectId = 'j9hkw9b4';
		datasetName = 'production';
		tokenWithWriteAccess = 'skCvpbBg4lt4ssbfjp1zU9qXMVkETkknXdnkvDLD40fEe5w9MBffJ7hZjsxqOYkqM5EDoZ2d7SgD7mzJlzuSyhJqjnAaNcornSfCZSbhEqurt0ZbZxSs7HNRkU0EFKuLDZBaIhYZhRL49dUhUq20OkaTelYblb3Xj4gSBmWKVBueKgbpako1';


		const dataset = tournaments.map( continent => {
			return { createOrReplace: continent };
		} );

/*
console.log( dataset );

console.log( JSON.stringify( tournaments.map( continent => {

	return { createOrReplace: continent };
} ) ) );
*/
		fetch( `https://${projectId}.api.sanity.io/v1/data/mutate/${datasetName}`, {
			method: 'post',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${tokenWithWriteAccess}`
			},
			body: JSON.stringify( { mutations: dataset } )
		} )
			.then( response => response.json() )
			.then( result => console.log( result ) )
			.catch( error => console.error( error ) )

	} );

function transformTournament( record ) {


// console.log(record);

	const tournament =  {
		 _id: record.id.toLowerCase()
		,_type: 'tournament'
		,name: record.name
		,startDate: parseDate( record.dateStart )
		,endDate: parseDate( record.dateEnd )
		,contact: record.contact
		,emailAddress: record.emailAddress
		,website: record.website
		,facebook: record.facebook
		,twitter: record.twitter
		,instagram: record.instagram
		,country: record.country
		,location: record.location
		,continent: { _type: 'reference', _ref: mapContinent( record.continent ) }
		,competition: mapCompetitions( record.competitions )
	}

	return tournament
}

function mapContinent( continent ) {
	switch( continent ) {
		case 'Europe':
			return '246c7690-5319-4ad3-8fde0423d2dd8d58';
		break;

		case 'North America':
			return 'd81e0391-8f31-4688-94753addb1dd1382';
		break;

		case 'Asia':
			return '42c2b054-0bfa-4785-8a5e409131ec2ea5';
		break;

		case 'South America':
			return 'bb331407-b685-43e6-aee614827759007f';
		break;

		case 'Oceania':
			return '1a07dc2c-c274-4fd5-83883596ba42b7c6';
		break;
	}
}

function mapCompetitions( competitions ) {
   return competitions.map( competition => {
		return {
			 _key: competition.code
			,_ref: competition.gender[0] + competition.ageOver.toString()
			,_type: 'reference'
		}
	} );
}

function parseDate( s ) {
	var months = {
		jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
		jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
	};
	var p = s.split( '-' );
	return new Date( p[2], months[p[1].toLowerCase()], p[0] );
}
