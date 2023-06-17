import React from "react";
import "./About.css"
import {Link} from "react-router-dom"


const About = ()=>{
    return(
        <div className="about-us">

            <header className="about-us">
                <h1>About</h1>
            </header>
            <p className="about-us-info">
            The codepath student store offers great products at great prices from a great team and for a great cause.

We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.

All proceeds go towards bringing high quality CS education to college students around the country.
            </p>
            <img className = "about-img" src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"/>
            {/* <Link to= "/about-us" id="about-us">About</Link> */}


            




        </div>
        

        

    );
}

export default About;
