import React, { useEffect, useState } from 'react';

const Roasters = ({ fetchRoasters }) => {
	const [roasters, setRoasters] = useState();

	useEffect(() => {
		(async () => {
			const { roasters } = await fetchRoasters();
			setRoasters(roasters);
		})();
	}, []);

	return (<RoasterList roasters={roasters}>{roasters}</RoasterList>);
};

export function RoasterList({ roasters }) {
	return (
		<>{roasters && roasters.length > 0 &&
			<span data-testid="roaster">{roasters[0]}</span>
			<span data-testid="roaster">{roasters[1]}</span>
		}</>
	);
}

export default Roasters;
