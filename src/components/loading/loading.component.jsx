import React from 'react';
import Gunungan from '../../assets/gunungan.png';

const Loading = () => {
	return (
		<>
			<div className='w-full h-screen flex flex-col items-center justify-center'>
				<img src={Gunungan} className='w-64 h-644 animate-bounce' alt='' />
			</div>
			<div className='opacity-25 fixed inset-0 bg-card-background'></div>
		</>
	);
};

export default Loading;
