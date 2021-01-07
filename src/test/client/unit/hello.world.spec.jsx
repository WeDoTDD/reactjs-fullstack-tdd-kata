import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters from '../../../client/Views/Roasters';
import React from 'react';
export { expect };

describe('Hello World', () => {
	it('shows hello world', async () => {
		const getRoastersStub = async () => 'Hello World';
		const roasters = isolateComponent(<Roasters getRoasters={getRoastersStub} />);
		await Promise.resolve();
		expect(roasters.content()).to.equal('Hello World');
	});

	it('shows nothing when no data present', async () => {
		const getRoastersStub = async () => null;
		const roasters = isolateComponent(<Roasters getRoasters={getRoastersStub} />);
		await Promise.resolve();
	  expect(roasters.content()).to.equal(null);
	});
});
