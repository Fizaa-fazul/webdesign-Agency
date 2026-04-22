import React from "react";
import "../style/whyus.css"
import { FaClock, FaMagic, FaMobile, FaHandshake } from "react-icons/fa";
function Whyus(){
    return(
        <section className="whyus" id="whyus">
            <h1 className="whyus-title">Why Choose Us</h1>
            <div className="cards">
                <div className="card">
                    <FaClock size={90} className="whyus-icon"/>
                    <h1>Fast Delivery</h1>
                    <p>We complete projects on time with smooth workflow.</p>
                </div>
                <div className="card">
                    <FaMagic size={90} className="whyus-icon"/>
                    <h1>Modern Design</h1>
                    <p>Clean, responsive and conversion-focused UI.</p>
                </div>
                <div className="card">
                    <FaMobile size={90} className="whyus-icon"/>
                    <h1>Mobile Friendly</h1>
                    <p>Perfect experience on desktop, tablet and mobile.</p>
                </div>
                <div className="card">
                    <FaHandshake size={90} className="whyus-icon"/>
                    <h1>Client Support</h1>
                    <p>Quick communication and reliable support.</p>
                </div>
            </div>
        </section>
    );

}
export default Whyus;