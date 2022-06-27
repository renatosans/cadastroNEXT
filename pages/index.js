import axios from "axios";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Layout } from '../components/Layout';
import { ProductForm } from '../components/ProductForm';
import { ProductCard } from '../components/ProductCard';


const HomePage = ({ products }) => {

	const columns = [
		{ field: 'id', headerName: 'id', width: 80 },
		{ field: 'nome', headerName: 'Nome', width: 120, renderCell: (params) =>
            (<Link href={`/products/${params.row.id}`}><u><b>{params.row.nome}</b></u></Link>) },
		{ field: 'preco', headerName: 'Preço', width: 80 },
		{ field: 'descricao', headerName: 'Descrição', width: 160 }
	];

	const [open, setOpen] = useState(false);

	const toggle = () => {
        setOpen(current => !current);
	};

	return (
		<Layout>
			<Button variant="outlined" startIcon={<DeleteIcon />}>Excluir</Button>
			<Button variant="outlined" startIcon={<AddCircleIcon />} onClick={toggle} >Novo</Button>

            <Dialog open={open} onClose={toggle} >
                <ProductForm dialogRef={{ open, setOpen }} />
			</Dialog>

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
