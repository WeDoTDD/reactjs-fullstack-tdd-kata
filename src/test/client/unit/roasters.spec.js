import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters, { RoasterList } from '../../../client/views/Roasters';
import React from 'react';

export { expect };

describe('Roasters', () => {
	it('shows hello world', async () => {
		const fetchRoastersStub = async () => {
			data: {
				roasters: 'Hello World';
			}
		};

		const roasters = isolateComponent(<Roasters fetchRoasters={fetchRoastersStub} />);
		await Promise.resolve();
		const roasterList = roasters.findOne('[data-test-id=roasterList]');

		expect(roasterList.props.roasters).to.equal('Hello World');
	});

	it('shows nothing when no data present', async () => {
		const fetchRoastersStub = async () => null;
		const roasters = isolateComponent(<RoasterList getRoasters={fetchRoastersStub} />);
		await Promise.resolve();
		expect(roasters.content()).to.equal('');
	});
});
