import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { HiCheck } from 'react-icons/hi2';

export default function Popup({
	Component = HiCheck,
	timer = 3000,
	message = 'This is Awesome.',
	visible = false,
	style = {},
	animate = {},
}) {
	const [animation, setAnimation] = useState({
		from: 'bottom-0',
		to: 'bottom-10',
		animation: 'transition-all ease-out duration-300',
		...animate,
	});
	const [theme, setTheme] = useState({
		bg: 'bg-gray-700',
		color: 'text-slate-50',
		padding: 'px-4 py-3',
		borderRadius: 'rounded-lg',
		border: 'border-0',
		spacing: 'space-x-3',
		font: ' font-semibold',
		indicator: 'text-green-300',
		componentSize: '1.5em',
		...style,
	});

	// const showCard = () => {
	// 	if (!visible) {
	// 		setVisible(true);
	// 		setTimeout(() => {
	// 			setVisible(false);
	// 		}, timer);
	// 	}
	// };

	return (
		<div>
			{/* <button onClick={showCard}> click me</button> */}
			<div
				className={`absolute left-1/2 translate-x-[-50%] ${
					animation.from
				} ${animation.animation} ${
					visible
						? `visible ${animation.to} opacity-100`
						: 'invisible opacity-0'
				}`}
			>
				<div
					className={`${theme.padding} ${theme.bg} ${theme.color} ${theme.borderRadius} ${theme.border} flex h-full items-center ${theme.spacing}`}
				>
					<IconContext.Provider
						value={{
							size: theme.componentSize,
							className: `global-class-name ${theme.indicator}`,
						}}
					>
						<Component />
					</IconContext.Provider>
					<span className={`${theme.font}`}>{message}</span>
				</div>
			</div>
		</div>
	);
}
