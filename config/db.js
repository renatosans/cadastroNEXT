import { createPool } from "mysql2/promise";


const pool = createPool({
	host: 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud',
	user: '22affjlnzuvx',
	password: 'pscale_pw_9smLVitPTJpAY1VuFJi5AQMZP3-TQdFDoSlN_vU9mMw',
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
