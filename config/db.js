import { createPool } from "mysql2/promise";


const username = Buffer.from("bmF2ZWRnZzdsMWE1", 'base64').toString('ascii');
const password = Buffer.from("cHNjYWxlX3B3Xy05OS1uYWF0NTRWQUk0V09xWUNlcGtOcXNoM0lWSzNER24xdDkyWjVBLXc=", 'base64').toString('ascii');

const pool = createPool({
	host: 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud',
	user: username,
	password: password,
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
