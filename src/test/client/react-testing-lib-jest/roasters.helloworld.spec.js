/**
 * @jest-environment jsdom
 */
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Roasters, { RoasterList } from '../../../client/react-testing-lib/views/Roasters';

describe('Show a list of Coffee Roasters', () => {
	it('shows no roasters when none exist', async () => {
		const fetchRoasters = async () => null;
		const roasters = render(<RoasterList getRoasters={fetchRoasters} />);

		let roasterList;
		await waitFor(() => {
			roasterList = roasters.queryByTestId('roaster');
		});

		expect(roasterList).toBeNull();
	});

	it('shows many roasters', async () => {
		const manyRoasters = {
			roasters: ['roasterOne', 'roasterTwo', 'roasterThree', 'roasterFour']
		};
		const fetchRoasters = async () => manyRoasters;

		let roasterList;
		const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);

		await waitFor(() => {
			roasterList = roasters.queryAllByTestId('roaster');
			expect(roasterList.length).toEqual(manyRoasters.roasters.length);
		});
	});
});

describe('Clear Roasters', () => {
	it('clears roasters', () => {
		// arrange
		
		// act
		
		// assert

	});
});
