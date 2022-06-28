import { useRouter } from "next/router";


export const ClickableField = ({ route, label, dialogRef }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(route, undefined, { shallow: true });
        dialogRef.setOpen(true);
	}

	return (
		<button onClick={handleClick} style={{
				background: 'none',
				border: 'none',
				color: 'darkblue',
				cursor: 'pointer',
			}} ><u><b>{label}</b></u>
		</button>
	);
};
