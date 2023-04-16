import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<div className="p-3 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-start">
			<div>
				<h1>Node Project</h1>
			</div>
			<div className="px-5 mx-3">
				<div className="flex flex-col space-y-1">
					<h1>sitemap</h1>
					<Link href={'/'}>Home</Link>
					<Link href={'/login'}>Login</Link>
					<Link href={'/register'}>Register</Link>
				</div>
			</div>
		</div>
	);
}
