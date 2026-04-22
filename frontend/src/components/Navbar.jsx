import React, {useState} from "react";
import "../style/Navbar.css";
function Navbar(){
    const [menuOpen, setMenuOpen]= useState(false);
    return(
       <nav className="navbar">
        <h1 className="logo">WebDesign Agency</h1>

        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <div className={`right-section ${menuOpen ? "active" : "" }`}>
           
             <ul className="nav-links">
            <li onClick={()=> setMenuOpen(false)}><a href="#hero">Home</a></li>
            <li onClick={() => setMenuOpen(false)}><a href="#services">Services</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#whyus">Why us</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>

        </ul>
        <a href="#contact">
             <button className="cta-button" 
        onClick={()=> {setMenuOpen(false);
            document.getElementById("Contact")?.scrollInToView({behavior: "smooth"}); }}>
            Book a Call</button>
        </a>
       
        </div>
       
       </nav>
    );
}
export default Navbar;