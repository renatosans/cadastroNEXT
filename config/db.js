const { Pool } = require('pg');


// dados da conexão com o BD
const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: 'p@ssw0rd',
	port: 5432,
	database: 'commercedb',
	// ssl: {}
})

export { pool }
