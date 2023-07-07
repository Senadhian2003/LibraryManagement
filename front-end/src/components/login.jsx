import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script"
import axios from "axios";
import "../Style/login.css"
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [mail,smail]=useState("");
  const [password,spassword]=useState("");
  const navigate=useNavigate();
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

  }
  ,[])
   function checklogin(){
        axios.get("https://library-management-backend-one.vercel.app/auth/login",{
        params: {
        mail:mail,
        password:password
        }
      }).then((response) => {
        
        navigate(`/home/${response.data}`)
    }).catch((msg)=>{
      alert("Invalid credentials")
    })
   }

  const responseGoogle = (response) => {
    let gid=response.profileObj.googleId
    axios.get("https://library-management-backend-one.vercel.app/auth/oauth",{
        params: {
        id:gid
        }
      }).then((response) => {
        
        navigate(`/home/${response.data}`)
    }).catch((msg)=>{
       console.log(msg)
    })
  }
  const reject=(msg)=>{
    alert(`error + ${msg}`)

  }
  function handlesubmit(e){
    e.preventDefault();
  }
  
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login hi new</h3>
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
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={(e)=>spassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={checklogin} className="btn btn-primary">
            Login
          </button>
        </div>
       
 
  <div className="d-grid gap-2 mt-3">
        <button type="submit" onClick={()=>{navigate("/signup")}} style={{marginBottom:"10%"}}className="btn btn-primary">
            Signup
          </button>
          
          <GoogleLogin
    clientId="383219440161-gc01rtmrujasniknpb07o139hq2n0sfc.apps.googleusercontent.com"
    buttonText="Login with google"
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

export default Login;
