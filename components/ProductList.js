import axios from "axios";
import ReactDom from 'react-dom';
import React, { useState } from 'react';
import { useRouter } from "next/router";
import Draggable from 'react-draggable'; // Bug found while dragging form ( Unmonted during event )
// Bug can be reproduced by clicking outside the form and dragging at the same time  (de maneira nervosa)
// This bug also happens if you click on SAVE and click outside the form at the same time
// Possible fix :  remove 'react-draggable'

// Update : the bug is not in 'react-draggable',  it can be fixed removing the MATERIAL UI Dialog Component,
// creating some modal without backdrop or setting 'No Backdrop'
// example:  to get rid of the backdrop, you can set the data-mdb-backdrop attribute to false
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import toast, { Toaster } from "react-hot-toast";
import { api, notification } from "../config/notification";
import { ProductForm } from '../components/ProductForm';
import { ClickableField } from "../components/ClickableField";
import { ConfirmationDialog } from '../components/ConfirmationDialog';


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

	function insertProd() {
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

	function deleteProd() {
		const root = ReactDom.createRoot(document.getElementById('container'));

		if (selectionModel.length < 1){
            toast.error("Favor selecionar os produtos para exclusão.", notification.options);
            return;
		}

		const message = 'Deseja realmente excluir os produtos selecionados ?';
        const confirmationDialog = React.createElement(ConfirmationDialog, {message, handleResult}, null);
		root.render(confirmationDialog);
	}

	const handleResult = (result) => {
        // apos confirmação exlcui os registros
		if (result) {
			const promises = selectionModel.map(async (id) => { await axios.delete(`/api/products/${id}`) } );
			Promise.all(promises)
				.then(() => { router.push("/") } )
				.catch((error) => { toast.error(error.message) })
		}		
	}

	return (
		<>
            <Toaster />
			<div id="container"></div>

			<Draggable>
				<Dialog open={open} onClose={toggle} BackdropProps={{ style: { backgroundColor: "transparent" } }} >
					<ProductForm dialogRef={{ toggle }} />
				</Dialog>
			</Draggable>

			<Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteProd} >Excluir</Button>
			<Button variant="outlined" startIcon={<AddCircleIcon />} onClick={insertProd} >Novo</Button>

			<DataGrid columns={columns} rows={products} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection
                onSelectionModelChange={setSelectionModel} selectionModel={selectionModel} />
		</>
	);
};
