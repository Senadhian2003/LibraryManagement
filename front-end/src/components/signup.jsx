import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../Style/login.css"
function Signup() {
  const navigate = useNavigate();
  const [mail,smail]=useState("");
  
  const [name,sname]=useState("");
  const [password,spassword]=useState("");
 
  useEffect(()=>{
    function start(){
      gapi.client.init(
        {
          clientId:"383219440161-gc01rtmrujasniknpb07o139hq2n0sfc.apps.googleusercontent.com",
          scope:""
        }
      )
    };
    gapi.load('client:auth2',start)

  })
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    localStorage.setItem('mail', response.profileObj.email);
    localStorage.setItem('image', response.profileObj.imageUrl);
    localStorage.setItem('name', response.profileObj.name);
    localStorage.setItem('id', response.profileObj.googleId);
    
    navigate("/password");

  }
  const reject=(msg)=>{
    alert(`error + ${msg}`)

  }
  function handlesubmit(e){
    e.preventDefault();
  }
 function submitdata(){
  axios.post("http://localhost:5000/auth/signup",{
    params: {
      name:name,
      mail:mail,
      image:"",
      id:"",
      password:password
    }
  }).then((response) => {
    navigate("/login")
    
}).catch((msg)=>{
  alert("invalid username or password")
});
 }
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Signup</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e)=>smail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e)=>sname(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={(e)=>spassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group mt-3">
          <label> Conform Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={submitdata} className="btn btn-primary">
            Signup
          </button>
        </div>
       
 
  <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={()=>{navigate("/login")}} style={{marginBottom:"10%"}}className="btn btn-primary">
            Login
          </button> 
          <GoogleLogin
    clientId="383219440161-gc01rtmrujasniknpb07o139hq2n0sfc.apps.googleusercontent.com"
    buttonText="Signup with google"
    onSuccess={responseGoogle}
    onFailure={reject}
    cookiePolicy={'single_host_origin'}
    className='gbtn1'
  />
        </div>
      </div>
    </form>
  </div>

  );
}

export default Signup;
