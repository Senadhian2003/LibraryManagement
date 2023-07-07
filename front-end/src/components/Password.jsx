import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script"
import axios from "axios";
import "../Style/login.css"
import { useNavigate } from 'react-router-dom';
function Password() {
  const [password,spassword]=useState("");
  const navigate=useNavigate();
  let name=localStorage.getItem("name");
    let mail=localStorage.getItem("mail");
    let image=localStorage.getItem("image");
    let id=localStorage.getItem("id");
    
const setfunc= () => {
    console.log(name,mail,image);

    axios.post("https://library-management-backend-one.vercel.app/auth/signup",{
        params: {
        name:name,
        mail:mail,
        image:image,
        id:id,
        password:password
        }
      }).then((response) => {
            navigate("/")
    }).catch((msg)=>{
        alert("please login again")
        navigate("/signup")
    });

}  

  
  function handlesubmit(e){
    e.preventDefault();
  }
  
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Create Password</h3>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e)=>spassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group mt-3">
          <label>Conform Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" onClick={setfunc} style={{marginBottom:"10%",marginTop:"5%"}} className="btn btn-primary">
            Confirm
          </button>
        </div>
     
       
      </div>
    </form>
  </div>

  );
}

export default Password;
