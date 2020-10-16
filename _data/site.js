require( 'dotenv' ).config();

let url = 'https://www.mastersbasketballtournaments.com/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://localhost:8080/';
	break;

	default:
		url = '/';
}

module.exports = {
	url: url
	,title: 'Masters Basketball Tournaments'
	,environment: process.env.ELEVENTY_ENV
	,timezone: 'UTC'
};
