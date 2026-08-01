import 'dotenv/config';

export default async function () {
	let url = 'https://www.mastersbasketballtournaments.com/';

	if ( process.env.ELEVENTY_ENV == 'development' ) {
		url = 'http://localhost:8080/';
	}
	
	let title = 'Masters Basketball Tournaments';
	let environment = process.env.ELEVENTY_ENV;
	let timezone = 'UTC';
	let buildDateTime = new Date();

	return { url, title, environment, timezone, buildDateTime };
};
