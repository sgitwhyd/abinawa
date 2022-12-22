import React from 'react';
import Spline from '@splinetool/react-spline';

const Wayang = (props) => {
	const { object, onLoadHandler } = props;

	return (
		<Spline
			scene={object}
			onLoad={onLoadHandler}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		/>
	);
};

export default Wayang;
