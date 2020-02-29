let url;

switch ( process.env.ELEVENTY_ENV ) {
	case 'production':
		url = 'https://www.mastersbasketballtournaments.com/';
		api = 'https://api.mastersbasketballtournaments.com/v1/';
	break;

	case 'development':
		url = 'http://localhost:8080/';
		api = 'http://api.mastersbasketballtournaments.localtest.me/v1/';
	break;

	default:
		url = '/';
		api = '/';
}

module.exports = {
	url: url
	,api: api
	,title: 'Masters Basketball Tournaments'
	,environment: process.env.ELEVENTY_ENV
	,timezone: 'UTC'
};
