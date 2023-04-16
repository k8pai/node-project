import Link from 'next/link';
import React, { useState } from 'react';
import Popup from '../components/Popup';
import { HiCheck, HiOutlineXMark } from 'react-icons/hi2';

export default function Login() {
	const [state, setState] = useState({
		username: '',
		password: '',
	});
	const [pop, setPop] = useState({
		Component: HiOutlineXMark,
		message: 'Invalid',
	});
	const [popper, setPopper] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const { username, password } = state;
		if (!username) {
			setPop({
				Component: HiOutlineXMark,
				message: 'Username cannot be empty',
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			return;
		}
		if (!password) {
			setPop({
				Component: HiOutlineXMark,
				message: 'Password cannot be empty',
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			return;
		}
		if (username && password) {
			console.log('username = ', username, ' password = ', password);
			setPop({
				Component: HiCheck,
				message: 'Logged in successfully!',
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			setState({ username: '', password: '' });
		}
	};

	const handleChange = (event) => {
		const { name } = event.target;
		setState((el) => ({ ...el, [name]: event.target.value }));
	};
	return (
		<div className="flex-grow h-full flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="max-w-sm w-full space-y-4 p-5 border border-gray-400/70 rounded-lg"
			>
				<div className="flex flex-col items-center">
					<h1 className="text-xl font-bold">Sign In</h1>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="username">
						<span>username</span>
						<span className="text-red-500 font-extrabold text-lg ml-2">
							*
						</span>
					</label>
					<input
						type="text"
						name="username"
						value={state.username}
						onChange={handleChange}
						className="px-3 py-2 rounded-lg border border-gray-400 shadow-xl focus:outline-none "
					/>
				</div>

				<div className="flex flex-col ">
					<label htmlFor="password">
						<span>password</span>
						<span className="text-red-500 font-extrabold text-lg ml-2">
							*
						</span>
					</label>
					<input
						type="password"
						name="password"
						value={state.password}
						onChange={handleChange}
						className="px-3 py-2 rounded-lg border border-gray-400 shadow-xl focus:outline-none "
					/>
				</div>
				<div className="flex flex-col items-center">
					<button
						type="submit"
						className="px-3 py-2 transition-all duration-100 ease-in rounded-lg shadow-lg hover:shadow-xl border border-gray-500 bg-green-400 hover:bg-green-500 text-black font-semibold w-fit"
					>
						Sign In
					</button>
				</div>
				<div className="flex flex-col items-center">
					<h1>
						Don&apos;t have an account?{' '}
						<Link
							className="transition-all text-blue-500/80 hover:text-blue-500"
							href={'/register'}
						>
							Sign Up
						</Link>
					</h1>
				</div>
			</form>
			<Popup
				message={pop.message}
				timer={1500}
				visible={popper}
				Component={pop.Component}
			/>
		</div>
	);
}
