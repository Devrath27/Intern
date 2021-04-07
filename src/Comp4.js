import React from 'react'
function Comp4(props){
    return(
        <div class="col-lg-3 p-5" style={{textAlign:"center"}}>
            <img src={props.imag} style={{margin:"auto"}}/>
                    <h1 style={{color:"#EC323B"}} >{props.name}</h1>
        <p>{props.info}</p>
        <button style={{backgroundColor:"#EC323B"}}>Know more</button>
        </div>
    )
}
export default Comp4;