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
			roasterList = roasters.queryByTestId('roasters');
		});

		expect(roasterList).toBeNull();
	});
			
	it('shows one roaster ', async () => {
		const firstRoaster = 'First Roaster';
		const roasterData = { roasters: firstRoaster };
		const fetchRoasters = async () => roasterData;

		let roasterList;
		const roaster = render(<Roasters fetchRoasters={fetchRoasters} />);

		await waitFor(() => {
			roasterList = roaster.queryByTestId('roasters');
			expect(roasterList.innerHTML).toEqual(firstRoaster);
		});
	});

	it('shows many roasters', async () => {
		const manyRoasters = {
			roasters: ['roasterOne', 'roasterTwo']
		};
		const fetchRoasters = async () => manyRoasters;

		let roasterList;
		const roaster = render(<Roasters fetchRoasters={fetchRoasters} />);

		await waitFor(() => {
			roasterList = roaster.queryAllByTestId('roasters');
			expect(roasterList.length).toEqual(2);
		});
	});
});
