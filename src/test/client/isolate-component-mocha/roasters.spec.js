import { expect } from 'chai';
import Roasters, { RoasterList } from '../../../client/isolate-component/views/Roasters';
import React from 'react';
import { isolateComponent } from 'isolate-react';

describe('Roasters', () => {
	it('shows no roasters', async () => {
		// Arrange / Given
		const fetchRoasters = async () => null;

		// Act / When
		const roasters = isolateComponent(<RoasterList getRoasters={fetchRoasters} />);
		await Promise.resolve();
		const roasterList = roasters.exists('[data-test-id=roasters]');

		// Assert / Then
		expect(roasterList).to.be.false;
	});

	it('shows title', async () => {
		const roastersData = { roasters: 'Hello World' };
		const fetchRoasters = async () => roastersData;

		const roasters = isolateComponent(<Roasters fetchRoasters={fetchRoasters} />);
		await Promise.resolve();
		roasters.inline('RoasterList');
		const roasterList = roasters.findOne('[data-test-id=roasters]');

		expect(roasterList.content()).to.equal('Hello World');
	});
});
