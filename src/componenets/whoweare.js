import React from 'react'
import data from 'C:/Users/HP/Desktop/mern project/frontend/front/src/restApi.js'
import whoeweare from 'C:/Users/HP/Desktop/mern project/frontend/front/src/whoweare.png'

const WhoAreWe = () => {
    const   whoWeAre= [
        {
            id: 1,
            number: "14",
            title: "Restaurants"
        },
        {
            id: 2,
            number: "20",
            title: "Chef In Kitchen"
        },
        // Rest of the whoWeAre array...
    ]
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
             whoWeAre.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src={whoeweare} alt="food" />
          </div>
          <div className="text_banner">
            {
              whoWeAre.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section> 
    </>
  )
}

export default WhoAreWe
