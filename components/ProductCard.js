import Link from 'next/link';


export const ProductCard = ({ product }) => {
	return (
		<div>
			<div class="p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<h2><Link href={'#'}>{product.nome}</Link></h2>
				<p>{product.descricao}</p>
				<img style={{height: "250px"}} src={"data:" + product.formatoImagem + ", " + product.foto} alt={product.nome}></img>
			</div>
		</div>
	);
};
