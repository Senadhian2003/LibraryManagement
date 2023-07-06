const express = require("express");
const app = express();
const db = require("./connection")
const bodyParser = require("body-parser");
const CORS = require ("cors")

app.use(CORS());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get("/get",(req,res)=>{

    res.send("Goood");

})



app.listen(5000,()=>{
    console.log("Server running in 5000")
})
