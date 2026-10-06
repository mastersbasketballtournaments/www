import 'dotenv/config';
import Fetch from '@11ty/eleventy-fetch';

export default async function fetchApi( path ) {
	let urls = [ `https://cms.mastersbasketballtournaments.com/api/${ path }` ];

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		urls.unshift( `http://localhost:5173/api/${ path }` );
	}

	for ( const url of urls ) {
		try {
			return await Fetch( url, {
				duration: '0d'
				,type: 'json'
				,fetchOptions: {
					headers: {
						'Authorization': process.env.API_TOKEN
					}
				}
			} );
		} catch ( event ) {
			console.warn( `Fetch failed for ${ url }`, event.message );
		}
	}

	console.warn( `All fetches failed for ${ path.toUpperCase() }, returning empty fallback` );

	return [];
};
