import React from "react";
import "../style/contact.css"
import {FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa"
function Contact(){
    return(
        <section className="contact" id="contact">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-container">
                {/* left side*/}
                 <div className="left-side">
                <h1>Get in Touch</h1>
                <p>Have a project idea? <br />Let's build something amazing together.</p>
                <p >📧 Email: webdesign@gmail.com <br /> 📍 Location: Karachi, Pakistan</p>
                <div className="social-icons">
                    <a href=""><FaFacebookF /></a>
                     <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                     <a href="#"><FaBehance /></a>
                </div>
                
              
           

            </div>
            {/*right side*/}

               <div className="contact-right-side">
                
                
                <form action="">
                    <input type="text" placeholder="Name" name="" id="" />
                    <input type="email" placeholder="Email" />
                    <textarea name="" id="" placeholder="Message"></textarea>
                     <button className="contact-btn">Submit</button>

                </form>
               
            </div>


            </div>
            
         
           

        </section>
    );
}
export default Contact;