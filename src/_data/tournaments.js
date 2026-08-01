import fetchApi from '../_lib/fetch-api.js';

export default async function () {
	return fetchApi( 'tournaments' );
};
