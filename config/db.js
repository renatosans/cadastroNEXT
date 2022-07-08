import { createPool } from "mysql2/promise";


const username = Buffer.from('czlsZjFkbWplNjdr', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X1dpN3Z6NkhXV2d5bWYyRW50MTJMV0lPT29LQ1Rsa2lqR1ZTSEU1N0lveG8=', 'base64').toString('ascii');

const pool = createPool({
	host: 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud',
	user: username,
	password: password,
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
