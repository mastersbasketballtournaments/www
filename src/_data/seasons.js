import 'dotenv/config';
import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = 'https://cms.mastersbasketballtournaments.com/api/seasons/';

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		url = 'http://cms.mastersbasketballtournaments.localhost/api/seasons/';
	}

	return Fetch( url, {
		duration: '0d'
		,type: 'json'
		,fetchOptions: {
			headers: {
				'Authorization': process.env.API_TOKEN
			}
		}
	} );
};
