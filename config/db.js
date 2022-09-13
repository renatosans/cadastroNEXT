import { createPool } from "mysql2/promise";


// dados da conexão com BD serverless
const pool = createPool({
	host: 'us-east.connect.psdb.cloud',
	user: Buffer.from('OHMzdHlqNXk2dzA2bDQyY202cDM=', 'base64').toString('ascii'),
	password: Buffer.from('cHNjYWxlX3B3X1B6cVpoUzk5NGxJcmFaeGdyQzdwSmVrS1VuT3RocGNFZzFJV1lZblpDRTQ=', 'base64').toString('ascii'),
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
