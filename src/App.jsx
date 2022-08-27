import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
import Time from './Time';
const ncard = (val) => {
	return (
		<Card
			imgsrc={val.imgsrc}
			title={val.title}
			sname={val.sname}
			link={val.link}
		/>
	);
};
const App = () => {
	return (
		<>
			<h1>Top Five Hoichoi Series</h1>
			{Sdata.map(ncard)};
			<Time />
		</>
	);
};
export default App;
