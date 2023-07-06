import React from 'react'
import image from "../images/book.jpg"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
import "./home.css"
export default function Home() {
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
                        <a class="nav-link active" aria-current="page" href="/cart">Cart</a>
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
                data.map((item,index)=>{
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
          <p>Price : $10</p>
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
