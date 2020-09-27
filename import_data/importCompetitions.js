var fetch = require( 'node-fetch' );

const competitions = [
	 { _id: "M30", _type: "competition", gender: "Men", ageOver: 30 }
	,{ _id: "M35", _type: "competition", gender: "Men", ageOver: 35 }
	,{ _id: "M40", _type: "competition", gender: "Men", ageOver: 40 }
	,{ _id: "M45", _type: "competition", gender: "Men", ageOver: 45 }
	,{ _id: "M50", _type: "competition", gender: "Men", ageOver: 50 }
	,{ _id: "M55", _type: "competition", gender: "Men", ageOver: 55 }
	,{ _id: "M60", _type: "competition", gender: "Men", ageOver: 60 }
	,{ _id: "M65", _type: "competition", gender: "Men", ageOver: 65 }
	,{ _id: "M70", _type: "competition", gender: "Men", ageOver: 70 }
	,{ _id: "M75", _type: "competition", gender: "Men", ageOver: 75 }
	,{ _id: "M80", _type: "competition", gender: "Men", ageOver: 80 }
	,{ _id: "W30", _type: "competition", gender: "Women", ageOver: 30 }
	,{ _id: "W35", _type: "competition", gender: "Women", ageOver: 35 }
	,{ _id: "W40", _type: "competition", gender: "Women", ageOver: 40 }
	,{ _id: "W45", _type: "competition", gender: "Women", ageOver: 45 }
	,{ _id: "W50", _type: "competition", gender: "Women", ageOver: 50 }
	,{ _id: "W55", _type: "competition", gender: "Women", ageOver: 55 }
	,{ _id: "W60", _type: "competition", gender: "Women", ageOver: 60 }
	,{ _id: "W65", _type: "competition", gender: "Women", ageOver: 65 }
	,{ _id: "W70", _type: "competition", gender: "Women", ageOver: 70 }
	,{ _id: "W75", _type: "competition", gender: "Women", ageOver: 75 }
	,{ _id: "W80", _type: "competition", gender: "Women", ageOver: 80 }
]

const dataset = competitions.map( competition => {
	return { createOrReplace: competition };
} );

projectId = 'j9hkw9b4';
datasetName = 'production';
tokenWithWriteAccess = 'skCvpbBg4lt4ssbfjp1zU9qXMVkETkknXdnkvDLD40fEe5w9MBffJ7hZjsxqOYkqM5EDoZ2d7SgD7mzJlzuSyhJqjnAaNcornSfCZSbhEqurt0ZbZxSs7HNRkU0EFKuLDZBaIhYZhRL49dUhUq20OkaTelYblb3Xj4gSBmWKVBueKgbpako1';

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

