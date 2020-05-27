module.exports = (sql, params = null) => {
    const mysql = require('mysql')

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bigevent' //这个数据库一会创建，目前没有

    })

    return new Promise((resolve, reject) => {
        conn.connect()
        conn.query(sql, params, (err, result) => {
            err ? reject(err) : resolve(result)
        })
        conn, end()
    })
}