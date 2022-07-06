import axios from "axios";
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { ProductList } from "../components/ProductList";


const HomePage = ({ products }) => {
	return (
		<Layout>
			<ProductList products={products}></ProductList>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3"> {
				products.map( (product) => 
					<Link href={`products/${product.id}`} key={product.id}>
						<ProductCard produto={product} />
					</Link>
				)
			} </div>
		</Layout>
	);
};

export const getServerSideProps = async (context) => {
	const { data: products } = await axios.get("http://localhost:3000/api/products");

	return {
		props: {
			products,
		},
	};
};

export default HomePage;
