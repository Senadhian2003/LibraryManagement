import React from 'react'
import image from "../images/book.jpg"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
import "./home.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  let S = useParams();
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const loadData = async()=>{

    try {
      const result = await axios.get("http://localhost:5000/get");
      setData(result.data);
  console.log(result.data)
  } catch (error) {
      console.log("Error : "+ error)
  }



  }


  const addToCart = (book_id)=>{

    var user_id = S.id;
    console.log(book_id);
    axios.post("http://localhost:5000/addtocart",{
                user_id : user_id,
                book_id : book_id,

            }).then(()=>{
                console.log("Goood")

            }).catch((err)=>{
                console.log(err)
            })


  }


  useEffect(() => {
    loadData();
  }, []);



  return (
    <div>
 
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LIBRARY MANAGEMENT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end">
                    
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={()=>{
                          navigate(`/cart/${S.id}`)
                        }}>Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><img src="30.png" alt=""/>  LOGOUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="noti container">



{
                data && data.map((item,index)=>{
                    return(

                      <div class="box1 " style={{marginTop : "60px"}} >

    <div class="row">

      <div class="col-3">
      <div class="x">

      </div>

      </div>
      <div class="col-9">
        <div class="y ">

          <div className="row jus">
          <div className="col">
          <p>Name : {item.book_name}</p>
          <p>Author : {item.author_name}</p>
          </div>

          <div className="col">
          <p>Genre : {item.genre}</p>
          <p>Year : {item.published_year}</p>
          <button type="button" onClick={()=>{
            addToCart(item.book_id);
          }} class="btncrt btn btn-primary ">Add to cart</button>
          </div>

          

          <div className="col">
          <p>Quantity : {item.quantity}</p>
          <p>Price : {item.price}</p>
          </div>
          


          </div>
          
          
          
     
        
        </div>
      </div>
      
    </div>

</div>
                        
                    )
                })
            }


</div>


    </div>
  )
}
