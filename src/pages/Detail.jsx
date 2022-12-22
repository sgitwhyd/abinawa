import React, { useState } from 'react';
import Layout from './layout';
import { useParams } from 'react-router-dom';
import DetailModal from '../components/modal/detail-modal.component';

import Sword from '../assets/sword.svg';
import Play from '../assets/play.svg';

const Detail = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const [modalData, setModalData] = useState({
		type: '',
		videoLink: '',
		desc: '',
	});
	const { id } = useParams();

	const CloseDetailModal = () => {
		setVisibleModal((prev) => !prev);
	};

	const DummyDataDetail = {
		id: 1,
		name: 'Kresna',
		category: 'Mahabarata',
		origin: 'Mathura',
		desc: 'Dalam budaya pewayangan Jawa, tokoh Kresna dikenal sebagai raja Dwarawati (Dwaraka), kerajaan para keturunan Yadu dan merupakan titisan Dewa Wisnu. Kresna muda bernama Narayana, adalah putra Basudewa, Raja Mandura (Mathura).',
		descLink: '#',
		addition: [
			{
				type: 'senjata',
				icon: Sword,
				name: ' Cakra Sudarsana',
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio placeat non fugit est quibusdam cumque excepturi, eligendi nesciunt esse ratione corrupti quisquam, id blanditiis ad nemo animi sapiente provident.',
			},
			{
				type: 'cerita',
				name: 'Kresna',
				icon: Sword,
				desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio placeat non fugit est quibusdam cumque excepturi, eligendi nesciunt esse ratione corrupti quisquam, id blanditiis ad nemo animi sapiente provident.',
			},
			{
				type: 'video',
				icon: Play,
				name: ' Cakra Sudarsana',
				videoUrl: 'https://www.youtube.com/embed/9um16c8M5dQ',
			},
		],
	};

	const { name, desc, descLink, addition } = DummyDataDetail;

	return (
		<Layout padding='pt-8'>
			<div className='w-[1240px]'>
				<div className='text-start text-base tracking-[0.22em] text-primary'>
					<a href='/'>Home</a> / <span>Wayang</span> / <span>{name}</span>
				</div>
				<div className='flex gap-28 w-full mx-auto h-[522px] mt-10'>
					<div className='w-5/12 bg-[#D9D9D9] rounded-[50px]'>1</div>
					<div className='flex flex-col w-6/12 pt-3'>
						<h2 className='font-semibold text-2xl'>{name}</h2>
						<p className='text-lg tracking-[0.06em] font-light w-[533px] mt-6 mb-9'>
							{desc}
						</p>
						<button className='bg-primary font-light text-lg w-fit text-white rounded-[10px] px-[30px] py-3'>
							<a href={descLink}>Read More</a>
						</button>

						<div className='flex gap-[50px] mt-16'>
							{addition.map((item, index) => {
								return (
									<div
										key={index}
										className='rounded-[18px] flex justify-center items-center cursor-pointer bg-[#D9D9D9] w-[108px] h-[103px]'
										onClick={() => {
											setVisibleModal((prev) => !prev);
											setModalData({
												type: item.type,
												videoLink: item.videoUrl,
												desc: item.desc,
											});
										}}>
										<img src={item.icon} className='w-14 h-14' alt='' />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{visibleModal ? (
				<DetailModal onCloseModalHandler={CloseDetailModal} {...modalData} />
			) : null}
		</Layout>
	);
};

export default Detail;
