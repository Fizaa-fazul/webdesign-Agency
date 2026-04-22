import React from "react";
import "../style/Portfolio.css"
function Portfolio(){
    return(
        <section className="portfolio" id="portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="cards">
                <div className="card">
                    <img src="/images/pro1.jpg" alt="Restaurant Website" />
                    <h1>Restaurant Website</h1>
                    <p>Modern responsive website with online booking and menu showcase.</p>
                     <button className="portfolio-btn">Live Demo</button>
                </div>
                 <div className="card">
                    <img src="/images/pro2.jpg" alt="Fashion Brand Store" />
                    <h1>Fashion Brand Store</h1>
                    <p>Clean ecommerce landing page for a clothing brand.</p>
                     <button className="portfolio-btn">Live Demo</button>
                </div>
                 <div className="card">
                    <img src="/images/pro3.png" alt="SaaS Startup" />
                    <h1>SaaS Startup</h1>
                    <p>Landing page for productivity software with pricing and features.
                       These show you can build for multiple industries.</p>
                        <button className="portfolio-btn">Live Demo</button>
                </div>
               
            </div>

        </section>
    );
}
export default Portfolio;