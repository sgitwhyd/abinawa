import React from 'react';
import Layout from './layout';
import { useParams } from 'react-router-dom';
import Sword from '../assets/sword.svg';
import Play from '../assets/play.svg';

const Detail = () => {
	const { id } = useParams();
	return (
		<Layout padding='pt-8'>
			<div className='w-[1240px]'>
				<div className='text-start text-base tracking-[0.22em] text-primary'>
					<a href='/'>Home</a> / <span>Wayang</span> / <span>Janaka</span>
				</div>
				<div className='flex gap-28 w-full mx-auto h-[522px] mt-10'>
					<div className='w-5/12 bg-[#D9D9D9] rounded-[50px]'>1</div>
					<div className='flex flex-col w-6/12 pt-3'>
						<h2 className='font-semibold text-2xl'>Janaka</h2>
						<p className='text-lg tracking-[0.06em] font-light w-[533px] mt-6 mb-9'>
							Dalam budaya pewayangan Jawa, tokoh Kresna dikenal sebagai raja
							Dwarawati (Dwaraka), kerajaan para keturunan Yadu dan merupakan
							titisan Dewa Wisnu. Kresna muda bernama Narayana, adalah putra
							Basudewa, Raja Mandura (Mathura).
						</p>
						<button className='bg-primary font-light text-lg w-fit text-white rounded-[10px] px-[30px] py-3'>
							<a href='#'>Read More</a>
						</button>

						<div className='flex gap-[50px] mt-16'>
							<div
								className='rounded-[18px] flex justify-center items-center cursor-pointer bg-[#D9D9D9] w-[108px] h-[103px]'
								onClick={() => {}}>
								<img src={Sword} className='w-14 h-14' alt='' />
							</div>
							<div
								className='rounded-[18px] flex justify-center items-center cursor-pointer bg-[#D9D9D9] w-[108px] h-[103px]'
								onClick={() => {}}>
								<img src={Sword} className='w-14 h-14' alt='' />
							</div>
							<div
								className='rounded-[18px] flex justify-center items-center cursor-pointer bg-[#D9D9D9] w-[108px] h-[103px]'
								onClick={() => {}}>
								<img src={Play} className='w-14 h-14' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Detail;
