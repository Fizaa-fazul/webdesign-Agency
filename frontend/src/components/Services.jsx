import React from "react";
import "../style/Services.css"
import { FaLaptopCode, FaRocket, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
function Services(){
    return(
        <section className="services" id="services">
            <h1 className="service-title">Services</h1>
            <div className="cards">
                <div className="card">
                <FaLaptopCode size={90} className="service-icon"/>
                <h1>Custom Web Design</h1>
                <p>Modern and unique website designs tailored for your brand.</p>
            </div>
            <div className="card">
               < FaMobileAlt size={90} className="service-icon"/>
                <h1>Responsive Design</h1>
                <p>Websites that look perfect on mobile, tablet, and desktop.</p>
            </div>
            <div className="card">
                <FaRocket size={90} className="service-icon"/>
                <h1>Landing Pages</h1>
                <p>High-converting landing pages for campaigns and businesses.</p>
            </div>
             <div className="card">
                <FaPaintBrush size={90} className="service-icon"/>
                <h1>Website Redesign</h1>
                <p>Refresh old websites with modern UI and better experience.</p>
            </div>

            </div>
            
        </section>
    );
}
export default Services;