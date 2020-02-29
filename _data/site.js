let url;

switch ( process.env.ELEVENTY_ENV ) {
	case 'production':
		url = 'https://www.mastersbasketballtournaments.com/';
	break;

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
