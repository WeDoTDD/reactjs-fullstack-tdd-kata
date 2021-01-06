import { expect } from 'chai';
import { isolateComponent } from 'isolate-components';
import Roasters from '../../../client/Views/Roasters';
import React from 'react';
export { expect };

describe('Hello World', () => {
	it('shows hello world', () => {
		const roasters = isolateComponent(<Roasters />);
		expect(roasters.content()).to.contain('Hello World');
	});
});
