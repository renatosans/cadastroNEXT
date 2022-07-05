import React from 'react';


export const ProductCard = ({ product }) => {
	return (
		<>
			<div class="p-8 border-solid border-2 rounded-lg">
				<h2 class="text-2xl font-bold">{product.nome}</h2>
				<p>{product.descricao}</p>
				<img src={"data:" + product.formatoImagem + ", " + product.foto} alt={product.nome}></img>
			</div>
		</>
	)
}
