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
			roasterList = roasters.getAllByTestId('roaster');
		});

		expect(roasterList).toBeNull();
	});

	it('shows many roasters', async () => {
		const manyRoasters = {
			roasters: ['roasterOne', 'roasterTwo', 'roasterThree', 'roasterFour']
		};
		const fetchRoasters = async () => manyRoasters;

		const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);

		await waitFor(() => {
			const roasterList = roasters.getAllByTestId('roaster');
			expect(roasterList.length).toBe(manyRoasters.roasters.length);
		});
	});
});

describe('Clear Roasters', () => {
	it('clears roasters', async () => {
		const manyRoasters = {
			roasters: ['roasterOne', 'roasterTwo', 'roasterThree', 'roasterFour']
		};
		const fetchRoasters = async () => manyRoasters;

		const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);


		await waitFor(() => {
			const roasterList = roasters.getAllByTestId('roaster');
			expect(roasterList.length).toBe(0);
		});
	});
});
