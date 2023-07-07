import React from 'react'
import image from "../images/book.jpg"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
import "./home.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Preloader from "./preloder"


export default function Home() {
  let S = useParams();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const[query,setquery] = useState("");
  const [cart, setCart] = useState([]);
  const loadData = async()=>{

    try {
      const result = await axios.get("https://library-management-backend-one.vercel.app/get");
      setData(result.data);
      // console.log(result.data)
  } catch (error) {
      console.log("Error : "+ error)
  }



  }


  const addToCart = (book_id, book_name)=>{

    if (cart.includes(book_name)) {
      // Book name already exists
      toast.warning("Book already present in cart");
      // Notify the user about the existing book name
      // You can display an error message or take any other appropriate action
    } else {
      // Book name doesn't exist
     
      // Proceed with the axios get request or any other desired action

      var user_id = S.id;
      console.log(book_id);
      axios.post("https://library-management-backend-one.vercel.app/addtocart",{
                  user_id : user_id,
                  book_id : book_id,
  
              }).then(()=>{
  
                toast.success("Book added to cart successfully");
                setTimeout(()=>{
                  console.log("Goood")
                },1000);
                
                getCartDetails();
  
              }).catch((err)=>{
                  console.log(err)
              })
  

    }

   

  }
 

  const getCartDetails = async ()=>{

  

      try {

        const result = await axios.get("https://library-management-backend-one.vercel.app/getcartdetails2",{
        params: {
        user_id : S.id
        }
      })
      console.log(result.data)
      setCart(result.data)
        
      } catch (error) {
        console.log(error);
      }
  


  }


  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },1400)
    loadData();
    getCartDetails();
  }, []);

  if(loading){
    return <Preloader/>
  }
  else return (
    <div>
         
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LIBRARY MANAGEMENT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <input placeholder='Enter item to search.....' type="text" className='search'  onChange={(e)=>{setquery(e.target.value)}} value={query} />
           
                <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end">
               
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={()=>{
                          navigate(`/home/${S.id}`)
                        }} >Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={()=>{
                          navigate(`/cart/${S.id}`)
                        }}>Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={()=>{
                          navigate(`/`)
                        }}><img src="30.png" alt=""/>  LOGOUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="noti container">
   



{
  
  data.filter((e) => (e.book_name+e.author_name+e.genre).includes(query)).map((item, index) => {
      return (

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
          <p>Name : {item.book_name  }</p>
          <p>Author : {item.author_name}</p>
        
          </div>

          <div className="col">
          <p>Genre : {item.genre}</p>
          <p>Year : {item.published_year}</p>
          {/* <button type="button" onClick={()=>{
            addToCart(item.book_id);
          }} class="btncrt btn btn-primary ">Add to cart</button> */}
          <button type="button" onClick={()=>{
            addToCart(item.book_id, item.book_name);
          }} class="btncrt btn btn-primary button-29" role="button">Add to cart</button>
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


//   data.filter((e) => (e.book_name+e.author_name+e.genre).includes(query)).map((e, index) => {
//   return (
   
//     <div key={index}>
//       {console.log(e)}
//       <p>{e.author_name}</p>
//       {/* Additional JSX code for rendering the item */}
//     </div>
//   )
// })

            }


</div>


    </div>
  )
}
