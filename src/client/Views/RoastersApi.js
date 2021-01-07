import request from 'superagent';

export async function fetchRoasters() {
	const query = {
		query: `query { 
				roasters {}
			}`,
	};

	const response = await sendRequest(query);
	return response.body.data;
}


async function sendRequest(query) {
	const response = await request.post('http://localhost:4000/graphql').send(query);
	return response;
}
