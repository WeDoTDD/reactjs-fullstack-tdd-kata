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
		<>{roasters && roasters.length > 0 && (
			<ul>
				{ roasters.map((roaster) =>
					<li data-testid="roaster">{roaster}</li>
				)
				}
			</ul>
		)}
		</>
	);
}

export default Roasters;
