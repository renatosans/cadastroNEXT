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
		const [result] = await pool.query("INSERT INTO produto SET ?", { nome, preco, descricao, foto, formatoImagem });

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
		const [result] = await pool.query("SELECT * FROM produto");

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
