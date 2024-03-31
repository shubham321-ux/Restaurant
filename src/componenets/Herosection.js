import React from "react";
import hero1 from "C:/Users/HP/Desktop/mern project/frontend/front/src/componenets/hero1.png"
import logo from "C:/Users/HP/Desktop/mern project/frontend/front/src/logo.svg"
import hero2 from "C:/Users/HP/Desktop/mern project/frontend/front/src/hero2.png"
import threelines from "C:/Users/HP/Desktop/mern project/frontend/front/src/threelines.svg"
import Navbar from "./Navbar";


const Herosection=()=>{
    return (
        <section className="heroSection" id="heroSection">
         <Navbar/>
          <div className="container">
            <div className="banner">
              <div className="largeBox">
                <h1 className="title">Delicious</h1>
              </div>
              <div className="combined_boxes">
                <div className="imageBox">
                  <img src={hero1} alt="hero" />
                </div>
                <div className="textAndLogo">
                  <div className="textWithSvg">
                    <h1 className="title">Food</h1>
                    <h1 className="title dishes_title">Dishes</h1>
                    <img src={threelines} alt="threelines" />
                  </div>
                  <img className="logo" src={logo} alt="logo" />
                </div>
              </div>
            </div>
            <div className="banner">
              <div className="imageBox">
                <img src={hero2} alt="hero" />
              </div>
              <h1 className="title dishes_title">Dishes</h1>
            </div>
          </div>
        </section>
      );

}
export default Herosection