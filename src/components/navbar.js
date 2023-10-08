import React from "react";
import image from '../images/react.png' 
export default function Navbar(){
    return (
        <nav>
            
            <img src={image} alt={"Image"}/> 
            
            <h1>React Facts</h1>
            <h3>React Info Site</h3>
        </nav>
    )
}