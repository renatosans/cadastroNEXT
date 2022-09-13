import React from 'react';


export const CategorySelect = ({categories}) => {
	return (
        <select>{
            categories&&
            categories.map( (categoria) => <option value={categoria.id}>{categoria.nome}</option> )
        }
        </select>
    )
}
