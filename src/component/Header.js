import React from "react";
import Logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";



const Header=()=>{
    return(
        <div className="header">
        <div className="LeftSide">
            <img src={Logo}/>
            
        </div>
        <div>
        <h1>BURBERMEMO</h1>
        </div>
        <div>
            <h1>
                <Link className="headerlink" to={"/"}>Home</Link>

                <Link className="headerlink" to={"/menu"}>Menü</Link>

                <Link className="headerlink" to={"/about"}>About</Link>

                <Link className="headerlink" to={"/contact"}>Contact</Link>

            </h1>
        </div>
        </div>
    )
};

export default Header;