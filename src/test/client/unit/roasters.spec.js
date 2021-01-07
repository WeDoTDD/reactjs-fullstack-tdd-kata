import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters, { RoasterList } from '../../../client/Views/Roasters';
import React from 'react';

export { expect };

describe('Hello World', () => {
	it('shows hello world', async () => {
		const fechRoastersStub = async () => 'Hello World';
		const roasters = isolateComponent(<Roasters getRoasters={fechRoastersStub} />)
			.findOne('[data-test-id: roasters]');
		await Promise.resolve();
		expect(roasters.props.roasters).to.not.be.null;
	});

	it('shows nothing when no data present', async () => {
		const fetchRoastersStub = async () => null;
		const roasters = isolateComponent(<RoasterList getRoasters={fetchRoastersStub} />);
		await Promise.resolve();
		expect(roasters.content()).to.equal('no data found');
	});
});
