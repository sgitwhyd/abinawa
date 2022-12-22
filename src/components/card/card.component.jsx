import React from 'react';
import './card.style.css';

const Card = (props) => {
	const wayangDummy = {
		images: props.wayang,
		category: 'Mahabarata',
		name: 'Kresna',
		origin: 'Matura',
	};

	const { images, category, name, origin } = wayangDummy;

	return (
		<a href={`/detail/${props.id}`} className='w-56 h-64 mx-auto md:mx-0'>
			<div className=' rounded-[18px] card-container py-3 cursor-pointer'>
				<img src={images} alt='wayang' className='w-24 mx-auto' />
				<div className='flex flex-col gap-[2px] px-3'>
					<p className='font-medium text-sm text-ligth-gray'>{origin} ✦</p>
					<p className='text-base font-semibold'>{name}</p>
					<p className='font-medium text-sm text-ligth-gray'>{category}</p>
				</div>
			</div>
		</a>
	);
};

export default Card;
