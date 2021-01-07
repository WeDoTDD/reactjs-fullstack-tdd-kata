import React, { useEffect, useState } from 'react';

const Roasters = ({ fetchRoasters }) => {
	const [roasters, setRoasters] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const { roasters } = await fetchRoasters();
			setRoasters(roasters);
		};
		fetchData();
	});

	return (<RoasterList data-test-id="roasterList" roasters={roasters} />);
};

export function RoasterList({ roasters }) {
	return (
		<>{roasters && roasters.length > 0 && <span data-test-id="roasters">{roasters}</span>}</>
	);
}

export default Roasters;
