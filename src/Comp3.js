import React from 'react';
import Comp4 from './Comp4';
import Lo1 from './Lo1.png'
import Lo2 from './Lo2.png'
import Lo3 from './Lo3.png'
function Comp3()
{
    return(
        <div className="py-5 pl-5">
        <div> <h1 style={{textAlign:"center",fontSize:"60px"}}>Product and Services</h1></div>
        <div className="row">
           
          <div className="col-lg-1"></div>
            <Comp4 name="Our Product" info="Our product is made on the base of our team’s careful research and analyses, ranging from internet based application." imag={Lo1}/>
            <Comp4 name="Our Service" imag={Lo2} info="DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
"/>
<Comp4 name="Our Technology" imag={Lo3} info="First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."/>
        </div>
        </div>
    )
}
export default Comp3;