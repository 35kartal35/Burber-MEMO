import React from "react";
import BannerImage from "../assets/banner.jpeg"
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="homecontainer" style={{backgroundImage: `url(${BannerImage})`}}>
           <div className="homeheader">
            <h1 >
                MEMO
            </h1>
            <p>Delicions Hamburgers</p><p>with MEMO</p>
            <Link to={"/Menu"}><button>Order Now</button></Link>
            </div>
        </div>

    )
}

export default Home;