import React from 'react';
import Layout from './layout';
import Logo from '../assets/logo.png';
import DecorativeBar from '../assets/decorative-bar.png';
import Wayang from '../assets/kresna.png';
import Card from '../components/Card.component';

const Home = () => {
	const wayangDummy = [1, 2, 3];

	return (
		<Layout>
			<div className='w-full mx-auto text-center'>
				<img src={Logo} className='w-16 h-16 mx-auto' alt='logo' />
				<h3 className='text-2xl text-[#4A576F]'>Welcome to</h3>
				<h2
					className='font-bold text-[32px]'
					style={{
						background:
							'linear-gradient(to right, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
						backgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}>
					Abinawa
				</h2>
				<h3 className='text-lg tracking-[0.19em] my-3 w-3/4 mx-auto'>
					Interactive web to introduce Wayang with 3D models
				</h3>
				<img src={DecorativeBar} className='w-full' alt='' />
			</div>
			{/* search wauang */}
			<h4 className='text-lg text-center tracking-[0.19em] mt-9'>
				Search Your Favorite Wayang
			</h4>
			<div className='grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 mt-8'>
				{wayangDummy.map((item, index) => {
					return <Card key={index} wayang={Wayang} />;
				})}
			</div>
			<button
				onClick={() => {}}
				className='w-fit rounded-3xl px-5 py-3 text-white mx-auto mt-16 font-medium text-lg'
				style={{
					background: 'linear-gradient(73.19deg, #DC79FF 0%, #256BFA 95.06%)',
				}}>
				Show More
			</button>
			<div className='mx-auto'>
				<h2
					className='font-bold text-[32px] mt-16'
					style={{
						background:
							'linear-gradient(to right, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)',
						backgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}>
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
