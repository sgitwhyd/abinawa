import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Wayang = (props) => {
	const { object } = props;

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Spline scene={object} />
			</Suspense>
		</>
	);
};

export default Wayang;
