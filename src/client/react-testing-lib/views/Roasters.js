import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';

function Roasters({ fetchRoasters }) {
	const [roasters, setRoasters] = useState();

	useEffect(() => {
		(async () => {
			const { roasters } = await fetchRoasters();
			setRoasters(roasters);
		})();
	}, []);

	return (<RoasterList roasters={roasters}>{roasters}</RoasterList>);
}

function Roaster(roaster) {
	return <li data-testid="roaster">{roaster.roaster}</li>;
}

export function RoasterList({ roasters }) {
	return (
		<>
			{roasters && roasters.length > 0 && (
				<ul>
					{roasters.map((roaster, index) =>
						<Roaster key={index} roaster={roaster} />,
					)}
				</ul>
			)}
		</>
	);
}

export default Roasters;
