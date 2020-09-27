var fetch = require( 'node-fetch' );

const API_URL = 'https://api.mastersbasketballtournaments.com/v1/continents'

fetch( API_URL )
	.then( response => response.json() )
	.then( continents => continents.map( transformContinent ) )
	.then( continents => {
		projectId = 'j9hkw9b4';
		datasetName = 'production';
		tokenWithWriteAccess = 'skCvpbBg4lt4ssbfjp1zU9qXMVkETkknXdnkvDLD40fEe5w9MBffJ7hZjsxqOYkqM5EDoZ2d7SgD7mzJlzuSyhJqjnAaNcornSfCZSbhEqurt0ZbZxSs7HNRkU0EFKuLDZBaIhYZhRL49dUhUq20OkaTelYblb3Xj4gSBmWKVBueKgbpako1';


		const dataset = continents.map( continent => {
			return { createOrReplace: continent };
		} );

/*
console.log( dataset );

console.log( JSON.stringify( continents.map( continent => {

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

function transformContinent( record ) {
	const continent =  {
		 _id: record.id.toLowerCase()
		,_type: 'continent'
		,name: record.name
	}

	return continent
}
