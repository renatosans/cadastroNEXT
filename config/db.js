import { createPool } from "mysql2/promise";


const pool = createPool({
	host: 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud',
	user: 'pt49v304j5yh',
	password: 'pscale_pw_JXyJQu3hsJve-kP7sCqTZIUr_j63RsYnilONHLj2z6s',
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
