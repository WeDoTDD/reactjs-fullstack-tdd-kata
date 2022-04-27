/**
 * @jest-environment jsdom
 */
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Roasters, { RoasterList } from '../../../client/react-testing-lib/views/Roasters';

describe('Roasters', () => {
	it('shows no roasters', async () => {
		// Arrange / Given
		const fetchRoasters = async () => null;
		const roasters = render(<RoasterList getRoasters={fetchRoasters} />);

		// Act / When
		let roasterList;
		await waitFor(() => {
			roasterList = roasters.queryByTestId("roasters");
		});

		// Assert / Then
		expect(roasterList).toBeNull();
	});

	it('shows text "Hello World"', async () => {
		const roastersData = { roasters: 'Hello World' };
		const fetchRoasters = async () => roastersData;

		let roasterList;
		const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);
		await waitFor(() => {
			roasterList = roasters.queryByTestId("roasters");
			expect(roasterList.innerHTML).toEqual('Hello World');
		});
	});
});
