import React from "react";
import "../style/Hero.css"
function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="left-side">
                <h1>We Build Websites That Turn Visitors Into Clients</h1>
                <p> We create stunning, responsive, and high-converting websites
          that help businesses grow online and stand out from competitors.</p>
                       <div className="hero-btns">
                        <a href="#contact"><button className="btn1">  Get Started</button></a>
                        <a href="#portfolio"> <button className="btn2">View Work</button></a>
                 
           

            </div>
            </div>
           
            <div className="right-side">
                <img src="images/hero-img.jpg" alt="" />
            </div>
           
        </section>
    );
}
export default Hero;