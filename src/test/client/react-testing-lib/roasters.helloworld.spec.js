/**
 * @jest-environment jsdom
 */
import { expect } from "@jest/globals";
import { render, waitFor } from "@testing-library/react";
import Roasters, { RoasterList } from '../../../client/views/Roasters';
import React from 'react';

describe('Roasters - Hello World', () => {
	fit('shows the text "Hello World"', async () => {
		const roastersData = { roasters: 'Hello World' };
		const fetchRoasters = async () => roastersData;

		let roasterList;
		const roasters = render(<Roasters fetchRoasters={fetchRoasters} />);
		await waitFor(() => {
			roasterList = roasters.queryByTestId("roaster-list");
		});

		expect(roasterList.innerHTML).toEqual('Hello World');
	});

	it('shows nothing when no data present', async () => {
		const fetchRoasters = async () => null;
		const roasters = render(<RoasterList getRoasters={fetchRoasters} />);
		expect(roasters.innerHTML).toBeUndefined();
	});
});
