import './App.css';
import './nav.css';
import Logo from './logo.png'
import Mail from './mail.png'
import Home from './Union.png';
import Suffle from './shuffle.png';
function App() {
  return (
//     <div className="row">
//     <div className="col-lg-1 "></div>
//    <nav class="navbar navbar-expand-lg bg-light navbar-light">
//    <img className="navbar-brand  mx-5" style={{color:"black" },{width:120},{height:70}} src={Logo}/>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{float:"right" }} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon" style={{backgroundColor:"gray",float:"right" }}></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav">
   
//       <li class="nav-item">
//         <a class="nav-link mx-5" style={{color:"black"}} href="#">Service</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link  mx-5"style={{color:"black"}}  href="#">Product</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link  mx-5" style={{color:"black"}} href="#">Technology</a>
//       </li>
     
//       <li>
//         <div class="dropdown">
//   <button type="button" class="btn  dropdown-toggle  mx-5" data-toggle="dropdown">
//     About
//   </button>
//   </div>
//       </li>
//       <li  class="dropdown">
       
//   <button type="button" class="btn  dropdown-toggle  mx-5" data-toggle="dropdown">
//     Client
//   </button>
  
//       </li>
//       <li class="nav-item">
//         <a class="nav-link  mx-5" style={{color:"black"}} href="#">Partner</a>
//       </li> 
//       <li class="nav-item">
//       <img className="navbar-brand  mx-5"  src={Home}/>
//       </li>  
//       <li class="nav-item">
//       <img className="navbar-brand  mx-5"  src={Mail}/>
//       </li> 
//       <li class="nav-item">
//       <img className="navbar-brand  mx-5" src={Suffle}/>
//       </li>    
//     </ul>
//   </div>  
// </nav>

// <hr style={{color:'black'}}/>
//     </div>



 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="col-lg-1 "></div>

<img className="navbar-brand  mx-5" style={{color:"black" },{width:120},{height:70}} src={Logo}/>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
   
   <li class="nav-item">
     <a class="nav-link mx-5" style={{color:"black"}} href="#">Service</a>
   </li>
   <li class="nav-item">
     <a class="nav-link  mx-5"style={{color:"black"}}  href="#">Product</a>
   </li>
   <li class="nav-item">
     <a class="nav-link  mx-5" style={{color:"black"}} href="#">Technology</a>
   </li>
  
   <li>
     <div class="dropdown">
<button type="button" class="btn  dropdown-toggle  mx-5" data-toggle="dropdown">
 About
</button>
</div>
   </li>
   <li  class="dropdown">
    
<button type="button" class="btn  dropdown-toggle  mx-5" data-toggle="dropdown">
 Client
</button>

   </li>
   <li class="nav-item">
     <a class="nav-link  mx-5" style={{color:"black"}} href="#">Partner</a>
   </li> 
   <li class="nav-item">
  <a href="hj"> <img className="navbar-brand  mx-5"  src={Home}/></a>
   </li>  
   <li class="nav-item">
   <a href="hj"><img className="navbar-brand  mx-5"  src={Mail}/></a>
   </li> 
   <li class="nav-item">
   <a href="hj"><img className="navbar-brand  mx-5" src={Suffle}/></a>
   </li>    
 </ul>
</div>
</nav> 
  );
}

export default App;
