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
            <ClickableField route={`/?id=${params.row.id}`} label={params.row.nome} dialogRef={{ open, setOpen }}></ClickableField> },
		{ field: 'preco', headerName: 'Preço', width: 80 },
		{ field: 'descricao', headerName: 'Descrição', width: 160 }
	];

	const [open, setOpen] = useState(false);

	const handleInsert = () => {
		// chamado apenas ao criar um novo produto,  o update passa por outro lugar
		router.push("/")
		    .then(() => { setOpen(true) } )
			.catch((error) => { toast.error(error.message) } );
	}

    const toggle = () => {
		// limpa a seleção e muda o estado do dialogo
		setSelectionModel([]);
        setOpen(current => !current);
    }

	const [selectionModel, setSelectionModel] = useState([]);

	const handleDelete = () => {
		if (selectionModel.length < 1){
            toast.error("Favor selecionar os registros para exclusão.");
            return;
		}

		const promises = selectionModel.map(async (id) => { await axios.delete(`/api/products/${id}`) } );
		Promise.all(promises)
		    .then(() => { router.push("/") } )
			.catch((error) => { toast.error(error.message) })
	};

	return (
		<>
            <Toaster />

            <Dialog open={open} onClose={toggle} >
                <ProductForm dialogRef={{ toggle }} />
			</Dialog>

			<Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete} >Excluir</Button>
			<Button variant="outlined" startIcon={<AddCircleIcon />} onClick={handleInsert} >Novo</Button>

			<DataGrid columns={columns} rows={products} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection
                onSelectionModelChange={setSelectionModel} selectionModel={selectionModel} />
		</>
	);
};
