import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import about from "C:/Users/HP/Desktop/mern project/frontend/front/src/about.png"

const About2 = () => {
  return (
    <>
  
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our restaurant offers a delectable array of mouthwatering dishes meticulously crafted to tantalize your taste buds. From savory starters to indulgent main courses, each dish is prepared with the finest ingredients and utmost care to deliver an unforgettable dining experience. Whether you're craving a succulent steak, fresh seafood, or a delightful vegetarian option, our menu boasts a diverse selection to cater to every palate. Join us for a culinary journey that celebrates flavor, quality, and the joy of good food shared among friends and family.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
              <HiOutlineArrowRightOnRectangle />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={about} alt="about" />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default About2;
