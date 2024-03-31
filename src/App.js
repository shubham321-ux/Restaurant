import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Toaster from "react-hot-toast"
import Home from "./componenets/Home"
import Notfound from "./componenets/NotFound"
import Success from "./componenets/Success"
import About from "./componenets/Aboutus.js";
import Qualities from "./componenets/Qualities.js";
import Team from "./componenets/Team.js";
import Reservation from "./componenets/Reservation.js";
const App = () => {
return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Success />} />
      {/* <Route path="*" element={<Notfound />} /> */}
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>}/>
      <Route path="/Qualities" element={<Qualities/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Reservation" element={<Reservation/>}/>




      
    </Routes>
    
  </Router>
}
export default App