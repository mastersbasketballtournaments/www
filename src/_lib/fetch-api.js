import 'dotenv/config';
import Fetch from '@11ty/eleventy-fetch';

// Give up on a local API that is hung rather than stalling the whole build
const LOCAL_TIMEOUT = 5000;

export default async function fetchApi( path ) {
	// In development prefer the local API, but fall back to production so a
	// build still succeeds when the local API is not running.
	let sources = [ { label: 'production', url: `https://cms.mastersbasketballtournaments.com/api/${ path }` } ];

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		sources.unshift( { label: 'local', url: `http://localhost:5176/api/${ path }`, timeout: LOCAL_TIMEOUT } );
	}

	for ( const source of sources ) {
		let fetchOptions = {
			headers: {
				'Authorization': process.env.API_TOKEN
			}
		};

		if ( source.timeout ) {
			fetchOptions.signal = AbortSignal.timeout( source.timeout );
		}

		try {
			let dataset = await Fetch( source.url, {
				duration: '0d'
				,type: 'json'
				,fetchOptions: fetchOptions
			} );

			console.log( `${ path.toUpperCase() }: loaded ${ dataset.length } from ${ source.label } API` );

			return dataset;
		} catch ( event ) {
			console.warn( `${ path.toUpperCase() }: ${ source.label } API failed (${ source.url }): ${ event.message }` );
		}
	}

	console.warn( `All fetches failed for ${ path.toUpperCase() }, returning empty fallback` );

	return [];
};
