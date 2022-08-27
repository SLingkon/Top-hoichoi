import React from 'react';

function Time() {
	const newDate = new Date();
	const actDate = newDate.toLocaleDateString();
	const time = newDate.toLocaleTimeString();
	return (
		<>
			<p className="date">{`Today's date is ${actDate}`}</p>
			<p className="time">{`And the time is ${time} `}</p>
		</>
	);
}
export default Time;
// setInterval(Time(), 1000);
