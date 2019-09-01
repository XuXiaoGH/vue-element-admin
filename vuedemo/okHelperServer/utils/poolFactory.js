const mysql = require("mysql");


const pool = mysql.createPool({
    host: '192.168.80.98',
    user: 'lekuda',
    password: '123456',
    port: '3306',
    database: 'okcoin_user_center'
});




// 公共查询方法
const query = function (pool, sql) {
    return new Promise(resolve => {
        pool.getConnection(function (err, conn) {
            if (err) {
                resolve(err);
            } else {
                conn.query(sql, function (qerr, vals, fields) {
                    //释放连接
                    conn.release();
                    resolve(vals);
                });
            }
        });
    })
};

module.exports = query;
