import React from 'react'
import "./home.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Preloder() {
  return  Array(3).fill(0).map((item)=>(
        <div style={{marginLeft:"8%"}}>
            
        <div class="box1 " style={{marginTop : "60px",backgroundColor:"#fcfafa",border:"white"}} >
       
        
<div class="row">

<div class="col-3" >
{<Skeleton height={150} style={{marginLeft:"6%",marginTop:"10%"}} />}

</div>
<div class="col-9">
<div class="y ">

<div className="row jus">
<div className="col">
<p>{<Skeleton />}</p>
<p>{<Skeleton />} </p>
<p>{<Skeleton />}</p>
</div>

<div className="col">
<p>{<Skeleton />}</p>
<p>{<Skeleton />}</p>

<p type="button" class="btncrt" >{<Skeleton />}</p>
</div>




<div className="col">
<p>{<Skeleton />} </p>
<p>{<Skeleton />}</p>
<p>{<Skeleton />}</p>
</div>



</div>  
</div>
</div> 
</div>
</div>               
</div>
    ))
   
  
}
