import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Popup from '../components/Popup';
import { HiCheck, HiOutlineXMark } from 'react-icons/hi2';

export default function Register() {
	const [state, setState] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event) => {
		const { name } = event.target;
		setState((el) => ({ ...el, [name]: event.target.value }));
	};

	const [pop, setPop] = useState({
		Component: HiOutlineXMark,
		message: 'Invalid',
	});
	const [popper, setPopper] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const { username, password, confirmPassword } = state;

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
		if (!confirmPassword) {
			setPop({
				Component: HiOutlineXMark,
				message: 'Confirm your password',
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			return;
		}

		if (password !== confirmPassword) {
			setPop({
				Component: HiOutlineXMark,
				message: "Passwords doesn't match! Check again!",
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			return;
		}

		if (username && password && password === confirmPassword) {
			console.log('submission is acceptable!');
			setPop({
				Component: HiCheck,
				message: 'Successfully Registered!',
			});
			setPopper(true);
			setTimeout(() => {
				setPopper(false);
			}, 1500);
			setState({ username: '', password: '', confirmPassword: '' });
		}
	};

	return (
		<div className="flex-grow h-full flex items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="max-w-sm w-full space-y-4 p-5 border border-gray-400/70 rounded-lg"
			>
				<div className="flex flex-col items-center">
					<h1 className="text-xl font-bold">Sign Up</h1>
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

				<div className="flex flex-col ">
					<label htmlFor="confirmPassword">
						<span>confirm password</span>
						<span className="text-red-500 font-extrabold text-lg ml-2">
							*
						</span>
					</label>
					<input
						type="password"
						name="confirmPassword"
						value={state.confirmPassword}
						onChange={handleChange}
						className="px-3 py-2 rounded-lg border border-gray-400 shadow-xl focus:outline-none "
					/>
				</div>
				<div className="flex flex-col items-center">
					<button
						type="submit"
						className="px-3 py-2 transition-all duration-100 ease-in rounded-lg shadow-lg hover:shadow-xl border border-gray-500 bg-green-400 hover:bg-green-500 text-black font-semibold w-fit"
					>
						Sign Up
					</button>
				</div>
				<div className="flex flex-col items-center">
					<h1>
						Already a registered user?{' '}
						<Link
							className="transition-all text-blue-500/80 hover:text-blue-500"
							href={'/login'}
						>
							Sign In
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
