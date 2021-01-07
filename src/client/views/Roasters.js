import React, { useEffect, useState } from 'react';

const Roasters = ({ fetchRoasters }) => {
	const [roasters, setRoasters] = useState();

	useEffect(() => {
		(async () => {
			const roasters = await fetchRoasters();
			setRoasters(roasters);
		})();
	}, []);

	return (<RoasterList data-test-id="roasterList" roasters={roasters} />);
};

export function RoasterList({ roasters }) {
	return (
		<>{roasters && roasters.length > 0 && <span data-test-id="roasters">{roasters}</span>}</>
	);
}

export default Roasters;
