const login = () => {
    let mysql = require('mysql');

    const log = () => {
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Zbw574601!!!',
        database: 'Manage'
      });

      connection.connect();

      connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });
    };
}

module.exports = login;