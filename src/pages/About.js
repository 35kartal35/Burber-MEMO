import React from "react";
import BannerImage from '../assets/1beef.jpeg'

const About=()=>{
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
            <h1>
                BURBERMEMO
            </h1>
           <p>
            BurberMemo; 2000 yılında İzmir - BUCA da hizmet vermeye başlamış bir hamburger
            dükkanıdır. Ekonomik ve lezzetli olması sebebiyle kısa zamanda çok sayıda müşteriye ulaşmıştır.

            </p> 
            </div>
        </div>

    )
};

export default About;