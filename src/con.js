const mysql = require ('mysql')

var con = mysql.createConnection({
    host: '104.155.161.18',
    user: 'root',
    password: 'uade',
    database: "grupo_6"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Conectado a la DB")
});

//module.exports = con;