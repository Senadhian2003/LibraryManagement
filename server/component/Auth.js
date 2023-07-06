
var express = require('express');
const db = require('../connection');
var router = express.Router();


db.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

router.post('/signup', async(req,res)=>{
    let name=req.body.params.name;
    let mail=req.body.params.mail;
    let password=req.body.params.password;
    let id=req.body.params.id;
    let image=req.body.params.image;
    if(id==""){
        const timestamp = Date.now();
         id = timestamp.toString();
    } 
    console.log(id) 
    try{
        const items = await db.promise().query("Insert into Persons (user_id , user_name , email, password,image) values (?,?,?,?,?) ",[id,name,mail,password,image]);
        res.send("success") 
    }
    catch(err){
        res.status(500).send(err)
    }
  
  });
  router.get('/login', async(req,res)=>{
    let mail=req.query.mail
    let password=req.query.password;
    console.log(mail) 
    try{
        const items = await db.promise().query("select *  from Persons where email=? and password=? ",[mail,password]);
        res.send(items[0][0].user_id) 
    }
    catch(err){
        res.status(500).send(err)
    }
  
  });
  router.get('/oauth', async(req,res)=>{
    let id=req.query.id
   
    console.log(id) 
    try{
        const items = await db.promise().query("select *  from Persons where user_id=?  ",[id]);
        if(items.length!=0){
            res.send(items[0][0].user_id) 
        }
        else{
            res.status(500).send("error")
        }
        
    }
    catch(err){
        res.status(500).send(err)
    }
  
  });

module.exports=router