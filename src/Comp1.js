import React from 'react'
import Pana1 from './pana1.png'

function Comp1()
{
    return(
        <div className="row py-5 pl-5" style={{width:"100%"}} >
             <div className="col-lg-1"></div>
            <div className="col-lg-5 py-5">
           <h1 style={{fontSize:"65px"}}>Making the most of the <br/>ever-growing 
</h1>



<h1  style={{fontSize:"65px"}}><b style={{color:"#EC323B"}}>Information Technology</b></h1>
<p>Managed by a team of professional experts with extensive<br/> experience and impressive track records</p>
<button style={{backgroundColor:"#EC323B"}}>Know more</button>
            </div>
           
            <div className="col-lg-4 ">
                <img src={Pana1} style={{width:"100%"}}/>
            </div>
            
        </div>
    )
}
export default Comp1;