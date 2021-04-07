import React from 'react'
import Pana2 from './pana.png'

function Comp2()
{
    return(
        <div className="row py-5 pl-5"  style={{backgroundColor:"#F7F7F7"}} >
             <div className="col-lg-1 "></div>
           <div className="col-lg-4 my-0 py-0 pr-5" >
                <img className="my-0" src={Pana2} style={{width:"100%"}}/>
            </div>
            <div className="col-lg-5 py-5 my-5 pl-5">
           <h1 style={{fontSize:"60px"}}>Welcome to<b style={{color:"#EC323B"}}> Dwidasa Samsara <br/> Indonesia (DSI)</b>
</h1>

<p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010<br/> by the founders, who each of them has a common end objective<br/> to innovate 
    new creations by making the most of the<br/> ever-growing information technology through<b style={{color:"#EC323B"}}> DSI’s</b> distinct <br/> front-end based application concept.
    <br/>
    <br/>
Managed by a team of professional experts with extensive<br/> experience and impressive track records, DSI believes<br/> that continuous improvements and innovations assure <br/>your business to run effectively and efficiently.</p>

            </div>
            
        </div>
    )
}
export default Comp2;
