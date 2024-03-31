import React, { useState } from "react";
import  data  from '../restApi.js';

import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import Home from './Home.js'
import About from "./Aboutus.js";
import Qualities from "./Qualities.js";
import Team from "./Team.js";
import Reservation from "./Reservation.js";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const links=  [
    {
        id: 1,
        title: "HOME",
        link: Home,  
        element:Home,
    },
    {
        id: 2,
        title: "ABOUT US",
        link: About,
        element:About
    },
    {
        id: 3,
        title: "SERVICES",
        link: Qualities,
        element:Qualities
    },
    {
        id: 4,
        title: "TEAM",
        link: Team,
        element:Team
    },
    {
        id: 5,
        title: "RESERVATION",
        link: Reservation,
        element:Reservation
    }
];
const print=links.map((el) => {
    return  <Link
    to={el.link}
    spy={true}
    smooth={true}
    duration={500}
    key={el.id}
    element={<el.element/>}
  >
    {el.title}
  </Link>
})
  return <>
      <nav>
        <div className="logo">SHUBHAM</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
          <Link to="/Home"  smooth={true} duration={500} element={<Home/>} > Home </Link>
          <Link to="/About"  smooth={true} duration={500} element={<About/>} > About </Link>
          <Link to="/Qualities"  smooth={true} duration={500} element={<Qualities/>} > Qualities </Link>
          <Link to="/Team"  smooth={true} duration={500} element={<Team/>} > Team </Link>
          <Link to="/Reservation"  smooth={true} duration={500} element={<Reservation/>} > Reservation </Link>
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
        <RxHamburgerMenu />
        </div>
      </nav>
    </>
  
};

export default Navbar;
