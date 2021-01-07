import { expect } from 'chai';
import { mockPostGraphQL } from '../../test.doubles';
import { fetchRoasters } from '../../../client/Views/RoastersApi';

describe('Roaster Api', () => {
	it('fetches roaster', async () => {
		const responseStub = {
			data: {
				roasters: 'Hello World'
			}
		};
		const query = {
			query: `query { 
				roasters {}
			}`,
		};
		mockPostGraphQL(query, responseStub);

		const { roasters } = await fetchRoasters();

		expect(roasters).to.equal(responseStub.data.roasters);
	});
});
