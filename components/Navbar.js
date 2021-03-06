import Link from "next/link";


export const Navbar = () => {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 fixed w-full">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<div className="flex flex-row">
					<svg
						className="w-8 h-8 mr-2 mt-1 dark:text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<p className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Next example</p>
				</div>
				<div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						<li><Link href="/">Home</Link></li>
						<li><Link href="/about">About</Link></li>
						<li><Link href="#">Services</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
