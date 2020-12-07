const express=require('express');
const Router  = express.Router();
const bodyParser = require('body-parser');
const mysqlconnection = require('../connection');
Router.use(bodyParser.json());

Router.get('/list-issues',(req,res,next) => {
 mysqlconnection.query("SELECT * from gitissues",(err,result) => {
     if(err)
        console.log(err);
    else 
        res.send(result);
 })
});

Router.post('/add-issue',(req,res,next) => {
    const Title = req.body.title;
    const Lastuser = req.body.username;
    const id = Math.floor((Math.random()*1000) + 1);
    const Open=1;
    const Comments=0;
    const Lastopened=0;

    const insertQuery = 'INSERT INTO `gitissues`(`id`,`Title`, Open , Lastopened , `Lastuser`,Comments) VALUES (?,?,?,?,?,?)';
    const query = mysqlconnection.format(insertQuery,[id,Title,Open,Lastopened,Lastuser,Comments]);

    mysqlconnection.query(query,(err,response) =>{
        if(err)
            {
                res.status=401;
                console.log(err);
                res.send('Something went wrong')
            }
            else {
                res.statusCode=200;
                res.send('Success');
                console.log(response);
            }
    })
});


Router.get('/list-issues/:id',(req,res,next) => {
    const id = req.params.id;
    const getQuery = 'SELECT * FROM gitissues WHERE id = ?';
    const query = mysqlconnection.format(getQuery,id);
    mysqlconnection.query(query,(err,result) =>{
        if(err)
            console.log(err);
        else
            {
                res.send(result);
            }
    })
});

Router.delete('/delete-issue/:id',(req,res,next) => {
    const id = req.params.id;
    const deleteQuery  = 'DELETE FROM gitissues WHERE id = ?';
    const query= mysqlconnection.format(deleteQuery,id);
    mysqlconnection.query(query,(err,result) => {
        if(err)
            console.log(err);
        else
            res.send('Deletion Succesful');
    })
});

Router.put('/update-issue/:id',(req,res,next) => {
    const id = req.params.id;
    const Title = req.body.title;
    const Lastuser = req.body.username;

    const updateQuery = 'UPDATE gitissues SET TITLE = ?,Lastuser = ? WHERE id=?';
    const query = mysqlconnection.format(updateQuery,[Title,Lastuser,id]);
    mysqlconnection.query(query,(err,result) => {
        if(err)
            console.log(err);
        else
            res.send('Updated');
    })
})

module.exports = Router;