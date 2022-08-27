import React from 'react';

import Matching from './Matching';
import NotMatching from './NotMatching';
const Slot = (props) => {
	let x = props.x;
	let y = props.y;
	let z = props.z;

	// 	if (x === y && y === z) {
	// 		return <Matching />;
	// 	} else {
	// 		return <NotMatching />;
	// 	}
	// };
	x == y && y == z ? <Matching /> : <NotMatching />;
};
export default Slot;
