import React from "react";
import "./Hero.css"
import {Link} from "react-router-dom"


const Hero = ()=>{
    return(
        <div className="hero">
            
            {/* <div className="intro"> Welcome!</div> */}
            {/* Need to make an actual page so it shows welcome to home and all that... */}
            <header className="intro">
                <h1>Welcome!</h1>
                <h1>Show your CodePath spirit!</h1>
            </header>
            <Link to= "/" id="hero"></Link>

            <img className = "hero-img" src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"></img>



        </div>
        

        

    );
}

export default Hero;


