import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import toast, { Toaster } from "react-hot-toast";
import { ProductForm } from '../components/ProductForm';
import { ClickableField } from "../components/ClickableField";


export const ProductList = ({ products }) => {
    const router = useRouter();

    const columns = [
		{ field: 'id', headerName: 'id', width: 80 },
		{ field: 'nome', headerName: 'Nome', width: 120, renderCell: (params) =>
            <ClickableField apiRoute={`/?id=${params.row.id}`} label={params.row.nome} dialogRef={{ open, setOpen }}></ClickableField> },
		{ field: 'preco', headerName: 'Preço', width: 80 },
		{ field: 'descricao', headerName: 'Descrição', width: 160 }
	];

	const [open, setOpen] = useState(false);

	const handleEdit = () => {
        setOpen(current => !current);
	};

	const [selectionModel, setSelectionModel] = useState([]);

	const handleDelete = () => {
		if (selectionModel.length < 1){
            toast.error("Favor selecionar os registros para exclusão.");
            return;
		}

		selectionModel.map((id) => { axios.delete(`/api/products/${id}`) } );
		router.push("/");
	};

	return (
		<>
            <Toaster />

            <Dialog open={open} onClose={handleEdit} >
                <ProductForm dialogRef={{ open, setOpen }} />
			</Dialog>

			<Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete} >Excluir</Button>
			<Button variant="outlined" startIcon={<AddCircleIcon />} onClick={handleEdit} >Novo</Button>

			<DataGrid columns={columns} rows={products} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection
                onSelectionModelChange={setSelectionModel} selectionModel={selectionModel} />
		</>
	);
};
