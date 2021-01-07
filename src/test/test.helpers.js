import App from '../server/api';

const supertest = require('supertest');

const request = supertest(App);

export function sendQuery(query) {
	return request.post('/graphql').set('Accept', 'application/json').send(query);
}
