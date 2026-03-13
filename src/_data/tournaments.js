import 'dotenv/config'
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = 'https://admin.mastersbasketballtournaments.com/api/tournaments/';

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		url = 'http://localhost:5173/api/tournaments/';
	}

	try {
		let dataset = await Fetch( url, {
			duration: '0d'
			,type: 'json'
			,fetchOptions: {
				headers: {
					'Authorization': process.env.API_TOKEN
				}
			}
		} );

		return dataset;
	} catch ( event ) {
		console.warn("Fetch failed, SEASONS returning empty fallback", event.message);

		return [];
	}
};
