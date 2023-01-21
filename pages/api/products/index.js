import { pool } from "../../../config/db";


export default async function handler(req, res) {
	switch (req.method) {
		case "POST": {
			return saveProduct(req, res);
		}
		case "GET": {
			return getProducts(req, res);
		}
	}
}

// TODO -  limitar o upload de arquivo somente aos tipos  .gif, .jpg, .png
const saveProduct = async (req, res) => {
	const { nome, preco, descricao, foto, formatoImagem } = req.body;

	try {
		const result = await pool.query('INSERT INTO produto(nome, preco, descricao, foto, "formatoImagem") VALUES($1, $2, $3, $4, $5)', [ nome, preco, descricao, foto, formatoImagem ]);

		return res.status(200).json({
			message: "Product created",
			id: result.insertId,
			nome,
			preco,
			descricao,
			foto,
			formatoImagem
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const getProducts = async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM produto ORDER BY id");

		return res.status(200).json(result.rows);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
