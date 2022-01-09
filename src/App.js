
import './App.css';
import { MdOutlineLocationOn } from "react-icons/md";
import { render } from 'react-dom';
import {MdOutlineArrowDropDown } from "react-icons/md";
import {MdSearch } from "react-icons/md";




function App() {
 
  return (
  
    <div className="App">
      <div className="main">
<div className="header"><div><img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"></img></div>
<div className="header2"><p>Blog</p><p className="p">RegisterAsAProfessional</p><p>Login/SignUp</p></div>
</div>
<h6>home/chennai</h6>
        <div className="container">
          
          <h1>home sevices,on demand</h1>
        </div>
        <div className="sear"><span><MdOutlineLocationOn/>chennai,central<MdOutlineArrowDropDown/></span><div className="s"><MdSearch size="1.5em" color="black"/><input type="search"  placeholder="searce for services"/></div></div>
<div className="d"><small>Women's Thearpys</small><small>,Saloonformen</small><small>,men's Theraphys</small><small className="k">,etc</small></div>      
      
      </div>
    
        </div>
       
  );
}

export default App;
