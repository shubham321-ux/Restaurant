import React from "react";
import Herosection from "./Herosection";
import Footer from "./Footer";
import About from "./Aboutus";
import Qualities from "./Qualities";
import WhoAreWe from "./whoweare";
import Menu from "./Menu";
import Team from "./Team";
import Reservation from "./Reservation"
import About2 from './Aboutus2'
import Qualities2 from "./Qualities2";
import Team2 from "./Team2";
import Reservation2 from "./Reservation";
const Home=()=>{
    return (<>
        <Herosection/>
        <About2/>
        <Menu/>
  <Qualities2/>
  <WhoAreWe/>
  <Team2/>
  <Reservation2/>
    <Footer/>

    </>

    )
}
export default Home