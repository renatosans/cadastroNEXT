import axios from "axios";
import Link from "next/link";
import { DataGrid } from '@mui/x-data-grid';
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";


const HomePage = ({ products }) => {
	const columns = [
		{ field: 'id', headerName: 'id', width: 80 },
		{ field: 'nome', headerName: 'Nome', width: 120 },
		{ field: 'preco', headerName: 'Preço', width: 80 },
		{ field: 'descricao', headerName: 'Descrição', width: 160 }
	];

	return (
		<Layout>
			<DataGrid columns={columns} rows={products} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3"> {
				products.map( (product) => 
					<Link href={`products/${product.id}`} key={product.id}>
						<ProductCard product={product} />
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
