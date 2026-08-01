import 'dotenv/config'
import Fetch from "@11ty/eleventy-fetch";

const PRODUCTION_URL = 'https://admin.mastersbasketballtournaments.com/api/tournaments/';
const LOCAL_URL = 'http://localhost:5173/api/tournaments/';

// Give up on a local API that is hung rather than stalling the whole build
const LOCAL_TIMEOUT = 5000;

export default async function () {
	// In development prefer the local API, but fall back to production so a
	// build still succeeds when the local API is not running.
	let sources = [ { label: 'production', url: PRODUCTION_URL } ];

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		sources.unshift( { label: 'local', url: LOCAL_URL, timeout: LOCAL_TIMEOUT } );
	}

	for ( let source of sources ) {
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

			console.log( `TOURNAMENTS: loaded ${ dataset.length } from ${ source.label } API` );

			return dataset;
		} catch ( event ) {
			console.warn( `TOURNAMENTS: ${ source.label } API failed (${ source.url }): ${ event.message }` );
		}
	}

	console.warn( 'TOURNAMENTS: all sources failed, returning empty fallback' );

	return [];
};
