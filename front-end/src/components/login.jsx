import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script"
function Login() {
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
    console.log(response);
  }
  const reject=(msg)=>{
    alert(`error + ${msg}`)

  }
  
  return (
    <GoogleLogin
    clientId="383219440161-gc01rtmrujasniknpb07o139hq2n0sfc.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={reject}
    cookiePolicy={'single_host_origin'}
    className='gbtn1'
  />

  );
}

export default Login;
