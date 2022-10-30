import { createPool } from "mysql2/promise";


// dados da conexão com BD serverless
const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'p@ssw0rd',
	port: 3306,
	database: 'commercedb',
	// ssl: {}
})

export { pool }
