const nock = require('nock');
const graphqlHost = 'http://localhost:4000';

const mockPostGraphQL = (query, responseBody) => {
	nock(graphqlHost)
		.defaultReplyHeaders({
			'accept-encoding': 'gzip, deflate',
			accept: 'application/json',
			'content-type': 'application/json'
		})
		.post('/graphql', query)
		.reply(200, responseBody);
};


const findAttribute = (component, attributeName) => {
	const foundComponent = component.find(`[data-testid='${attributeName}']`);
	return foundComponent;
};

export { findAttribute, mockPostGraphQL };
