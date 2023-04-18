import { useAction } from '../../hooks';

const Actions = () => {
	const { selectedAction, handleActionSelect, getActions } = useAction();
	const sizeIcon = 'text-3xl';
	const mobileScreenSizeIcon = 'text-xl';
	const actions = getActions(sizeIcon, mobileScreenSizeIcon);

	return (
		<>
			<div
				className='bg-gradient-to-r from-zinc-100 via-gray-100 to-stone-200 pt-3 pb-4 mt-10 w-full border-2
			             border-t-lime-500 border-l-lime-500 border-r-lime-500 rounded-t-2xl'>
				{/* Actions*/}
				<div className='flex flex-wrap justify-center lg:gap-6 md:gap-4 sm:gap-2 gap-1'>
					{actions.map(({ name, icon }, index) => (
						/*  Container */
						<div
							id={name}
							key={name}
							className={`shadow-md cursor-pointer bg-zinc-50 rounded-2xl 
							           lg:w-28 lg:h-24 md:w-20 sm:w-16 w-10 transition duration-300 ease-in-out flex flex-col items-center
                               ${
									selectedAction === index
										? 'shadow-lime-600 shadow-lg border border-lime-600 bg-gradient-to-r from-lime-500 to-lime-600'
										: 'hover:shadow-md hover:shadow-lime-500 bg-gradient-to-r from-zinc-50 to-zinc-200 border border-zinc-50'
								}`}
							onClick={() => handleActionSelect(index)}>
							{/* Icon */}
							<div className='py-2'>{icon}</div>

							{/*  Text */}
							<div className={`text-center lg:flex hidden`}>
								<span
									className={`font-medium tracking-tighter lg:text-sm  ${
										selectedAction === index ? 'text-white' : 'text-zinc-800'
									}`}>
									{name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Actions;
