import { createPool } from "mysql2/promise";


// dados para conexão com banco de dados serverless
const host = 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud';
const username = Buffer.from('YXZtYmkxZ2h6b3Vs', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X3VXb2NsNU5ONlRNeG5jb2VjUzhrQ0o1TEZuVndHQm1USktyOXdSYWpfb2c=', 'base64').toString('ascii');

const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'p@ssw0rd',
	port: 3306,
	database: 'commercedb',
	// ssl: {}
})

export { pool }
