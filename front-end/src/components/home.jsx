import React from 'react'
import image from "../images/book.jpg"
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
                        <a class="nav-link active" aria-current="page" href="#">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><img src="30.png" alt=""/>  LOGOUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="noti">

<h1 style={{marginTop : "80px"}} > NOTIFICATION</h1>
<div class="box1 container" style={{marginTop : "60px"}} >

    <div class="row">

      <div class="col-3">
      <div class="x">

      </div>

      </div>
      <div class="col-9">
        <div class="y">
          <p>id : 5883118</p>
          <p>Name : Apple</p>
          <p>Problem : Spoilage</p>
          <p>Time Elapsed : 5883118</p>

        </div>
      </div>
      
    </div>

</div>
</div>


    </div>
  )
}
