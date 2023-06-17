import React from "react";

import {Link} from "react-router-dom"

const Logo = ()=>{
    return(
        <div className="logo">
        <Link to = "/"> Home </Link>
            <h1>My Logo</h1>
            <p> Hiii! </p>
        </div>
    );
}
export default Logo;