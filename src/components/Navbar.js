import react from "react";
import './style.css'

export default function Navbar(props)
{
    return(
        <header>
            <nav className={props.darkMode ? "dark": ""}>
                <img src={require("./images/photo.jpg")} width="20px"/>
                <h2>my travel.com</h2>
            <div 
                className="toggler" 
                >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </nav>
        </header>   
    )
}
