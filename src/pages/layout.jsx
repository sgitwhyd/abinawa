import React from 'react';
import AppBackgroundImg from '../assets/background.png';

const Layout = ({ children }) => {
	return (
		<div
			className='w-full max-w-[1440px] mx-auto flex justify-center'
			style={{
				backgroundImage: `url(${AppBackgroundImg})`,
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='max-w-[700px] mx-auto pt-12 h-screen'>{children}</div>
		</div>
	);
};

export default Layout;
