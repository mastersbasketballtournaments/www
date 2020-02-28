module.exports = function() {
/*
	return new Promise( (resolve, reject ) => {
		resolve( [
			"user1",
			"user2"
		] );
	} );
*/

/*
	return new Promise( ( resolve, reject ) => {
		fetch( API_PATH )
			.then( json => response.json() )
			.then( data => resolve( data ) )
			.catch( e => reject( e ) );
	} );
*/

	return [
		'Europe',
		'North America',
		'Asia',
		'South America',
		'Oceania',
	];
};
