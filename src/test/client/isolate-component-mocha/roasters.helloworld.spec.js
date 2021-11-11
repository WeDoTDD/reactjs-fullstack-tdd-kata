import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters, { RoasterList } from '../../../client/isolate-component/views/Roasters';
import React from 'react';

describe('Roasters - Hello World', () => {
	it('shows the text "Hello World"', async () => {
		const roastersData = { roasters: 'Hello World' };
		const fetchRoasters = async () => roastersData;

		const roasters = isolateComponent(<Roasters fetchRoasters={fetchRoasters} />);
		await Promise.resolve();
		roasters.inline('RoasterList')
		const roasterList = roasters.findOne('[data-test-id=roasters]');

		expect(roasterList.content()).to.equal('Hello World');
	});

	it('shows no roasters when none exist', async () => {
		const fetchRoasters = async () => null;

		const roasters = isolateComponent(<RoasterList getRoasters={fetchRoasters} />);
		await Promise.resolve();
		const roasterList = roasters.exists('[data-test-id=roasters]');

		expect(roasterList).to.be.false;
	});
});
