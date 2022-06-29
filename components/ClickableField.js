import { useRouter } from "next/router";


export const ClickableField = ({ route, label, dialogRef }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(route, undefined, { shallow: true })
		    .then(() => { dialogRef.setOpen(true) } )
			.catch((error) => { throw new Error('Erro ao definir rota' + error.message) } );
	}

	return (
		<button onClick={handleClick} style={{ color: 'darkblue'}} ><b><u>{label}</u></b></button>
	);
};
