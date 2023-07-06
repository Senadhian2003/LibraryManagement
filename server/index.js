const express = require("express");
const app = express();
const db = require("./connection")
const bodyParser = require("body-parser");
const CORS = require ("cors")

app.use(CORS());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));



app.get("/",(req,res)=>{

    res.send("Goood");

})


app.get("/get",(req,res)=>{

    const query = "SELECT * FROM books";
    db.query(query, (err,result)=>{
        // console.log(result);
        res.send(result);

    })

})

app.post("/addtocart",(req,res)=>{

    const user_id = req.body.user_id;
    const book_id = req.body.book_id;

    const sqlInsert = "INSERT INTO cart (user_id, book_id) VALUES (?,?)";
    db.query(sqlInsert,[user_id, book_id],(error,result)=>{

        if(error){
            console.log("Error : " + error );
        }
        else{
            console.log("DATA INSERTED SUCCESSFULLY");
        }

    })

    console.log(user_id, book_id)

})


app.get("/getcartdetails",(req,res)=>{

    var user_id = 1001;

    const query = "SELECT Books.book_id, Books.book_name, Books.author_name, Books.genre, Books.price, Books.published_year from Cart join Books on Cart.book_id = Books.book_id where Cart.user_id= ?"

    db.query(query, user_id,(err,result)=>{

        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result)
        }

    } )
})


app.post("/deletefromcart",(req,res)=>{

    const user_id = req.body.user_id;
    const book_id = req.body.book_id;

    const sqlDelete = "DELETE FROM Cart WHERE user_id=? and book_id=?";
    db.query(sqlDelete,[user_id, book_id],(error,result)=>{

        if(error){
            console.log("Error : " + error );
        }
        else{
            res.send("Book Deleted successfully")
            console.log("DATA DELETED SUCCESSFULLY");
        }

    })

    console.log(user_id, book_id)

})





app.listen(5000,()=>{
    console.log("Server running in 5000")
})
