import Link from 'next/link';


export const ProductCard = ({ product }) => {
	return (
		<div>
			<div class="p-8 border-solid border-2 rounded-lg">
				<h2 class="text-2xl font-bold"><Link href={'#'}>{product.nome}</Link></h2>
				<p>{product.descricao}</p>
				<img style={{height: "200px"}} src={"data:" + product.formatoImagem + ", " + product.foto} alt={product.nome}></img>
			</div>
		</div>
	);
};
