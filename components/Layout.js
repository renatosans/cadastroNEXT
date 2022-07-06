import { Navbar } from "./Navbar";


export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />

			<div className="bg-gray-100  h-screen p-10">
				<div className="container mx-auto w-3/5 h-1/2 my-10">{children}</div>
			</div>
		</>
	)
}
