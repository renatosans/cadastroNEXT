import Link from 'next/link';
import { useState, useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { ProductList } from '../components/ProductList';


const HomePage = () => {
	const [produtos, setProdutos] = useState([]);

	const getProdutos = async () => {
		const response = await fetch('api/products')
		.then((response) => response.json());

//		if(!response.ok) {
//			toast.error(response.message);
//			return;
//		}

		setProdutos(response);
	}

	useEffect(() => {
		getProdutos();
	}, []);

	return (
		<Layout>
			<Toaster />
			<ProductList products={produtos}></ProductList>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3"> {
				produtos && produtos.map( (product) => 
					<Link href={`products/${product.id}`} key={product.id}>
						<ProductCard produto={product} />
					</Link>
				)
			} </div>
		</Layout>
	)
}

export default HomePage
