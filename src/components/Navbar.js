import react from "react";
import './style.css'

export default function Navbar()
{
    return(
        <header>
            <nav>
                <img src={require("./images/photo.jpg")} width="20px"/>
                <h2>my travel.com</h2>
            </nav>
        </header>   
    )
}