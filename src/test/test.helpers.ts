// const supertest = require('supertest');
require('dotenv/config');

// const request = supertest(App);

export function createQuery(returnFields?: string) {
	const query = `mutation CreateCrafter($crafter: CrafterInput){ 
				createCrafter(crafter: $crafter){
					${returnFields} 
				},
			}`;

	return query;
}

export async function sendGraphqlRequest(query: string, crafterStub) {
	const queryRequest = {
		query: query,
		variables: { crafter: crafterStub },
	};
	// const response = sendQuery(queryRequest);
	// return response;
}

export async function addCraftersGraphQL(craftersStub, fieldToReturn) {
	for (const crafter of craftersStub) {
		const query = createQuery(fieldToReturn);
		const response = sendGraphqlRequest(query, crafter);
		return response;
	}
}

let url;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test') {
	url = process.env.GRAPHQLURL_LOCAL;
} else {
	url = process.env.GRAPHQLURL;
}

/*export function sendQuery(query) {
	return request.post('/graphql').set('Accept', 'application/json').send(query);
}*/
