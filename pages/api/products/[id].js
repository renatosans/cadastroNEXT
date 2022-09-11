import { pool } from "../../../config/db";


export default async function handler(req, res) {
	switch (req.method) {
		case "GET": {
			return getProduct(req, res);
		}
		case "DELETE": {
			return deleteProduct(req, res);
		}
		case "PUT": {
			return updateProduct(req, res);
		}
	}
}

const getProduct = async (req, res) => {
	const { id } = req.query;
	const [result] = await pool.query("SELECT * FROM produto WHERE id = ?", [id]);
	res.status(200).json(result[0]);
};

const deleteProduct = async (req, res) => {
	try {
		const { id } = req.query;
		await pool.query("DELETE FROM produto WHERE id = ?", [id]);
		res.status(204).json();
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

// TODO -  limitar o upload de arquivo somente aos tipos  .gif, .jpg, .png
const updateProduct = async (req, res) => {
	const { id } = req.query;
	const { nome, preco, descricao, foto, formatoImagem } = req.body;

	try {
		await pool.query("UPDATE produto SET nome = ?, preco = ?, descricao = ?, foto = ?, formatoImagem = ?  WHERE id = ?", [
			nome,
			preco,
			descricao,
			foto,
			formatoImagem,
			id,
		]);
		res.status(204).json();
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};
