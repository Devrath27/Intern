import react from 'react';
import Logo from './logo.png';
import Lo4 from './Lo4.png';
function Card5(){
    return(
        <div className='row pl-5' >
             <div className="col-lg-1"></div>
            <div className="col-lg-3 " style={{width:"100%"}}>
            <img  style={{color:"black" },{width:120},{height:70}} src={Logo} />
            <h3>PT Dwidasa Samsara Indonesia
</h3>
            <p>Ruko Jalur Sutera 29A No. 53
Alam Sutera Serpong, Tangerang 15323
</p>
            </div>
            <div className="col-lg-3 p-4" style={{width:"100%"}}>
           <h1>Contact</h1>
           <p>Phone : +62.21.5314.1135 <br/>
Fax : +62.21.5314.1135 <br/>
Email : community@dwidasa.com</p>
            </div>
            <div className="col-lg-3 " style={{width:"100%"}}>
             <img src={Lo4}/>
            </div>

        </div>
    )
}
export default Card5;