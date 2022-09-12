import React from 'react';


export const CategorySelect = ({categories}) => {
	return (
        <select>
            { categories&&categories.map( (category) => <option>{category.nome}</option> ) }
        </select>
    )
}
