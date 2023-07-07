import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";

export default function Cart() {
  let S = useParams();
  console.log(S.id)
  const [data, setData] = useState([]);
  
  const loadData = async()=>{

    axios.get("http://localhost:5000/getcartdetails",{
        params: {
        user_id : S.id
        }
      }).then((response) => {
        console.log("GOOD")
        setData(response.data)
       
    }).catch((msg)=>{
      alert("Invalid credentials")
    })
  

  }

  useEffect(() => {
    loadData();
  }, []);

  const deleteBook = (book_id)=>{
    var user_id=S.id;
    console.log(book_id);

    axios.post("http://localhost:5000/deletefromcart",{
                user_id : user_id,
                book_id : book_id,
                
            }).then(()=>{
                console.log("Goood")
                setTimeout(()=>{
                  loadData();
              },1000);

            }).catch((err)=>{
                console.log(err)
            })

  }

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
                        <a class="nav-link active" aria-current="page" href="#">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><img src="30.png" alt=""/>  LOGOUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <Container className="cont">
        
      <Table striped bordered hover style={{textAlign:"center", marginTop : "50px"}} >
      <thead className='table-dark'>
        <tr >
          <th>S.No</th>
          <th>Name</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Published year</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody variant="dark">

            {
               
                data.map((item,index)=>{
                    return(
                        <tr key={item.id}  >

                            <th>{index+1}</th>
                            <td>{item.book_name}</td>
                            <td>{item.author_name}</td>
                            <td>{item.genre}</td>
                            <td>{item.published_year}</td>
                            <td>{item.price}</td>
                            <div className="dummy">
                            <button type="button" onClick={()=>{
            deleteBook(item.book_id);
          }} class="btncrt btn btn-danger  ">Remove</button></div>
                          
                        </tr>
                    )
                })
            }


      </tbody>
    </Table>

    </Container>
   



    </div>
  )
}
