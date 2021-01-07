import React, { useEffect, useState } from 'react';

const Roasters = (props) => {
	const [roasters, setRoasters] = useState([]);

	useEffect(() => {
		const fetchRoasters = async () => {
			const { getRoasters } = props;
			const roasters = await getRoasters();
			setRoasters(roasters);
		};
		fetchRoasters();
	}, []);

	return (roasters.length > 0 && <span data-test-id="roasters">{roasters}</span>) || null;
};

export default Roasters;
