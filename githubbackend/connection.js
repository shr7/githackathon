var mysql = require('mysql');
const mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ASDasd@12',
    database:'githubback',  
    multipleStatements:true
  })
  
  mysqlconnection.connect((err) =>{
    if(err)
    {
      console.log(err);
    }
    else  
      console.log('Correctly connected to the server');
  });
module.exports = mysqlconnection;