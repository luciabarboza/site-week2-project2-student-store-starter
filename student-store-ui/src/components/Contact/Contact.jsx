import React from "react";
import "./Contact.css"
import {Link} from "react-router-dom"


const Contact = ()=>{
    return(
        <div className="contact-us">

            <header className="contact-us">
                <h1>Contact Us</h1>
            </header>
            <p>
            Email: code@path.org
Phone: 1-800-CODEPATH
Address: 123 Fake Street, San Francisco, CA  
            </p>
            
            {/* <Link to= "/about-us" id="about-us">About</Link> */}




        </div>
        

        

    );
}

export default Contact;
