import request from 'superagent';

const url = 'http://localhost:4000/graphql';

export async function fetchRoasters() {
	return { roasters: 'First Roaster' };
}


async function sendRequest(query) {
	const response = await request.post(url).send(query);
	return response;
}
