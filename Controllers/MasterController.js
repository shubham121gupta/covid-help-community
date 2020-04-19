var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {

    router.route('/getcomments')
    .post(function (req, res) {
        conn.connect().then(function () {
                var request = new sql.Request(conn); 
                request.output('Status',sql.Bit);
                request.output('MessageID', sql.Int);
                request.output('MessageText', sql.VarChar(150));
                request.input("city", sql.VARCHAR(500), req.body.city);
                request.execute("getcmt").then(function (recordset){
                    //console.log(req.body.Point);
                    //res.json(recordset);
                    res.json(recordset.recordsets);

                    //res.json(recordset.output);
                        conn.close();
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send("Error while inserting datauuuuuu");
        });
    });


    router.route('/getCmtByState')
    .post(function (req, res) {
        conn.connect().then(function () {
                var request = new sql.Request(conn); 
                request.output('Status',sql.Bit);
                request.output('MessageID', sql.Int);
                request.output('MessageText', sql.VarChar(150));
                request.input("state", sql.VARCHAR(500), req.body.state);
                request.execute("getCmtByState").then(function (recordset){
                    //console.log(req.body.Point);
                    //res.json(recordset);
                    res.json(recordset.recordsets);

                    //res.json(recordset.output);
                        conn.close();
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send("Error while inserting datauuuuuu");
        });
    });


    router.route('/postcomment')
    .post(function (req, res) {
        conn.connect().then(function () {
                var request = new sql.Request(conn); 
                request.output('Status',sql.Bit);
                request.output('MessageID', sql.Int);
                request.output('MessageText', sql.VarChar(150));
                request.input("city", sql.VARCHAR(500), req.body.city);
                request.input("personName", sql.VARCHAR(500), req.body.personName);
                request.input("contact", sql.VARCHAR(500), req.body.contact);
                request.input("comment", sql.VARCHAR(500), req.body.comment);
                request.input("state", sql.VARCHAR(500), req.body.state);
                request.execute("comment").then(function (recordset){
                    //console.log(req.body.Point);
                    //res.json(recordset);
                    res.json(recordset);

                    //res.json(recordset.output);
                        conn.close();
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while inserting data");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send("Error while inserting datauuuuuu");
        });
    });



        return router;
    };
module.exports = routes;