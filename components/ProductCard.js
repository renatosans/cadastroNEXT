import React from 'react';


export default function ProductCard({ produto }) {

	return (
		<>
			<style jsx>{`
                .rounded-corners {
                    overflow: hidden;
                    border-radius: 10px;
                    border: solid 2px silver;
                }

                .vertical-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .product-title {
                    font-size: 22px;
                    font-weight: bold;
                }

                .product-image {
                    width: 180px;
                }
			`}</style>

            <div className='vertical-container rounded-corners'>
                <h2 className='product-title'>{produto.nome}</h2>
				<img src={"data:" + produto.formatoImagem + ", " + produto.foto} alt={produto.nome}></img>
                <p>{produto.descricao}</p>
            </div>
		</>
	)
}
