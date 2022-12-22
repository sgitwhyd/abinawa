import React, { useState } from 'react';
import Layout from './layout';
import Logo from '../assets/logo.png';
import DecorativeBar from '../assets/decorative-bar.png';
import Wayang from '../assets/kresna.png';
import Card from '../components/card/card.component';
import Gunungan from '../assets/gunungan.png';

const Home = () => {
	const [showMore, setShowMore] = useState(false);
	const wayangDummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const handleClick = () => {
		setShowMore(!showMore);
	};

	return (
		<Layout width={'700px'}>
			<div className='w-full mx-auto text-center'>
				<img src={Gunungan} className='w-24 h-24 mx-auto' alt='logo' />
				<h3 className='text-2xl text-[#4A576F]'>Welcome to</h3>
				<h2
					className='font-bold text-[32px]'
					style={
						{
							// background:
							// 	'linear-gradient(to right, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
							// backgroundClip: 'text',
							// WebkitTextFillColor: 'transparent',
						}
					}>
					Abinawa
				</h2>
				<h3 className='text-lg tracking-[0.19em] my-3 w-3/4 mx-auto'>
					Interactive web to introduce Wayang with 3D models
				</h3>
				<img src={DecorativeBar} className='w-full' alt='' />
			</div>
			{/* search wauang */}
			<div className='w-full flex flex-col'>
				<h4 className='text-lg text-center tracking-[0.19em] mt-9'>
					Search Your Favorite Wayang
				</h4>
				<div className='grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 mt-8 justify-items-center'>
					{wayangDummy
						.slice(0, showMore ? wayangDummy.length : 3)
						.map((item, index) => (
							<Card key={index} id={index + 1} wayang={Wayang} />
						))}
				</div>
				{wayangDummy.length > 3 && (
					<button
						onClick={handleClick}
						className='w-fit rounded-3xl px-5 py-3 text-white mx-auto mt-16 font-medium text-lg'
						style={{
							background:
								'linear-gradient(73.19deg, #DC79FF 0%, #256BFA 95.06%)',
						}}>
						{showMore ? 'Show Less' : 'Show More'}
					</button>
				)}
			</div>
			<div className='mx-auto'>
				<h2
					className='font-bold text-center text-[32px] mt-16'
					style={
						{
							// background:
							// 	'linear-gradient(to right, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
							// backgroundClip: 'text',
							// WebkitTextFillColor: 'transparent',
						}
					}>
					Abinawa
				</h2>
				<p className='text-lg tracking-[-0.014rem] w-[455px] mx-auto text-center my-3'>
					It's not that difficult to find my contact information by searching
					realvjy. Know little more about me here
				</p>
				<img src={DecorativeBar} className='w-full' alt='' />
			</div>
		</Layout>
	);
};

export default Home;
