import React, { useEffect, useState } from 'react';

const Roasters = (props) => {
	const [roasters, setRoasters] = useState([]);

	useEffect(() => {
		const fetchRoasters = async () => {
			const { fechRoasters } = props;
			const roasters = await fechRoasters();
			setRoasters(roasters);
		};
		fetchRoasters();
	}, []);

	return <RoasterList data-test-id="roasters" roasters={roasters} />;
};

export function RoasterList(props) {
	const { roasters } = props;
	return (roasters && roasters.length > 0 && <span data-test-id="roasters">{roasters}</span>) || null;
}

export default Roasters;
