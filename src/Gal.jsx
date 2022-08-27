import React from 'react';
function Gal() {
	const img1 = 'https://picsum.photos/200/300';
	const img2 = 'https://picsum.photos/220/300';
	const img3 = 'https://picsum.photos/300/300';
	const img4 = 'https://picsum.photos/400/300';
	return (
		<>
			<img src={img1} alt="image" />
			<img src={img2} alt="image" />
			<img src={img3} alt="image" />
			<img src={img4} alt="image" />
		</>
	);
}
export default Gal;
