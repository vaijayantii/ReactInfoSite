import React from "react";
import image from '../images/background.png' 
export default function Main(){
    return (<main>
        <h1 className="main--title" >Fun Facts About React</h1>
        <ul className="main--facts">
            <li>Was first release in 2013</li>
            <li>Was originally crated by Jordan Walke</li>
            <li>Was well Over 100k stars on Github</li>
            <li>Is maintain by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>)
}