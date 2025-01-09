// Export a new instance of mysql2/promise
import { createPool} from 'mysql2/promise'

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'faztpassword',
    database: 'tasksdb'
})
