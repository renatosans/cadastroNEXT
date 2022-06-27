import { useRouter } from "next/router";


export const ClickableField = ({ apiRoute, label, dialogRef }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(apiRoute, undefined, { shallow: true });
        dialogRef.setOpen(true);
	}

	return (
		<button onClick={handleClick} css={{
				background: 'none',
				border: 'none',
				padding: 0,
				color: 'blue',
				textDecoration: 'underline',
				cursor: 'pointer',
			}} ><u><b>{label}</b></u>
		</button>
	);
};
