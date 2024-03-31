import React from "react";
import Navbar from './Navbar.js'
import member1 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/team_member_1.png'
import member2 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/team_member_2.png'
import member3 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/team_member_3.png'
import member4 from 'C:/Users/HP/Desktop/mern project/frontend/front/src/team_member_4.png'

const Team = () => {
  const  team= [
        {
            id: 1,
            image: member1,
            name: "JOHNATHAN TYLER",
            designation: "Founder & Head Chef"
        },
        {
            id: 2,
            image: member2,
            name: "WADE WARREN",
            designation: "Sous Chef"
        },
        {
            id: 3,
            image: member3,
            name: "REMON",
            designation: "Jr. Chef"
        },
        {
            id: 4,
            image: member4,
            name: "SUNADE",
            designation: "Italian Chef"
        }
    ]
  return (
    <>
    <Navbar/>
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
