import React from 'react';
import CloseImg from '../../assets/close.svg';

const DetailModal = (props) => {
	const { onCloseModalHandler, type, videoLink, desc } = props;
	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative my-6 mx-auto max-w-3xl'>
					{/*content*/}
					<div className='border-0 rounded-[30px] shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						{/*header*/}
						<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
							<div className='w-full flex justify-between items-center'>
								<h3 className='text-3xl font-semibold'>
									{type ? type.charAt(0).toUpperCase() + type.slice(1) : ''}
								</h3>
								<img
									src={CloseImg}
									alt='close'
									className='w-6 h-6 cursor-pointer'
									onClick={onCloseModalHandler}
								/>
							</div>
						</div>
						{/*body*/}
						<div className='relative p-6 flex-auto max-h-[500px] overflow-hidden'>
							<p className='my-4 text-slate-500 text-lg leading-relaxed overflow-y-auto max-h-[400px]'>
								{type === 'video' ? (
									<iframe
										className='w-[600px] h-72'
										src={videoLink}
										title='YouTube video player'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen></iframe>
								) : (
									desc
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</>
	);
};

export default DetailModal;
