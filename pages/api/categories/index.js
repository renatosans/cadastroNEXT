import { pool } from "../../../config/db";


export default async function handler(req, res) {
	switch (req.method) {
		case "POST": {
			return saveCategory(req, res);
		}
		case "GET": {
			return getCategories(req, res);
		}
	}
}

const saveCategory = async (req, res) => {
    // not implemented yet
    return res.status(200).json({message: "Under construction..."})
}

const getCategories = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM categoria")

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		})
	}
}
