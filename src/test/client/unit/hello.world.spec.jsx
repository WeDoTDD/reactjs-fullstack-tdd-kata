/* import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters, { RoasterList } from '../../../client/Views/Roasters';
import React from 'react';

describe('Hello World', () => {
	it('shows hello world', async () => {
		const getRoastersStub = async () => 'Hello World';
		const roasters = isolateComponent(<Roasters getRoasters={getRoastersStub} />)
			.findOne('[data-test-id: roasters]');
		await Promise.resolve();
		expect(roasters.props.roasters).to.not.be.null;
	});

	it('shows nothing when no data present', async () => {
		const getRoastersStub = async () => null;
		const roasters = isolateComponent(<RoasterList getRoasters={getRoastersStub} />);
		await Promise.resolve();
		expect(roasters).to.equal('no data found');
	});
}); */
