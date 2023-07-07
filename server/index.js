const express = require("express");
const app = express();
const db = require("./connection")
const bodyParser = require("body-parser");
const CORS = require ("cors")
const auth=require("./component/Auth")
app.use(CORS());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));



app.use('/auth',auth);






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

    console.log(user_id, book_id)

    const sqlInsert = "INSERT INTO cart (user_id, book_id) VALUES (?,?)";
    db.query(sqlInsert,[user_id, book_id],(error,result)=>{

        if(error){
            console.log("Error : " + error );
        }
        else{
            console.log("DATA INSERTED SUCCESSFULLY");
        }

    })

    res.send("Item added to cart")
    

})


app.get("/getcartdetails",(req,res)=>{

    var user_id = req.query.user_id;
    console.log(user_id)

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


app.get("/getcartdetails2",(req,res)=>{

    var user_id = req.query.user_id;
    console.log(user_id)

    const query = "SELECT Books.book_id, Books.book_name, Books.author_name, Books.genre, Books.price, Books.published_year from Cart join Books on Cart.book_id = Books.book_id where Cart.user_id= ?"

    db.query(query, user_id,(err,result)=>{

        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            let arr = []
            let length = result.length;

            for(let i=0;i<length;i++){

                arr.push(result[i].book_name);

            }


            res.send(arr)
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


app.post("/checkout",async(req,res)=>{

    const user_id = req.body.user_id;
    const arr = req.body.booksArr;
    let length = arr.length;

    for(i=0;i<length;i++){
 
        let book_id = arr[i].book_id;
        
        const sqlUpdate = "UPDATE Books SET quantity = quantity-1 where book_id=?";


       await db.promise().query(sqlUpdate,book_id,(error,result)=>{

            if(error){
                console.log("Error : " + error );
            }
            else{
                
                console.log("DATA DELETED SUCCESSFULLY");
            }
    
        })

        const sqlDelete = "DELETE FROM Cart WHERE user_id=?";

        await db.promise().query(sqlDelete,[user_id, book_id],(error,result)=>{

            if(error){
                console.log("Error : " + error );
            }
            else{
                
                console.log("DATA DELETED SUCCESSFULLY");
            }
    
        })
        

    }
    res.send("Cart checked out successfully")
    console.log(user_id,arr,length)

})



app.listen(5000,()=>{
    console.log("Server running in 5000")
})
