var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: '12345',
        server: 'localhost',
        database: 'covidHelp',
        "options": {
            "encrypt": true,
            "enableArithAbort": false
            },
    });

    return conn;

};
module.exports = connect;
