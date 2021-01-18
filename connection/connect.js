var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'Pasta@123',
        server: '103.231.209.235',
        database: 'covidHelp',
        "options": {
            "encrypt": true,
            "enableArithAbort": false
            },
    });

    return conn;

};
module.exports = connect;
