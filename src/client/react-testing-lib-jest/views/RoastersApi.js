import request from 'superagent';

const url = 'http://localhost:4000/graphql';

export async function fetchRoasters() {
	const query = {
		query: `query { 
				roasters
			}`,
	};

	const response = await sendRequest(query);
	return response.body.data;
}


async function sendRequest(query) {
	const response = await request.post(url).send(query);
	return response;
}
