import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters, { RoasterList } from '../../../client/views/Roasters';
import React from 'react';

describe('Roasters', () => {
	it('shows hello world', async () => {
		const responseData = { roasters: 'Hello World' };
		const fetchRoasters = async () => responseData;

		const roasters = isolateComponent(<Roasters fetchRoasters={fetchRoasters} />);
		await Promise.resolve();
		const roasterList = roasters.findOne('[data-test-id=roasterList]');

		expect(roasterList.props.roasters).to.equal('Hello World');
	});

	it('shows nothing when no data present', async () => {
		const fetchRoasters = async () => null;
		const roasters = isolateComponent(<RoasterList getRoasters={fetchRoasters} />);
		await Promise.resolve();
		expect(roasters.content()).to.equal('');
	});
});
