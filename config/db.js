import { createPool } from "mysql2/promise";


const pool = createPool({
	host: 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud',
	user: 'root',
	password: '',
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
