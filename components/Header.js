import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<div className="flex items-center justify-between p-3">
			<div>
				<h1 className="py-2 px-3 my-2">Node Project</h1>
			</div>
			<div className="sm:flex space-x-3 items-center hidden">
				<Link
					href={'/login'}
					className="px-3 py-2 font-mono rounded-lg my-2 border border-gray-600"
				>
					Sign in
				</Link>
				<Link
					href={'/register'}
					className="px-3 py-2 font-mono rounded-lg my-2 border border-gray-600"
				>
					Sign up
				</Link>
			</div>
		</div>
	);
}
